const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      certifications: 'Certifications',
      education: 'Formation',
      contact: 'Contact',
      downloadCV: 'Télécharger CV',
    },

    // Hero
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Ghali Benyahia',
      roles: [
        'Software Engineering Student',
        'Cloud & DevOps Enthusiast',
        'Full Stack Developer',
      ],
      location: 'Toulouse, France',
      description:
        "Étudiant ingénieur en sciences du numérique à Toulouse INP – ENSEEIHT, passionné par le Cloud Computing, le DevOps et le Software Engineering. J'aime concevoir des applications robustes, automatiser les infrastructures et explorer les architectures modernes.",
      availability: {
        internship: 'Recherche de stage Cloud / DevOps à partir de juin 2027',
        apprenticeship: "Recherche d'alternance Cloud / DevOps à partir de septembre 2027",
      },
      cta: {
        downloadCV: 'Télécharger mon CV',
        previewCV: 'Aperçu CV',
        projects: 'Voir mes projets',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },

    // About
    about: {
      label: 'À propos',
      title: 'À propos de moi',
      subtitle: 'Ingénieur passionné par les technologies Cloud et le développement logiciel',
      description1:
        "Je suis étudiant ingénieur en double diplôme, actuellement en sciences du numérique à Toulouse INP – ENSEEIHT, en parallèle de ma formation en génie logiciel à l'ENSIAS au Maroc. Mon parcours m'a conduit à travailler sur des projets variés, en entreprise comme en autonomie, ce qui m'a permis de développer une vision à la fois technique et pragmatique.",
      description2:
        "Je me passionne pour trois domaines qui se complètent bien. D'abord le Cloud et le DevOps, avec AWS, Terraform, Docker et Kubernetes, pour concevoir des infrastructures solides et automatisées. Ensuite le développement logiciel, notamment avec Java, Spring Boot et React, pour construire des applications robustes de bout en bout. Et enfin l'intelligence artificielle appliquée, avec les LLMs, les embeddings et les APIs génératives.",
      description3:
        "Je cherche à rejoindre une équipe ambitieuse où je pourrai contribuer à des projets à fort impact technique. J'aime apprendre vite, m'adapter et aller au fond des sujets qui m'intéressent.",
      stats: {
        certifications: { value: '6', label: 'Certifications AWS' },
        experiences: { value: '2', label: 'Expériences pro.' },
        projects: { value: '4', label: 'Projets techniques' },
        degree: { value: '2×', label: 'Diplôme ingénieur' },
      },
      axes: {
        title: 'Mes trois axes',
        cloud: {
          title: 'Cloud Engineering & DevOps',
          desc: 'AWS, Terraform, Docker, Kubernetes, CI/CD, automatisation des infrastructures',
        },
        software: {
          title: 'Software Engineering & Full Stack',
          desc: 'Java, Spring Boot, React, Python, architectures distribuées, microservices',
        },
        ai: {
          title: 'AI & Applications Modernes',
          desc: 'LLMs, Embeddings NLP, OpenAI, Gemini, AWS Bedrock, SageMaker',
        },
      },
    },

    // Experience
    experience: {
      title: 'Expérience professionnelle',
      subtitle: 'Mes expériences en entreprise',
      present: 'Présent',
      technologies: 'Technologies',
      missions: 'Missions principales',
      items: [
        {
          id: 'ocp',
          company: 'OCP Group',
          role: 'Software Engineer Intern',
          period: 'Juin 2026 – Août 2026',
          location: 'Maroc',
          domain: 'Full Stack Development / DevOps',
          description:
            "Développement d'une plateforme de gestion d'appels d'offres permettant la gestion documentaire et les échanges entre différents acteurs internes.",
          missions: [
            "Conception et développement d'une application web de gestion documentaire",
            'Développement du backend Java avec Spring Boot et du frontend React / TypeScript',
            'Mise en place de la sécurité applicative (authentification, autorisation)',
            "Stockage des documents avec MinIO, cache avec Redis",
            'Conteneurisation complète avec Docker et orchestration Kubernetes',
            'Collaboration via Git et intégration continue',
          ],
          technologies: [
            'Java',
            'React',
            'TypeScript',
            'PostgreSQL',
            'MinIO',
            'Redis',
            'Docker',
            'Kubernetes',
            'Git',
          ],
        },
        {
          id: 'secdojo',
          company: 'SecDojo',
          role: 'Software Engineer Intern',
          period: 'Juin 2025 – Juillet 2025',
          location: 'Maroc',
          domain: 'Web Development / AI',
          description:
            "Développement d'une plateforme e-learning interactive destinée aux enseignants et aux étudiants, avec intégration de l'intelligence artificielle générative.",
          missions: [
            "Développement d'une plateforme e-learning interactive avec React",
            "Intégration de l'API Gemini pour la création assistée de contenu pédagogique",
            'Implémentation de la génération automatique de quiz',
            'Développement du backend en Python avec REST API',
            'Containerisation de l\'environnement avec Docker',
            'Gestion des versions et collaboration via Git/GitHub',
          ],
          technologies: [
            'React',
            'Gemini API',
            'REST API',
            'Python',
            'Tailwind CSS',
            'Docker',
            'Git/GitHub',
          ],
        },
      ],
    },

    // Projects
    projects: {
      title: 'Projets',
      subtitle: 'Projets personnels et académiques',
      filters: {
        all: 'Tous',
        cloud: 'Cloud & DevOps',
        fullstack: 'Full Stack',
        ai: 'AI & Machine Learning',
      },
      viewDetails: 'Voir les détails',
      viewGithub: 'GitHub',
      technologies: 'Technologies',
      closeModal: 'Fermer',
      items: [
        {
          id: 'multiagent',
          title: 'Multi-Agent Code Review System',
          category: 'ai',
          categoryLabel: 'Intelligence Artificielle / DevOps / Software Engineering',
          shortDesc:
            "Plateforme de revue de code automatisée reposant sur plusieurs agents IA spécialisés.",
          description:
            "Conception d'une plateforme de revue de code basée sur plusieurs agents IA indépendants, permettant d'automatiser l'analyse du code et d'assister les développeurs dans l'amélioration de sa qualité. Chaque agent prend en charge un axe précis : lisibilité, sécurité, performance ou logique métier. L'ensemble est conteneurisé et déployable via Docker.",
          technologies: [
            'Python',
            'FastAPI',
            'React',
            'Docker',
            'PostgreSQL',
            'Ollama',
            'OpenAI API',
            'Git/GitHub',
          ],
          github: null,
        },
        {
          id: 'aws-migration',
          title: 'Legacy Application Migration to AWS',
          category: 'cloud',
          categoryLabel: 'Cloud Architecture / AWS',
          shortDesc:
            "Migration d'une application legacy vers AWS avec modernisation serverless.",
          description:
            "Migration d'une application legacy et de sa base de données vers AWS en utilisant AWS MGN (Application Migration Service) et AWS DMS (Database Migration Service), suivie d'une modernisation complète vers une architecture serverless séparant le frontend et le backend.",
          technologies: [
            'AWS MGN',
            'AWS DMS',
            'EC2',
            'RDS MySQL',
            'Lambda',
            'API Gateway',
            'S3',
            'CloudFront',
            'SSM',
            'Secrets Manager',
          ],
          github: null,
        },
        {
          id: 'order-management',
          title: 'Order Management System',
          category: 'cloud',
          categoryLabel: 'Cloud / Serverless / Infrastructure as Code',
          shortDesc:
            "Architecture AWS serverless orientée événements pour le traitement asynchrone des commandes.",
          description:
            "Conception avec Terraform d'une architecture AWS serverless orientée événements permettant le traitement asynchrone des commandes. L'infrastructure est entièrement définie en tant que code pour garantir la reproductibilité et la traçabilité des déploiements.",
          technologies: [
            'Terraform',
            'AWS Lambda',
            'API Gateway',
            'DynamoDB',
            'SQS',
            'S3',
            'IAM',
            'CloudWatch',
          ],
          github: null,
        },
        {
          id: 'mouja',
          title: 'Mouja',
          category: 'fullstack',
          categoryLabel: 'Full Stack / Intelligence Artificielle / Cloud Native',
          shortDesc:
            "Plateforme sociale anonyme avec recommandation de groupes par similarité sémantique.",
          description:
            "Développement d'une plateforme sociale anonyme centrée sur les centres d'intérêt des utilisateurs. Le système recommande des groupes appelés « vagues » en s'appuyant sur la vectorisation de phrases et la similarité sémantique. La plateforme intègre également des interactions collaboratives autour de défis partagés. L'architecture est cloud native, entièrement conteneurisée et déployée sur AWS.",
          technologies: [
            'Spring Boot',
            'Angular',
            'Python',
            'PostgreSQL',
            'Docker',
            'Kubernetes',
            'AWS',
            'REST API',
            'Git/GitHub',
          ],
          github: null,
        },
        {
          id: 'customer-insights',
          title: 'Customer Insights',
          category: 'ai',
          categoryLabel: 'Intelligence Artificielle / NLP / Full Stack',
          shortDesc:
            "Analyse automatique d'avis clients par NLP pour identifier les axes d'amélioration prioritaires.",
          description:
            "Plateforme d'analyse d'avis clients permettant de collecter des commentaires depuis Trustpilot par scraping, de nettoyer et structurer les données, puis d'appliquer des techniques de NLP basées sur DistilBERT pour identifier automatiquement les principaux points faibles et prioriser les axes d'amélioration produit.",
          technologies: [
            'React',
            'Flask',
            'Python',
            'DistilBERT',
            'BeautifulSoup',
          ],
          github: null,
        },
      ],
    },

    // Skills
    skills: {
      title: 'Compétences techniques',
      subtitle: 'Technologies et outils maîtrisés',
      categories: {
        cloud: 'Cloud & DevOps',
        backend: 'Backend & APIs',
        frontend: 'Frontend',
        ai: 'AI & Machine Learning',
        databases: 'Bases de données & Monitoring',
      },
    },

    // Certifications
    certifications: {
      title: 'Certifications',
      subtitle: 'Certifications AWS officielles',
      level: 'Niveau',
      verify: 'Vérifier le badge',
      viewBadge: 'Voir le badge',
      levels: {
        associate: 'Associate',
        foundational: 'Foundational',
      },
    },

    // Education
    education: {
      title: 'Formation',
      subtitle: 'Mon parcours académique international',
      present: 'Présent',
      journey: 'Parcours international : Maroc → France',
    },

    // AdditionalInfo
    additional: {
      title: 'Informations complémentaires',
      languages: 'Langues',
      activities: 'Activités & Associations',
      interests: 'Centres d\'intérêt',
    },

    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Prenons contact',
      description:
        "Je suis ouvert à un stage Cloud / DevOps à partir de juin 2027 et à une alternance à partir de septembre 2027. N'hésitez pas à me contacter pour discuter d'opportunités ou de collaborations.",
      email: 'Email',
      location: 'Localisation',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cta: 'Me contacter',
      availability: 'Stage dès juin 2027 — Alternance dès septembre 2027',
    },

    // Footer
    footer: {
      tagline: 'Ingénieur passionné par le Cloud, le DevOps et le Software Engineering.',
      quickLinks: 'Navigation rapide',
    },
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      education: 'Education',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },

    // Hero
    hero: {
      greeting: "Hi, I'm",
      name: 'Ghali Benyahia',
      roles: [
        'Software Engineering Student',
        'Cloud & DevOps Enthusiast',
        'Full Stack Developer',
      ],
      location: 'Toulouse, France',
      description:
        'Software Engineering student at Toulouse INP – ENSEEIHT, passionate about Cloud Computing, DevOps and Software Engineering. I enjoy building robust applications, automating infrastructure and exploring modern architectures.',
      availability: {
        internship: 'Looking for a Cloud / DevOps internship from June 2027',
        apprenticeship: 'Looking for a Cloud / DevOps apprenticeship from September 2027',
      },
      cta: {
        downloadCV: 'Download my CV',
        previewCV: 'CV Preview',
        projects: 'View my projects',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
    },

    // About
    about: {
      label: 'About',
      title: 'About me',
      subtitle: 'Engineer passionate about Cloud technologies and software development',
      description1:
        "I am an engineering student in a double degree program, currently studying Digital Sciences at Toulouse INP – ENSEEIHT alongside my Software Engineering degree at ENSIAS in Morocco. My path has taken me through varied projects in companies and on my own, which helped me build a technical and pragmatic mindset.",
      description2:
        "I am passionate about three complementary fields. First, Cloud and DevOps, with AWS, Terraform, Docker and Kubernetes, to design solid and automated infrastructure. Then software development, mainly with Java, Spring Boot and React, to build robust applications end-to-end. And finally applied artificial intelligence, with LLMs, embeddings and generative APIs.",
      description3:
        "I am looking to join an ambitious team where I can contribute to high-impact technical projects. I enjoy learning fast, adapting and going deep on the topics that interest me.",
      stats: {
        certifications: { value: '6', label: 'AWS Certifications' },
        experiences: { value: '2', label: 'Professional exp.' },
        projects: { value: '4', label: 'Technical projects' },
        degree: { value: '2×', label: 'Engineering degree' },
      },
      axes: {
        title: 'My three pillars',
        cloud: {
          title: 'Cloud Engineering & DevOps',
          desc: 'AWS, Terraform, Docker, Kubernetes, CI/CD, infrastructure automation',
        },
        software: {
          title: 'Software Engineering & Full Stack',
          desc: 'Java, Spring Boot, React, Python, distributed architectures, microservices',
        },
        ai: {
          title: 'AI & Modern Applications',
          desc: 'LLMs, NLP Embeddings, OpenAI, Gemini, AWS Bedrock, SageMaker',
        },
      },
    },

    // Experience
    experience: {
      title: 'Professional Experience',
      subtitle: 'My work experience',
      present: 'Present',
      technologies: 'Technologies',
      missions: 'Key responsibilities',
      items: [
        {
          id: 'ocp',
          company: 'OCP Group',
          role: 'Software Engineer Intern',
          period: 'June 2026 – August 2026',
          location: 'Morocco',
          domain: 'Full Stack Development / DevOps',
          description:
            'Development of a tender management platform enabling document management and exchanges between internal stakeholders.',
          missions: [
            'Design and development of a document management web application',
            'Backend development with Java/Spring Boot and frontend with React/TypeScript',
            'Implementation of application security (authentication, authorization)',
            'Document storage with MinIO, caching with Redis',
            'Full containerization with Docker and Kubernetes orchestration',
            'Collaboration via Git and continuous integration',
          ],
          technologies: [
            'Java',
            'React',
            'TypeScript',
            'PostgreSQL',
            'MinIO',
            'Redis',
            'Docker',
            'Kubernetes',
            'Git',
          ],
        },
        {
          id: 'secdojo',
          company: 'SecDojo',
          role: 'Software Engineer Intern',
          period: 'June 2025 – July 2025',
          location: 'Morocco',
          domain: 'Web Development / AI',
          description:
            'Development of an interactive e-learning platform for teachers and students, with generative AI integration.',
          missions: [
            'Development of an interactive e-learning platform with React',
            'Integration of Gemini API for AI-assisted educational content creation',
            'Implementation of automatic quiz generation',
            'Backend development in Python with REST API',
            'Environment containerization with Docker',
            'Version control and collaboration via Git/GitHub',
          ],
          technologies: [
            'React',
            'Gemini API',
            'REST API',
            'Python',
            'Tailwind CSS',
            'Docker',
            'Git/GitHub',
          ],
        },
      ],
    },

    // Projects
    projects: {
      title: 'Projects',
      subtitle: 'Personal & academic projects',
      filters: {
        all: 'All',
        cloud: 'Cloud & DevOps',
        fullstack: 'Full Stack',
        ai: 'AI & Machine Learning',
      },
      viewDetails: 'View details',
      viewGithub: 'GitHub',
      technologies: 'Technologies',
      closeModal: 'Close',
      items: [
        {
          id: 'multiagent',
          title: 'Multi-Agent Code Review System',
          category: 'ai',
          categoryLabel: 'Artificial Intelligence / DevOps / Software Engineering',
          shortDesc:
            'Automated code review platform powered by multiple specialized AI agents.',
          description:
            'Design of a code review platform based on multiple independent AI agents, automating code quality analysis and assisting developers in improving their codebase. Each agent focuses on a specific dimension: readability, security, performance or business logic. The full stack is containerized and deployable via Docker.',
          technologies: [
            'Python',
            'FastAPI',
            'React',
            'Docker',
            'PostgreSQL',
            'Ollama',
            'OpenAI API',
            'Git/GitHub',
          ],
          github: null,
        },
        {
          id: 'aws-migration',
          title: 'Legacy Application Migration to AWS',
          category: 'cloud',
          categoryLabel: 'Cloud Architecture / AWS',
          shortDesc:
            'Migration of a legacy application to AWS with serverless modernization.',
          description:
            'Migration of a legacy application and its database to AWS using AWS MGN (Application Migration Service) and AWS DMS (Database Migration Service), followed by a full modernization to a serverless architecture separating frontend and backend.',
          technologies: [
            'AWS MGN',
            'AWS DMS',
            'EC2',
            'RDS MySQL',
            'Lambda',
            'API Gateway',
            'S3',
            'CloudFront',
            'SSM',
            'Secrets Manager',
          ],
          github: null,
        },
        {
          id: 'order-management',
          title: 'Order Management System',
          category: 'cloud',
          categoryLabel: 'Cloud / Serverless / Infrastructure as Code',
          shortDesc:
            'Event-driven serverless AWS architecture for asynchronous order processing.',
          description:
            'Design with Terraform of an event-driven serverless AWS architecture enabling asynchronous order processing. The entire infrastructure is defined as code to ensure reproducibility and traceability of deployments.',
          technologies: [
            'Terraform',
            'AWS Lambda',
            'API Gateway',
            'DynamoDB',
            'SQS',
            'S3',
            'IAM',
            'CloudWatch',
          ],
          github: null,
        },
        {
          id: 'mouja',
          title: 'Mouja',
          category: 'fullstack',
          categoryLabel: 'Full Stack / Artificial Intelligence / Cloud Native',
          shortDesc:
            'Anonymous social platform with semantic group recommendation and collaborative challenges.',
          description:
            "Development of an anonymous social platform centered around users' interests. The system recommends groups called \"waves\" using sentence vectorization and semantic similarity. The platform also includes collaborative interactions around shared challenges. The architecture is cloud native, fully containerized and deployed on AWS.",
          technologies: [
            'Spring Boot',
            'Angular',
            'Python',
            'PostgreSQL',
            'Docker',
            'Kubernetes',
            'AWS',
            'REST API',
            'Git/GitHub',
          ],
          github: null,
        },
        {
          id: 'customer-insights',
          title: 'Customer Insights',
          category: 'ai',
          categoryLabel: 'Artificial Intelligence / NLP / Full Stack',
          shortDesc:
            'Automated NLP-based customer review analysis to surface and prioritize product improvement areas.',
          description:
            'Platform for analyzing customer reviews by scraping feedback from Trustpilot, cleaning and structuring the data, then applying NLP techniques based on DistilBERT to automatically identify key pain points and prioritize product improvement areas.',
          technologies: [
            'React',
            'Flask',
            'Python',
            'DistilBERT',
            'BeautifulSoup',
          ],
          github: null,
        },
      ],
    },

    // Skills
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools',
      categories: {
        cloud: 'Cloud & DevOps',
        backend: 'Backend & APIs',
        frontend: 'Frontend',
        ai: 'AI & Machine Learning',
        databases: 'Databases & Monitoring',
      },
    },

    // Certifications
    certifications: {
      title: 'Certifications',
      subtitle: 'Official AWS Certifications',
      level: 'Level',
      verify: 'Verify badge',
      viewBadge: 'View badge',
      levels: {
        associate: 'Associate',
        foundational: 'Foundational',
      },
    },

    // Education
    education: {
      title: 'Education',
      subtitle: 'My international academic journey',
      present: 'Present',
      journey: 'International journey: Morocco → France',
    },

    // AdditionalInfo
    additional: {
      title: 'Additional Information',
      languages: 'Languages',
      activities: 'Activities & Associations',
      interests: 'Interests',
    },

    // Contact
    contact: {
      title: 'Contact',
      subtitle: "Let's connect",
      description:
        "I'm open to a Cloud / DevOps internship from June 2027 and an apprenticeship from September 2027. Feel free to reach out to discuss opportunities or collaborations.",
      email: 'Email',
      location: 'Location',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cta: 'Get in touch',
      availability: 'Internship from June 2027 — Apprenticeship from September 2027',
    },

    // Footer
    footer: {
      tagline: 'Engineer passionate about Cloud, DevOps and Software Engineering.',
      quickLinks: 'Quick links',
    },
  },
}

export default translations
