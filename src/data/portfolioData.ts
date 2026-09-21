export interface ProjectItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  context: string;
  period?: string;
  overview: string;
  points: string[];
  tags: string[];
  role?: string;
  impact?: string;
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  description?: string;
  badge?: string;
}

export interface ExperienceItem {
  year: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface PortfolioContent {
  greeting: string;
  roleHeadline: string;
  locationHeadline: string;
  bioParagraphs: string[];
  aboutPhilosophy: string;
  contactNote: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Oh Jiyeong",
    koreanName: "오지영",
    email: "fivetwoone002@naver.com",
    phone: "(+82) 010-6476-4199",
    location: "Busan, South Korea",
    github: "https://github.com/Jiyeong5",
    avatar: "/src/assets/images/chatgpt_exact_photo_1789968892889.jpg",
  },
  education: {
    institution: "Busan University of Foreign Studies",
    institutionKr: "부산외국어대학교",
    degree: "B.A. in Electronic AI Convergence",
    degreeKr: "전자AI융합학부 학사",
    doubleMajor: "Double Major in Chinese",
    doubleMajorKr: "중국어 복수전공",
    period: "Mar. 2024 – Feb. 2028 (Expected)",
    periodKr: "2024.03 – 2028.02 (졸업예정)",
    gpa: "4.42 / 4.5",
    location: "Busan, South Korea",
  },
  en: {
    greeting: "Hello, I’m Oh Jiyeong,",
    roleHeadline: "an Electronic AI Convergence researcher",
    locationHeadline: "based in Busan, South Korea.",
    bioParagraphs: [
      "I study Electronic AI Convergence with a double major in Chinese at Busan University of Foreign Studies, maintaining a 4.42 / 4.5 GPA.",
      "My work focuses on the synergy between Multimodal Artificial Intelligence, Vision-Language Models (VLM), and Physical AI robotics—from embedded mobility assistance systems to multimodal language feedback platforms.",
      "I combine hardware prototyping with machine learning analytics and cross-lingual intelligence to design accessible, human-centered technology.",
    ],
    aboutPhilosophy:
      "I care about accessible physical AI, language models that bridge linguistic boundaries, and building resilient intelligent systems that enhance human capability.",
    contactNote:
      "Have a research opportunity, project in mind, or just want to connect? Get in touch at",
  },
  kr: {
    greeting: "안녕하세요, 오지영입니다.",
    roleHeadline: "전자AI융합 및 멀티모달 AI를 연구하는",
    locationHeadline: "대한민국 부산 기반의 엔지니어입니다.",
    bioParagraphs: [
      "부산외국어대학교 전자AI융합학부(주전공)와 중국어(복수전공)를 전공하며, 누적 학점 4.42 / 4.5를 유지하고 있습니다.",
      "임베디드 기반 전동휠체어 안전 보조 장치부터 VLM(Vision-Language Models) 기반 한국어 필기 피드백 시스템까지, 하드웨어 센싱과 AI 지능의 융합을 탐구합니다.",
      "컴퓨터 비전, 물리적 AI 제어, 데이터 분석 및 다국어 인텔리전스를 통해 사람에게 실질적인 도움을 주는 따뜻한 기술을 만듭니다.",
    ],
    aboutPhilosophy:
      "누구나 차별 없이 누릴 수 있는 접근성 중심의 Physical AI, 언어와 문화의 장벽을 낮추는 멀티모달 파이프라인, 그리고 신뢰할 수 있는 데이터 아키텍처에 깊은 관심을 두고 있습니다.",
    contactNote:
      "새로운 프로젝트 협업, 연구 기회, 또는 기술적인 대화는 언제나 환영합니다. 아래로 편하게 연락주세요:",
  },
  projects: [
    {
      id: "wheelchair-assist",
      year: "2025",
      title: "Smart Rear-Assist System for Electric Wheelchairs",
      subtitle: "PSC Learning Community Project | Grand Prize (1st Place)",
      context: "PSC Learning Community Project | 2025",
      overview:
        "Developed a functional prototype rear-obstacle assistance system for electric wheelchairs using Arduino-based embedded hardware.",
      points: [
        "Developed a prototype rear-obstacle assistance system for electric wheelchairs using Arduino-based hardware.",
        "Implemented distance sensing using ultrasonic sensors (HC-SR04) and provided real-time intuitive information through an LCD interface.",
        "Participated in system visualization, project documentation, and final presentation.",
        "Explored how embedded sensing systems can improve mobility safety and accessibility for wheelchair users.",
      ],
      tags: ["Robotics & Physical AI", "Arduino", "HC-SR04", "PID Control", "Hardware Prototyping"],
      impact: "Awarded Grand Prize (1st Place) at Busan University of Foreign Studies PSC Program.",
    },
    {
      id: "songul-ai",
      year: "2026",
      title: "SonGul – Multimodal AI Feedback System for Korean Learners",
      subtitle: "AI ROOKIE Competition | Top 100 Finalist Team Selection",
      context: "AI ROOKIE Competition | Jun. 2026 – Aug. 2026",
      overview:
        "Developed an application concept that provides real-time multimodal feedback on handwritten Korean produced by non-native learners.",
      points: [
        "Developed an application concept that provides real-time feedback on handwritten Korean produced by non-native learners.",
        "Organized learner error-type data and investigated methods for analyzing handwritten text images using Vision-Language Models (VLM).",
        "Explored methods for combining visual handwriting stroke information with sentence-level semantic information to identify structural errors.",
        "Investigated Retrieval-Augmented Generation (RAG) approaches for improving the reliability and explainability of language-learning feedback.",
      ],
      tags: ["Vision-Language Models (VLM)", "Multimodal AI", "RAG", "Handwriting Analysis", "Python"],
      impact: "Selected into Top 100 Finalist Teams by the Ministry of Science and ICT (MSIT).",
    },
    {
      id: "heatwave-mitigation",
      year: "2026",
      title: "AI-based Heatwave Mitigation Facility Site Recommendation",
      subtitle: "SGIS Data Utilization Competition",
      context: "SGIS Data Utilization Competition | 2026",
      overview:
        "Developing a data-driven decision-support service that analyzes optimal geographical locations for urban heat mitigation infrastructure.",
      points: [
        "Developing a data-driven decision-support service that analyzes potential locations for urban heat mitigation infrastructure.",
        "Collected and analyzed SGIS spatial datasets and external meteorological/public datasets.",
        "Performed dataset structure analysis and preprocessing for model-ready machine learning data construction.",
        "Designed an AI-based workflow for prioritizing candidate installation locations according to thermal vulnerability metrics.",
        "Explored methods for predicting the expected impact of heat mitigation facilities to support more efficient urban climate adaptation policies.",
      ],
      tags: ["Machine Learning", "SGIS Geo-Data", "Data Preprocessing", "scikit-learn", "Urban Climate AI"],
      impact: "Designed an objective priority index for municipal urban cooling investments.",
    },
    {
      id: "multilingual-contract",
      year: "2026",
      title: "AI-based Multilingual Contract Analysis & Legal Support",
      subtitle: "Career Blossom Project",
      context: "Career Blossom Project | 2026",
      overview:
        "Developing an AI service designed to help international users understand employment contracts and complex legal issues.",
      points: [
        "Developing an AI service designed to help users understand employment contracts and legal issues.",
        "Responsible for Chinese translation and translation-quality validation for Chinese-speaking foreign workers and students.",
        "Researched Korean labor-law terminology and established accurate corresponding Chinese domain expressions.",
      ],
      tags: ["Multilingual AI", "Legal Tech", "Chinese Localization", "NLP", "Cross-lingual Validation"],
      impact: "Bridges legal terminology gaps for international residents in South Korea.",
    },
  ] as ProjectItem[],
  workExperience: [
    {
      year: "2025",
      period: "Sep. 2025 – Dec. 2025",
      role: "Teaching Assistant, Freshman PSC Seminar",
      organization: "Busan University of Foreign Studies",
      location: "Busan, South Korea",
      details: [
        "Supported the operation of a freshman seminar course designed to help first-year students adapt to university life and participate in team-based academic activities.",
        "Assisted with class activities, student communication, assignment guidance, and course administration.",
        "Supported students during project-based activities and helped facilitate communication between the instructor and students.",
      ],
    },
  ] as ExperienceItem[],
  skillCategories: [
    {
      category: "Multimodal AI & Computer Vision",
      items: [
        "Vision-Language Models (VLM)",
        "Handwriting Image Analysis",
        "Multimodal Feedback System Design",
        "Image–Text Semantic Integration",
      ],
    },
    {
      category: "Machine Learning & Data Analytics",
      items: [
        "Data Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Data Quality Assessment",
        "Feature Analysis",
        "Model Evaluation",
        "Public API Data Collection",
      ],
    },
    {
      category: "ML Frameworks & Libraries",
      items: ["TensorFlow", "scikit-learn", "pandas", "NumPy"],
    },
    {
      category: "Robotics & Physical AI",
      items: [
        "Arduino",
        "HC-SR04 Ultrasonic Sensors",
        "PID Control",
        "Vision-Language-Action Models (VLA)",
        "Robot Perception and Control Fundamentals",
      ],
    },
    {
      category: "Programming Languages",
      items: ["Python"],
    },
  ] as SkillCategory[],
  awards: [
    {
      year: "2026",
      title: "National Scholarship for Science and Engineering Excellence",
      organization: "Korea Student Aid Foundation",
      description: "Two-year national merit scholarship supporting outstanding undergraduate students in science and engineering (Spring 2026 – Fall 2027).",
      badge: "National Merit",
    },
    {
      year: "2026",
      title: "Top 100 Team Selection, 2026 AI Rookie Competition",
      organization: "Ministry of Science and ICT (MSIT)",
      description: "Selected as one of 100 finalist teams for the main competition round with SonGul multimodal AI system.",
      badge: "MSIT Top 100",
    },
    {
      year: "2026",
      title: "Busan Regional Talent Scholarship",
      organization: "Busan Metropolitan City",
      description: "Selected as a scholarship recipient based on academic achievement (GPA 4.42/4.5) and regional talent development criteria (Spring 2026).",
      badge: "Regional Honor",
    },
    {
      year: "2025",
      title: "Grand Prize (1st Place), PSC Learning Community Program",
      organization: "Busan University of Foreign Studies",
      description: "Awarded for the project 'Smart Autonomous Electric Wheelchair Using Sensor-Based Assistance'.",
      badge: "1st Place",
    },
    {
      year: "2025",
      title: "Top Excellence Award, International e-Tandem Program",
      organization: "Busan University of Foreign Studies",
      description: "Awarded based on international cross-cultural activity performance and post-program essay evaluation.",
      badge: "Top Excellence",
    },
  ] as AwardItem[],
  extraExperiences: [
    {
      year: "2026",
      title: "Chinese Language Program",
      institution: "Shanghai International Studies University (SISU)",
      location: "Shanghai, China",
      period: "Jul. 2026",
      description: "Strengthened practical communication skills through academic and cross-cultural immersive experiences in China.",
    },
    {
      year: "—",
      title: "English Language Program – High Intermediate",
      institution: "Kaplan International Languages",
      location: "Torquay, United Kingdom",
      period: "Intensive Study",
      description: "Completed a High Intermediate-level English language program in an immersive international learning environment.",
    },
  ],
  certifications: [
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      badge: "AI Cloud",
    },
    {
      name: "TOEIC: 880",
      issuer: "ETS",
      badge: "English",
    },
    {
      name: "HSK Level 4: 230",
      issuer: "Hanban / CTI",
      badge: "Chinese",
    },
  ],
};
