export type Lang = 'de' | 'en';

// Pfade relativ zur Basis-URL, pro Seite und Sprache.
export const routes = {
  home: { de: '', en: 'en/' },
  legacy: { de: 'legacy-migration/', en: 'en/legacy-migration/' },
  projectmind: { de: 'projectmind/', en: 'en/projectmind/' },
  imprint: { de: 'impressum/', en: 'en/imprint/' },
} as const;
export type Page = keyof typeof routes;

const de = {
  htmlLang: 'de',
  meta: {
    title: 'Plaintext GmbH · Software-Architektur, CI/CD & AI-Integration',
    description:
      'Software-Architektur, CI/CD-Automatisierung und Legacy-Modernisierung aus der Schweiz. iSAQB- und TOGAF-zertifiziert. Dazu ProjectMind, unser Open-Source-Architektur-Browser für AI-Coding-Agenten.',
  },
  nav: {
    projectmind: 'ProjectMind',
    services: 'Angebot',
    legacy: 'Legacy-Migration',
    menu: 'Menü',
    cases: 'Referenzen',
    tech: 'Tech',
    team: 'Team',
    contact: 'Kontakt',
    cta: 'Projekt starten',
  },
  hero: {
    eyebrow: 'Plaintext GmbH · seit 2020',
    title1: 'Software, die hält.',
    title2: 'Code, der spricht.',
    body: 'Wir entwerfen, bauen und modernisieren Software-Architekturen für Teams, die nicht in einem Jahr von vorn anfangen wollen. Und wir bauen das Werkzeug, mit dem AI-Coding-Agenten Ihre Codebasis lesen lernen.',
    facts: ['iSAQB CPSA-A', 'TOGAF', 'Java · Spring · Rust', 'Trimstein bei Bern'],
  },
  pm: {
    meta: {
      title: 'ProjectMind · Architektur-Browser für AI-Coding-Agenten · Plaintext GmbH',
      description:
        'ProjectMind ist ein read-only Architektur-Browser, der über das Model Context Protocol mit Coding-Agenten wie Claude Code zusammenspielt. Open Source unter MPL-2.0.',
    },
    featuresLabel: 'Funktionen',
    installLabel: 'Installation',
    eyebrow: 'Unser Produkt',
    kicker: 'Open Source · MPL-2.0',
    title: 'ProjectMind',
    subtitle: 'Ihr Projekt, erklärt von der KI.',
    body: 'Ein read-only Architektur-Browser, der mit Coding-Agenten wie Claude Code, ChatGPT Codex, Gemini CLI oder Cursor zusammenspielt. Bidirektional via Model Context Protocol: die KI öffnet Ihre Klassen, Sie markieren Stellen, beides fliesst zurück in den Chat.',
    bullets: [
      ['Lesen statt editieren', 'Keine Builds, keine Schreibrechte. Nur die Architektur, lesbar und navigierbar.'],
      ['MCP-bidirektional', 'Der Agent zeigt Klassen mit Zeilen 42 bis 58. Sie selektieren, der Kontext landet im Chat.'],
      ['Plug-in-System', 'Sprachen (Java, Rust, …), Frameworks (Spring, Lombok, JSF, …) und Diagramme als Plug-ins.'],
      ['Lokal, schnell, privat', 'Tauri-Desktop-App. Ihr Code verlässt Ihren Rechner nicht.'],
    ],
    install: 'In einer Zeile installieren',
    installNote: 'macOS · Linux · Windows. Re-run aktualisiert.',
    primary: 'Auf GitHub ansehen',
    secondary: 'Quickstart kopieren',
    copied: 'kopiert ✓',
    learnMore: 'Mehr im Repo',
    diagramAria: 'Schematische Darstellung einer Codebasis als Knotengraph',
  },
  others: {
    eyebrow: 'Auch von uns',
    title: 'Open-Source-Framework',
    body: 'Bewährte Technologien, klare Architekturen, jahrelang gepflegt. Boring tech is good tech: wir konzentrieren uns auf das eigentliche Problem, nicht auf das Frontend-Framework des Quartals.',
    items: [
      {
        name: 'plaintext-root',
        body: 'Unser Anwendungs-Framework: Multi-Tenancy, Security, Menü-System, Admin-Module, Discovery. Die Basis, auf der unsere Kunden-Anwendungen seit Jahren laufen, und die wir als Open Source unter MPL 2.0 bereitstellen.',
        link: 'https://github.com/Plaintext-Gmbh/plaintext-root',
        linkLabel: 'github.com/Plaintext-Gmbh/plaintext-root',
      },
    ],
  },
  services: {
    eyebrow: 'Angebot',
    title: 'Was wir mitbringen',
    body: 'Bedarfsgerechte Beratung und Mitarbeit in Projekt- und Produktteams. Wissen bleibt bei Ihrem Team. Es fliesst nicht ab.',
    items: [
      {
        kicker: 'Produkt',
        title: 'Legacy-Modernisierung',
        link: 'Zum Produkt: Migration von Legacy-Applikationen',
        page: 'legacy',
        body: 'Renovation alter Systemlandschaften inkl. Containerisierung, Schritt für Schritt in die Moderne. Cloud, On-Prem oder hybrid.',
        chips: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'On-Prem'],
      },
      {
        kicker: 'Schwerpunkt',
        title: 'Software- & Systemarchitektur',
        body: 'iSAQB CPSA-A und TOGAF zertifiziert. Architekturentscheide, Reviews und Dokumentation nach arc42 und C4, von der Enterprise-Architektur bis zum einzelnen Service, auch in grossen agilen Release-Trains nach SAFe.',
        chips: ['arc42', 'C4', 'DDD', 'Microservices', 'SAFe'],
      },
      {
        title: 'DevOps & CI/CD',
        body: 'Eine Pipeline für alle Buildarten statt einer pro Projekt: pro Service eine kurze Konfiguration, Releases per Parameter, Deployments auf klar getrennte Stufen. Umgesetzt mit GitHub Actions, Tekton oder ArgoCD, je nach Umgebung.',
        chips: ['GitHub Actions', 'ArgoCD', 'Tekton', 'Nexus', 'SonarQube'],
      },
      {
        kicker: 'Produkt',
        title: 'AI-Unterstützung',
        link: 'Zum Produkt: ProjectMind',
        page: 'projectmind',
        body: 'Wir setzen lokale und cloudbasierte AI-Dienste ein, wo sie echten Mehrwert bringen: Code-Reviews, Doku, Routine. Mit ProjectMind sehen Sie, was die Agenten tun.',
        chips: ['MCP', 'Claude Code', 'Codex', 'Local LLMs'],
      },
    ],
  },
  legacy: {
    meta: {
      title: 'Migration von Legacy-Applikationen · Plaintext GmbH',
      description:
        'Wir migrieren in die Jahre gekommene Applikationen in messbaren Schritten: Analyse, Testset, Mocks der Umsysteme, Migration und Übergabe mit Architekturdokumentation, lauffähigem Code und Tests.',
    },
    hero: {
      eyebrow: 'Produkt · Legacy-Migration',
      title: 'Migration von Legacy-Applikationen',
      body: 'Ihre Applikation erfüllt ihren Zweck seit Jahren, doch Technologie, Betrieb und Weiterentwicklung werden zunehmend zum Risiko. Die Plaintext GmbH überführt sie in Ihrem Auftrag auf eine zeitgemässe Basis: in nachvollziehbaren Schritten, deren Erfolg sich messen lässt.',
    },
    situation: {
      eyebrow: 'Ausgangslage',
      title: 'Die Applikation läuft. Aber niemand fasst sie mehr gern an.',
      body: 'Legacy-Applikationen tragen oft zentrale Geschäftsprozesse. Gerade deshalb ist ihre Ablösung heikel: Wer alles auf einmal ersetzt, gefährdet, was heute funktioniert. Wir gehen umgekehrt vor und sichern zuerst das Bestehende ab.',
      items: [
        ['Das Wissen ist verstreut', 'Fachliche Regeln stecken im Code, in Schnittstellen und in den Köpfen weniger Personen. Die Dokumentation fehlt oder ist veraltet.'],
        ['Änderungen sind riskant', 'Ohne verlässliche Tests lässt sich kaum abschätzen, welche Folgen ein Eingriff hat. Entsprechend zurückhaltend wird weiterentwickelt.'],
        ['Die Plattform oder der Techstack läuft aus', 'Frameworks, Laufzeitumgebungen und Bibliotheken werden nicht mehr gepflegt. Sicherheit und Betrieb werden aufwendiger.'],
      ],
    },
    process: {
      eyebrow: 'Ablauf',
      title: 'Sechs Schritte, jeder mit einem prüfbaren Ergebnis',
      resultLabel: 'Ergebnis',
      steps: [
        {
          title: 'Analyse und Geschäftskontext',
          body: 'Wir analysieren die bestehende Applikation: Aufbau, Abhängigkeiten, Schnittstellen und Datenhaltung. Ebenso wichtig ist der Geschäftskontext. Wir wollen verstehen, welche Prozesse die Applikation trägt und welche Regeln sie abbildet, bevor wir etwas verändern.',
          result: 'Gemeinsames Verständnis von Applikation und Geschäftskontext',
        },
        {
          title: 'Testset als Sicherheitsnetz',
          body: 'Auf dieser Grundlage erstellen wir ein ausführliches Testset. Es hält das heutige Verhalten der Applikation fest, prüft nach der Migration deren Funktion und sichert später die Weiterentwicklung ab.',
          result: 'Ausführliches Testset, das das fachliche Verhalten belegt',
        },
        {
          title: 'Mocks der Umsysteme',
          body: 'Die umliegenden Systeme bilden wir als Mocks nach. Damit werden Systemintegrationstests möglich, und bei jedem Migrationsschritt lässt sich messen, ob er erfolgreich war und die Applikation funktionsfähig bleibt.',
          result: 'Systemintegrationstests gegen gemockte Umsysteme',
        },
        {
          title: 'Migration in messbaren Schritten',
          body: 'Die eigentliche Migration erfolgt in überschaubaren Etappen. Nach jeder Etappe laufen das Testset und die Systemintegrationstests. Der Fortschritt ist damit keine Einschätzung, sondern ein Messwert.',
          result: 'Migrierte Applikation, Schritt für Schritt nachgewiesen',
        },
        {
          title: 'Übergabe',
          body: 'Zum Abschluss erhalten Sie eine ausführliche Architekturdokumentation der migrierten Applikation, den lauffähigen Code und die Tests. Damit haben Sie alles in der Hand, um die Applikation zu betreiben und weiterzuentwickeln.',
          result: 'Architekturdokumentation, lauffähiger Code und Tests',
        },
        {
          title: 'Rückintegration und weitere Arbeiten',
          body: 'Die Rückintegration in Ihre Systemlandschaft und weitere Arbeiten übernehmen wir bei Bedarf in Regie, also nach Aufwand und in dem Umfang, den Sie bestimmen.',
          result: 'Unterstützung nach Bedarf, verrechnet nach Aufwand',
        },
      ],
    },
    deliverables: {
      eyebrow: 'Lieferumfang',
      title: 'Was Sie am Ende erhalten',
      items: [
        ['Architekturdokumentation', 'Eine ausführliche Dokumentation der migrierten Applikation. Sie dient als Grundlage für Betrieb und Weiterentwicklung.'],
        ['Lauffähiger Code', 'Der Quellcode der migrierten Applikation, lauffähig und bereit für die Übernahme durch Ihr Team.'],
        ['Tests', 'Das ausführliche Testset, mit dem sich die Funktion der Applikation jederzeit überprüfen lässt, auch bei künftigen Änderungen.'],
      ],
    },
    reference: {
      label: 'Referenzen',
      items: [
        {
          kicker: 'SaaS · Medienbranche',
          title: 'Migration einer GIS-Anwendung inklusive eigener Kachel-Renderjobs',
          body: 'Eine in die Jahre gekommene GIS-Webanwendung wurde auf eine neue technische Basis gebracht, inklusive der eigenen Renderjobs für Kartenkacheln auf Basis von OpenStreetMap und der politischen Gemeinden der Schweiz. Die Anwendung läuft neu in Docker-Containern, Build und Deployment erfolgen über eine CI/CD-Pipeline. Zum Auftrag gehörte auch die Migration zu einem neuen Cloud-Provider.',
          chips: ['GIS', 'OpenStreetMap', 'Docker', 'CI/CD', 'Cloud-Migration'],
        },
        {
          kicker: 'SaaS · Medienbranche',
          title: 'CI/CD-Automatisierung für eine Abo-Plattform',
          body: 'Build und Deployment aller Services laufen über eine einzige, generische Pipeline, die als gemeinsame Bibliothek gepflegt wird. Pro Service genügt eine Konfiguration von wenigen Zeilen: Java-Version, Buildart, Zielstufe. Releases werden per Parameter ausgelöst, die Versionen automatisch berechnet, die Container-Images in ein eigenes Repository publiziert und projektweise auf die Stufen ausgerollt. Umgesetzt gemeinsam mit dem internen Team und Nearshoring-Teams in Polen und Indien, inklusive Einführung von Cloudflare.',
          chips: ['Docker', 'Docker Compose', 'Nexus', 'SonarQube', 'Cloudflare', 'CI/CD'],
        },
      ],
    },
  },
  cases: {
    eyebrow: 'Referenzen',
    title: 'Ausgewählte Mandate',
    body: 'Ein Auszug aus den letzten Jahren, aus Diskretion ohne Namen. Auf Anfrage erzählen wir gern mehr.',
    items: [
      {
        kicker: 'SaaS · Medienbranche',
        title: 'Login- und Abo-System auf Basis von Keycloak',
        body: 'Zentrales Login für die Paywall-Webanwendung und die Mobile-Apps eines Abonnement-Angebots. Keycloak läuft als Blue-Green-Installation hinter NGINX, mit repliziertem PostgreSQL und einer Failover-Instanz. Jeder Geschäftspartner erhält einen eigenen Realm. Ein Import-Service auf Basis von Spring Boot übernimmt Daten per SFTP, ein Reporting-Service liefert die Auswertungen. Alle Container protokollieren zentral nach Graylog.',
        chips: ['Keycloak', 'PostgreSQL', 'NGINX', 'Spring Boot', 'Graylog', 'Blue-Green'],
      },
      {
        kicker: 'Bundesbehörde · Gesundheitswesen',
        title: 'CI/CD-Infrastruktur auf GitHub-Basis',
        body: 'Konzeption, Beratung, Einführung und Support einer CI/CD-Infrastruktur auf Basis von GitHub und GitHub Actions, vom Konzept bis zum laufenden Betrieb.',
        chips: ['GitHub', 'GitHub Actions', 'Konzeption', 'Support'],
      },
      {
        kicker: 'Bundesverwaltung · IT',
        title: 'Systemarchitektur im agilen Release-Train',
        body: 'Mehrjährige Arbeit als Systemarchitekt und Berater im Architekturteam eines grossen agilen Release-Trains: Architekturentscheide, Reviews und Begleitung der Umsetzungsteams.',
        chips: ['SAFe', 'Systemarchitektur', 'Java', 'Beratung'],
      },
      {
        kicker: 'DevSecOps · Security',
        title: 'CVE-Patching der Systemlandschaft',
        body: 'Verantwortlich für das CVE-Patching einer ganzen Systemlandschaft: automatisierte Schwachstellen-Analysen mit Trivy, zentrale Auswertung und Priorisierung über DefectDojo und automatische Taskzuweisung an die zuständigen Teams via Jira. Vom Scan bis zum zugewiesenen Ticket ohne manuellen Zwischenschritt.',
        chips: ['Trivy', 'DefectDojo', 'Jira', 'CVE', 'DevSecOps'],
      },
    ],
  },
  tech: {
    eyebrow: 'Tech',
    title: 'Womit wir arbeiten',
    body: 'Ein Auszug. Wir lernen weiter, wenn das Problem es verlangt.',
    groups: [
      ['Architektur', ['iSAQB', 'TOGAF', 'arc42', 'C4', 'Domain-Driven', 'SAFe']],
      ['GitOps & CI/CD', ['GitHub Actions', 'ArgoCD', 'Tekton', 'Bitbucket', 'Nexus', 'Bash', 'Python']],
      ['Plattform', ['Docker', 'Docker Compose', 'Kubernetes', 'OpenShift', 'Helm', 'Vault', 'Spring Boot', 'PostgreSQL', 'NGINX']],
      ['Betrieb & Logging', ['Graylog', 'Portainer', 'Cloudflare']],
      ['Code-Qualität', ['SonarQube', 'OWASP', 'Snyk', 'Trivy', 'DefectDojo', 'Code Review', 'Pair Programming']],
      ['Integration', ['REST', 'RabbitMQ', 'Keycloak', 'OAuth2', 'LDAP / Active Directory', 'SFTP']],
      ['AI & Automation', ['MCP', 'LLM-Tooling', 'Local LLMs', 'AI Agents', 'ChatOps', 'herdr', 'Kimi', 'Claude', 'DeepSeek', 'GLM', 'Nemotron', 'agy']],
    ],
  },
  team: {
    eyebrow: 'Team',
    title: 'Wir zwei',
    daniel: {
      name: 'Daniel Marthaler',
      role: 'Founder · Software Architect',
      body: 'Ich entwerfe Architekturen, die ein Team lebt, nicht nur diagrammt. iSAQB CPSA-A, TOGAF, langjährig in Spring/Java und seit kurzem tief in Rust (für ProjectMind). Mein Wissen bleibt bei Ihrem Team.',
      chips: ['Architekt', 'DevOps', 'Team Lead', 'Cloud Engineer'],
    },
    jasmin: {
      name: 'Jasmin Marthaler',
      role: 'Lead Back Office',
      body: 'Reibungslose Abläufe, Kundenbetreuung, Administration. Ich schaffe den Freiraum, in dem technische Innovation passieren kann.',
      chips: ['Projektkoordination', 'Kundenbetreuung', 'Prozesse'],
    },
  },
  contact: {
    eyebrow: 'Sprechen wir',
    title: 'Projekt im Kopf?',
    body: 'Schreiben Sie uns. Eine Mail, eine kurze Beschreibung, was Sie brauchen. Wir antworten. Kein Trichter, kein Sales-Funnel.',
    button: 'hello@plaintext.ch',
    address: 'Neuhusmatte 155 · 3083 Trimstein · Schweiz',
  },
  footer: {
    impressum: 'Plaintext GmbH · CHE-488.786.867',
    imprintLabel: 'Impressum',
    claim: 'Software-Architektur, CI/CD und Legacy-Migration aus Trimstein bei Bern.',
    pagesTitle: 'Seiten',
    contactTitle: 'Kontakt',
  },
  imprint: {
    title: 'Impressum',
    backLabel: '← Zurück',
    company: 'Plaintext GmbH',
    addressLines: ['Neuhusmatte 155', '3083 Trimstein', 'Schweiz'],
    email: 'info@plaintext.ch',
    uid: 'CHE-488.786.867 HR/MWST',
    sections: [
      {
        heading: 'Rechtliches',
        body: [
          'Wir bemühen uns, das Informationsangebot dieser Website aktuell, inhaltlich richtig und vollständig anzubieten. Dennoch ist das Auftreten von Fehlern nicht vollständig auszuschliessen. Eine Garantie für die Vollständigkeit, Richtigkeit und letzte Aktualität kann daher nicht übernommen werden.',
          'Wir behalten uns ausdrücklich vor, jederzeit Inhalte ohne Ankündigung ganz oder teilweise zu ändern, zu löschen oder zeitweise nicht zu veröffentlichen.',
          'Der Zugang und die Benutzung dieser Website geschehen auf eigene Gefahr des Benutzers. Wir sind nicht verantwortlich und übernehmen keinerlei Haftung für Schäden materieller oder immaterieller Art, unter anderem für direkte, indirekte, zufällige, vorab konkret zu bestimmende oder Folgeschäden, die angeblich durch den oder in Verbindung mit dem Zugang und/oder der Benutzung dieses Internetangebotes aufgetreten sind.',
          'Unser Internetangebot kann externe Links auf die Internetseiten Dritter enthalten. Auf den Inhalt dieser Seiten haben wir keinen Einfluss. Wir übernehmen keine Verantwortung für die Inhalte und die Verfügbarkeit von Internetseiten Dritter, die über externe Links dieses Informationsangebotes erreicht werden.',
        ],
      },
      {
        heading: 'Datenschutz',
        body: [
          'Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Plaintext GmbH hält diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt.',
          'In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.',
          'Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allgemein übertragene Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, so dass Trends erkennbar sind, anhand derer die Plaintext GmbH ihr Angebot entsprechend verbessern kann.',
        ],
      },
      {
        heading: 'Personenbezogene Daten',
        body: [
          'Verantwortliche Stelle für die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten ist die Plaintext GmbH. Sofern Sie der Erhebung, Verarbeitung oder Nutzung Ihrer Daten nach Massgabe von Datenschutzbestimmungen insgesamt oder für einzelne Massnahmen widersprechen wollen, können Sie Ihren Widerspruch per E-Mail oder Brief an obenstehende Kontaktdaten senden.',
          'Personenbezogene Daten sind Informationen, die dazu genutzt werden können, Ihre Identität zu erfahren. Darunter fallen Ihr Name, die Adresse, Postanschrift, Telefonnummer. Informationen, die nicht mit Ihrer Identität in Verbindung gebracht werden (wie zum Beispiel die Anzahl der Nutzer einer Website), gehören nicht dazu. Sie können unsere Website grundsätzlich ohne Offenlegung Ihrer Identität nutzen.',
          'Bei der freiwilligen Kontaktaufnahme wird Ihre E-Mail-Adresse in eine separate Datenbank aufgenommen, welche nicht mit den anonymen Logfiles verknüpft wird. Sie haben jederzeit die Möglichkeit, Ihre Registrierung wieder rückgängig zu machen.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'Auf unserer Website können Cookies zum Einsatz kommen, die für die Zeit Ihres Besuchs auf der Website gültig sind. Durch das Weitersurfen auf unserer Website erklären Sie sich mit der Nutzung von Cookies einverstanden.',
          'Die meisten Browser sind so eingestellt, dass sie Cookies automatisch akzeptieren. Wenn Sie Cookies blockieren oder löschen wollen, können Sie diese Änderungen in den Browsereinstellungen vornehmen. Zur Verwaltung von Cookies ermöglichen Ihnen die meisten Browser, alle Cookies zu akzeptieren oder abzulehnen bzw. nur bestimmte Arten von Cookies zu akzeptieren.',
        ],
      },
      {
        heading: 'Copyright',
        body: [
          'Die auf unseren Websites enthaltenen Informationen werden der Öffentlichkeit zugänglich gemacht. Durch das Herunterladen oder Kopieren von Inhalten, Bildern, Fotos oder anderen Dateien werden keinerlei Rechte bezüglich der Inhalte übertragen. Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf den Websites gehören uns ausschliesslich oder den speziell genannten Rechtsinhabern.',
          'Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.',
        ],
      },
    ],
  },
} as const;

const en: typeof de = {
  htmlLang: 'en',
  meta: {
    title: 'Plaintext GmbH · Software architecture, CI/CD & AI integration',
    description:
      'Software architecture, CI/CD automation and legacy modernisation from Switzerland. iSAQB and TOGAF certified. Plus ProjectMind, our open-source architecture browser for AI coding agents.',
  },
  nav: {
    projectmind: 'ProjectMind',
    services: 'Services',
    legacy: 'Legacy migration',
    menu: 'Menu',
    cases: 'Engagements',
    tech: 'Tech',
    team: 'Team',
    contact: 'Contact',
    cta: 'Start a project',
  },
  hero: {
    eyebrow: 'Plaintext GmbH · since 2020',
    title1: 'Software that lasts.',
    title2: 'Code that speaks.',
    body: 'We design, build and modernise software architectures for teams that don\'t want to start over in a year. And we build the tool that lets AI coding agents read your codebase.',
    facts: ['iSAQB CPSA-A', 'TOGAF', 'Java · Spring · Rust', 'Trimstein near Bern'],
  },
  pm: {
    meta: {
      title: 'ProjectMind · Architecture browser for AI coding agents · Plaintext GmbH',
      description:
        'ProjectMind is a read-only architecture browser that pairs with coding agents such as Claude Code via the Model Context Protocol. Open source under MPL-2.0.',
    },
    featuresLabel: 'Features',
    installLabel: 'Installation',
    eyebrow: 'Our product',
    kicker: 'Open source · MPL-2.0',
    title: 'ProjectMind',
    subtitle: 'Your project, explained by AI.',
    body: 'A read-only architecture browser that pairs with coding agents like Claude Code, ChatGPT Codex, Gemini CLI or Cursor. Bidirectional via the Model Context Protocol: the AI opens your classes, you mark regions, both flow back into the chat.',
    bullets: [
      ['Read, don\'t edit', 'No builds, no write access. Just the architecture, readable and navigable.'],
      ['MCP-bidirectional', 'The agent shows class X, lines 42 to 58. You select, the context lands in the chat.'],
      ['Plugin system', 'Languages (Java, Rust, …), frameworks (Spring, Lombok, JSF, …) and diagrams are plugins.'],
      ['Local, fast, private', 'Tauri desktop app. Your code never leaves your machine.'],
    ],
    install: 'Install in one line',
    installNote: 'macOS · Linux · Windows. Re-run to upgrade.',
    primary: 'View on GitHub',
    secondary: 'Copy quickstart',
    copied: 'copied ✓',
    learnMore: 'More in the repo',
    diagramAria: 'Schematic of a codebase as a node graph',
  },
  others: {
    eyebrow: 'Also from us',
    title: 'Open-source framework',
    body: 'Boring technology, clear architectures, maintained for years. Boring tech is good tech: we focus on the actual problem, not the frontend framework of the quarter.',
    items: [
      {
        name: 'plaintext-root',
        body: 'Our application framework: multi-tenancy, security, menu system, admin modules, discovery. The foundation our customer apps have been running on for years, released as open source under MPL 2.0.',
        link: 'https://github.com/Plaintext-Gmbh/plaintext-root',
        linkLabel: 'github.com/Plaintext-Gmbh/plaintext-root',
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'What we bring',
    body: 'Right-sized advisory and embedded work in project and product teams. Knowledge stays with your team. It doesn\'t walk out.',
    items: [
      {
        kicker: 'Product',
        title: 'Legacy modernisation',
        link: 'View the product: legacy application migration',
        page: 'legacy',
        body: 'Renovating old system landscapes incl. containerisation, step by step into the modern world. Cloud, on-prem or hybrid.',
        chips: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'On-Prem'],
      },
      {
        kicker: 'Focus',
        title: 'Software & systems architecture',
        body: 'iSAQB CPSA-A and TOGAF certified. Architecture decisions, reviews and documentation with arc42 and C4, from enterprise architecture down to the individual service, including large agile release trains based on SAFe.',
        chips: ['arc42', 'C4', 'DDD', 'Microservices', 'SAFe'],
      },
      {
        title: 'DevOps & CI/CD',
        body: 'One pipeline for every build type instead of one per project: a short configuration per service, releases triggered by parameter, deployments to clearly separated stages. Built with GitHub Actions, Tekton or ArgoCD, depending on the environment.',
        chips: ['GitHub Actions', 'ArgoCD', 'Tekton', 'Nexus', 'SonarQube'],
      },
      {
        kicker: 'Product',
        title: 'AI assistance',
        link: 'View the product: ProjectMind',
        page: 'projectmind',
        body: 'We bring in local and cloud-based AI services where they pull their weight: code reviews, docs, routine work. With ProjectMind, you see what the agents are doing.',
        chips: ['MCP', 'Claude Code', 'Codex', 'Local LLMs'],
      },
    ],
  },
  legacy: {
    meta: {
      title: 'Legacy application migration · Plaintext GmbH',
      description:
        'We migrate ageing applications in measurable steps: analysis, test suite, mocks of surrounding systems, migration and handover with architecture documentation, running code and tests.',
    },
    hero: {
      eyebrow: 'Product · Legacy migration',
      title: 'Legacy application migration',
      body: 'Your application has served its purpose for years, yet its technology, operation and further development are increasingly becoming a risk. Acting on your behalf, Plaintext GmbH moves it onto a current foundation, in traceable steps whose success can be measured.',
    },
    situation: {
      eyebrow: 'Starting point',
      title: 'The application runs. But nobody likes to touch it any more.',
      body: 'Legacy applications often carry core business processes. That is exactly what makes replacing them delicate: replacing everything at once puts at risk what works today. We take the opposite approach and secure what exists first.',
      items: [
        ['Knowledge is scattered', 'Business rules live in the code, in interfaces and in the heads of a few people. Documentation is missing or out of date.'],
        ['Changes are risky', 'Without reliable tests, the consequences of a change are hard to assess. Further development slows down accordingly.'],
        ['The platform or tech stack is reaching end of life', 'Frameworks, runtimes and libraries are no longer maintained. Security and operations become more costly.'],
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'Six steps, each with a verifiable outcome',
      resultLabel: 'Outcome',
      steps: [
        {
          title: 'Analysis and business context',
          body: 'We analyse the existing application: structure, dependencies, interfaces and data storage. The business context matters just as much. We want to understand which processes the application supports and which rules it implements before we change anything.',
          result: 'A shared understanding of the application and its business context',
        },
        {
          title: 'A test suite as a safety net',
          body: 'On that basis we build a comprehensive test suite. It captures how the application behaves today, verifies its function after the migration and safeguards further development later on.',
          result: 'A comprehensive test suite that documents functional behaviour',
        },
        {
          title: 'Mocks of surrounding systems',
          body: 'We replicate the surrounding systems as mocks. This makes system integration tests possible, and at every migration step it can be measured whether the step succeeded and the application remains functional.',
          result: 'System integration tests against mocked surrounding systems',
        },
        {
          title: 'Migration in measurable steps',
          body: 'The migration itself proceeds in manageable stages. After each stage, the test suite and the system integration tests are run. Progress is therefore not an estimate but a measurement.',
          result: 'A migrated application, verified step by step',
        },
        {
          title: 'Handover',
          body: 'At the end you receive comprehensive architecture documentation of the migrated application, the running code and the tests. You have everything you need to operate and develop the application further.',
          result: 'Architecture documentation, running code and tests',
        },
        {
          title: 'Reintegration and further work',
          body: 'Where required, we take on the reintegration into your system landscape and any further work on a time-and-materials basis, to the extent you decide.',
          result: 'Support as needed, billed on a time-and-materials basis',
        },
      ],
    },
    deliverables: {
      eyebrow: 'Deliverables',
      title: 'What you receive at the end',
      items: [
        ['Architecture documentation', 'Comprehensive documentation of the migrated application. It serves as the basis for operation and further development.'],
        ['Running code', 'The source code of the migrated application, running and ready to be taken over by your team.'],
        ['Tests', 'The comprehensive test suite that lets you verify the application at any time, including after future changes.'],
      ],
    },
    reference: {
      label: 'References',
      items: [
        {
          kicker: 'SaaS · Media industry',
          title: 'Migrating a GIS application including its own tile rendering jobs',
          body: 'An ageing GIS web application was moved onto a new technical foundation, including its own rendering jobs for map tiles based on OpenStreetMap and the political municipalities of Switzerland. The application now runs in Docker containers, with build and deployment handled by a CI/CD pipeline. The engagement also included the migration to a new cloud provider.',
          chips: ['GIS', 'OpenStreetMap', 'Docker', 'CI/CD', 'Cloud migration'],
        },
        {
          kicker: 'SaaS · Media industry',
          title: 'CI/CD automation for a subscription platform',
          body: 'Build and deployment of every service run through a single generic pipeline, maintained as a shared library. Each service needs a configuration of just a few lines: Java version, build type, target stage. Releases are triggered by parameter, versions are calculated automatically, container images are published to a private repository and rolled out to the stages project by project. Delivered together with the in-house team and nearshoring teams in Poland and India, including the introduction of Cloudflare.',
          chips: ['Docker', 'Docker Compose', 'Nexus', 'SonarQube', 'Cloudflare', 'CI/CD'],
        },
      ],
    },
  },
  cases: {
    eyebrow: 'Track record',
    title: 'Selected engagements',
    body: 'A sample from recent years, kept anonymous out of discretion. Happy to tell you more on request.',
    items: [
      {
        kicker: 'SaaS · Media industry',
        title: 'Login and subscription system based on Keycloak',
        body: 'Central login for the paywall web application and the mobile apps of a subscription offering. Keycloak runs as a blue-green installation behind NGINX, with replicated PostgreSQL and a failover instance. Each business partner gets its own realm. An import service built on Spring Boot takes in data via SFTP, a reporting service delivers the evaluations. All containers log centrally to Graylog.',
        chips: ['Keycloak', 'PostgreSQL', 'NGINX', 'Spring Boot', 'Graylog', 'Blue-green'],
      },
      {
        kicker: 'Federal agency · Healthcare',
        title: 'CI/CD infrastructure on GitHub',
        body: 'Conception, consulting, rollout and support of a CI/CD infrastructure based on GitHub and GitHub Actions, from concept to day-to-day operations.',
        chips: ['GitHub', 'GitHub Actions', 'Conception', 'Support'],
      },
      {
        kicker: 'Federal administration · IT',
        title: 'System architecture in an agile release train',
        body: 'Multi-year engagement as system architect and advisor in the architecture team of a large agile release train: architecture decisions, reviews and hands-on guidance for the implementation teams.',
        chips: ['SAFe', 'System architecture', 'Java', 'Advisory'],
      },
      {
        kicker: 'DevSecOps · Security',
        title: 'CVE patching across the system landscape',
        body: 'Responsible for CVE patching across an entire system landscape: automated vulnerability scanning with Trivy, central triage and prioritisation via DefectDojo and automatic task assignment to the responsible teams through Jira. From scan to assigned ticket with no manual step in between.',
        chips: ['Trivy', 'DefectDojo', 'Jira', 'CVE', 'DevSecOps'],
      },
    ],
  },
  tech: {
    eyebrow: 'Tech',
    title: 'What we work with',
    body: 'A snapshot. We keep learning whatever the problem demands.',
    groups: [
      ['Architecture', ['iSAQB', 'TOGAF', 'arc42', 'C4', 'Domain-Driven', 'SAFe']],
      ['GitOps & CI/CD', ['GitHub Actions', 'ArgoCD', 'Tekton', 'Bitbucket', 'Nexus', 'Bash', 'Python']],
      ['Platform', ['Docker', 'Docker Compose', 'Kubernetes', 'OpenShift', 'Helm', 'Vault', 'Spring Boot', 'PostgreSQL', 'NGINX']],
      ['Operations & logging', ['Graylog', 'Portainer', 'Cloudflare']],
      ['Code quality', ['SonarQube', 'OWASP', 'Snyk', 'Trivy', 'DefectDojo', 'Code review', 'Pair programming']],
      ['Integration', ['REST', 'RabbitMQ', 'Keycloak', 'OAuth2', 'LDAP / Active Directory', 'SFTP']],
      ['AI & automation', ['MCP', 'LLM tooling', 'Local LLMs', 'AI agents', 'ChatOps', 'herdr', 'Kimi', 'Claude', 'DeepSeek', 'GLM', 'Nemotron', 'agy']],
    ],
  },
  team: {
    eyebrow: 'Team',
    title: 'The two of us',
    daniel: {
      name: 'Daniel Marthaler',
      role: 'Founder · Software Architect',
      body: 'I design architectures a team lives, not just diagrams. iSAQB CPSA-A, TOGAF, long-form in Spring/Java and recently deep in Rust (for ProjectMind). Knowledge stays with your team.',
      chips: ['Architect', 'DevOps', 'Team lead', 'Cloud engineer'],
    },
    jasmin: {
      name: 'Jasmin Marthaler',
      role: 'Lead Back Office',
      body: 'Smooth operations, customer care, administration. I make the room in which technical innovation happens.',
      chips: ['Project coordination', 'Customer care', 'Process'],
    },
  },
  contact: {
    eyebrow: 'Let\'s talk',
    title: 'Got a project in mind?',
    body: 'Drop us a line. One mail, a short description of what you need. We reply. No funnel, no sales script.',
    button: 'hello@plaintext.ch',
    address: 'Neuhusmatte 155 · 3083 Trimstein · Switzerland',
  },
  footer: {
    impressum: 'Plaintext GmbH · CHE-488.786.867',
    imprintLabel: 'Imprint',
    claim: 'Software architecture, CI/CD and legacy migration from Trimstein near Bern.',
    pagesTitle: 'Pages',
    contactTitle: 'Contact',
  },
  imprint: {
    title: 'Imprint',
    backLabel: '← Back',
    company: 'Plaintext GmbH',
    addressLines: ['Neuhusmatte 155', '3083 Trimstein', 'Switzerland'],
    email: 'info@plaintext.ch',
    uid: 'CHE-488.786.867 HR/MWST',
    sections: [
      {
        heading: 'Legal',
        body: [
          'We do our best to keep the information on this site current, accurate and complete. Even so, errors are possible, and we make no warranty as to completeness, accuracy or up-to-dateness.',
          'We reserve the right to modify, remove or temporarily suspend any content at any time and without prior notice.',
          'Use of this site is at the user\'s own risk. We accept no liability for material or non-material damages, including direct, indirect, incidental, foreseeable or consequential damages, allegedly caused by access to or use of this online service.',
          'Our site may contain external links to third-party sites. We have no control over the content of those sites and accept no responsibility for their content or availability.',
        ],
      },
      {
        heading: 'Privacy',
        body: [
          'Based on Article 13 of the Swiss Federal Constitution and the Swiss federal data-protection legislation, every person is entitled to the protection of their privacy and to protection against misuse of their personal data. Plaintext GmbH respects these provisions. Personal data is treated in strict confidence.',
          'In close cooperation with our hosting providers, we make every effort to protect databases against unauthorised access, loss, misuse or falsification.',
          'When you access our pages, the following data is recorded in log files: IP address, date, time, browser request and general information about your operating system or browser. This usage data forms the basis of anonymous statistical analyses that allow us to identify trends and improve our service accordingly.',
        ],
      },
      {
        heading: 'Personal data',
        body: [
          'Plaintext GmbH is the entity responsible for the collection, processing and use of your personal data. If you wish to object to the collection, processing or use of your data, entirely or for individual measures, you may submit your objection by email or letter to the contact details above.',
          'Personal data is information that can be used to identify you (name, address, postal address, telephone number). Information that cannot be associated with your identity (such as the total number of users of a website) is excluded. You may, in principle, use our website without disclosing your identity.',
          'When you contact us voluntarily, your email address is added to a separate database that is not linked to the anonymous log files. You may revoke your registration at any time.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'Our site may use cookies that are valid for the duration of your visit. By continuing to browse, you consent to the use of cookies.',
          'Most browsers are configured to accept cookies automatically. If you want to block or delete cookies, you can do so via your browser settings. Most browsers let you accept or reject all cookies, or accept only specific types of cookies.',
        ],
      },
      {
        heading: 'Copyright',
        body: [
          'The information on our sites is made publicly available. Downloading or copying content, images, photos or other files transfers no rights regarding that content. Copyright and all other rights to content, images, photos or files on the sites belong exclusively to us or to the named rights-holders.',
          'Reproduction of any element requires the written consent of the rights-holders in advance.',
        ],
      },
    ],
  },
} as const;

export const dict = { de, en } as const;
export type Dict = typeof de;
export const t = (lang: Lang): Dict => dict[lang];
