export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problemStatement: string;
  proposedSolution: string;
  methodologyOrFeatures: {
    title: string;
    description: string;
    implemented?: boolean; // clearly distinguish implemented vs planned
  }[];
  technologies: string[];
  myContribution: string[];
  isPrototype?: boolean;
  prototypeLabel?: string;
  previewType: 'fake-news-detection' | 'swapwise' | 'zohoconnect' | 'urbaneye';
  imagePlaceholderPath: string;
  githubUrl: string | null;
  liveDemoUrl: string | null;
  developmentStatus: 'Completed Concept' | 'Prototype Preview' | 'In Active Development' | 'Research Prototype';
}

export interface EducationInfo {
  institution: string;
  degree: string;
  specialization: string;
  duration: string;
  cgpa: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    badge?: string;
    highlight?: boolean;
  }[];
}

export interface InternshipExperience {
  id: string;
  company: string;
  role: string;
  duration: string; // editable
  dates: string; // editable
  status: 'Completed' | 'Upcoming' | 'Ongoing';
  isEditablePlaceholder: boolean;
  responsibilities: string[];
  technologiesLearned: string[];
  contributions: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'IIT Bombay' | 'CodeChef' | 'Hackathon & Award';
  credentialUrl: string | null;
  certificateImage: string;
  scoreOrCredits?: string;
  certificateId?: string;
  verificationAvailable: boolean;
  description: string;
  skillsGained: string[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  description: string;
  icon: string;
  color: string;
  badge: string;
  highlightMetric?: {
    label: string;
    value: string | number;
  };
  stats?: {
    label: string;
    value: string | number;
  }[];
}

export interface PersonalDetails {
  name: string;
  title: string;
  headline: string;
  bioIntroduction: string;
  aboutDetails: string;
  academicBackground: string;
  technicalInterests: string[];
  careerAspirations: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumeFileName: string;
  resumeDownloadPath: string;
  profilePhotoPlaceholder: string;
}

