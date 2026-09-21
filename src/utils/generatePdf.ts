import jsPDF from "jspdf";

export function generateCV_PDF(): jsPDF {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 22;

  // Helper for drawing section headers
  const drawSectionHeader = (title: string) => {
    y += 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(15, 15, 15);
    doc.text(title, margin, y);
    y += 2;
    doc.setDrawColor(30, 30, 30);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 5;
  };

  // --- PAGE 1 ---
  // Header: OH JIYEONG
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(15, 15, 15);
  doc.text("OH JIYEONG", margin, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(60, 60, 60);
  const contactText = "(+82)010-6476-4199  |  fivetwoone002@naver.com";
  doc.text(contactText, margin + 45, y);

  y += 6;

  // EDUCATION
  drawSectionHeader("EDUCATION");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Busan University Foreign Studies", margin, y);

  doc.setFont("helvetica", "bold");
  doc.text("(GPA 4.42/4.5)", margin + 55, y);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const eduRight = "busan (Mar. 2024 - Feb. 2028(Expected))";
  const eduRightWidth = doc.getTextWidth(eduRight);
  doc.text(eduRight, pageWidth - margin - eduRightWidth, y);
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setTextColor(50, 50, 50);
  doc.text("Electronic AI convergence", margin, y);
  y += 4;
  doc.text("Double Major - Chinese", margin, y);
  y += 5;

  // PROJECTS
  drawSectionHeader("PROJECTS");

  // Project 1
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Smart Rear-Assist System for Electric Wheelchairs", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const p1Right = "PSC Learning Community Project (2025)";
  doc.text(p1Right, pageWidth - margin - doc.getTextWidth(p1Right), y);
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const p1Bullets = [
    "Developed a prototype rear-obstacle assistance system for electric wheelchairs using Arduino-based hardware",
    "Implemented distance sensing using ultrasonic sensors and provided real-time information through an LCD interface",
    "Participated in system visualization, project documentation, and final presentation",
    "Explored how embedded sensing systems can improve mobility safety and accessibility for wheelchair users",
  ];
  p1Bullets.forEach((bullet) => {
    const lines = doc.splitTextToSize(bullet, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 3.8;
  });
  y += 2.5;

  // Project 2
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("SonGul - Multimodal AI Feedback System for Korean Language Learners", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const p2Right = "AI ROOKIE Competition (June. 2026 - Aug. 2026)";
  doc.text(p2Right, pageWidth - margin - doc.getTextWidth(p2Right), y);
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const p2Bullets = [
    "Development project for an application that provides real-time feedback on handwritten Korean produced by non-native learners",
    "Organized learner error-type data and investigated methods for analyzing handwritten text images using Vision-Language Models",
    "Explored methods for combining visual handwriting information with sentence-level semantic information to identify errors",
    "Investigated Retrieval-Augmented Generation approaches for improving the reliability and explainability of language-learning feedback",
  ];
  p2Bullets.forEach((bullet) => {
    const lines = doc.splitTextToSize(bullet, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 3.8;
  });
  y += 2.5;

  // Project 3
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("AI-based Heatwave Mitigation Facility Site Recommendation System", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const p3Right = "SGIS Data Utilization Competition (2026)";
  doc.text(p3Right, pageWidth - margin - doc.getTextWidth(p3Right), y);
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const p3Bullets = [
    "Developing a data-driven decision-support service that analyzes potential locations for urban heat mitigation infrastructure",
    "Collected and analyzed SGIS and external public datasets",
    "Performed dataset structure analysis, and preprocessing for model-ready data construction",
    "Designed an AI-based workflow for prioritizing candidate installation locations",
    "Explored methods for predicting the expected impact of heat mitigation facilities to support more efficient urban climate adaptation policies",
  ];
  p3Bullets.forEach((bullet) => {
    const lines = doc.splitTextToSize(bullet, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 3.8;
  });
  y += 2.5;

  // Project 4
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("AI-based Multilingual Contract Analysis & Legal Information Support Application", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const p4Right = "Career Blossom Project (2026)";
  doc.text(p4Right, pageWidth - margin - doc.getTextWidth(p4Right), y);
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const p4Bullets = [
    "Development of an AI service designed to help users understand employment contracts and legal issues",
    "Responsible for Chinese translation and translation-quality validation for Chinese-speaking users",
    "Researched Korean labor-law terminology and corresponding Chinese expressions",
  ];
  p4Bullets.forEach((bullet) => {
    const lines = doc.splitTextToSize(bullet, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 3.8;
  });
  y += 2.5;

  // WORK EXPERIENCE
  drawSectionHeader("WORK EXPERIENCE");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Teaching Assistant, Freshman PSC Seminar", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const expRight = "Busan University of Foreign Studies (Sep. 2025 - Dec. 2025)";
  doc.text(expRight, pageWidth - margin - doc.getTextWidth(expRight), y);
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  const expBullets = [
    "Supported the operation of a freshman seminar course designed to help first-year students adapt to university life and participate in team-based academic activities",
    "Assisted with class activities, student communication, assignment guidance, and course administration",
    "Supported students during project-based activities and helped facilitate communication between the instructor and students",
  ];
  expBullets.forEach((bullet) => {
    const lines = doc.splitTextToSize(bullet, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 3.8;
  });
  y += 2.5;

  // TECHNICAL SKILLS
  drawSectionHeader("TECHNICAL SKILLS");

  doc.setFontSize(8.5);
  const skillLines: [string, string][] = [
    ["Multimodal AI & Computer Vision:", "Vision-Language Models (VLM), Handwriting Image Analysis, Multimodal Feedback System Design, Image-Text Semantic Integration"],
    ["Machine Learning & Data Analytics:", "Data Preprocessing, Exploratory Data Analysis, Data Quality Assessment, Feature Analysis, Model Evaluation, Public API Data Collection"],
    ["ML Frameworks & Libraries:", "TensorFlow, scikit-learn, pandas, NumPy"],
    ["Robotics & Physical AI:", "Arduino, HC-SR04 Ultrasonic Sensors, PID Control, Vision-Language-Action Models (VLA), Robot Perception and Control Fundamentals"],
    ["Languages:", "Python"],
  ];

  skillLines.forEach(([label, vals]) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(20, 20, 20);
    const lblWidth = doc.getTextWidth(label + " ");
    doc.text(label, margin, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(50, 50, 50);
    const valLines = doc.splitTextToSize(vals, contentWidth - lblWidth);
    doc.text(valLines, margin + lblWidth, y);
    y += valLines.length * 3.8;
  });
  y += 2.5;

  // AWARDS & SCHOLARSHIPS (Bottom of Page 1)
  drawSectionHeader("AWARDS & SCHOLARSHIPS");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Grand Prize (1st Place), PSC Learning Community Program", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const aw1Right = "Busan University of Foreign Studies, 2025";
  doc.text(aw1Right, pageWidth - margin - doc.getTextWidth(aw1Right), y);
  y += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text('Awarded for the project "Smart Autonomous Electric Wheelchair Using Sensor-Based Assistance"', margin, y);
  y += 4;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Top Excellence Award, International e-Tandem Program", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const aw2Right = "Busan University of Foreign Studies, 2025";
  doc.text(aw2Right, pageWidth - margin - doc.getTextWidth(aw2Right), y);

  // --- PAGE 2 ---
  doc.addPage();
  y = 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text("Awarded based on activity performance and post-program essay evaluation", margin, y);
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Top 100 Team Selection, 2026 AI Rookie Competition (National AI Competition)", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const aw3Right = "Ministry of Science and ICT (MSIT), 2026";
  doc.text(aw3Right, pageWidth - margin - doc.getTextWidth(aw3Right), y);
  y += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text("Selected as one of 100 finalist teams for the main competition round with SonGul, an AI-based multimodal feedback system", margin, y);
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Busan Regional Talent Scholarship", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const aw4Right = "Spring 2026";
  doc.text(aw4Right, pageWidth - margin - doc.getTextWidth(aw4Right), y);
  y += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text("Selected as a scholarship recipient based on academic achievement and regional talent development criteria", margin, y);
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("National Scholarship for Science and Engineering Excellence", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(70, 70, 70);
  const aw5Right = "Spring 2026 - Fall 2027";
  doc.text(aw5Right, pageWidth - margin - doc.getTextWidth(aw5Right), y);
  y += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(50, 50, 50);
  doc.text("Selected for a two-year national merit scholarship supporting outstanding undergraduate students in science and engineering", margin, y);
  y += 6;

  // EXTRA EXPERIENCES
  drawSectionHeader("EXTRA EXPERIENCES");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("English Language Program - High Intermediate", margin, y);
  y += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(70, 70, 70);
  doc.text("Kaplan International Languages  |  Torquay, United Kingdom", margin, y);
  y += 4;

  doc.setTextColor(50, 50, 50);
  doc.text("Completed a High Intermediate-level English language program in an immersive international learning environment", margin, y);
  y += 5.5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Chinese Language Program", margin, y);
  y += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(70, 70, 70);
  doc.text("Shanghai International Studies University (SISU)  |  Shanghai, China  |  Jul. 2026", margin, y);
  y += 4;

  doc.setTextColor(50, 50, 50);
  doc.text("Strengthened practical communication skills through academic and cross-cultural experiences in China.", margin, y);
  y += 6;

  // CERTIFICATIONS
  drawSectionHeader("CERTIFICATIONS");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(20, 20, 20);
  doc.text("Microsoft Certified: Azure AI Fundamentals", margin, y);
  y += 4.5;
  doc.text("TOEIC: 880", margin, y);
  y += 4.5;
  doc.text("HSK Level 4: 230", margin, y);

  return doc;
}

export function openCVPdf() {
  try {
    // 1. If physical static file exists in /CV_오지영.pdf, try that first, else fallback to generated
    const doc = generateCV_PDF();
    const pdfBlob = doc.output("blob");
    const blobUrl = URL.createObjectURL(pdfBlob);
    
    // Open in a new tab
    const newWindow = window.open(blobUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      // If popup blocked, download directly
      doc.save("CV_오지영.pdf");
    }
  } catch (err) {
    console.error("Error opening CV PDF:", err);
    window.print();
  }
}

export function downloadCVPdf() {
  const doc = generateCV_PDF();
  doc.save("CV_오지영.pdf");
}
