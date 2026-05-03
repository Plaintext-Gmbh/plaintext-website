export type Lang = 'de' | 'en';

const de = {
  htmlLang: 'de',
  meta: {
    title: 'Plaintext GmbH — Software-Architektur & ProjectMind',
    description:
      'Plaintext GmbH baut Software, die hält. Wir entwickeln ProjectMind — den Architektur-Browser für AI-Coding-Agenten.',
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
    body: 'Wir entwerfen, bauen und modernisieren Software-Architekturen — für Teams, die nicht in einem Jahr von vorn anfangen wollen. Und wir bauen das Werkzeug, mit dem AI-Coding-Agenten Ihre Codebasis lesen lernen.',
    primary: 'ProjectMind ansehen',
    secondary: 'Was wir machen',
    badges: ['iSAQB CPSA-A', 'TOGAF', 'Spring · Java · Rust'],
  },
  pm: {
    eyebrow: 'Unser Produkt',
    kicker: 'Open Source · MPL-2.0',
    title: 'ProjectMind',
    subtitle: 'Ihr Projekt, erklärt von der KI.',
    body: 'Ein read-only Architektur-Browser, der mit Coding-Agenten wie Claude Code, ChatGPT Codex, Gemini CLI oder Cursor zusammenspielt. Bidirektional via Model Context Protocol: die KI öffnet Ihre Klassen, Sie markieren Stellen — beides fliesst zurück in den Chat.',
    bullets: [
      ['Lesen statt editieren', 'Keine Builds, keine Schreibrechte. Nur die Architektur, lesbar und navigierbar.'],
      ['MCP-bidirektional', 'Der Agent zeigt Klassen mit Zeilen 42–58. Sie selektieren — der Kontext landet im Chat.'],
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
  services: {
    eyebrow: 'Leistungen',
    title: 'Was wir mitbringen',
    body: 'Bedarfsgerechte Beratung und Mitarbeit in Projekt- und Produktteams. Wissen bleibt bei Ihrem Team — es fliesst nicht ab.',
    items: [
      {
        kicker: 'Schwerpunkt',
        title: 'Software- & Systemarchitektur',
        body: 'iSAQB CPSA-A und TOGAF zertifiziert. Von Enterprise-Architektur bis Microservices — die richtige Form für Ihr Problem.',
        chips: ['arc42', 'C4', 'DDD', 'Microservices'],
      },
      {
        title: 'DevOps & CI/CD',
        body: 'Automatisierte Build-, Deployment- und Staging-Prozesse mit GitHub Actions, Jenkins und GitOps-Praktiken.',
        chips: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'Tekton'],
      },
      {
        title: 'Legacy-Modernisierung',
        body: 'Renovation alter Systemlandschaften inkl. Containerisierung — Schritt für Schritt in die Moderne. Cloud, On-Prem oder hybrid.',
        chips: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'On-Prem'],
      },
      {
        title: 'AI-Unterstützung',
        body: 'Wir setzen lokale und cloudbasierte AI-Dienste ein, wo sie echten Mehrwert bringen — Code-Reviews, Doku, Routine. Mit ProjectMind sehen Sie, was die Agenten tun.',
        chips: ['MCP', 'Claude Code', 'Codex', 'Local LLMs'],
      },
    ],
  },
  tech: {
    eyebrow: 'Tech',
    title: 'Womit wir arbeiten',
    body: 'Ein Auszug — wir lernen weiter, wenn das Problem es verlangt.',
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
      body: 'Ich entwerfe Architekturen, die ein Team lebt — nicht nur diagrammt. iSAQB CPSA-A, TOGAF, langjährig in Spring/Java und seit kurzem tief in Rust (für ProjectMind). Mein Wissen bleibt bei Ihrem Team.',
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
    body: 'Schreiben Sie uns. Eine Mail, eine kurze Beschreibung, was Sie brauchen — wir antworten. Kein Trichter, kein Sales-Funnel.',
    button: 'hello@plaintext.ch',
    address: 'Neuhusmatte 155 · 3083 Trimstein · Schweiz',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
    impressum: 'Plaintext GmbH · CHE-Nummer auf Anfrage',
    sourceLabel: 'Diese Seite ist in Astro gebaut, der Code liegt offen.',
  },
} as const;

const en: typeof de = {
  htmlLang: 'en',
  meta: {
    title: 'Plaintext GmbH — Software architecture & ProjectMind',
    description:
      'Plaintext GmbH builds software that lasts. We make ProjectMind — the architecture browser for AI coding agents.',
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
    body: 'We design, build and modernise software architectures — for teams that don\'t want to start over in a year. And we build the tool that lets AI coding agents read your codebase.',
    primary: 'See ProjectMind',
    secondary: 'What we do',
    badges: ['iSAQB CPSA-A', 'TOGAF', 'Spring · Java · Rust'],
  },
  pm: {
    eyebrow: 'Our product',
    kicker: 'Open source · MPL-2.0',
    title: 'ProjectMind',
    subtitle: 'Your project, explained by AI.',
    body: 'A read-only architecture browser that pairs with coding agents like Claude Code, ChatGPT Codex, Gemini CLI or Cursor. Bidirectional via the Model Context Protocol: the AI opens your classes, you mark regions — both flow back into the chat.',
    bullets: [
      ['Read, don\'t edit', 'No builds, no write access. Just the architecture — readable, navigable.'],
      ['MCP-bidirectional', 'The agent shows class X, lines 42–58. You select — the context lands in the chat.'],
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
  services: {
    eyebrow: 'Services',
    title: 'What we bring',
    body: 'Right-sized advisory and embedded work in project and product teams. Knowledge stays with your team — it doesn\'t walk out.',
    items: [
      {
        kicker: 'Focus',
        title: 'Software & systems architecture',
        body: 'iSAQB CPSA-A and TOGAF certified. From enterprise architecture to microservices — the right shape for your problem.',
        chips: ['arc42', 'C4', 'DDD', 'Microservices'],
      },
      {
        title: 'DevOps & CI/CD',
        body: 'Automated build, deployment and staging pipelines with GitHub Actions, Jenkins and GitOps practices.',
        chips: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'Tekton'],
      },
      {
        title: 'Legacy modernisation',
        body: 'Renovating old system landscapes incl. containerisation — step by step into the modern world. Cloud, on-prem or hybrid.',
        chips: ['Docker', 'Kubernetes', 'OpenShift', 'Azure', 'AWS', 'On-Prem'],
      },
      {
        title: 'AI assistance',
        body: 'We bring in local and cloud-based AI services where they pull their weight — code reviews, docs, routine work. With ProjectMind, you see what the agents are doing.',
        chips: ['MCP', 'Claude Code', 'Codex', 'Local LLMs'],
      },
    ],
  },
  tech: {
    eyebrow: 'Tech',
    title: 'What we work with',
    body: 'A snapshot — we keep learning whatever the problem demands.',
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
      body: 'I design architectures a team lives — not just diagrams. iSAQB CPSA-A, TOGAF, long-form in Spring/Java and recently deep in Rust (for ProjectMind). Knowledge stays with your team.',
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
    body: 'Drop us a line. One mail, a short description of what you need — we reply. No funnel, no sales script.',
    button: 'hello@plaintext.ch',
    address: 'Neuhusmatte 155 · 3083 Trimstein · Switzerland',
  },
  footer: {
    rights: 'All rights reserved.',
    impressum: 'Plaintext GmbH · UID on request',
    sourceLabel: 'This site is built with Astro, the source is open.',
  },
} as const;

export const dict = { de, en } as const;
export type Dict = typeof de;
export const t = (lang: Lang): Dict => dict[lang];
