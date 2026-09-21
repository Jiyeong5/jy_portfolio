import React, { useState } from "react";
import { X, Check, Copy, Terminal, ExternalLink, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelGuideModal: React.FC<VercelGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCommands = [
    "git init",
    "git add .",
    'git commit -m "feat: complete minimalist portfolio based on Dante Alieri design"',
    "git branch -M main",
    "git remote add origin https://github.com/Jiyeong5/oh-jiyeong-portfolio.git",
    "git push -u origin main",
  ].join("\n");

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="vercel-guide-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-[560px] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-neutral-800" />
                <h3 className="text-base font-semibold text-neutral-900">
                  GitHub & Vercel 배포 가이드
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-700">
              <div>
                <p className="text-neutral-600 leading-relaxed mb-3">
                  이 포트폴리오는 <strong>Vite + React + Tailwind CSS</strong> 기반의 표준 정적 SPA로 완벽하게 구성되어 있어, GitHub에 커밋 후 Vercel에 단 1분 만에 배포할 수 있습니다.
                </p>
              </div>

              {/* Step 1: Git Commands */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-neutral-900 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                    1단계: GitHub 저장소 업로드
                  </span>
                  <button
                    onClick={() => copyToClipboard(gitCommands, 1)}
                    className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
                  >
                    {copiedIndex === 1 ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-medium">복사됨</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>전체 복사</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3.5 bg-neutral-950 text-neutral-200 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto selection:bg-neutral-800">
                  <pre>{gitCommands}</pre>
                </div>
              </div>

              {/* Step 2: Vercel Deploy */}
              <div className="space-y-2">
                <span className="font-semibold text-neutral-900 text-xs uppercase tracking-wider">
                  2단계: Vercel 대시보드에서 불러오기
                </span>
                <ol className="list-decimal pl-5 space-y-2 text-[13.5px] text-neutral-600 leading-normal">
                  <li>
                    <a
                      href="https://vercel.com/new"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 underline underline-offset-2 font-medium hover:text-neutral-600 inline-flex items-center gap-1"
                    >
                      Vercel.com/new <ExternalLink className="w-3 h-3" />
                    </a>
                    로 이동하여 GitHub 계정으로 로그인합니다.
                  </li>
                  <li>방금 생성한 <strong>oh-jiyeong-portfolio</strong> 저장소를 선택합니다.</li>
                  <li>
                    <strong>Framework Preset</strong>이 <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-800 font-mono text-xs">Vite</code>로 자동 감지됩니다.
                  </li>
                  <li>
                    <strong>Deploy</strong> 버튼을 클릭하면 수 초 내에 라이브 웹사이트 URL이 생성됩니다.
                  </li>
                </ol>
              </div>

              {/* Configuration info */}
              <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 space-y-1 font-mono">
                <div>• Build Command: <span className="text-neutral-900 font-medium">npm run build</span></div>
                <div>• Output Directory: <span className="text-neutral-900 font-medium">dist</span></div>
                <div>• Node.js Version: <span className="text-neutral-900 font-medium">18.x or 20.x</span></div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-medium hover:bg-neutral-800 transition-colors"
              >
                닫기
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
