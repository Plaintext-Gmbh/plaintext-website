import type { Lang } from './strings';

// Eckdaten der Demo an einer Stelle. Quelle: Karte 2042 und claude2 (baut die Demo).
export const demoFacts = {
  live: 'https://demo.plaintext.ch/',
  repo: 'https://github.com/Plaintext-Gmbh/plaintext-demo',
  rootRepo: 'https://github.com/Plaintext-Gmbh/plaintext-root-v2',
  rootDocs: 'https://github.com/Plaintext-Gmbh/plaintext-root-v2/blob/master/docs/GETTING_STARTED.md',
  packages: 'https://github.com/orgs/Plaintext-Gmbh/packages?repo_name=plaintext-mvn',
  startCmd: 'curl -fsSL https://plaintext.ch/demo.sh | sh',
  dependency: `<repository>
  <id>plaintext</id>
  <url>https://maven.pkg.github.com/Plaintext-Gmbh/plaintext-mvn</url>
</repository>

<dependency>
  <groupId>ch.plaintext.v2</groupId>
  <artifactId>plaintext-root-webapp</artifactId>
  <version>3.19.0</version>
</dependency>`,
};

const en = {
  teaser: 'Try the demo',
  meta: {
    title: 'plaintext-demo · Try plaintext-root in one command · Plaintext GmbH',
    description:
      'plaintext-demo is a ready-to-run demo application built on plaintext-root, our open-source framework for multi-tenant web applications. Try it online or start it locally with one command.',
  },
  hero: {
    label: 'Our product',
    title: 'plaintext-demo',
    subtitle: 'plaintext-root, ready to try.',
    body: 'A complete demo application built on plaintext-root, our open-source framework for multi-tenant web applications with Spring Boot and PrimeFaces. Use it online or start it on your own machine with one command.',
    facts: ['Open source', 'Spring Boot', 'PrimeFaces', 'H2', 'English and German'],
  },
  try: {
    label: 'Try it',
    title: 'Two ways to start',
    online: {
      head: 'Online',
      body: 'One shared instance, no installation. The data is reset every night, so feel free to change things.',
      link: 'Open demo.plaintext.ch',
    },
    local: {
      head: 'On your machine',
      body: 'One command downloads the demo, starts it and opens the login page in your browser. It runs on http://localhost:8080. The database is an H2 file next to the jar, so nothing else has to be installed.',
      note: 'Requires Java 25 or newer · macOS · Linux',
      copy: 'Copy',
      copied: 'copied ✓',
      link: 'View the repository on GitHub',
    },
  },
  login: {
    label: 'Sign in',
    title: 'Four users, two tenants',
    body: 'The demo ships with its own OAuth2/OIDC sign-in server, so no account is needed. The user name is also the password. The interface is in English; German can be chosen in the user settings.',
    cols: ['User', 'Password', 'Role', 'Tenant', 'What you see'],
    users: [
      ['root', 'root', 'All roles', 'default and extra', 'Everything, including the platform administration. Can switch between the two tenants.'],
      ['admin', 'admin', 'Admin', 'default', 'The administration pages of the tenant: settings, users, roles.'],
      ['user', 'user', 'User', 'default', 'The application pages without administration.'],
      ['extra', 'extra', 'Admin', 'extra', 'The same pages with the data of the second tenant. Its records carry the prefix EX-.'],
    ],
    note: 'Sign in as admin and as extra to see tenant separation: same pages, different data.',
  },
  shows: {
    label: 'What it shows',
    items: [
      ['Configurable tables', 'Choose columns, change their order and width. The layout is saved per user and survives a reload.'],
      ['Tenants (mandates)', 'Two tenants, default and extra, with separate data. The current tenant is always visible and can be switched.'],
      ['Roles and menus', 'The menu is built from annotations. What you see depends on your role and your tenant.'],
      ['Admin modules', 'Settings, sessions, scheduled jobs, translations and more, as they ship with plaintext-root.'],
    ],
    note: 'Security-critical functions such as tokens, secrets and user import are switched off or read-only in the public demo.',
  },
  root: {
    label: 'Build your own',
    title: 'Using plaintext-root',
    body: 'plaintext-demo is an ordinary plaintext-root application. To build your own, add the application shell as a Maven dependency and write your pages and modules on top. Security, tenants, menus and the admin modules come with it.',
    steps: [
      'Read the code of plaintext-demo: it is the smallest complete example, including its own modules.',
      'Add the GitHub Packages repository of Plaintext GmbH and the dependency below to your Spring Boot project. GitHub Packages requires a personal access token with the scope read:packages.',
      'Follow the getting-started guide for the database, the first login and your first menu entry.',
    ],
    links: {
      repo: 'plaintext-root on GitHub',
      docs: 'Getting-started guide',
      packages: 'Maven packages (GitHub Packages)',
    },
    license: 'plaintext-root is released under MPL 2.0.',
  },
};

const de: typeof en = {
  teaser: 'Demo ausprobieren',
  meta: {
    title: 'plaintext-demo · plaintext-root mit einem Befehl ausprobieren · Plaintext GmbH',
    description:
      'plaintext-demo ist eine lauffähige Demo-Anwendung auf plaintext-root, unserem Open-Source-Framework für mandantenfähige Web-Anwendungen. Online ausprobieren oder lokal mit einem Befehl starten.',
  },
  hero: {
    label: 'Unser Produkt',
    title: 'plaintext-demo',
    subtitle: 'plaintext-root zum Ausprobieren.',
    body: 'Eine vollständige Demo-Anwendung auf plaintext-root, unserem Open-Source-Framework für mandantenfähige Web-Anwendungen mit Spring Boot und PrimeFaces. Online nutzen oder mit einem Befehl auf dem eigenen Rechner starten.',
    facts: ['Open Source', 'Spring Boot', 'PrimeFaces', 'H2', 'Englisch und Deutsch'],
  },
  try: {
    label: 'Ausprobieren',
    title: 'Zwei Wege zum Start',
    online: {
      head: 'Online',
      body: 'Eine gemeinsame Instanz, ohne Installation. Die Daten werden jede Nacht zurückgesetzt, Sie dürfen also alles verändern.',
      link: 'demo.plaintext.ch öffnen',
    },
    local: {
      head: 'Auf Ihrem Rechner',
      body: 'Ein Befehl lädt die Demo herunter, startet sie und öffnet die Login-Seite im Browser. Sie läuft auf http://localhost:8080. Die Datenbank ist eine H2-Datei neben dem Jar, es muss nichts weiter installiert werden.',
      note: 'Benötigt Java 25 oder neuer · macOS · Linux',
      copy: 'Kopieren',
      copied: 'kopiert ✓',
      link: 'Zum Repository auf GitHub',
    },
  },
  login: {
    label: 'Anmelden',
    title: 'Vier Benutzer, zwei Mandate',
    body: 'Die Demo bringt ihren eigenen OAuth2/OIDC-Anmeldeserver mit, ein Konto ist nicht nötig. Der Benutzername ist zugleich das Passwort. Die Oberfläche ist englisch, Deutsch lässt sich in den Benutzereinstellungen wählen.',
    cols: ['Benutzer', 'Passwort', 'Rolle', 'Mandat', 'Was Sie sehen'],
    users: [
      ['root', 'root', 'Alle Rollen', 'default und extra', 'Alles, inklusive der Plattform-Administration. Kann zwischen den beiden Mandaten wechseln.'],
      ['admin', 'admin', 'Admin', 'default', 'Die Administrationsseiten des Mandats: Einstellungen, Benutzer, Rollen.'],
      ['user', 'user', 'User', 'default', 'Die Anwendungsseiten ohne Administration.'],
      ['extra', 'extra', 'Admin', 'extra', 'Dieselben Seiten mit den Daten des zweiten Mandats. Dessen Einträge tragen das Präfix EX-.'],
    ],
    note: 'Melden Sie sich als admin und als extra an, um die Mandantentrennung zu sehen: gleiche Seiten, andere Daten.',
  },
  shows: {
    label: 'Was die Demo zeigt',
    items: [
      ['Konfigurierbare Tabellen', 'Spalten wählen, Reihenfolge und Breite ändern. Die Einstellung wird pro Benutzer gespeichert und bleibt nach dem Neuladen erhalten.'],
      ['Mandate', 'Zwei Mandate, default und extra, mit getrennten Daten. Das aktuelle Mandat ist immer sichtbar und lässt sich umschalten.'],
      ['Rollen und Menüs', 'Das Menü entsteht aus Annotationen. Was Sie sehen, hängt von Rolle und Mandat ab.'],
      ['Admin-Module', 'Einstellungen, Sitzungen, geplante Aufgaben, Übersetzungen und mehr, so wie plaintext-root sie mitliefert.'],
    ],
    note: 'Sicherheitskritische Funktionen wie Tokens, Secrets und Benutzerimport sind in der öffentlichen Demo ausgeschaltet oder nur lesbar.',
  },
  root: {
    label: 'Selber bauen',
    title: 'plaintext-root einsetzen',
    body: 'plaintext-demo ist eine gewöhnliche plaintext-root-Anwendung. Für Ihre eigene Anwendung binden Sie die Anwendungshülle als Maven-Abhängigkeit ein und schreiben Ihre Seiten und Module darauf. Security, Mandate, Menüs und die Admin-Module sind dabei.',
    steps: [
      'Lesen Sie den Code von plaintext-demo: Er ist das kleinste vollständige Beispiel, inklusive eigener Module.',
      'Fügen Sie das GitHub-Packages-Repository der Plaintext GmbH und die folgende Abhängigkeit in Ihr Spring-Boot-Projekt ein. GitHub Packages verlangt ein persönliches Zugriffstoken mit dem Recht read:packages.',
      'Folgen Sie der Einstiegsanleitung für Datenbank, erstes Login und den ersten Menüeintrag.',
    ],
    links: {
      repo: 'plaintext-root auf GitHub',
      docs: 'Einstiegsanleitung (englisch)',
      packages: 'Maven-Pakete (GitHub Packages)',
    },
    license: 'plaintext-root steht unter MPL 2.0.',
  },
};

export const demo = (lang: Lang) => (lang === 'en' ? en : de);
