export type Language = 'fr' | 'en';

export const defaultLanguage: Language = 'fr';

export const languages: readonly Language[] = ['fr', 'en'] as const;

export const translations = {
  fr: {
    language: {
      switchLabel: 'Sélecteur de langue'
    },
    logo: {
      alt: 'Logo Hugo Rodrigues'
    },
    header: {
      navToggle: 'Ouvrir le menu',
      navClose: 'Fermer le menu'
    },
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expériences',
      education: 'Formations',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Apprenti développeur ingénieur chez Orange',
      title: 'Étudiant ingénieur à CPE Lyon',
      subtitle:
        "Passionné par les technologies émergentes, notamment l'intelligence artificielle, la robotique et le développement web, je consolide mes bases en ingénierie logicielle tout en préparant un stage international de 2 à 3 mois pour l'été 2026.",
      ctaProjects: 'Découvrir mes projets',
      ctaContact: "Discuter d'une opportunité",
      antennaLabel: "Taper sur l'antenne du robot",
      panelLeft: 'Activer le module gauche',
      panelCenter: 'Activer le module central',
      panelRight: 'Activer le module droit'
    },
    about: {
      eyebrow: 'À propos',
      title: "Ingénieur logiciel passionné par l'Informatique et les nouvelles technologies",
      paragraph1:
        "Etudiant ingénieur en Informatique & Réseaux de Communication à CPE Lyon et apprenti développeur logiciel chez Orange. J'oriente mes travaux vers l'intelligence artificielle, la robotique et le développement web.",
      paragraph2:
        "Curieux de nature, j'explore la data science et les nouvelles tendances technologiques, mais je me ressource surtout à travers le sport collectif : handballeur depuis quinze ans, j'ai aussi eu la chance de coacher de jeunes équipes et d'arbitrer des rencontres officielles."
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Mes connaissances techniques',
      groups: {
        languages: {
          title: 'Langages & web',
          items: ['Java', 'Python', 'C#', 'C', 'JavaScript, HTML/CSS, Razor']
        },
        databases: {
          title: 'Bases de données',
          items: ['SQL, PostgreSQL, MongoDB', 'MySQL', 'SQL Developer, Access']
        },
        methods: {
          title: 'IA, modélisation & méthodes',
          items: [
            'Architecture logicielle, DevOps, Systèmes embarqués & IoT',
            'Gestion de projet, Économie, Droit',
            'UML, MLD, MVP, normalisation, algèbre relationnelle'
          ]
        }
      }
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Sélection de réalisations',
      cta: 'Voir tous les projets',
      cards: {
        job: {
          title: 'Job Application Tracking',
          description:
            "Application pour suivre mes candidatures, organiser les contacts, les relances et les échéances depuis une interface claire accessible sur desktop comme mobile.",
          tags: ['React 19', 'Tailwind CSS', 'Vite'],
          code: 'Code',
          more: 'Voir plus'
        },
        python: {
          title: 'Python Learning Repository',
          description:
            'Dépôt personnel où je documente mon parcours sur les fondamentaux Python, les structures de données, les algorithmes et la programmation orientée objet, avec des exemples progressifs.',
          tags: ['Python', 'Algorithmes', 'Structures de données'],
          code: 'Code',
          more: 'Voir plus'
        },
        iot: {
          title: 'IoT Android App',
          description:
            "Application Android réalisée à CPE Lyon pour afficher en temps réel des données de capteurs via UDP, choisir un serveur distant et visualiser graphiquement les mesures depuis l'application mobile.",
          tags: ['Java', 'Android', 'UDP sockets'],
          code: 'Code',
          more: 'Voir plus'
        }
      }
    },
    projectsDetail: {
      common: {
        breadcrumbLabel: "Fil d'Ariane",
        breadcrumb: {
          home: 'Accueil',
          projects: 'Projets'
        },
        headerLabel: 'Fiche projet'
      },
      job: {
        slug: 'job-application-tracking',
        titleTag: 'Job Application Tracking | Portfolio',
        metaDescription:
          'Fiche projet détaillée : Job Application Tracking Spreadsheet. Suivi de candidatures, organisation des relances et export Excel.',
        breadcrumb: {
          current: 'Job Application Tracking'
        },
        hero: {
          title: 'Job Application Tracking',
          meta: ['Gestion de candidatures', 'Front-end only'],
          summary:
            "Tableau de bord web pensé pour suivre mes candidatures en stage et alternance : chaque contact, chaque relance et chaque échéance reste visible d'un coup d'œil, sans dépendre d'un back-end.",
          tags: ['React 19', 'Tailwind CSS', 'Vite', 'localStorage'],
          ctaCode: 'Code source',
          ctaBack: 'Retour au portfolio',
          media: "Captures d'écran en cours de préparation (vue tableau, fiche contact, export Excel)."
        },
        overview: {
          title: 'Résumé du projet',
          intro:
            "Partant d'un Google Sheet trop peu ergonomique, j'ai construit une application réactive qui facilite le suivi des pipelines de recrutement. L'interface est optimisée pour clavier et mobile, et conserve toutes les données directement dans le navigateur.",
          problem: {
            title: 'Problématique',
            body:
              "Multiplier les candidatures signifie jongler avec des dizaines de contacts, de dates et d'actions à planifier. Les tableurs perdent vite en lisibilité et n'offrent pas de rappels proactifs."
          },
          solution: {
            title: 'Solution',
            body:
              "Organiser les candidatures sous forme de cartes filtrables, avec des statuts explicites, des dates clés et un suivi d'activité instantané. Les données persistent grâce à <code>localStorage</code> et restent exportables en Excel."
          },
          result: {
            title: 'Résultat',
            body:
              'Je sais en permanence où en sont mes candidatures prioritaires, quelles relances programmer et quels contacts nécessitent un suivi.'
          }
        },
        features: {
          title: 'Fonctionnalités clés',
          items: [
            'Noyau du tracker avec filtres, recherche et métriques pour suivre les candidatures.',
            'Persistance locale et export Excel pour garder ses données accessibles hors ligne.',
            "Formulaire d'ajout/édition en modale, tri et pagination pour gérer de gros volumes.",
            'Tableau de bord analytique, vue entreprises et page de prioritisation des postes.',
            'Navigation latérale, interface bilingue et paramètres utilisateur (dont mode sombre).'
          ],
          stack: {
            title: 'Stack & outils',
            body:
              "React 19 (hooks), Tailwind CSS, Vite et lucide-react forment la base de l'IU. Les données sont encore stockées côté client via <code>localStorage</code> en attendant la mise en place de la couche serveur planifiée."
          }
        },
        next: {
          title: 'Prochaines étapes',
          items: [
            'Adopter une base de données sécurisée et une authentification multi-appareils.',
            "Mettre en place rappels/notifications, calendrier intégré et workflow d'archivage.",
            "Concevoir une expérience mobile aboutie et une section dédiée aux CV/lettres.",
            'Automatiser les tests/déploiements (CI/CD) et connecter les job boards pour importer les offres.',
            "Développer des assistants IA : recherche d'opportunités, optimisation de CV, préparation d'entretiens."
          ],
          support: {
            title: 'Accompagnement Codex',
            body:
              "Codex m'aide à cadrer cette feuille de route ambitieuse : architecture serveur, intégrations IA et pipelines automatisés sont explorés sans compromettre l'expérience utilisateur."
          }
        }
      },
      python: {
        slug: 'python-learning-repository',
        titleTag: 'Python Learning Repository | Portfolio',
        metaDescription:
          'Fiche détaillée du dépôt Python Learning Repository : progression, structures de données et algorithmes étudiés.',
        breadcrumb: {
          current: 'Python Learning Repository'
        },
        hero: {
          title: 'Python Learning Repository',
          meta: ['Auto-formation', 'Algorithmique & data'],
          summary:
            "Un dépôt vivant où je documente mon apprentissage de Python : des fondations à l'algorithmique avancée, avec scripts commentés, checklists de progression et projets inspirés de cas réels.",
          tags: ['Python', 'Algorithmes', 'Structures de données', 'OOP'],
          ctaCode: 'Code source',
          ctaBack: 'Retour au portfolio',
          media:
            'Diagrammes et notebooks interactifs à venir (comparaison de structures de données, benchmarks).'
        },
        structure: {
          title: 'Structure du dépôt',
          intro:
            "Pour garder une vision claire de ma progression, chaque thème est isolé dans un dossier dédié, avec des exemples, une synthèse et des exercices. Le fichier <code>progress.md</code> sert de feuille de route globale.",
          basics: {
            title: 'Bases',
            body:
              'Syntaxe, structures de contrôle, fonctions (args/kwargs, closures, lambdas), gestion des erreurs, fichiers et tests unitaires.'
          },
          data: {
            title: 'Structures de données',
            body:
              'Listes, tuples, dictionnaires, sets, mais aussi implémentations maison : listes chaînées, piles, files, tables de hachage, tas binaires et tries.'
          },
          algorithms: {
            title: 'Algorithmes',
            body:
              'Tri, recherche, récursion, backtracking, fenêtre glissante, deux pointeurs et premières notions de graphes en préparation de la suite.'
          }
        },
        takeaways: {
          title: "Ce que j'en retire",
          items: [
            "Renforcer ma pratique quotidienne du langage en l'appliquant à des problèmes concrets.",
            'Construire des références réutilisables pour des entretiens techniques (résolution de problèmes, analyses de complexité).',
            'Préparer des mini-projets data science et automatisation avec une base solide.'
          ]
        },
        roadmap: {
          title: 'Roadmap',
          phase5: {
            title: 'Phase 5 — Programmation orientée objet',
            items: [
              'Consolider les notions de classes, objets et relations entre composantes.',
              "Explorer héritage, polymorphisme, encapsulation et abstraction.",
              "Pratiquer les méthodes spéciales pour améliorer les API (`__str__`, `__repr__`, etc.)."
            ]
          },
          phase6: {
            title: 'Phase 6 — Python avancé',
            items: [
              'Approfondir décorateurs, générateurs et itérateurs personnalisés.',
              'Revoir les compréhensions (listes, dictionnaires, ensembles) de manière intensive.',
              'Introduire les approches fonctionnelles (`map`/`filter`/`reduce`) et les bibliothèques standard clés (os, sys, datetime, math...).'
            ]
          },
          phase7: {
            title: 'Phase 7 — Bits & mathématiques',
            items: [
              'Manipuler le binaire : opérations bitwise, masques, décalages.',
              'Réviser les astuces mathématiques courantes (PGCD, modulo, nombres premiers).',
              "Préparer des projets appliqués (graphes DFS/BFS, Union-Find, Dijkstra, DP knapsack/LIS/LCS) pour ancrer ces notions."
            ]
          }
        }
      },
      iot: {
        slug: 'iot-android-app',
        titleTag: 'IoT Android App | Portfolio',
        metaDescription:
          "Fiche projet détaillée : IoT Android App. Visualisation temps réel des données capteurs micro:bit avec Android et UDP.",
        breadcrumb: {
          current: 'IoT Android App'
        },
        hero: {
          title: 'IoT Android App',
          meta: ['Android', 'IoT & capteurs'],
          summary:
            "Application Android réalisée à CPE Lyon pour se connecter à un serveur IoT, sélectionner un micro:bit et afficher ses capteurs en temps réel. L'utilisateur réorganise les capteurs selon ses priorités et suit les courbes directement sur son smartphone.",
          tags: ['Android', 'UDP', 'MPAndroidChart'],
          ctaCode: 'Code source',
          ctaBack: 'Retour au portfolio',
          media:
            "Aperçus des écrans de connexion, sélection d'appareil et tableau de bord seront intégrés ici."
        },
        architecture: {
          title: "Architecture de l'application",
          connection: {
            title: 'Écran Connexion',
            body:
              "Saisie de l'adresse IP et du port du serveur, contrôle de la connexion et bouton pour activer le mode démo hors ligne."
          },
          selection: {
            title: "Écran Sélection d'appareil",
            body:
              "Liste des micro:bits disponibles, informations de statut et sélection de l'appareil à monitorer."
          },
          dashboard: {
            title: 'Tableau de bord principal',
            body:
              'Visualisation temps réel avec MPAndroidChart, cartes de capteurs réordonnables en drag & drop, envoi des préférences au serveur.'
          }
        },
        features: {
          title: 'Fonctionnalités principales',
          items: [
            'Connexion réseau en UDP pour recevoir les mesures avec une latence minimale.',
            'Graphique en temps réel du capteur prioritaire, mis à jour au fur et à mesure des paquets.',
            "Réorganisation des capteurs via RecyclerView, persistée et renvoyée au serveur pour synchroniser l'affichage.",
            "Mode démo autonome pour tester l'application sans serveur ni micro:bit."
          ],
          ux: {
            title: 'Expérience utilisateur',
            body:
              "UI inspirée de la charte CPE Lyon : contrastes doux, icônes explicites, feedback sur les états de connexion et transitions fluides entre les écrans."
          }
        },
        next: {
          title: 'Perspectives',
          items: [
            'Ajouter une sauvegarde des capteurs favoris côté client.',
            "Notifier l'utilisateur en cas de perte de connexion ou d'intervalle de mesure anormal.",
            'Exporter un rapport PDF avec les mesures clés sur une période donnée.'
          ],
          lessons: {
            title: 'Enseignements',
            body:
              "Ce projet m'a permis d'appliquer les principes SOLID sur Android, de manipuler des sockets UDP et de concevoir une architecture modulaire pour capteurs connectés."
          }
        }
      }
    },
    experience: {
      eyebrow: 'Expériences',
      title: 'Parcours professionnel',
      items: [
        {
          key: 'orange',
          role: 'Apprenti développeur logiciel',
          meta: 'Orange · Lyon · 2024 — 2027',
          description:
            "Conception et développement d'une nouvelle API REST, intégration de services partenaires, automatisation de l'enrichissement et de la gestion des erreurs, rédaction de tests unitaires et d'intégration (JUnit, Mockito, Castle Mock) et application des bonnes pratiques Agile."
        },
        {
          key: 'kardham',
          role: 'Apprenti développeur logiciel',
          meta: 'Kardham Digital · Dijon · 2023 — 2024',
          description:
            "Ajout de nouvelles fonctionnalités à des applications internes, résolution d'anomalies et maintenance applicative, conception de dashboards métier avec Blazor et les APIs d'Enedis."
        },
        {
          key: 'tech2023',
          role: 'Technicien IT (Intérim)',
          meta: 'La Pierrette S.A. · Suisse · juil. 2023 — août 2023',
          description:
            "Mission estivale au sein du service informatique : installation et mise en service du matériel, préparation des postes utilisateurs et déploiement des mises à jour logicielles."
        },
        {
          key: 'intern',
          role: 'Développeur logiciel (Stage)',
          meta: 'La Pierrette S.A. · Suisse · mai 2023 — juin 2023',
          description:
            "Conception d'une application de gestion de contacts internes, prête pour le déploiement, construite en C# / WPF avec une base de données SQL."
        },
        {
          key: 'tech2022',
          role: 'Technicien IT (Intérim)',
          meta: 'La Pierrette S.A. · Suisse · juil. 2022 — août 2022',
          description:
            "Support technique et préparation de postes : rédaction de procédures d'installation, configuration de Windows, déploiement et remise en service des équipements auprès des utilisateurs finaux."
        }
      ]
    },
    education: {
      eyebrow: 'Formations',
      title: 'Parcours académique',
      items: [
        {
          key: 'engineering',
          role: 'Cycle Ingénieur Informatique & Réseaux',
          meta: 'CPE Lyon · 2024 — 2027',
          description:
            "Programme en alternance couvrant intelligence artificielle, mathématiques avancées, développement front et back-end, DevOps, ingénierie logicielle, systèmes et cybersécurité."
        },
        {
          key: 'but',
          role: 'BUT Informatique · Parcours Développement',
          meta: 'IUT de Dijon · 2021 — 2024',
          description:
            'Bases solides en développement logiciel, modélisation de bases de données, gestion de projet, cybersécurité, troisième année en alternance.'
        },
        {
          key: 'highschool',
          role: 'Baccalauréat Technologique STI2D · option SIN',
          meta: 'Lycée Victor Bérard · 2018 — 2021',
          description:
            "Spécialisation en systèmes d'information numériques, électronique et premières applications logicielles orientées systèmes embarqués."
        }
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: "N'hésitez pas à me contacter !",
      avatarAlt: 'Avatar de Hugo Rodrigues',
      intro: 'Retrouvez-moi ici :',
      linkedin: 'Profil LinkedIn',
      github: 'Profil GitHub',
      email: 'Envoyer un e-mail'
    },
    footer: {
      rights: 'Tous droits réservés.',
      backToTop: 'Retour en haut'
    },
    meta: {
      description:
        "Portfolio de Hugo Rodrigues, étudiant ingénieur à CPE Lyon et apprenti développeur logiciel chez Orange."
    }
  },
  en: {
    language: {
      switchLabel: 'Language selector'
    },
    logo: {
      alt: 'Hugo Rodrigues logo'
    },
    header: {
      navToggle: 'Open menu',
      navClose: 'Close menu'
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Software engineer apprentice at Orange',
      title: 'Engineer student at CPE Lyon',
      subtitle:
        'Passionate about emerging technologies such as artificial intelligence, robotics, and web development, I am strengthening my software engineering foundations while preparing for a 2 to 3 months international internship in summer 2026.',
      ctaProjects: 'Explore my projects',
      ctaContact: 'Discuss an opportunity',
      antennaLabel: 'Tap the robot antenna',
      panelLeft: 'Activate left module',
      panelCenter: 'Activate center module',
      panelRight: 'Activate right module'
    },
    about: {
      eyebrow: 'About',
      title: 'Software engineer passionate about computing and new technologies',
      paragraph1:
        'Engineering student in Computer Science & Communication Networks at CPE Lyon and software developer apprentice at Orange. I direct my work toward artificial intelligence, robotics, and web development.',
      paragraph2:
        'Naturally curious, I explore data science and new technology trends, and I recharge through team sports: a handball player for fifteen years, I have also coached youth teams and refereed official matches.'
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technical expertise',
      groups: {
        languages: {
          title: 'Languages & web',
          items: ['Java', 'Python', 'C#', 'C', 'JavaScript, HTML/CSS, Razor']
        },
        databases: {
          title: 'Databases',
          items: ['SQL, PostgreSQL, MongoDB', 'MySQL', 'SQL Developer, Access']
        },
        methods: {
          title: 'AI, modelling & methods',
          items: [
            'Software architecture, DevOps, Embedded systems & IoT',
            'Project management, Economics, Law',
            'UML, LDM, MVP, normalization, relational algebra'
          ]
        }
      }
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work',
      cta: 'View all projects',
      cards: {
        job: {
          title: 'Job Application Tracking',
          description:
            'Application to track my job applications, organize contacts, follow-ups, and deadlines from a clear interface accessible on desktop and mobile.',
          tags: ['React 19', 'Tailwind CSS', 'Vite'],
          code: 'Source',
          more: 'Learn more'
        },
        python: {
          title: 'Python Learning Repository',
          description:
            'Personal repository documenting my journey through Python fundamentals, data structures, algorithms, and object-oriented programming with progressive examples.',
          tags: ['Python', 'Algorithms', 'Data structures'],
          code: 'Source',
          more: 'Learn more'
        },
        iot: {
          title: 'IoT Android App',
          description:
            'Android app built at CPE Lyon to display live sensor data via UDP, select a remote server, and visualize the measurements directly from the mobile application.',
          tags: ['Java', 'Android', 'UDP sockets'],
          code: 'Source',
          more: 'Learn more'
        }
      }
    },
    projectsDetail: {
      common: {
        breadcrumbLabel: 'Breadcrumb',
        breadcrumb: {
          home: 'Home',
          projects: 'Projects'
        },
        headerLabel: 'Project brief'
      },
      job: {
        slug: 'job-application-tracking',
        titleTag: 'Job Application Tracking | Portfolio',
        metaDescription:
          'Detailed project page: Job Application Tracking Spreadsheet. Track applications, plan follow-ups, and export to Excel.',
        breadcrumb: {
          current: 'Job Application Tracking'
        },
        hero: {
          title: 'Job Application Tracking',
          meta: ['Application tracking', 'Front-end only'],
          summary:
            'Web dashboard designed to monitor my internship and apprenticeship applications: every contact, follow-up, and deadline stays visible at a glance without relying on a back end.',
          tags: ['React 19', 'Tailwind CSS', 'Vite', 'localStorage'],
          ctaCode: 'Source',
          ctaBack: 'Back to portfolio',
          media: 'Screenshots in progress (board view, contact sheet, Excel export).'
        },
        overview: {
          title: 'Project overview',
          intro:
            'Starting from a clunky Google Sheet, I built a reactive application that makes recruitment pipelines easier to manage. The interface is keyboard- and mobile-friendly, and keeps all data locally in the browser.',
          problem: {
            title: 'Problem',
            body:
              'Handling many applications means juggling dozens of contacts, dates, and planned actions. Spreadsheets quickly lose clarity and never provide proactive reminders.'
          },
          solution: {
            title: 'Solution',
            body:
              'Organize applications into filterable cards with explicit statuses, key dates, and instant activity tracking. Data persists through <code>localStorage</code> and remains exportable to Excel.'
          },
          result: {
            title: 'Outcome',
            body:
              'I always know the status of my priority applications, which follow-ups to schedule, and which contacts need additional care.'
          }
        },
        features: {
          title: 'Key features',
          items: [
            'Tracker core with filters, search, and metrics to monitor applications.',
            'Local persistence and Excel export to keep data accessible offline.',
            'Modal-based add/edit form, sorting, and pagination to handle larger datasets.',
            'Analytics dashboard, company view, and application prioritization page.',
            'Sidebar navigation, bilingual interface, and user preferences (including dark mode).'
          ],
          stack: {
            title: 'Stack & tooling',
            body:
              'React 19 (hooks), Tailwind CSS, Vite, and lucide-react power the UI. Data still lives on the client via <code>localStorage</code> while the future server layer is being prepared.'
          }
        },
        next: {
          title: 'Next steps',
          items: [
            'Adopt a secured database and cross-device authentication.',
            'Add reminders/notifications, integrated calendar, and archiving workflow.',
            'Design a polished mobile experience and a space dedicated to CVs/cover letters.',
            'Automate tests/deployments (CI/CD) and connect job boards to import offers.',
            'Build AI assistants: opportunity scouting, CV optimization, interview preparation.'
          ],
          support: {
            title: 'Codex guidance',
            body:
              'Codex helps me refine this ambitious roadmap: server architecture, AI integrations, and automated pipelines move forward without compromising user experience.'
          }
        }
      },
      python: {
        slug: 'python-learning-repository',
        titleTag: 'Python Learning Repository | Portfolio',
        metaDescription:
          'Detailed page for the Python Learning Repository: progression, data structures, and studied algorithms.',
        breadcrumb: {
          current: 'Python Learning Repository'
        },
        hero: {
          title: 'Python Learning Repository',
          meta: ['Self-learning', 'Algorithms & data'],
          summary:
            'A living repository documenting my Python journey: from foundations to advanced algorithms, with commented scripts, progress checklists, and projects inspired by real use cases.',
          tags: ['Python', 'Algorithms', 'Data structures', 'OOP'],
          ctaCode: 'Source',
          ctaBack: 'Back to portfolio',
          media:
            'Interactive notebooks and diagrams coming soon (data structure comparisons, benchmarks).'
        },
        structure: {
          title: 'Repository structure',
          intro:
            'To keep a clear view of my progression, each theme lives in a dedicated folder with examples, a summary, and exercises. The <code>progress.md</code> file acts as a global roadmap.',
          basics: {
            title: 'Fundamentals',
            body:
              'Syntax, control flow, functions (args/kwargs, closures, lambdas), error handling, file operations, and unit tests.'
          },
          data: {
            title: 'Data structures',
            body:
              'Lists, tuples, dictionaries, sets, along with custom implementations: linked lists, stacks, queues, hash tables, binary heaps, and tries.'
          },
          algorithms: {
            title: 'Algorithms',
            body:
              'Sorting, searching, recursion, backtracking, sliding window, two pointers, and early graph notions as groundwork for what follows.'
          }
        },
        takeaways: {
          title: 'Key learnings',
          items: [
            'Strengthen my daily Python practice by applying it to concrete problems.',
            'Build reusable references for technical interviews (problem solving, complexity analyses).',
            'Prepare data science and automation side projects with a solid foundation.'
          ]
        },
        roadmap: {
          title: 'Roadmap',
          phase5: {
            title: 'Phase 5 — Object-oriented programming',
            items: [
              'Reinforce class, object, and relationship concepts.',
              'Explore inheritance, polymorphism, encapsulation, and abstraction.',
              'Practice special methods to improve APIs (`__str__`, `__repr__`, etc.).'
            ]
          },
          phase6: {
            title: 'Phase 6 — Advanced Python',
            items: [
              'Dive deeper into decorators, generators, and custom iterators.',
              'Revisit comprehensions (list, dict, set) intensively.',
              'Introduce functional techniques (`map`/`filter`/`reduce`) and key standard libraries (os, sys, datetime, math, ...).'
            ]
          },
          phase7: {
            title: 'Phase 7 — Bits & mathematics',
            items: [
              'Work with binary operations: bitwise logic, masks, shifts.',
              'Review common math tricks (GCD, modulo, prime numbers).',
              'Prepare applied projects (graph DFS/BFS, Union-Find, Dijkstra, DP knapsack/LIS/LCS) to anchor those notions.'
            ]
          }
        }
      },
      iot: {
        slug: 'iot-android-app',
        titleTag: 'IoT Android App | Portfolio',
        metaDescription:
          'Detailed project page: IoT Android App. Real-time micro:bit sensor visualisation with Android and UDP.',
        breadcrumb: {
          current: 'IoT Android App'
        },
        hero: {
          title: 'IoT Android App',
          meta: ['Android', 'IoT & sensors'],
          summary:
            'Android application built at CPE Lyon to connect to an IoT server, pick a micro:bit, and display its sensors in real time. Users reorder sensors according to their priorities and follow the curves directly on their phone.',
          tags: ['Android', 'UDP', 'MPAndroidChart'],
          ctaCode: 'Source',
          ctaBack: 'Back to portfolio',
          media:
            'Screens showcasing connection, device selection, and dashboards will be added soon.'
        },
        architecture: {
          title: 'Application architecture',
          connection: {
            title: 'Connection screen',
            body:
              'Enter the server IP and port, control the connection, and toggle the offline demo mode.'
          },
          selection: {
            title: 'Device selection screen',
            body:
              'List of available micro:bits, status information, and selection of the device to monitor.'
          },
          dashboard: {
            title: 'Main dashboard',
            body:
              'Real-time visualisation with MPAndroidChart, drag & drop sensor cards, and preference syncing with the server.'
          }
        },
        features: {
          title: 'Core features',
          items: [
            'UDP network connection to receive measurements with minimal latency.',
            'Real-time chart for the priority sensor, updated with each packet.',
            'Sensor reordering through RecyclerView, persisted and sent back to the server for sync.',
            'Standalone demo mode to test the app without a server or micro:bit.'
          ],
          ux: {
            title: 'User experience',
            body:
              'UI inspired by the CPE Lyon branding: soft contrasts, explicit icons, connection state feedback, and smooth transitions between screens.'
          }
        },
        next: {
          title: 'Next steps',
          items: [
            'Store favourite sensors on the client side.',
            'Notify users if the connection drops or sampling intervals drift.',
            'Export a PDF report with key measurements over a selected period.'
          ],
          lessons: {
            title: 'Lessons learned',
            body:
              'This project let me apply SOLID principles on Android, work with UDP sockets, and design a modular architecture for connected sensors.'
          }
        }
      }
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Professional path',
      items: [
        {
          key: 'orange',
          role: 'Software developer apprentice',
          meta: 'Orange · Lyon · 2024 — 2027',
          description:
            'Designing and building a new REST API, integrating partner services, automating enrichment and error handling, writing unit and integration tests (JUnit, Mockito, Castle Mock), and applying Agile best practices.'
        },
        {
          key: 'kardham',
          role: 'Software developer apprentice',
          meta: 'Kardham Digital · Dijon · 2023 — 2024',
          description:
            'Added new features to internal applications, resolved issues and maintained codebases, and designed business dashboards using Blazor and Enedis APIs.'
        },
        {
          key: 'tech2023',
          role: 'IT technician (Summer job)',
          meta: 'La Pierrette S.A. · Switzerland · Jul 2023 — Aug 2023',
          description:
            'Summer assignment within the IT department: installed and commissioned hardware, prepared user workstations, and deployed software updates.'
        },
        {
          key: 'intern',
          role: 'Software developer intern',
          meta: 'La Pierrette S.A. · Switzerland · May 2023 — Jun 2023',
          description:
            'Designed an in-house contact management application ready for deployment, built with C# / WPF and a SQL database.'
        },
        {
          key: 'tech2022',
          role: 'IT technician (Summer job)',
          meta: 'La Pierrette S.A. · Switzerland · Jul 2022 — Aug 2022',
          description:
            'Provided technical support and workstation preparation: wrote installation procedures, configured Windows, deployed devices, and helped end users get back up and running.'
        }
      ]
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic background',
      items: [
        {
          key: 'engineering',
          role: 'Engineering cycle in Computer Science & Networks',
          meta: 'CPE Lyon · 2024 — 2027',
          description:
            'Work-study program covering artificial intelligence, advanced mathematics, front- and back-end development, DevOps, software engineering, systems, and cybersecurity.'
        },
        {
          key: 'but',
          role: 'BSc in Computer Science · Development track',
          meta: 'IUT of Dijon · 2021 — 2024',
          description:
            'Solid foundation in software development, database modelling, project management, cybersecurity, and a third year in an apprenticeship.'
        },
        {
          key: 'highschool',
          role: 'Technological Baccalaureate STI2D · SIN option',
          meta: 'Lycée Victor Bérard · 2018 — 2021',
          description:
            'Specialized in digital information systems, electronics, and early software projects focused on embedded systems.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Feel free to reach out!',
      avatarAlt: 'Portrait of Hugo Rodrigues',
      intro: 'Find me here:',
      linkedin: 'LinkedIn profile',
      github: 'GitHub profile',
      email: 'Send an email'
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top'
    },
    meta: {
      description:
        'Portfolio of Hugo Rodrigues, CPE Lyon engineering student and software developer apprentice at Orange.'
    }
  }
} as const;

export type PortfolioContent = typeof translations.fr;
export type ProjectDetailDictionary = PortfolioContent['projectsDetail'];
export type ProjectDetailKey = Exclude<keyof ProjectDetailDictionary, 'common'>;
