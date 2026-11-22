import { 
  PersonalDetails, 
  EducationInfo, 
  SkillCategory, 
  ProjectDetail, 
  InternshipExperience, 
  CertificationItem, 
  CodingProfile 
} from '../types';

/**
 * =====================================================================
 * CENTRAL PORTFOLIO CONFIGURATION - AJITHA LAXMI BALAMURUGAN
 * =====================================================================
 * Recruiter & Placement Ready Portfolio Data.
 * All fields are structured for effortless updating.
 */

export const personalDetails: PersonalDetails = {
  name: "Ajitha Laxmi Balamurugan",
  title: "Computer Science Engineering (AI & ML) Student | Aspiring Software Developer | Machine Learning Enthusiast",
  headline: "Building intelligent solutions through code, creativity and technology.",
  bioIntroduction: "I'm a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy solving problems, exploring new technologies and developing practical solutions through software development and AI.",
  aboutDetails: "I'm a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I have an interest in Java programming, software development, problem-solving and machine learning. I enjoy learning new technologies and turning ideas into practical applications.",
  academicBackground: "Currently pursuing B.E. in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning at KPR Institute of Engineering and Technology, maintaining an academic CGPA of 8.39. Strong foundational knowledge in Data Structures, Object-Oriented Programming, and Machine Learning workflows.",
  technicalInterests: [
    "Machine Learning & Deep Learning",
    "Natural Language Processing (NLP)",
    "Object-Oriented Software Design (Java)",
    "Full-Stack Web Engineering",
    "Data Analysis & Feature Engineering",
    "Civic & Social Impact Tech Solutions"
  ],
  careerAspirations: "Aspiring to leverage algorithmic problem-solving and AI-driven methodologies to build scalable, reliable software systems. Seeking high-impact software engineering or machine learning internships where I can contribute to real-world codebases, learn from industry mentors, and engineer robust digital solutions.",
  
  // ACTUAL VERIFIED CONTACT DETAILS FROM RESUME
  email: "ajitha23022007@gmail.com",
  phone: "+91 8124471419",
  location: "Coimbatore, Tamil Nadu, India",
  
  // ACTUAL VERIFIED PROFILES
  linkedin: "https://www.linkedin.com/in/ajitha-laxmi-balamurugan-53a323328/",
  github: "https://github.com/Ajitha-004",
  
  // RESUME CONFIGURATION
  resumeFileName: "Ajitha_Resume.pdf",
  resumeDownloadPath: "/resume/Ajitha_Resume.pdf",
  profilePhotoPlaceholder: "/profile.jpg"
};

export const educationInfo: EducationInfo = {
  institution: "KPR Institute of Engineering and Technology",
  degree: "B.E. Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  duration: "2024 – 2028",
  cgpa: "8.39 / 10.0",
  location: "Coimbatore, Tamil Nadu",
  highlights: [
    "Consistent Academic Excellence with 8.39 CGPA in AI & ML curriculum",
    "Active participant in collegiate coding hackathons and technical symposiums",
    "Core focus on Data Structures, Algorithms, Object-Oriented Java, and Applied Machine Learning",
    "Rigorous project-driven coursework in Artificial Intelligence & Database Systems"
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages used for systems, algorithmic problem solving and scripting",
    skills: [
      { name: "Java", highlight: true, badge: "Core Language" },
      { name: "Python", highlight: true, badge: "AI & ML" },
      { name: "C", highlight: false, badge: "System Basics" }
    ]
  },
  {
    category: "Web Technologies",
    icon: "Globe",
    description: "Modern frontend and web interface construction technologies",
    skills: [
      { name: "HTML5", highlight: false },
      { name: "CSS3", highlight: false },
      { name: "JavaScript", highlight: true, badge: "Interactive UI" }
    ]
  },
  {
    category: "Database & Storage",
    icon: "Database",
    description: "Relational data design, schema management and querying",
    skills: [
      { name: "SQL", highlight: true, badge: "Relational DB" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    description: "Foundational engineering paradigms for robust software development",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true, badge: "Foundation" },
      { name: "Object-Oriented Programming (OOP)", highlight: true, badge: "Architecture" },
      { name: "Database Management Systems (DBMS)", highlight: false, badge: "Data Systems" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "Sparkles",
    description: "Data-driven predictive modeling, language processing and numerical analysis",
    skills: [
      { name: "Machine Learning Fundamentals", highlight: true, badge: "Predictive Models" },
      { name: "Natural Language Processing (NLP)", highlight: true, badge: "Text Intelligence" },
      { name: "NumPy", highlight: false, badge: "Numerical" },
      { name: "Pandas", highlight: false, badge: "Data Wrangling" }
    ]
  },
  {
    category: "Developer Tools & Version Control",
    icon: "Terminal",
    description: "Industry-standard tooling for collaboration, deployment and code editing",
    skills: [
      { name: "Git", highlight: true, badge: "Version Control" },
      { name: "GitHub", highlight: true, badge: "Collaboration" },
      { name: "VS Code", highlight: false, badge: "Primary IDE" }
    ]
  }
];

export const projectsData: ProjectDetail[] = [
  {
    id: "fake-news-detection",
    title: "Fake News Detection Web Application",
    category: "Machine Learning / NLP",
    tagline: "Classifying news veracity through natural language preprocessing and predictive ML models",
    description: "A machine learning-based application designed to classify news content as real or fake using text preprocessing, feature extraction and classification techniques.",
    problemStatement: "The rapid dissemination of unverified information and misleading digital news poses substantial societal risk. Traditional manual verification is slow and unable to scale with real-time news propagation across social media networks and digital feeds.",
    proposedSolution: "An automated NLP-driven classification pipeline that processes user-submitted article text or URLs, extracts linguistic markers and TF-IDF features, and evaluates credibility through trained machine learning classifiers with an explainability confidence rating.",
    methodologyOrFeatures: [
      {
        title: "Text Preprocessing & Cleaning",
        description: "Tokenization, stopword removal, lemmatization, and regex sanitation to isolate core linguistic semantics.",
        implemented: true
      },
      {
        title: "TF-IDF Vectorization & Feature Extraction",
        description: "Transformation of raw text corpus into numerical weight vectors representing term frequency-inverse document frequency.",
        implemented: true
      },
      {
        title: "Predictive Classification Engine",
        description: "Machine learning classifier evaluating statistical patterns against benchmarked real vs fake news datasets.",
        implemented: true
      },
      {
        title: "Real/Fake Prediction Result & Confidence Meter",
        description: "Interactive visual gauge showing veracity classification alongside a calculated probability score.",
        implemented: true
      },
      {
        title: "Model Performance Metrics Dashboard",
        description: "Transparency breakdown displaying precision, recall, and evaluation confusion matrix for the underlying model.",
        implemented: true
      },
      {
        title: "URL Scraper & Direct Feed Ingestion",
        description: "Automated web content extractor to analyze live web links directly without manual copy-pasting.",
        implemented: false // planned
      }
    ],
    technologies: ["Python", "Machine Learning", "NLP", "Pandas", "NumPy", "Scikit-Learn"],
    myContribution: [
      "Designed and structured the machine learning pipeline from raw dataset preprocessing to feature extraction.",
      "Implemented NLP text preprocessing routines including tokenization, lowercasing, and punctuation elimination.",
      "Engineered feature representations using TF-IDF vectorization for text classification.",
      "Designed the conceptual UI dashboard layout featuring confidence score visualizations and diagnostic readouts."
    ],
    isPrototype: false,
    previewType: "fake-news-detection",
    imagePlaceholderPath: "/assets/projects/fake-news-detection-preview.svg",
    githubUrl: "https://github.com/Ajitha-004/Fake-News-Detection",
    liveDemoUrl: null, // [EDITABLE PLACEHOLDER] - Set to your deployment URL when ready
    developmentStatus: "Completed Concept"
  },
  {
    id: "swapwise",
    title: "SwapWise – Student Skill Exchange Platform",
    category: "Web Development / Software Engineering",
    tagline: "Peer-to-peer collaborative network enabling student knowledge exchange and project team formation",
    description: "A student-focused platform concept designed to help students discover peers with complementary skills, exchange knowledge and collaborate on projects.",
    problemStatement: "College students frequently struggle to find peers with complementary skill sets (e.g. an ML model builder needing a frontend developer, or a backend coder needing a UI designer) to form hackathon squads and exchange domain expertise.",
    proposedSolution: "SwapWise provides a skill-matching marketplace where students showcase what skills they possess and what skills they want to learn. The platform recommends reciprocal matches, facilitates direct collaboration requests, and tracks shared project milestones.",
    methodologyOrFeatures: [
      {
        title: "Student Profile & Skill Cards",
        description: "Structured student cards highlighting offer skills (e.g., Python, Figma) and want-to-learn skills (e.g., React, Java).",
        implemented: true
      },
      {
        title: "Peer Discovery & Skill Filter Engine",
        description: "Real-time search and filtering interface to discover peers by domain, programming language, or cohort.",
        implemented: true
      },
      {
        title: "Collaboration Requests & Direct Connect",
        description: "Interactive request workflow enabling students to initiate 1-on-1 mentorship or hackathon partnership invites.",
        implemented: true
      },
      {
        title: "Project Tracking Dashboard",
        description: "Visual roadmap to monitor active peer collaborations, task assignments, and progress checkpoints.",
        implemented: false // planned
      },
      {
        title: "Automated Skill-Exchange Scoring",
        description: "Reputation and feedback system rewarding verified peer tutoring hours and completed joint projects.",
        implemented: false // planned
      }
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "DOM Manipulation"],
    myContribution: [
      "Conceptualized the peer-to-peer skill exchange workflow and student onboarding architecture.",
      "Developed responsive frontend dashboard components with custom CSS styling and modern glassmorphism aesthetics.",
      "Constructed interactive JavaScript filtering for peer discovery based on categorical skill tags.",
      "Drafted comprehensive user journey diagrams and interface state transitions for request handling."
    ],
    isPrototype: false,
    previewType: "swapwise",
    imagePlaceholderPath: "/assets/projects/swapwise-preview.svg",
    githubUrl: null, // [EDITABLE PLACEHOLDER]
    liveDemoUrl: null, // [EDITABLE PLACEHOLDER]
    developmentStatus: "In Active Development"
  },
  {
    id: "zohoconnect",
    title: "ZohoConnect – Meeting Management Platform",
    category: "Web Development",
    tagline: "Single-page meeting coordinator prototype facilitating cross-time-zone synchronization and agenda management",
    description: "A meeting management platform prototype designed to support cross-time-zone meeting scheduling, agendas, reminders and follow-ups.",
    problemStatement: "Distributed academic teams and global project contributors face significant scheduling friction due to conflicting time zones, disjointed agenda documents, and missing automated reminders.",
    proposedSolution: "A lightweight, streamlined single-page prototype that centralizes time-zone conversions, interactive meeting creation, structured agenda checklists, and upcoming schedule overviews in one responsive screen.",
    methodologyOrFeatures: [
      {
        title: "Single-Page Interactive Dashboard",
        description: "Unified console presenting immediate visibility over upcoming meetings, today's schedule, and pending action items.",
        implemented: true
      },
      {
        title: "Cross-Time-Zone Converter & Scheduler",
        description: "Dual-clock time selector calculating local meeting times versus remote participant time zones (e.g., IST, UTC, EST).",
        implemented: true
      },
      {
        title: "Agenda Builder & Item Checklist",
        description: "Dynamic agenda input allowing organizers to assign discussion topics and dedicated minute limits.",
        implemented: true
      },
      {
        title: "Automated Reminders & Follow-Up Notes",
        description: "Notification prompt framework and post-meeting action item checklist interface.",
        implemented: true
      },
      {
        title: "Google Calendar & Outlook Sync API",
        description: "Direct bi-directional synchronization with external calendar providers.",
        implemented: false // planned
      }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Prototype UI"],
    myContribution: [
      "Designed and implemented the complete single-page prototype interface from wireframe to interactive code.",
      "Programmed client-side time-zone calculation logic to handle synchronous international scheduling previews.",
      "Built dynamic agenda form handling allowing users to add, reorder, and remove discussion checkpoints.",
      "Authored lightweight Python helper scripts for backend date formatting and validation mock services."
    ],
    isPrototype: true,
    prototypeLabel: "Single-Page Prototype Preview",
    previewType: "zohoconnect",
    imagePlaceholderPath: "/assets/projects/zohoconnect-preview.svg",
    githubUrl: "https://github.com/Ajitha-004/ZohoConnect",
    liveDemoUrl: null, // [EDITABLE PLACEHOLDER]
    developmentStatus: "Prototype Preview"
  },
  {
    id: "urbaneye",
    title: "UrbanEye – Civic Issue Reporting Platform",
    category: "Web Development / Social Impact",
    tagline: "Citizen-driven community platform to report, categorize and track urban infrastructure challenges",
    description: "A platform concept designed to help citizens report civic issues and track their progress towards resolution.",
    problemStatement: "Municipal authorities often encounter reporting lags for local civic issues (such as hazardous potholes, street lamp outages, illegal dumping, and water leakages), while citizens lack transparency regarding whether their reports are being addressed.",
    proposedSolution: "UrbanEye bridges the civic feedback loop by providing citizens with a streamlined photo and location report wizard, categorizing grievances automatically, and displaying live progress statuses on an open municipal dashboard.",
    methodologyOrFeatures: [
      {
        title: "Categorized Issue Reporting Wizard",
        description: "Step-by-step submission form with dedicated icons for Road Damage, Garbage Accumulation, Water Leakage, and Street Lights.",
        implemented: true
      },
      {
        title: "Live Issue Status Tracker",
        description: "Transparent lifecycle indicators (Reported → Under Review → In Progress → Resolved) with unique Tracking IDs.",
        implemented: true
      },
      {
        title: "City Overview & Civic Heatmap Preview",
        description: "High-level summary displaying active issues by ward, average resolution time, and community impact counts.",
        implemented: true
      },
      {
        title: "GPS Geolocation & Photo Attachment",
        description: "Browser location pin drop and image upload verification to substantiate reported physical incidents.",
        implemented: true
      },
      {
        title: "Municipal Admin Priority Dispatch",
        description: "Backend administrative portal for city ward officers to assign repair crews and upload proof of resolution.",
        implemented: false // planned
      }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Civic Tech"],
    myContribution: [
      "Engineered the civic category architecture and responsive submission modal wizard.",
      "Built the visual issue progress tracking cards with status indicators and color-coded tags.",
      "Designed the green and cyan civic-themed visual identity tailored for public utility accessibility.",
      "Structured Python data schema models for incident categorization, location coordinates, and lifecycle logging."
    ],
    isPrototype: false,
    previewType: "urbaneye",
    imagePlaceholderPath: "/assets/projects/urbaneye-preview.svg",
    githubUrl: null, // [EDITABLE PLACEHOLDER]
    liveDemoUrl: null, // [EDITABLE PLACEHOLDER]
    developmentStatus: "Completed Concept"
  }
];

export const internshipExperiences: InternshipExperience[] = [
  {
    id: "nubiznez",
    company: "Nubiznez Private Limited",
    role: "Web Development Intern",
    duration: "1 Month",
    dates: "1 Month Internship",
    status: "Completed",
    isEditablePlaceholder: false,
    responsibilities: [
      "Gained practical experience in website development using HTML, CSS, and Java, with hands-on testing and debugging.",
      "Explored Lighthouse, Firebase Studio, Google AI Studio, browser developer tools, Behance, Awwwards, and Roadmap.sh to understand modern development and design workflows."
    ],
    technologiesLearned: [
      "HTML5",
      "CSS3",
      "Java",
      "Firebase Studio",
      "Google AI Studio",
      "Lighthouse",
      "Browser DevTools"
    ],
    contributions: [
      "Assisted in frontend web layout construction, testing, and debugging responsive components.",
      "Conducted web optimization benchmarks using Google Lighthouse and modern developer toolchains."
    ]
  },
  {
    id: "digisquares",
    company: "DigiSquares",
    role: "AI/ML Intern",
    duration: "1 Month",
    dates: "1 Month Internship",
    status: "Completed",
    isEditablePlaceholder: false,
    responsibilities: [
      "Gained exposure to professional company workflows, requirement analysis, teamwork, client-focused thinking, and workplace communication.",
      "Learned how technology solutions are planned, designed, and delivered in an industry environment."
    ],
    technologiesLearned: [
      "Python",
      "Machine Learning",
      "Requirement Analysis",
      "Industry Workflows",
      "Technical Collaboration"
    ],
    contributions: [
      "Analyzed machine learning requirements and data workflows for industry client scenarios.",
      "Engaged in technical reviews, sprint communication, and requirement specification design."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "spoken-tutorial-python",
    title: "Python 3.4.3 Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "May 5th 2025",
    category: "IIT Bombay",
    certificateImage: "/certificates/python-3-4-3-training.jpeg",
    scoreOrCredits: "Score: 65.00% | Credits: 4",
    credentialUrl: null,
    verificationAvailable: true,
    description: "Completed Python 3.4.3 evaluation test organized at KPR Institute of Engineering and Technology, invigilated by college faculty with course curriculum provided by Spoken Tutorial Project, IIT Bombay.",
    skillsGained: ["Python", "Programming Basics", "Problem Solving", "Scripting"]
  },
  {
    id: "spoken-tutorial-java",
    title: "Java Training",
    issuer: "Spoken Tutorial Project, IIT Bombay & EduPyramids",
    date: "17 December 2025",
    category: "IIT Bombay",
    certificateImage: "/certificates/java-training-spoken-tutorial.jpeg",
    scoreOrCredits: "Score: 75.00% | Credits: 4",
    credentialUrl: null,
    verificationAvailable: true,
    description: "Completed comprehensive Java examination organized at KPRIET with curriculum and evaluation provided by EduPyramids, SINE, IIT Bombay.",
    skillsGained: ["Java", "Object-Oriented Programming", "Exception Handling", "Data Structures"]
  },
  {
    id: "spoken-tutorial-advanced-cpp",
    title: "Advanced Cpp Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "May 5th 2025",
    category: "IIT Bombay",
    certificateImage: "/certificates/advanced-cpp-training.jpeg",
    scoreOrCredits: "Score: 70.00% | Credits: 1",
    credentialUrl: null,
    verificationAvailable: true,
    description: "Certified in Advanced C++ testing pointers, memory allocation, object-oriented paradigms, and performance optimization from IIT Bombay.",
    skillsGained: ["Advanced C++", "Memory Management", "OOP", "Algorithm Implementation"]
  },
  {
    id: "spoken-tutorial-postgresql",
    title: "RDBMS PostgreSQL Training",
    issuer: "Spoken Tutorial Project, IIT Bombay & EduPyramids",
    date: "17 December 2025",
    category: "IIT Bombay",
    certificateImage: "/certificates/rdbms-postgresql-training.jpeg",
    scoreOrCredits: "Score: 80.00% | Credits: 1",
    credentialUrl: null,
    verificationAvailable: true,
    description: "Certified in Relational Database Management Systems (RDBMS) and PostgreSQL covering schema design, complex joins, subqueries, and indexing.",
    skillsGained: ["PostgreSQL", "RDBMS", "SQL Queries", "Schema Design"]
  },
  {
    id: "codechef-learn-java",
    title: "Learn Java – Pro Certificate",
    issuer: "CodeChef",
    date: "13th July 2026",
    category: "CodeChef",
    certificateImage: "/certificates/codechef-learn-java.jpeg",
    certificateId: "53e8b37",
    scoreOrCredits: "Username: kpr24am004",
    credentialUrl: "https://www.codechef.com/certificates/verify",
    verificationAvailable: true,
    description: "Pro Certificate of Completion awarded for finishing all lessons, architectural modules, and coding projects of Learn Java by CodeChef.",
    skillsGained: ["Java Fundamentals", "Syntax & Logic", "Console Projects"]
  },
  {
    id: "codechef-practice-java",
    title: "Practice Java – Problem Solving",
    issuer: "CodeChef",
    date: "13th July 2026",
    category: "CodeChef",
    certificateImage: "/certificates/codechef-practice-java.jpeg",
    certificateId: "ecb3402",
    scoreOrCredits: "Username: kpr24am004",
    credentialUrl: "https://www.codechef.com/certificates/verify",
    verificationAvailable: true,
    description: "Completed comprehensive hands-on practice problems in Java, validating implementation speed and logical correctness.",
    skillsGained: ["Java Practice", "Algorithmic Logic", "Speed Coding"]
  },
  {
    id: "codechef-java-problem-solving",
    title: "Java Problem Solving – Pro Certificate",
    issuer: "CodeChef",
    date: "23rd July 2026",
    category: "CodeChef",
    certificateImage: "/certificates/codechef-java-problem-solving.jpeg",
    certificateId: "3ec4099",
    scoreOrCredits: "Username: kpr24am004",
    credentialUrl: "https://www.codechef.com/certificates/verify",
    verificationAvailable: true,
    description: "Pro Certificate of Completion for solving advanced data structure patterns and algorithmic challenges in Java Problem Solving on CodeChef.",
    skillsGained: ["Data Structures", "Algorithmic Problem Solving", "Code Optimization"]
  },
  {
    id: "codechef-500-rating",
    title: "500 Difficulty Rating in Java",
    issuer: "CodeChef",
    date: "19th August 2026",
    category: "CodeChef",
    certificateImage: "/certificates/codechef-500-difficulty-rating.jpeg",
    certificateId: "332af3a",
    scoreOrCredits: "Username: kpr24am004",
    credentialUrl: "https://www.codechef.com/certificates/verify",
    verificationAvailable: true,
    description: "Pro Certificate of Completion awarded for completing all problem sets up to the 500 difficulty rating threshold in Java by CodeChef.",
    skillsGained: ["Competitive Programming", "Pattern Recognition", "Edge Cases"]
  },
  {
    id: "code-o-clock-hackathon",
    title: "Code O' Clock National Hackathon",
    issuer: "Coimbatore Institute of Technology (CIT) & SaaS 22",
    date: "26th & 27th September 2025",
    category: "Hackathon & Award",
    certificateImage: "/certificates/code-o-clock-hackathon.jpeg",
    scoreOrCredits: "Track: Team HACKVERSE",
    credentialUrl: null,
    verificationAvailable: true,
    description: "Awarded for active participation on track as part of team 'HACKVERSE' in Code O Clock, an industry-collaborated 24-hour national-level hackathon organized by the Department of Artificial Intelligence and Data Science at CIT.",
    skillsGained: ["24-Hour Hackathon", "Team HACKVERSE", "Rapid Prototyping", "AI & Data Science"]
  },
  {
    id: "brain-bid-second-prize",
    title: "Brain Bid – Second Prize",
    issuer: "IEEE KPRIET Student Branch & IEEE WIE",
    date: "24th March 2026",
    category: "Hackathon & Award",
    certificateImage: "/certificates/brain-bid-ieee-second-prize.jpeg",
    certificateId: "IEEE/WIE/BB042",
    scoreOrCredits: "Certificate No: IEEE/WIE/BB042",
    credentialUrl: null,
    verificationAvailable: true,
    description: "Secured Second Prize in the collegiate 'Brain Bid' competition organized by IEEE KPRIET WIE Affinity Group, recognizing sharp analytical problem solving and technical acumen.",
    skillsGained: ["Second Prize", "IEEE Student Branch", "Analytical Strategy", "Problem Solving"]
  }
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: "GitHub",
    username: "Ajitha-004",
    url: "https://github.com/Ajitha-004",
    description: "Open-source repositories, academic course projects, and software engineering experiments.",
    icon: "Github",
    color: "from-purple-500 to-indigo-600",
    badge: "Active Repos"
  },
  {
    platform: "LeetCode",
    username: "[Ajitha_LeetCode - Editable]",
    url: "https://leetcode.com/", // [EDITABLE PLACEHOLDER]
    description: "Algorithmic problem solving across Arrays, Strings, Trees, and Dynamic Programming.",
    icon: "Code",
    color: "from-amber-500 to-orange-600",
    badge: "Problem Solving"
  },
  {
    platform: "CodeChef",
    username: "[Ajitha_CodeChef - Editable]",
    url: "https://www.codechef.com/", // [EDITABLE PLACEHOLDER]
    description: "Competitive coding contests, rating challenges, and speed implementation practice.",
    icon: "Terminal",
    color: "from-emerald-500 to-teal-600",
    badge: "Competitive Coding"
  },
  {
    platform: "SkillRack",
    username: "[Ajitha_SkillRack - Editable]",
    url: "https://www.skillrack.com/", // [EDITABLE PLACEHOLDER]
    description: "Collegiate coding assessments, daily challenges, and language proficiency tests.",
    icon: "Award",
    color: "from-blue-500 to-cyan-600",
    badge: "Academic Coding"
  }
];

