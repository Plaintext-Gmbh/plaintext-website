import type { Lang } from './strings';

// Lebenslauf Daniel Marthaler, öffentliche Fassung (ohne private Personalien).
const de = {
  meta: {
    title: 'Lebenslauf Daniel Marthaler · Plaintext GmbH',
    description:
      'Lebenslauf von Daniel Marthaler, Senior ICT Architect und Systemarchitekt: Stationen, Schwerpunkte, Ausbildung und Zertifikate.',
  },
  hero: {
    label: 'Lebenslauf',
    title: 'Daniel Marthaler',
    body: 'Senior ICT Architect und Systemarchitekt. Über 20 Jahre Erfahrung in Softwareentwicklung und Architektur: bei der SBB, an der Universität Bern, in Mandaten für die Bundesverwaltung und seit 2020 mit der Plaintext GmbH.',
    facts: ['iSAQB CPSA-A', 'TOGAF', 'SAFe', 'Trimstein bei Bern'],
  },
  focus: {
    title: 'Schwerpunkte',
    items: [
      ['Architektur', 'Gesamtarchitekturen über Applikation, Daten und Technologie. Aufbau von Microservice-Architekturen und Container-Plattformen mit Kubernetes, OpenShift und Docker.'],
      ['DevOps', 'Architektur und Umsetzung generischer Build- und Deployment-Pipelines mit Jenkins und GitHub Actions. Einführung von Containerlösungen nach GitOps. Automatisierung mit Terraform für AWS und MongoDB Atlas.'],
      ['Security & IAM', 'Secret Management mit HashiCorp Vault. Konzeption und Umsetzung von IAM-Lösungen mit Failover und Importschnittstellen. Secure Coding.'],
      ['Methodik', 'Praxis in agilen Teams nach Scrum und SAFe, als Systemarchitekt, Product Owner, Teamleiter und technischer Projektleiter.'],
      ['Dokumentation', 'Architekturdokumentation mit arc42, UML und ArchiMate. Schulungen für Entwicklungsteams.'],
    ],
  },
  career: {
    title: 'Berufliche Stationen',
    items: [
      {
        period: 'seit 2020',
        role: 'Senior Architekt und Geschäftsführer',
        org: 'Plaintext GmbH',
        points: [
          '2024 bis 2025: Mandat beim Bundesamt für Informatik und Telekommunikation (BIT), Core-IT, als stellvertretender Systemarchitekt nach SAFe. Verantwortlich für die Applikationslandschaft der Eidgenössischen Steuerverwaltung.',
          'Architektur und Umsetzung einer generischen Build- und Deployment-Lösung auf Basis von GitHub Actions mit Azure als Zielplattform, dazu Beratung in GitOps-Fragen.',
          'Konzept und Umsetzung einer IAM-Lösung mit Failover und Importschnittstelle aus einem Abonnementverwaltungssystem.',
          'Einführung einer Docker-Containerlösung nach GitOps und einer Loganalyse mit Graylog.',
          'Modernisierung einer Legacy-GIS-Lösung (Java).',
          'Architekturberatung für die Containerisierung von Anwendungen, technische Projektleitung für einen Produkt-Rollout.',
        ],
      },
      {
        period: '2023',
        role: 'Lead Software Architekt, HashiCorp Vault Team',
        org: 'SBB AG',
        points: [
          'Aufbau eines SBB-weiten Secret-Management-Systems.',
          'Architektur für dynamische und statische Secrets auf OpenShift.',
        ],
      },
      {
        period: '2021 bis 2023',
        role: 'DevOps Consultant',
        org: 'SBB AG',
        points: [
          'Migration von OpenShift 3.11 (Private Cloud) nach OpenShift 4.9 (AWS), inklusive Umstellung von OpenShift Templates auf Helm Charts.',
          'Provisionierung von MongoDB Atlas mit Terraform auf AWS.',
          'Migration von WebSphere Message Broker und WebSphere MQ nach Apache Kafka.',
        ],
      },
      {
        period: '2018 bis 2020',
        role: 'Product Owner der Entwicklungsstacks',
        org: 'SBB AG',
        points: [
          'Entwurf und Bereitstellung einer generischen, SBB-weiten Build-Pipeline.',
          'Bereitstellung und Support von Blueprints für die Entwicklungsteams (Spring Boot, Angular, Spring Security, Go).',
        ],
      },
      { period: '2014 bis 2018', role: 'Senior Software Architect', org: 'SBB AG', points: [] },
      { period: '2010 bis 2014', role: 'Senior Software Engineer und Teamleiter', org: 'SBB AG', points: [] },
      { period: '2008 bis 2010', role: 'Professional Software Engineer', org: 'SBB AG', points: [] },
      { period: '2004 bis 2008', role: 'Software Engineer', org: 'Informatikdienste der Universität Bern', points: [] },
      { period: '2002 bis 2004', role: 'Applikations-Support, Datenbankprogrammierung und Systembetreuung', org: 'Universität Bern', points: [] },
    ],
  },
  education: {
    title: 'Ausbildung',
    items: [
      ['2005 bis 2008', 'Bachelor of Science BFH in Informatik und Ingenieur FH, Vertiefung Mobile Computing. Berner Fachhochschule, berufsbegleitend.'],
      ['2002 bis 2004', 'Informatik an der Höheren Fachschule für Technik in Grenchen. Diplom mit Auszeichnung.'],
      ['1999 bis 2001', 'Studium an der Schweizerischen Hochschule für Landwirtschaft in Zollikofen, mit Modulen der Vertiefung Informatik.'],
      ['1995 bis 1999', 'Landwirtschaftliche Lehre und Berufsmaturität in Zollikofen.'],
    ],
  },
  certificates: {
    title: 'Zertifikate',
    items: [
      ['2025', 'TOGAF Enterprise Architecture Foundation'],
      ['2025', 'SAFe Agilist'],
      ['2020', 'Secure Coding'],
      ['2019', 'iSAQB Certified Professional for Software Architecture, Advanced Level'],
      ['2018', 'Certified Scrum Product Owner'],
      ['2015', 'Certified Scrum Master'],
      ['2015', 'iSAQB Certified Professional for Software Architecture, Foundation Level'],
      ['2010', 'Sun Certified Java Programmer'],
    ],
  },
  training: {
    title: 'Weiterbildung (Auswahl)',
    items: [
      ['2026', 'Masterclass «Ride the Architect Elevator» und Workshop «Draw like an Architect» mit Gregor Hohpe'],
      ['2018', 'Flexible Architekturmodelle'],
      ['2017', 'Agile Softwarearchitekturen'],
      ['2016', 'Skalierbare Webarchitekturen'],
      ['2011', 'Managementseminar für das mittlere Kader'],
      ['2009', 'Berufsbildner in Lehrbetrieben'],
    ],
  },
  languages: {
    title: 'Sprachen',
    items: [
      ['Deutsch', 'Muttersprache'],
      ['Englisch', 'mündlich sehr gut, schriftlich gut'],
      ['Französisch', 'mündlich gut, schriftlich mittel'],
    ],
  },
  contact: { label: 'Kontakt', back: 'Zur Startseite' },
};

const en: typeof de = {
  meta: {
    title: 'CV Daniel Marthaler · Plaintext GmbH',
    description:
      'CV of Daniel Marthaler, senior ICT architect and systems architect: career, focus areas, education and certificates.',
  },
  hero: {
    label: 'Curriculum vitae',
    title: 'Daniel Marthaler',
    body: 'Senior ICT architect and systems architect. More than 20 years of experience in software development and architecture: at SBB, at the University of Bern, in engagements for the Swiss federal administration and, since 2020, with Plaintext GmbH.',
    facts: ['iSAQB CPSA-A', 'TOGAF', 'SAFe', 'Trimstein near Bern'],
  },
  focus: {
    title: 'Focus areas',
    items: [
      ['Architecture', 'Overall architectures across application, data and technology. Building microservice architectures and container platforms with Kubernetes, OpenShift and Docker.'],
      ['DevOps', 'Architecture and implementation of generic build and deployment pipelines with Jenkins and GitHub Actions. Introducing GitOps-based container solutions. Automation with Terraform for AWS and MongoDB Atlas.'],
      ['Security & IAM', 'Secret management with HashiCorp Vault. Design and implementation of IAM solutions with failover and import interfaces. Secure coding.'],
      ['Ways of working', 'Hands-on experience in agile teams with Scrum and SAFe, as systems architect, product owner, team lead and technical project lead.'],
      ['Documentation', 'Architecture documentation with arc42, UML and ArchiMate. Training for development teams.'],
    ],
  },
  career: {
    title: 'Career',
    items: [
      {
        period: 'since 2020',
        role: 'Senior architect and managing director',
        org: 'Plaintext GmbH',
        points: [
          '2024 to 2025: engagement at the Federal Office of Information Technology, Systems and Telecommunication (FOITT), Core-IT, as deputy systems architect in a SAFe setting. Responsible for the application landscape of the Federal Tax Administration.',
          'Architecture and implementation of a generic build and deployment solution based on GitHub Actions with Azure as the target platform, plus consulting on GitOps.',
          'Design and implementation of an IAM solution with failover and an import interface from a subscription management system.',
          'Introduction of a GitOps-based Docker container solution and of log analysis with Graylog.',
          'Modernisation of a legacy GIS solution (Java).',
          'Architecture consulting for the containerisation of applications, technical project lead for a product rollout.',
        ],
      },
      {
        period: '2023',
        role: 'Lead software architect, HashiCorp Vault team',
        org: 'SBB AG',
        points: [
          'Establishing a company-wide secret management system.',
          'Architecture for dynamic and static secrets on OpenShift.',
        ],
      },
      {
        period: '2021 to 2023',
        role: 'DevOps consultant',
        org: 'SBB AG',
        points: [
          'Migration from OpenShift 3.11 (private cloud) to OpenShift 4.9 (AWS), including the move from OpenShift templates to Helm charts.',
          'Provisioning MongoDB Atlas with Terraform on AWS.',
          'Migration from WebSphere Message Broker and WebSphere MQ to Apache Kafka.',
        ],
      },
      {
        period: '2018 to 2020',
        role: 'Product owner of the development stacks',
        org: 'SBB AG',
        points: [
          'Design and provision of a generic, company-wide build pipeline.',
          'Provision and support of blueprints for the development teams (Spring Boot, Angular, Spring Security, Go).',
        ],
      },
      { period: '2014 to 2018', role: 'Senior software architect', org: 'SBB AG', points: [] },
      { period: '2010 to 2014', role: 'Senior software engineer and team lead', org: 'SBB AG', points: [] },
      { period: '2008 to 2010', role: 'Professional software engineer', org: 'SBB AG', points: [] },
      { period: '2004 to 2008', role: 'Software engineer', org: 'IT Services, University of Bern', points: [] },
      { period: '2002 to 2004', role: 'Application support, database programming and system administration', org: 'University of Bern', points: [] },
    ],
  },
  education: {
    title: 'Education',
    items: [
      ['2005 to 2008', 'Bachelor of Science BFH in Computer Science and Ingenieur FH, specialisation in mobile computing. Bern University of Applied Sciences, part-time alongside work.'],
      ['2002 to 2004', 'Computer science at the Höhere Fachschule für Technik in Grenchen. Diploma with distinction.'],
      ['1999 to 2001', 'Studies at the Swiss College of Agriculture in Zollikofen, including modules of the computer science specialisation.'],
      ['1995 to 1999', 'Agricultural apprenticeship and vocational baccalaureate in Zollikofen.'],
    ],
  },
  certificates: {
    title: 'Certificates',
    items: [
      ['2025', 'TOGAF Enterprise Architecture Foundation'],
      ['2025', 'SAFe Agilist'],
      ['2020', 'Secure Coding'],
      ['2019', 'iSAQB Certified Professional for Software Architecture, Advanced Level'],
      ['2018', 'Certified Scrum Product Owner'],
      ['2015', 'Certified Scrum Master'],
      ['2015', 'iSAQB Certified Professional for Software Architecture, Foundation Level'],
      ['2010', 'Sun Certified Java Programmer'],
    ],
  },
  training: {
    title: 'Further training (selection)',
    items: [
      ['2026', 'Masterclass "Ride the Architect Elevator" and workshop "Draw like an Architect" with Gregor Hohpe'],
      ['2018', 'Flexible architecture models'],
      ['2017', 'Agile software architectures'],
      ['2016', 'Scalable web architectures'],
      ['2011', 'Management seminar for middle management'],
      ['2009', 'Vocational trainer for apprentices'],
    ],
  },
  languages: {
    title: 'Languages',
    items: [
      ['German', 'native'],
      ['English', 'spoken very good, written good'],
      ['French', 'spoken good, written intermediate'],
    ],
  },
  contact: { label: 'Contact', back: 'Back to the home page' },
};

export const cv = (lang: Lang) => (lang === 'en' ? en : de);
