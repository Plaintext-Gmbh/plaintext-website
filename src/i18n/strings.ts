export type Lang = 'de' | 'en';

const de = {
  htmlLang: 'de',
  meta: {
    title: 'Plaintext GmbH · Software-Architektur & ProjectMind',
    description:
      'Plaintext GmbH baut Software, die hält. Wir entwickeln ProjectMind, den Architektur-Browser für AI-Coding-Agenten.',
  },
  nav: {
    projectmind: 'ProjectMind',
    services: 'Leistungen',
    tech: 'Tech',
    team: 'Team',
    contact: 'Kontakt',
    cta: 'Projekt starten',
  },
  hero: {
    eyebrow: 'Plaintext GmbH · seit 2020',
    title1: 'Software,',
    title2: 'die hält.',
    title3: 'Code, der spricht.',
    body: 'Wir entwerfen, bauen und modernisieren Software-Architekturen für Teams, die nicht in einem Jahr von vorn anfangen wollen. Und wir bauen das Werkzeug, mit dem AI-Coding-Agenten Ihre Codebasis lesen lernen.',
    primary: 'ProjectMind ansehen',
    secondary: 'Was wir machen',
    badges: ['iSAQB CPSA-A', 'TOGAF', 'Spring · Java · Rust'],
  },
  pm: {
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
    eyebrow: 'Leistungen',
    title: 'Was wir mitbringen',
    body: 'Bedarfsgerechte Beratung und Mitarbeit in Projekt- und Produktteams. Wissen bleibt bei Ihrem Team. Es fliesst nicht ab.',
    items: [
      {
        kicker: 'Schwerpunkt',
        title: 'Software- & Systemarchitektur',
        body: 'iSAQB CPSA-A und TOGAF zertifiziert. Von Enterprise-Architektur bis Microservices, die richtige Form für Ihr Problem.',
        chips: ['arc42', 'C4', 'DDD', 'Microservices'],
      },
      {
        title: 'DevOps & CI/CD',
        body: 'Automatisierte Build-, Deployment- und Staging-Prozesse mit GitHub Actions, Jenkins und GitOps-Praktiken.',
        chips: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'Tekton'],
      },
      {
        title: 'Legacy-Modernisierung',
        body: 'Renovation alter Systemlandschaften inkl. Containerisierung, Schritt für Schritt in die Moderne. Cloud, On-Prem oder hybrid.',
        chips: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'On-Prem'],
      },
      {
        title: 'AI-Unterstützung',
        body: 'Wir setzen lokale und cloudbasierte AI-Dienste ein, wo sie echten Mehrwert bringen: Code-Reviews, Doku, Routine. Mit ProjectMind sehen Sie, was die Agenten tun.',
        chips: ['MCP', 'Claude Code', 'Codex', 'Local LLMs'],
      },
    ],
  },
  tech: {
    eyebrow: 'Tech',
    title: 'Womit wir arbeiten',
    body: 'Ein Auszug. Wir lernen weiter, wenn das Problem es verlangt.',
    groups: [
      ['Architektur', ['iSAQB', 'TOGAF', 'arc42', 'C4', 'Domain-Driven', 'Event-Storming']],
      ['GitOps & CI/CD', ['GitHub Actions', 'ArgoCD', 'Tekton', 'Jenkins', 'Bash', 'Python']],
      ['Plattform', ['Docker', 'Kubernetes', 'OpenShift', 'Helm', 'Vault', 'Spring Boot']],
      ['Code-Qualität', ['SonarQube', 'OWASP', 'Snyk', 'Code Review', 'Pair Programming']],
      ['Integration', ['REST', 'Kafka', 'RabbitMQ', 'Keycloak', 'OAuth2']],
      ['AI & Automation', ['MCP', 'LLM-Tooling', 'Local LLMs', 'AI Agents', 'ChatOps']],
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
    rights: 'Alle Rechte vorbehalten.',
    impressum: 'Plaintext GmbH · CHE-488.786.867',
    sourceLabel: 'Diese Seite ist in Astro gebaut, der Code liegt offen.',
    imprintLabel: 'Impressum',
    imprintHref: '/impressum/',
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
    title: 'Plaintext GmbH · Software architecture & ProjectMind',
    description:
      'Plaintext GmbH builds software that lasts. We make ProjectMind, the architecture browser for AI coding agents.',
  },
  nav: {
    projectmind: 'ProjectMind',
    services: 'Services',
    tech: 'Tech',
    team: 'Team',
    contact: 'Contact',
    cta: 'Start a project',
  },
  hero: {
    eyebrow: 'Plaintext GmbH · since 2020',
    title1: 'Software',
    title2: 'that lasts.',
    title3: 'Code that speaks.',
    body: 'We design, build and modernise software architectures for teams that don\'t want to start over in a year. And we build the tool that lets AI coding agents read your codebase.',
    primary: 'See ProjectMind',
    secondary: 'What we do',
    badges: ['iSAQB CPSA-A', 'TOGAF', 'Spring · Java · Rust'],
  },
  pm: {
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
        kicker: 'Focus',
        title: 'Software & systems architecture',
        body: 'iSAQB CPSA-A and TOGAF certified. From enterprise architecture to microservices, the right shape for your problem.',
        chips: ['arc42', 'C4', 'DDD', 'Microservices'],
      },
      {
        title: 'DevOps & CI/CD',
        body: 'Automated build, deployment and staging pipelines with GitHub Actions, Jenkins and GitOps practices.',
        chips: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'Tekton'],
      },
      {
        title: 'Legacy modernisation',
        body: 'Renovating old system landscapes incl. containerisation, step by step into the modern world. Cloud, on-prem or hybrid.',
        chips: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'On-Prem'],
      },
      {
        title: 'AI assistance',
        body: 'We bring in local and cloud-based AI services where they pull their weight: code reviews, docs, routine work. With ProjectMind, you see what the agents are doing.',
        chips: ['MCP', 'Claude Code', 'Codex', 'Local LLMs'],
      },
    ],
  },
  tech: {
    eyebrow: 'Tech',
    title: 'What we work with',
    body: 'A snapshot. We keep learning whatever the problem demands.',
    groups: [
      ['Architecture', ['iSAQB', 'TOGAF', 'arc42', 'C4', 'Domain-Driven', 'Event-Storming']],
      ['GitOps & CI/CD', ['GitHub Actions', 'ArgoCD', 'Tekton', 'Jenkins', 'Bash', 'Python']],
      ['Platform', ['Docker', 'Kubernetes', 'OpenShift', 'Helm', 'Vault', 'Spring Boot']],
      ['Code quality', ['SonarQube', 'OWASP', 'Snyk', 'Code review', 'Pair programming']],
      ['Integration', ['REST', 'Kafka', 'RabbitMQ', 'Keycloak', 'OAuth2']],
      ['AI & automation', ['MCP', 'LLM tooling', 'Local LLMs', 'AI agents', 'ChatOps']],
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
    rights: 'All rights reserved.',
    impressum: 'Plaintext GmbH · CHE-488.786.867',
    sourceLabel: 'This site is built with Astro, the source is open.',
    imprintLabel: 'Imprint',
    imprintHref: '/en/imprint/',
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
