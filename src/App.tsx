import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  GraduationCap,
  Sparkles,
  Award,
  Globe,
  FileText,
  Copy,
  Check,
  Github,
  ChevronDown,
  ChevronUp,
  Download,
} from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "./data/portfolioData";
import { Signature } from "./components/Signature";
import { ProjectModal } from "./components/ProjectModal";
import { VercelGuideModal } from "./components/VercelGuideModal";
import { PDFViewerModal } from "./components/PDFViewerModal";
import { generateCV_PDF } from "./utils/generatePdf";

export default function App() {
  const [lang, setLang] = useState<"en" | "kr">("en");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isVercelGuideOpen, setIsVercelGuideOpen] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [expandedSection, setExpandedSection] = useState<{
    skills: boolean;
    experience: boolean;
    awards: boolean;
    certifications: boolean;
  }>({
    skills: true,
    experience: true,
    awards: true,
    certifications: true,
  });

  const content = lang === "en" ? PORTFOLIO_DATA.en : PORTFOLIO_DATA.kr;
  const p = PORTFOLIO_DATA.personal;
  const edu = PORTFOLIO_DATA.education;

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const toggleSection = (key: keyof typeof expandedSection) => {
    setExpandedSection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleOpenPdf = () => {
    try {
      const doc = generateCV_PDF();
      const pdfBlob = doc.output("blob");
      const url = URL.createObjectURL(pdfBlob);
      setPdfUrl(url);
      setIsPdfModalOpen(true);
    } catch (e) {
      console.error("Failed to generate PDF:", e);
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] antialiased selection:bg-neutral-200 selection:text-neutral-900 pb-28 sm:pb-36">
      {/* Top Floating Language & Deployment Bar */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-neutral-100 no-print">
        <div className="max-w-[620px] mx-auto px-6 h-12 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono tracking-tight">Available for 2026+ Projects</span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Deploy Guide Button */}
            <button
              id="open-vercel-guide-nav"
              onClick={() => setIsVercelGuideOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 transition-colors font-medium cursor-pointer text-[11px]"
              title="GitHub & Vercel 배포 가이드 열기"
            >
              <svg
                viewBox="0 0 1155 1000"
                className="w-2.5 h-2.5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m577.3 0 577.4 1000H0z" />
              </svg>
              <span>Vercel Deploy</span>
            </button>

            {/* Language Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-full bg-neutral-100 border border-neutral-200/70 text-[11px] font-medium">
              <button
                id="lang-en-btn"
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-white text-neutral-950 shadow-xs font-semibold"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                EN
              </button>
              <button
                id="lang-kr-btn"
                onClick={() => setLang("kr")}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  lang === "kr"
                    ? "bg-white text-neutral-950 shadow-xs font-semibold"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                KR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Single-Column Minimalist Canvas (Aligned with Reference Image) */}
      <main className="max-w-[620px] mx-auto px-6 pt-16 sm:pt-24 space-y-16 sm:space-y-20">
        {/* Profile Avatar (Clean Monochromatic Square as in Reference Image) */}
        <section id="hero-section" className="space-y-7">
          <div className="relative inline-block">
            <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden bg-neutral-100 shadow-md border border-neutral-200/90 group">
              <img
                id="hero-avatar-img"
                src={p.avatar}
                alt={p.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Large Editorial Headline */}
          <div className="space-y-1">
            <h1 className="text-[26px] sm:text-[31px] font-[650] tracking-[-0.03em] leading-[1.22] text-[#111111]">
              {content.greeting}
              <br />
              {content.roleHeadline}
              <br />
              {content.locationHeadline}
            </h1>
          </div>

          {/* Introductory Body Paragraphs */}
          <div className="space-y-4 text-[15.5px] leading-[1.68] text-[#444444] font-normal">
            {content.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        {/* Education & Academic Honors */}
        <section id="education-section" className="space-y-4">
          <h2 className="text-base font-semibold text-[#111111] tracking-tight">
            {lang === "en" ? "Education & Academic Standing" : "학력 및 전공"}
          </h2>

          <div className="p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-[15px] font-semibold text-neutral-950">
                {lang === "en" ? edu.institution : edu.institutionKr}
              </h3>
              <span className="text-xs font-mono text-neutral-500">
                {lang === "en" ? edu.period : edu.periodKr}
              </span>
            </div>

            <div className="mt-2 text-[14px] text-neutral-700 space-y-0.5">
              <p className="font-medium text-neutral-900">
                {lang === "en" ? edu.degree : edu.degreeKr} •{" "}
                <span className="text-neutral-600 font-normal">
                  {lang === "en" ? edu.doubleMajor : edu.doubleMajorKr}
                </span>
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-neutral-500">
                <span>{edu.location}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                  GPA: {edu.gpa}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Domains & Research Focus (Services in Reference) */}
        <section id="services-section" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-[#111111] tracking-tight">
              {lang === "en" ? "Focus Domains" : "주요 연구 및 기술 분야"}
            </h2>
            <span className="text-xs text-neutral-400 font-mono">2024 – Present</span>
          </div>

          <div className="space-y-2.5">
            {[
              {
                title: "Multimodal AI & Vision-Language Models (VLM)",
                tag: "Research & Implementation",
                desc: "Image-text integration, learner handwriting error recognition, RAG architectures.",
              },
              {
                title: "Robotics, Physical AI & Sensor Control",
                tag: "Hardware Prototyping",
                desc: "Arduino embedded systems, HC-SR04 ultrasonic arrays, PID safety control for mobility.",
              },
              {
                title: "Data Analytics & Climate Decision Support",
                tag: "Geo-Spatial ML",
                desc: "SGIS spatial data preprocessing, predictive modeling for municipal heat mitigation.",
              },
              {
                title: "Cross-Lingual Tech & Chinese Legal Localization",
                tag: "Double Major Synergy",
                desc: "Korean labor-law and Chinese technical/legal terminology matching for foreign users.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-3.5 rounded-xl border border-transparent hover:border-neutral-200 hover:bg-neutral-50/50 transition-all"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[14.5px] font-medium text-[#111111] group-hover:text-neutral-950">
                    {item.title}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work (Matching the Clean 3-Column List Layout in Reference) */}
        <section id="selected-work-section" className="space-y-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-base font-semibold text-[#111111] tracking-tight">
              {lang === "en" ? "Selected work" : "주요 프로젝트"}
            </h2>
            <span className="text-xs text-neutral-400">Click row for technical details</span>
          </div>

          <div className="divide-y divide-neutral-100 border-t border-b border-neutral-100">
            {PORTFOLIO_DATA.projects.map((project) => (
              <div
                key={project.id}
                id={`project-item-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group py-3.5 flex items-baseline justify-between gap-4 cursor-pointer hover:bg-neutral-50/70 -mx-2 px-2 rounded-lg transition-colors"
                title="View full project specifications"
              >
                <div className="flex items-baseline gap-5 sm:gap-7 min-w-0">
                  <span className="text-xs font-mono text-neutral-400 shrink-0 w-8">
                    {project.year}
                  </span>
                  <div className="min-w-0">
                    <span className="text-[15px] font-normal text-[#1a1a1a] group-hover:text-black transition-colors block truncate">
                      {project.title}
                    </span>
                    <span className="text-xs text-neutral-400 block truncate sm:hidden">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors">
                    {project.subtitle.split("|")[0].trim()}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills & Frameworks (Collapsible / Clean Categorized Grid) */}
        <section id="skills-section" className="space-y-4">
          <div
            className="flex items-center justify-between cursor-pointer py-1 select-none"
            onClick={() => toggleSection("skills")}
          >
            <h2 className="text-base font-semibold text-[#111111] tracking-tight">
              {lang === "en" ? "Technical Skills & Competencies" : "기술 스택 및 역량"}
            </h2>
            <button className="text-neutral-400 hover:text-neutral-700">
              {expandedSection.skills ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {expandedSection.skills && (
            <div className="space-y-4 pt-1">
              {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-2.5 py-1 rounded-md bg-neutral-50 text-neutral-800 text-[13px] border border-neutral-200/70 font-normal hover:border-neutral-400 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Work Experience */}
        <section id="experience-section" className="space-y-4">
          <div
            className="flex items-center justify-between cursor-pointer py-1 select-none"
            onClick={() => toggleSection("experience")}
          >
            <h2 className="text-base font-semibold text-[#111111] tracking-tight">
              {lang === "en" ? "Work Experience" : "활동 및 실무 경력"}
            </h2>
            <button className="text-neutral-400 hover:text-neutral-700">
              {expandedSection.experience ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {expandedSection.experience && (
            <div className="space-y-4">
              {PORTFOLIO_DATA.workExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-[15px] font-semibold text-neutral-900">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 font-medium">
                    {exp.organization} • {exp.location}
                  </p>
                  <ul className="space-y-1.5 pt-1 text-[13.5px] text-neutral-600 leading-relaxed">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Awards & Scholarships */}
        <section id="awards-section" className="space-y-4">
          <div
            className="flex items-center justify-between cursor-pointer py-1 select-none"
            onClick={() => toggleSection("awards")}
          >
            <h2 className="text-base font-semibold text-[#111111] tracking-tight">
              {lang === "en" ? "Awards & Scholarships" : "수상 및 장학 내역"}
            </h2>
            <button className="text-neutral-400 hover:text-neutral-700">
              {expandedSection.awards ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {expandedSection.awards && (
            <div className="divide-y divide-neutral-100 border-t border-b border-neutral-100">
              {PORTFOLIO_DATA.awards.map((award, idx) => (
                <div key={idx} className="py-3 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-[14.5px] font-medium text-neutral-900">
                        {award.title}
                      </h3>
                      {award.badge && (
                        <span className="text-[10.5px] font-mono uppercase px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                          {award.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-500">
                      {award.organization}
                    </p>
                    {award.description && (
                      <p className="text-xs text-neutral-600 pt-0.5 leading-relaxed">
                        {award.description}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-mono text-neutral-400 shrink-0">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Global Experiences & Certifications */}
        <section id="certifications-section" className="space-y-4">
          <div
            className="flex items-center justify-between cursor-pointer py-1 select-none"
            onClick={() => toggleSection("certifications")}
          >
            <h2 className="text-base font-semibold text-[#111111] tracking-tight">
              {lang === "en" ? "Certifications & Global Programs" : "자격증 및 해외 연수"}
            </h2>
            <button className="text-neutral-400 hover:text-neutral-700">
              {expandedSection.certifications ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {expandedSection.certifications && (
            <div className="space-y-4">
              {/* Certifications badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between"
                  >
                    <span className="text-xs font-mono text-neutral-400">
                      {cert.issuer}
                    </span>
                    <span className="text-[13.5px] font-medium text-neutral-900 mt-1">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Extra Experiences (Kaplan & SISU) */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  International Language Programs
                </span>
                {PORTFOLIO_DATA.extraExperiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-neutral-200/60 bg-white space-y-1"
                  >
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-[13.5px] font-medium text-neutral-900">
                        {exp.title}
                      </h4>
                      <span className="text-xs font-mono text-neutral-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500">
                      {exp.institution} • {exp.location}
                    </p>
                    <p className="text-xs text-neutral-600 pt-0.5 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* About (Exact phrasing from Reference Image style) */}
        <section id="about-section" className="space-y-3 pt-2">
          <h2 className="text-base font-semibold text-[#111111] tracking-tight">
            About
          </h2>
          <p className="text-[15px] leading-relaxed text-[#333333]">
            {content.aboutPhilosophy}
          </p>
        </section>

        {/* Contact (Matching Reference Image typography and dotted email link) */}
        <section id="contact-section" className="space-y-3 pt-2">
          <h2 className="text-base font-semibold text-[#111111] tracking-tight">
            Contact
          </h2>
          <p className="text-[15px] leading-relaxed text-[#333333]">
            {content.contactNote}{" "}
            <a
              href={`mailto:${p.email}`}
              className="font-medium text-[#111111] border-b border-dashed border-neutral-700 hover:border-black transition-colors"
            >
              {p.email}
            </a>
          </p>

          {/* Quick contact copy triggers */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="copy-email-btn"
              onClick={() => handleCopy(p.email, "email")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-800 transition-colors cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email ({p.email})</span>
                </>
              )}
            </button>

            <button
              id="copy-phone-btn"
              onClick={() => handleCopy(p.phone, "phone")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-800 transition-colors cursor-pointer"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Phone Copied</span>
                </>
              ) : (
                <>
                  <Phone className="w-3.5 h-3.5" />
                  <span>{p.phone}</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* Footer (Handwritten Signature + Nav links as in Dante Alieri Reference) */}
        <footer className="pt-10 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Signature className="opacity-90 hover:opacity-100 transition-opacity" />
            <span className="text-xs font-mono text-neutral-400 select-none">
              © {new Date().getFullYear()} Oh Jiyeong
            </span>
          </div>

          {/* Minimal uppercase tracking links */}
          <div className="flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.14em] font-medium text-neutral-600">
            <a
              id="footer-github-link"
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={() => setIsVercelGuideOpen(true)}
              className="hover:text-neutral-950 transition-colors cursor-pointer"
            >
              Deploy Guide
            </button>
            <button
              id="footer-pdf-cv-btn"
              onClick={handleOpenPdf}
              className="hover:text-neutral-950 transition-colors cursor-pointer"
              title="CV_오지영.pdf 열기"
            >
              PDF CV
            </button>
          </div>
        </footer>
      </main>

      {/* Floating Bottom Right Badge (Replicating the "Made in Framer" badge style in reference image) */}
      <aside className="fixed bottom-4 right-4 z-40 no-print">
        <button
          id="vercel-deploy-fab"
          onClick={() => setIsVercelGuideOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/95 text-neutral-900 border border-neutral-200/90 shadow-lg shadow-neutral-900/5 hover:border-neutral-400 transition-all text-xs font-medium backdrop-blur-xs cursor-pointer group"
          title="GitHub & Vercel 배포 가이드"
        >
          <svg
            viewBox="0 0 1155 1000"
            className="w-3 h-3 fill-neutral-950 group-hover:scale-110 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m577.3 0 577.4 1000H0z" />
          </svg>
          <span className="tracking-tight">Deploy with Vercel</span>
        </button>
      </aside>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* GitHub & Vercel Deployment Instructions Modal */}
      <VercelGuideModal
        isOpen={isVercelGuideOpen}
        onClose={() => setIsVercelGuideOpen(false)}
      />

      {/* Interactive PDF CV Viewer Modal */}
      <PDFViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        pdfUrl={pdfUrl}
      />
    </div>
  );
}

