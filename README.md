# Oh Jiyeong (오지영) — Portfolio

A refined, minimalist personal portfolio website for **Oh Jiyeong (오지영)**, student researcher in Electronic AI Convergence & Multimodal AI at Busan University of Foreign Studies.

The visual identity is inspired by high-end editorial portfolios (monochrome portrait, clean typography, spacious layout, interactive project modal, and hand-drawn vector signature).

---

## 🚀 Quick Start (로컬 실행)

```bash
# 1. 의존성 설치
npm install

# 2. 로컬 개발 서버 실행 (포트 3000)
npm run dev

# 3. 프로덕션 빌드 테스트
npm run build
```

---

## 📦 GitHub 저장소 생성 및 푸시 방법

```bash
# Git 초기화 및 커밋
git init
git add .
git commit -m "feat: complete minimalist portfolio for Oh Jiyeong"

# GitHub 원격 저장소 연결 및 푸시
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

---

## ▲ Vercel 배포 방법 (1분 소요)

1. [Vercel](https://vercel.com)에 로그인 후 **"Add New..." → "Project"**를 클릭합니다.
2. 위에서 푸시한 GitHub 저장소를 선택하고 **"Import"**를 누릅니다.
3. 설정 확인:
   - **Framework Preset**: `Vite` (자동 감지)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **"Deploy"**를 누르면 수 초 내에 고유 도메인(예: `https://your-portfolio.vercel.app`)으로 즉시 무료 배포됩니다.
