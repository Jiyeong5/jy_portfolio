import React from "react";

export const Signature: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center select-none ${className}`} title="Oh Jiyeong Signature">
      {/* Refined vector hand-drawn cursive signature */}
      <svg
        viewBox="0 0 160 50"
        className="w-24 h-9 text-neutral-900 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 28 C 10 20, 18 10, 26 12 C 34 14, 30 32, 22 34 C 15 36, 12 24, 20 18 C 28 12, 38 10, 42 22 C 44 28, 48 30, 52 24 C 54 20, 56 12, 60 14 C 64 16, 62 30, 68 28 C 72 26, 76 16, 80 18 C 84 20, 82 28, 86 26 C 90 24, 94 14, 98 16 C 102 18, 102 32, 108 30 C 114 28, 122 18, 130 16 C 138 14, 146 22, 148 24"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Subtle dynamic underline flourish */}
        <path
          d="M8 38 C 30 36, 85 35, 145 33"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Accents representing the dot and cross */}
        <circle cx="58" cy="8" r="1.4" fill="currentColor" />
        <circle cx="82" cy="11" r="1.4" fill="currentColor" />
      </svg>
    </div>
  );
};
