<?php

// 1. Upload-Phase: Datei wurde hochgeladen
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['upload'])) {
    $file = $_FILES['upload'];
    $tmpName = $file['tmp_name'];
    $originalName = pathinfo($file['name'], PATHINFO_FILENAME);
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);

    // Namensvorschlag aus Dateiname (Leerzeichen → -, Unterstriche bleiben)
    $cleanName = preg_replace('/[^a-zA-Z0-9\-_ ]/', '', $originalName);
    $cleanName = preg_replace('/\s+/', '-', trim($cleanName));

    // Dateiinhalt lesen und analysieren
    $fileContent = '';
    $autoPreset = 'none';
    $debugInfo = '';

    // PDF-Text-Extraktion mit pdftotext (falls verfügbar)
    if (strtolower($extension) === 'pdf') {
        // Prüfen ob pdftotext verfügbar ist
        $pdftotextPath = trim(shell_exec('which pdftotext 2>/dev/null'));
        if (!empty($pdftotextPath)) {
            // pdftotext verwenden für bessere Text-Extraktion
            $outputFile = $tmpName . '.txt';
            shell_exec("pdftotext " . escapeshellarg($tmpName) . " " . escapeshellarg($outputFile) . " 2>&1");
            if (file_exists($outputFile)) {
                $fileContent = file_get_contents($outputFile);
                unlink($outputFile); // Temporäre Textdatei löschen
                $debugInfo .= "[pdftotext verwendet für Text-Extraktion]\n";
            } else {
                $fileContent = file_get_contents($tmpName);
                $debugInfo .= "[pdftotext fehlgeschlagen, Binärdaten gelesen]\n";
            }
        } else {
            $fileContent = file_get_contents($tmpName);
            $debugInfo .= "[pdftotext nicht verfügbar - nur Binärdaten lesbar]\n";
            $debugInfo .= "[Installiere auf Server: apt-get install poppler-utils]\n";
        }
    } else {
        $fileContent = file_get_contents($tmpName);
    }

    // Prüfen ob "REP_P_CH" im Dateinamen vorkommt
    $hasRepPCH = strpos($originalName, 'REP_P_CH') !== false;

    // Prüfen ob "Geschäftskonto" UND "Kontoauszug" im Inhalt vorkommen
    $contentLower = mb_strtolower($fileContent, 'UTF-8');
    $hasGeschaeftskonto = strpos($contentLower, 'geschäftskonto') !== false;
    $hasKontoauszug = strpos($contentLower, 'kontoauszug') !== false;

    // Prüfen ob "Abo Wingo Red" im Inhalt vorkommt
    $hasWingoRed = strpos($contentLower, 'abo wingo red') !== false;

    // Prüfen ob "Promoangebot: Internet Max" im Inhalt vorkommt
    $hasInternetMax = strpos($contentLower, 'promoangebot: internet max') !== false;

    // Debug-Info ergänzen
    $debugInfo .= "Dateiname: " . htmlspecialchars($originalName) . "\n";
    $debugInfo .= "Dateityp: " . htmlspecialchars($extension) . "\n";
    $debugInfo .= "REP_P_CH im Namen: " . ($hasRepPCH ? 'Ja' : 'Nein') . "\n";
    $debugInfo .= "Geschäftskonto im Inhalt: " . ($hasGeschaeftskonto ? 'Ja' : 'Nein') . "\n";
    $debugInfo .= "Kontoauszug im Inhalt: " . ($hasKontoauszug ? 'Ja' : 'Nein') . "\n";
    $debugInfo .= "Abo Wingo Red im Inhalt: " . ($hasWingoRed ? 'Ja' : 'Nein') . "\n";
    $debugInfo .= "Promoangebot: Internet Max im Inhalt: " . ($hasInternetMax ? 'Ja' : 'Nein') . "\n";
    $debugInfo .= "\n--- Extrahierter Text (erste 1000 Zeichen) ---\n";
    $debugInfo .= htmlspecialchars(mb_substr($fileContent, 0, 1000, 'UTF-8'));

    // PostkontoAuszug aktivieren wenn:
    // - REP_P_CH im Dateinamen ODER
    // - Geschäftskonto UND Kontoauszug im Inhalt
    if ($hasRepPCH || ($hasGeschaeftskonto && $hasKontoauszug)) {
        $autoPreset = 'postkontoAuszug';
    }

    // Mobile aktivieren wenn "Abo Wingo Red" im Inhalt
    if ($hasWingoRed) {
        $autoPreset = 'mobile';
    }

    // Internet aktivieren wenn "Promoangebot: Internet Max" im Inhalt
    if ($hasInternetMax) {
        $autoPreset = 'internet';
    }

    $encodedFile = base64_encode(file_get_contents($tmpName));
    ?>

    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>Datei umbenennen & herunterladen</title>
        <style>
            body { font-family: sans-serif; text-align: center; margin-top: 50px; }
            .form-container { max-width: 500px; margin: auto; }
            .preset-buttons { margin: 20px 0; text-align: center; }
            .preset-buttons button {
                padding: 10px 20px;
                font-size: 14px;
                margin: 5px;
                cursor: pointer;
                background-color: #4CAF50;
                color: white;
                border: none;
                border-radius: 5px;
            }
            .preset-buttons button:hover { background-color: #45a049; }
            .preset-buttons button.active {
                background-color: #2196F3;
                box-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
                border: 2px solid #1976D2;
            }
            .checkbox-group { margin: 20px 0; text-align: left; }
            .checkbox-group label { display: flex; align-items: center; margin: 10px 0; cursor: pointer; }
            .checkbox-group input[type="checkbox"] { margin-right: 10px; width: 20px; height: 20px; }
            input[type="text"] { padding: 10px; font-size: 16px; width: 100%; box-sizing: border-box; }
            .preview {
                margin: 20px 0;
                padding: 15px;
                background-color: #f0f0f0;
                border-radius: 5px;
                font-family: monospace;
                font-size: 18px;
                word-break: break-all;
            }
            button[type="submit"] { padding: 12px 30px; font-size: 16px; margin: 10px; cursor: pointer; }
            .debug-section {
                margin: 30px 0;
                padding: 15px;
                background-color: #f5f5f5;
                border: 1px solid #ddd;
                border-radius: 5px;
                text-align: left;
            }
            .debug-section h3 {
                margin-top: 0;
                color: #666;
                font-size: 14px;
            }
            .debug-section pre {
                background-color: #fff;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 3px;
                overflow-x: auto;
                font-size: 12px;
                white-space: pre-wrap;
                word-wrap: break-word;
            }
        </style>
    </head>
    <body>
        <h2>Datei-Optionen</h2>
        <div class="form-container">
            <div class="preset-buttons">
                <button type="button" id="btn-postkontoAuszug" onclick="applyPreset('postkontoAuszug')">PostkontoAuszug</button>
                <button type="button" id="btn-mobile" onclick="applyPreset('mobile')">Mobile</button>
                <button type="button" id="btn-internet" onclick="applyPreset('internet')">Internet</button>
            </div>

            <form method="POST" id="downloadForm">
                <input type="hidden" name="data" value="<?php echo htmlspecialchars($encodedFile); ?>">
                <input type="hidden" name="extension" value="<?php echo htmlspecialchars($extension); ?>">
                <input type="hidden" name="datum_vorne" id="datum_vorne_hidden" value="true">
                <input type="hidden" name="monat_anhaengen" id="monat_anhaengen_hidden" value="false">

                <div class="checkbox-group">
                    <label>
                        <input type="checkbox" id="datum_vorne" checked onchange="updatePreview()">
                        Datum vorne:
                    </label>
                    <label>
                        <input type="checkbox" id="monat_anhaengen" onchange="updatePreview()">
                        Monat anhängen (<span id="monat-label"></span>)
                    </label>
                </div>

                <input type="text" name="newname" id="newname" value="<?php echo htmlspecialchars($cleanName); ?>" required oninput="updatePreview()">

                <div class="preview" id="preview"></div>

                <button type="submit">Download</button>
            </form>

            <div class="debug-section">
                <h3>🔍 Debug Info - Erkannte Inhalte</h3>
                <pre><?php echo $debugInfo; ?></pre>
            </div>
        </div>

        <script>
            const extension = "<?php echo htmlspecialchars($extension); ?>";
            const autoPreset = "<?php echo $autoPreset; ?>";

            // Funktion um aktuelles Datum zu erhalten (immer dynamisch)
            function getHeute() {
                const jetzt = new Date();
                const jahr = String(jetzt.getFullYear()).slice(-2);
                const monat = String(jetzt.getMonth() + 1).padStart(2, '0');
                const tag = String(jetzt.getDate()).padStart(2, '0');
                return jahr + '-' + monat + '-' + tag;
            }

            function getMonat() {
                const jetzt = new Date();
                const jahr = String(jetzt.getFullYear()).slice(-2);
                const monat = String(jetzt.getMonth() + 1).padStart(2, '0');
                return jahr + '-' + monat;
            }

            function applyPreset(preset) {
                // Alle Buttons deaktivieren
                document.querySelectorAll('.preset-buttons button').forEach(btn => {
                    btn.classList.remove('active');
                });

                if (preset === 'postkontoAuszug') {
                    // Button als aktiv markieren
                    document.getElementById('btn-postkontoAuszug').classList.add('active');

                    // Beide Checkboxen aktivieren
                    document.getElementById('datum_vorne').checked = true;
                    document.getElementById('monat_anhaengen').checked = true;

                    // Letzten Monat berechnen
                    const monate = [
                        'januar', 'februar', 'märz', 'april', 'mai', 'juni',
                        'juli', 'august', 'september', 'oktober', 'november', 'dezember'
                    ];
                    const jetzt = new Date();
                    const letzterMonat = new Date(jetzt.getFullYear(), jetzt.getMonth() - 1);
                    const monatName = monate[letzterMonat.getMonth()];

                    // Namen setzen
                    document.getElementById('newname').value = monatName;

                    // Vorschau aktualisieren
                    updatePreview();
                }

                if (preset === 'mobile') {
                    // Button als aktiv markieren
                    document.getElementById('btn-mobile').classList.add('active');

                    // Nur Datum vorne aktivieren, Monat anhängen NICHT
                    document.getElementById('datum_vorne').checked = true;
                    document.getElementById('monat_anhaengen').checked = false;

                    // Letzten Monat berechnen (mit Großbuchstabe am Anfang)
                    const monate = [
                        'januar', 'februar', 'märz', 'april', 'mai', 'juni',
                        'juli', 'august', 'september', 'oktober', 'november', 'dezember'
                    ];
                    const jetzt = new Date();
                    const letzterMonat = new Date(jetzt.getFullYear(), jetzt.getMonth() - 1);
                    const monatName = monate[letzterMonat.getMonth()];
                    const monatNameCapitalized = monatName.charAt(0).toUpperCase() + monatName.slice(1);

                    // Namen setzen: mobile + Monat + Rg (z.B. mobileNovemberRg)
                    document.getElementById('newname').value = 'mobile ' + monatNameCapitalized + ' Rg';

                    // Vorschau aktualisieren
                    updatePreview();
                }

                if (preset === 'internet') {
                    // Button als aktiv markieren
                    document.getElementById('btn-internet').classList.add('active');

                    // Nur Datum vorne aktivieren, Monat anhängen NICHT
                    document.getElementById('datum_vorne').checked = true;
                    document.getElementById('monat_anhaengen').checked = false;

                    // Letzten Monat berechnen (mit Großbuchstabe am Anfang)
                    const monate = [
                        'januar', 'februar', 'märz', 'april', 'mai', 'juni',
                        'juli', 'august', 'september', 'oktober', 'november', 'dezember'
                    ];
                    const jetzt = new Date();
                    const letzterMonat = new Date(jetzt.getFullYear(), jetzt.getMonth() - 1);
                    const monatName = monate[letzterMonat.getMonth()];
                    const monatNameCapitalized = monatName.charAt(0).toUpperCase() + monatName.slice(1);

                    // Namen setzen: internet + Monat + Rg (z.B. internetNovemberRg)
                    document.getElementById('newname').value = 'internet ' + monatNameCapitalized + ' Rg';

                    // Vorschau aktualisieren
                    updatePreview();
                }
            }

            function toCamelCase(str) {
                // Zuerst alle nicht-alphanumerischen Zeichen durch Leerzeichen ersetzen
                str = str.replace(/[^a-zA-Z0-9äöüÄÖÜß]/g, ' ');
                // In camelCase konvertieren
                return str.split(' ')
                    .filter(word => word.length > 0)
                    .map((word, index) => {
                        word = word.toLowerCase();
                        if (index === 0) {
                            return word.charAt(0).toLowerCase() + word.slice(1);
                        }
                        return word.charAt(0).toUpperCase() + word.slice(1);
                    })
                    .join('');
            }

            function updatePreview() {
                const name = document.getElementById('newname').value;
                const datumVorne = document.getElementById('datum_vorne').checked;
                const monatAnhaengen = document.getElementById('monat_anhaengen').checked;

                // Hidden inputs aktualisieren
                document.getElementById('datum_vorne_hidden').value = datumVorne;
                document.getElementById('monat_anhaengen_hidden').value = monatAnhaengen;

                // camelCase Name
                const camelName = toCamelCase(name);

                // Dateiname zusammenbauen (mit aktuellem Datum!)
                let filename = '';
                if (datumVorne) {
                    filename += getHeute() + '_';
                }
                filename += camelName;
                if (monatAnhaengen) {
                    filename += '_' + getMonat();
                }
                filename += '.' + extension;

                document.getElementById('preview').textContent = filename;
            }

            // Monat-Label aktualisieren (dynamisch)
            function updateMonatLabel() {
                document.getElementById('monat-label').textContent = '_' + getMonat();
            }

            // Initiale Vorschau und Labels
            updateMonatLabel();
            updatePreview();

            // Auto-Preset anwenden falls erkannt
            if (autoPreset !== 'none') {
                applyPreset(autoPreset);
            }

            // Monat-Label jede Minute aktualisieren (falls Monat wechselt)
            setInterval(updateMonatLabel, 60000);
        </script>
    </body>
    </html>

<?php
    exit;
}

// 2. Download-Phase: Datei umbenennen und zum Download anbieten + Redirect
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['data'], $_POST['newname'], $_POST['extension'])) {
    $data = base64_decode($_POST['data']);
    $extension = preg_replace('/[^a-zA-Z0-9]/', '', $_POST['extension']);

    // Checkbox-Werte
    $datumVorne = isset($_POST['datum_vorne']) && $_POST['datum_vorne'] === 'true';
    $monatAnhaengen = isset($_POST['monat_anhaengen']) && $_POST['monat_anhaengen'] === 'true';

    // Name in camelCase konvertieren
    $name = $_POST['newname'];
    $name = preg_replace('/[^a-zA-Z0-9äöüÄÖÜß]/', ' ', $name);
    $words = array_filter(explode(' ', $name));
    $camelName = '';
    foreach ($words as $index => $word) {
        $word = mb_strtolower($word, 'UTF-8');
        if ($index === 0) {
            $camelName .= $word;
        } else {
            $camelName .= mb_strtoupper(mb_substr($word, 0, 1, 'UTF-8'), 'UTF-8') . mb_substr($word, 1, null, 'UTF-8');
        }
    }

    // Dateiname zusammenbauen
    $filename = '';
    if ($datumVorne) {
        $filename .= date('y-m-d') . '_';
    }
    $filename .= $camelName;
    if ($monatAnhaengen) {
        $filename .= '_' . date('y-m');
    }
    $filename .= '.' . $extension;

    $base64Data = base64_encode($data);
    $mimeType = "application/octet-stream";

    ?>

    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>Download läuft...</title>
        <script>
            window.onload = function () {
                const base64 = "<?php echo $base64Data; ?>";
                const byteCharacters = atob(base64);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], {type: "<?php echo $mimeType; ?>"});
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "<?php echo $filename; ?>";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Nach dem Download zurück zur Startseite
                setTimeout(() => window.location.href = "<?php echo $_SERVER['PHP_SELF']; ?>", 1500);
            };
        </script>
    </head>
    <body>
        <p>Datei wird heruntergeladen... Du wirst gleich zurückgeleitet.</p>
    </body>
    </html>

    <?php
    exit;
}
?>

<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Drag & Drop Upload</title>
    <style>
        body { font-family: sans-serif; text-align: center; margin-top: 100px; }
        #dropzone {
            width: 300px; height: 200px;
            border: 3px dashed #999;
            margin: auto;
            padding: 30px;
            border-radius: 10px;
            background-color: #f9f9f9;
            cursor: pointer;
        }
    </style>
</head>
<body>

<h2>Datei hierher ziehen</h2>
<div id="dropzone">Drop file here</div>
<form id="uploadForm" method="POST" enctype="multipart/form-data" style="display:none;">
    <input type="file" name="upload" id="fileInput">
</form>

<script>
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const uploadForm = document.getElementById('uploadForm');

    dropzone.addEventListener('click', () => fileInput.click());
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.backgroundColor = "#e0e0e0";
    });
    dropzone.addEventListener('dragleave', () => {
        dropzone.style.backgroundColor = "#f9f9f9";
    });
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.backgroundColor = "#f9f9f9";
        fileInput.files = e.dataTransfer.files;
        uploadForm.submit();
    });
    fileInput.addEventListener('change', () => {
        uploadForm.submit();
    });
</script>

</body>
</html>
