export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
  cgpa?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  skills: string[];
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  period: string;
  status: 'Completed' | 'Incoming' | 'Ongoing';
  description: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  points: string[];
  benchmarkMetric: string;
  benchmarkLabel: string;
  tags: string[];
  interactiveType: 'sentiment' | 'gesture';
}

export interface Publication {
  title: string;
  conference: string;
  location: string;
  year: string;
  schedule: string;
  organizer: string;
  sponsor: string;
  track: string;
  indexing: string;
  status: string;
  abstract: string;
  methodology: string[];
  bibtex: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Siva Bhaskar Kora',
    handle: 'sbk.',
    role: 'Technical Researcher & AI/ML Systems Engineer',
    headline: 'Building end-to-end data pipelines, fine-tuning LLMs with LoRA/QLoRA, and architecting intelligent hardware-software systems.',
    bio: 'Graduate in Computer Engineering (AI & ML) at Presidency University, Bangalore. My work focuses on empirical machine learning, text classification systems, and practical IoT applications with rigorous mathematical grounding.',
    location: 'Kakinada, Andhra Pradesh, India',
    status: 'Available for entry level roles',
    availabilityWindow: 'Fresher / Entry Level Roles',
    graduationDate: 'March 2026',
    email: 'sivabhaskarkora@gmail.com',
    phone: '+91 9154008871',
    timezone: 'India (+5:30 IST)',
    github: 'https://github.com/Siva218889',
    githubDisplay: 'github.com/Siva218889',
    linkedin: 'https://linkedin.com/in/siva-bhaskar-kora',
    linkedinDisplay: 'linkedin.com/in/siva-bhaskar-kora',
    cgpa: '7.64',
    universityCode: 'PU 2026',
    objective: 'Aspiring AI/ML Engineer with strong foundations in Python, machine learning, computer vision, and data analysis. Hands-on experience in building ML pipelines, sentiment analysis systems, and intelligent hardware-software solutions. Passionate about applying AI to real-world problems and developing scalable, data-driven systems.',
    stats: [
      { label: 'PU 2026', sub: 'CGPA: 7.64' },
      { label: "IEEE INDIACom '26", sub: 'Author' },
      { label: 'Available for Fresher', sub: 'roles' }
    ]
  },

  publication: {
    title: 'Government Sentiment Hub: An Information Verification and Analysis Portal',
    conference: 'INDIACom 2026',
    location: 'New Delhi, India',
    year: '2026',
    schedule: 'April 2026',
    organizer: 'Bharati Vidyapeeth (BVICAM)',
    sponsor: 'IEEE Delhi Section',
    track: 'AI & Big Data',
    indexing: 'IEEE Xplore',
    status: 'Scheduled for Proceedings / Publication identifier issued at INDIACom',
    abstract: 'Authored and accepted for oral presentation at the 2026 International Conference on Computing for Sustainable Global Development (INDIACom), technically sponsored by IEEE Delhi Section and organized by BVICAM, New Delhi. The paper formulates an algorithmic verification pipeline parsing civic grievances and social signals to extract semantic credibility indices.',
    methodology: [
      'Multi-source ingestion pipeline aggregating unstructured citizen complaints and municipal notices.',
      'Hybrid NLP tokenization pipeline combining TextBlob lexical polarity with contextual RoBERTa embeddings.',
      'Algorithmic verification scoring engine assigning semantic credibility weights and grievance clustering.'
    ],
    bibtex: `@inproceedings{kora2026govsentiment,
  author    = {Kora, Siva Bhaskar and Collaborators},
  title     = {Government Sentiment Hub: An Information Verification and Analysis Portal},
  booktitle = {Proceedings of the 2026 13th International Conference on Computing for Sustainable Global Development (INDIACom)},
  year      = {2026},
  publisher = {IEEE},
  address   = {New Delhi, India},
  month     = {April}
}`
  } as Publication,

  internships: [
    {
      id: 'fluent-grid',
      company: 'Fluent Grid',
      role: 'End-to-End Data Pipelines to LLM Fine-Tuning Intern',
      period: 'March 2026 – May 2026',
      status: 'Completed',
      description: [
        'Engineered robust data preprocessing, exploratory data analysis (EDA), and predictive analytics workflows using modular Python-based data pipelines.',
        'Spearheaded SQL-based ETL operations on relational datastores to feed clean tabular sets directly into machine learning training routines.',
        'Researched parameter-efficient fine-tuning strategies for Large Language Models using LoRA and QLoRA frameworks for downstream domain adaptation.'
      ],
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL Server', 'OpenCV', 'Flask', 'LoRA & QLoRA']
    },
    {
      id: 'ibm-csrbox',
      company: 'IBM CSRBOX',
      role: 'Data Analysis & Predictive Modeling Intern',
      period: 'May 2024 – July 2024',
      status: 'Completed',
      description: [
        'Built dedicated Python pipelines to ingest, normalize, and extract insights from unstructured textual datasets at scale.',
        'Designed sentiment analysis workflows integrating classical natural language processing (NLP) tokenization and feature extraction.',
        'Evaluated cross-validation metrics across multiple regression and classification algorithms to select optimal predictive models.'
      ],
      skills: ['Python', 'Pandas', 'Scikit-learn', 'NLP', 'Matplotlib']
    }
  ] as Internship[],

  projects: [
    {
      id: 'sentiment-hub',
      title: '360° Feedback Sentiment Hub',
      date: 'DECEMBER 2025',
      category: 'AI / ML System',
      summary: 'Automated OCR-driven feedback processing and sentiment analysis platform designed to digest unstructured paper evaluations into actionable insights.',
      points: [
        '01 Implemented Pytesseract OCR pipeline to digitize physical surveys into structured text.',
        '02 Built polarity and subjectivity scoring layers leveraging TextBlob and custom NLP filters.',
        '03 Constructed Flask dashboards rendering live category trends through interactive Chart.js widgets.'
      ],
      benchmarkMetric: '94.2%',
      benchmarkLabel: 'Accuracy',
      tags: ['Python', 'Flask', 'Pytesseract', 'TextBlob', 'Chart.js'],
      interactiveType: 'sentiment'
    },
    {
      id: 'biking-jacket',
      title: 'Turn Signal Biking Jacket',
      date: 'April 2023',
      category: 'Embedded / IoT',
      summary: 'Smart wearable safety jacket engineered with an inertial measurement unit to trigger automatic directional signals from natural rider arm gestures.',
      points: [
        'Built a smart biking jacket using Arduino and MPU-6050.',
        'Implemented gesture-based LED turn indicators.',
        'Increased rider visibility by 75% in low-light conditions.'
      ],
      benchmarkMetric: '+75%',
      benchmarkLabel: 'Rider Night Visibility',
      tags: ['Arduino', 'MPU-6050', 'Embedded Systems', 'Sensors'],
      interactiveType: 'gesture'
    }
  ] as Project[],

  toolkit: {
    languages: {
      category: '01 LANGUAGES',
      items: ['Python', 'SQL'],
      coreCompetencies: 'Machine Learning, Computer Vision, Data Analysis, Model Evaluation, NLP, Sentiment Analysis, ETL Workflows'
    },
    libraries: {
      category: '02 LIBRARIES & ML',
      items: ['Pandas', 'NumPy', 'Scikit-learn', 'OpenCV', 'Flask', 'LoRA & QLoRA']
    },
    dataViz: {
      category: '03 DATA VIZ & MATH',
      items: ['Matplotlib', 'Seaborn', 'EDA', 'Predictive Analytics']
    },
    toolsDbs: {
      category: '04 TOOLS & DBS',
      items: ['SQL Server', 'MySQL', 'GitHub', 'VS Code', 'Jupyter', 'Excel']
    }
  },

  education: [
    {
      institution: 'Presidency University',
      degree: 'Bachelor of Technology – Computer Engineering (AI & ML)',
      period: 'Since November 2022',
      location: 'Bangalore, India',
      cgpa: '7.64'
    },
    {
      institution: 'Aditya Junior College',
      degree: 'Intermediate',
      period: 'June 2020 - March 2022',
      location: 'Kakinada, India',
      details: 'Percentage: 67%'
    }
  ] as Education[],

  certifications: [
    {
      id: 'cert-1',
      title: 'Google AI Essentials V1',
      issuer: 'Google',
      date: 'May 2026',
      skills: ['Generative AI', 'Prompt Engineering', 'AI Ethics']
    },
    {
      id: 'cert-2',
      title: 'Data Science & Analytics — HP Foundation',
      issuer: 'HP Foundation',
      date: 'September 2025',
      skills: ['Exploratory Data Analysis', 'Statistical Inference', 'Predictive Modeling']
    },
    {
      id: 'cert-3',
      title: 'Angular Foundations — ScholarHat',
      issuer: 'ScholarHat',
      date: 'April 2025',
      skills: ['Components', 'Data Binding', 'Services & Dependency Injection']
    },
    {
      id: 'cert-4',
      title: 'Advanced Reinforcement Learning — Infosys Springboard',
      issuer: 'Infosys Springboard',
      date: 'April 2025',
      skills: ['Markov Decision Processes', 'Q-Learning', 'Policy Gradients']
    },
    {
      id: 'cert-5',
      title: 'Intro to Supervised & Unsupervised Machine Learning — Simplilearn',
      issuer: 'Simplilearn',
      date: 'October 2023',
      skills: ['Regression', 'Classification', 'Clustering', 'Dimensionality Reduction']
    }
  ] as Certification[]
};
