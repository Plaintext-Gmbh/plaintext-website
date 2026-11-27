<?php
// Karte 2434: POC-Anfrage aus dem Preisrechner (/preisrechner/) als Mail an hello@plaintext.ch.
// Schutz gegen Missbrauch als Mailschleuder: fester Empfänger, Honeypot, Mindest-Ausfüllzeit,
// Rate-Limit je IP und gesamt, keine vom Absender gesteuerten Kopfzeilen ausser der geprüften Reply-To.
declare(strict_types=1);

const TO = 'hello@plaintext.ch';
const FROM = 'Plaintext Website <hello@plaintext.ch>';
const MAX_ZIP = 20 * 1024 * 1024;
const LIMIT_IP = [3, 3600];      // höchstens 3 Anfragen je Stunde und IP
const LIMIT_ALL = [30, 86400];   // höchstens 30 Anfragen je Tag insgesamt

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function antwort(int $code, string $message): void
{
    http_response_code($code);
    echo json_encode(['ok' => $code === 200, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

// true, wenn das Limit erreicht ist; sonst wird der Aufruf gezählt.
function limitErreicht(string $datei, int $max, int $fenster): bool
{
    $jetzt = time();
    $fh = fopen($datei, 'c+');
    if ($fh === false) {
        return false;
    }
    flock($fh, LOCK_EX);
    $zeiten = array_filter(array_map('intval', explode("\n", (string) stream_get_contents($fh))), fn ($t) => $t > $jetzt - $fenster);
    $voll = count($zeiten) >= $max;
    if (!$voll) {
        $zeiten[] = $jetzt;
        ftruncate($fh, 0);
        rewind($fh);
        fwrite($fh, implode("\n", $zeiten));
    }
    flock($fh, LOCK_UN);
    fclose($fh);
    return $voll;
}

function feld(string $name, int $max): string
{
    $wert = $_POST[$name] ?? '';
    return is_string($wert) ? trim(mb_substr($wert, 0, $max)) : '';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    antwort(405, 'Nur POST');
}
// post_max_size überschritten: PHP liefert dann ein leeres $_POST.
if (!$_POST) {
    antwort(413, 'Anfrage zu gross oder leer');
}
// Honeypot gefüllt oder in unter 3 s abgeschickt: Bot. Stille Erfolgsmeldung, keine Mail.
if (feld('website', 200) !== '' || (int) feld('t', 20) < 3000) {
    antwort(200, 'ok');
}

$firma = feld('company', 200);
$name = feld('name', 200);
$email = filter_var(feld('email', 254), FILTER_VALIDATE_EMAIL);
$telefon = feld('phone', 50);
$app = feld('app', 5000);
$repo = feld('repo', 500);
$quelle = feld('src', 10) === 'zip' ? 'zip' : 'repo';
$text = feld('summary', 20000);

$fehlt = [];
if ($firma === '') $fehlt[] = 'Firma';
if ($name === '') $fehlt[] = 'Name';
if ($email === false) $fehlt[] = 'gültige E-Mail';
if ($app === '') $fehlt[] = 'Beschreibung der Applikation';
if ($quelle === 'repo' && !preg_match('~^https?://\S+\.\S+~', $repo)) $fehlt[] = 'Repository-Link';

$zip = null;
if ($quelle === 'zip') {
    $f = $_FILES['source'] ?? null;
    if (!$f || !is_array($f) || ($f['error'] ?? 1) !== UPLOAD_ERR_OK || !is_uploaded_file($f['tmp_name'])) {
        $fehlt[] = 'ZIP-Datei';
    } elseif ($f['size'] > MAX_ZIP) {
        antwort(413, 'ZIP-Datei grösser als 20 MB');
    } elseif (file_get_contents($f['tmp_name'], false, null, 0, 4) !== "PK\x03\x04") {
        antwort(400, 'Datei ist kein ZIP');
    } else {
        $zip = $f;
    }
}
if ($fehlt) {
    antwort(400, 'Bitte ergänzen: ' . implode(', ', $fehlt));
}

$dir = sys_get_temp_dir() . '/plaintext-poc';
if (!is_dir($dir)) {
    @mkdir($dir, 0700, true);
}
$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unbekannt';
if (limitErreicht("$dir/ip-" . hash('sha256', $ip), ...LIMIT_IP) || limitErreicht("$dir/alle", ...LIMIT_ALL)) {
    antwort(429, 'Zu viele Anfragen, bitte später erneut versuchen');
}

// Fallback, falls der Browser keine Zusammenfassung mitschickt.
if ($text === '') {
    $text = "Firma: $firma\nName: $name\nE-Mail: $email\nTelefon: $telefon\n\nApplikation und Ziel:\n$app\n\nRepository: $repo";
}
$text .= "\n\n-- \nGesendet über das POC-Formular auf plaintext.ch (" . ($_SERVER['HTTP_HOST'] ?? '') . ($_SERVER['REQUEST_URI'] ?? '') . ')';

$betreff = mb_encode_mimeheader('POC-Anfrage Legacy-Migration · ' . preg_replace('/[\x00-\x1F\x7F]/u', '', $firma), 'UTF-8');
$kopf = ['From' => FROM, 'Reply-To' => $email, 'MIME-Version' => '1.0'];

if ($zip) {
    $grenze = 'ptx-' . bin2hex(random_bytes(12));
    $dateiname = preg_replace('/[^A-Za-z0-9._-]/', '_', basename((string) $zip['name']));
    $kopf['Content-Type'] = "multipart/mixed; boundary=\"$grenze\"";
    $body = "--$grenze\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($text))
        . "--$grenze\r\nContent-Type: application/zip; name=\"$dateiname\"\r\nContent-Transfer-Encoding: base64\r\n"
        . "Content-Disposition: attachment; filename=\"$dateiname\"\r\n\r\n"
        . chunk_split(base64_encode((string) file_get_contents($zip['tmp_name'])))
        . "--$grenze--\r\n";
} else {
    $kopf['Content-Type'] = 'text/plain; charset=UTF-8';
    $kopf['Content-Transfer-Encoding'] = 'base64';
    $body = chunk_split(base64_encode($text));
}

if (!mail(TO, $betreff, $body, $kopf)) {
    antwort(500, 'Versand fehlgeschlagen');
}
antwort(200, 'ok');
