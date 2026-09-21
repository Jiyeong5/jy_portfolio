import React, { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, Award, Calendar, Layers } from "lucide-react";
import { ProjectItem } from "../data/portfolioData";
import { motion, AnimatePresence } from "motion/react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          id="project-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            id="project-modal-content"
            className="w-full max-w-[580px] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{project.year}</span>
                <span>•</span>
                <span className="text-neutral-600 font-sans font-medium">{project.context}</span>
              </div>
              <button
                id="close-project-modal-btn"
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950 leading-snug">
                  {project.title}
                </h3>
                {project.impact && (
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200/60 text-amber-900 text-xs font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{project.impact}</span>
                  </div>
                )}
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-[15px] leading-relaxed text-neutral-700">
                  {project.overview}
                </p>
              </div>

              {/* Core Execution Points */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Key Technical Execution & Contributions
                </h4>
                <ul className="space-y-2.5">
                  {project.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack badges */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Technologies & Domains
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium border border-neutral-200/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-400">
                Oh Jiyeong • Portfolio
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-neutral-900 text-white rounded-lg text-xs font-medium hover:bg-neutral-800 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
