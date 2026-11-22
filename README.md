# Ajitha Laxmi Balamurugan – Premium Personal Developer Portfolio

> **B.E. Computer Science and Engineering (Artificial Intelligence and Machine Learning)**  
> **KPR Institute of Engineering and Technology, Coimbatore (2024–2028)**  
> **Academic CGPA:** 8.39 / 10.0  
> **LinkedIn:** [ajitha-laxmi-balamurugan](https://www.linkedin.com/in/ajitha-laxmi-balamurugan-53a323328/) | **GitHub:** [@Ajitha-004](https://github.com/Ajitha-004)

---

## 🌟 Overview & Design Philosophy

This repository contains the complete, production-ready, dark premium developer portfolio for **Ajitha Laxmi Balamurugan**, engineered specifically for campus placement coordinators, internship interviewers, and technology recruiters.

### Visual Identity
- **Palette:** Deep Charcoal & Obsidian backgrounds (`#090A0F`, `#111425`), Electric Violet (`#8B5CF6`), Cyber Cyan (`#06B6D4`), Royal Indigo (`#6366F1`), and Emerald status indicators.
- **Surface Design:** Multi-layer glassmorphism (`backdrop-filter: blur(16px)`), subtle grid and dot ambient patterns, glowing borders, and smooth micro-interactions.
- **Typography:** Modern geometric sans (*Plus Jakarta Sans* / *Inter*) combined with technical monospaced fonts (*JetBrains Mono*).
- **Responsive Architecture:** Pixel-perfect across ultra-wide monitors, laptops, tablets, and smartphones.
- **Integrity & Honesty:** Zero fabricated metrics or arbitrary percentage bars. All conceptual designs, prototypes, and placeholders are transparently declared.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | React 18 + TypeScript | Component modularity, strict typing, and high reliability |
| **Bundler / Tooling** | Vite 6 | Sub-second Hot Module Replacement (HMR) and optimized build times |
| **Styling** | Tailwind CSS + Custom Design Tokens | Utility-first responsive styling with dark-mode glassmorphic tokens |
| **Icons** | Lucide React | Clean, modern developer iconography |
| **Animations & FX** | CSS Keyframes & Canvas-Confetti | Subtle ambient glow, interactive celebratory feedback on submission |

---

## 📂 Project Organization

```text
portfolio/
├── public/
│   ├── assets/
│   │   ├── profile/
│   │   │   └── ajitha-profile.svg       <-- Profile photo / Avatar
│   │   └── projects/
│   │       ├── fake-news-detection-preview.svg  <-- Project 1 UI Mockup
│   │       ├── swapwise-preview.svg             <-- Project 2 UI Mockup
│   │       ├── zohoconnect-preview.svg          <-- Project 3 UI Mockup (Single-page Prototype)
│   │       └── urbaneye-preview.svg             <-- Project 4 UI Mockup
│   ├── resume/
│   │   └── Ajitha_Resume.pdf            <-- Printable Resume PDF
│   ├── Ajitha_Resume.pdf                <-- Root fallback resume
│   └── favicon.svg                      <-- Custom monogram favicon
├── src/
│   ├── assets/                          <-- Bundler-accessible assets
│   ├── components/
│   │   ├── Navbar.tsx                   <-- Sticky glassmorphic nav with active section spy
│   │   ├── Hero.tsx                     <-- First screen with ambient glow and quick stats
│   │   ├── About.tsx                    <-- Bio, academic background, career goals, KPRIET card
│   │   ├── Skills.tsx                   <-- Honest categorical skills inventory (No fake bars)
│   │   ├── Projects.tsx                 <-- Core showcase with filtering and detail triggers
│   │   ├── ProjectCard.tsx              <-- Individual project card with custom visual
│   │   ├── ProjectModal.tsx             <-- Deep-dive architecture modal (1 to 7 sections)
│   │   ├── Experience.tsx               <-- Nubiznez & DigiSquares internship cards
│   │   ├── Certifications.tsx           <-- NPTEL, IIT Bombay, Infosys, Hackathon gallery
│   │   ├── CodingProfiles.tsx           <-- GitHub, LeetCode, CodeChef, SkillRack cards
│   │   ├── Contact.tsx                  <-- Interactive message form with mailto fallback
│   │   ├── ResumeModal.tsx              <-- Download modal with resume guidance
│   │   └── Footer.tsx                   <-- Clean footer with social links & copyright
│   ├── data/
│   │   └── portfolioData.ts             <-- ⚡ CENTRAL CONFIGURATION FILE (Edit everything here!)
│   ├── styles/
│   │   └── index.css                    <-- Custom scrollbar, glassmorphic utilities, glow effects
│   ├── types/
│   │   └── index.ts                     <-- Strict TypeScript interfaces
│   ├── App.tsx                          <-- Root application component
│   └── main.tsx                         <-- React entrypoint
├── index.html                           <-- SEO, Open Graph & Twitter meta tags
├── package.json                         <-- Dependencies and npm scripts
├── tailwind.config.js                   <-- Custom theme extensions & colors
├── tsconfig.json                        <-- TypeScript configuration
└── vite.config.ts                       <-- Vite configuration
```

---

## 🚀 Running Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended; v22 supported).

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port Vite prints in your terminal).

### 4. Build for Production
```bash
npm run build
```
This produces an optimized, minified bundle in the `dist/` directory ready for any web host.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Personalize & Update Your Portfolio

Everything in this portfolio is managed from a single central configuration file:  
📁 **`src/data/portfolioData.ts`**

### 1. Update Contact Information
Open `src/data/portfolioData.ts` and update:
```typescript
email: "your.real.email@gmail.com",
phone: "+91 98765 43210",
location: "Coimbatore, Tamil Nadu, India",
```

### 2. Add Your Real Profile Photograph
1. Save your professional photograph (PNG or JPG format) into:  
   `public/assets/profile/ajitha-profile.png`
2. In `src/data/portfolioData.ts`, update:
```typescript
profilePhotoPlaceholder: "/assets/profile/ajitha-profile.png"
```
3. In `src/components/Hero.tsx`, change `src="/assets/profile/ajitha-profile.svg"` to your new file name.

### 3. Add Your Real Resume PDF
1. Export your resume as a PDF named **`Ajitha_Resume.pdf`**.
2. Copy it into both:
   - `public/resume/Ajitha_Resume.pdf`
   - `public/Ajitha_Resume.pdf`
3. All three download buttons across the Hero, Navigation, and Contact sections will instantly download your real PDF.

### 4. Add Real Project GitHub Repositories & Live Demos
In `src/data/portfolioData.ts`, find each project and replace `null` with your actual URLs:
```typescript
{
  id: "fake-news-detection",
  title: "Fake News Detection Web Application",
  // ...
  githubUrl: "https://github.com/Ajitha-004/fake-news-detection", // <-- Add your repo link here
  liveDemoUrl: "https://fake-news-analyzer.streamlit.app",         // <-- Add your live link here
}
```
*Note: If `githubUrl` or `liveDemoUrl` is set to `null`, the website automatically displays an elegant "Placeholder" or "Coming Soon" badge instead of a broken button.*

### 5. Update Internship Dates & Contributions
In `src/data/portfolioData.ts`, locate `internshipExperiences` and update the dates and duties:
```typescript
{
  id: "nubiznez",
  company: "Nubiznez Private Limited",
  role: "Web Development Intern",
  duration: "3 Months (May 2025 – July 2025)", // <-- Update here
  dates: "May 2025 – July 2025",               // <-- Update here
  responsibilities: [
    "Developed modular responsive frontend components using modern CSS and JavaScript.",
    // Add real responsibilities...
  ]
}
```

### 6. Update Coding Profile Handles
In `src/data/portfolioData.ts`, update your usernames and links for LeetCode, CodeChef, and SkillRack:
```typescript
{
  platform: "LeetCode",
  username: "Ajitha_LeetCode",
  url: "https://leetcode.com/u/your_username/",
}
```

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended - 1 Click)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ajitha Laxmi Portfolio"
   git branch -M main
   git remote add origin https://github.com/Ajitha-004/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Framework Preset will auto-detect **Vite**.
5. Click **"Deploy"**. Your site will be live on a fast global CDN in under 1 minute!

### Deploy to Netlify
1. Go to [netlify.com](https://www.netlify.com/).
2. Click **"Add new site"** → **"Import an existing project"** → **GitHub**.
3. Select this repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **"Deploy site"**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, add `base: '/portfolio/'` (matching your repo name).
2. Run `npm run build`.
3. Use `npx gh-pages -d dist` to publish directly to GitHub Pages.

---

## 🛡️ Recruiter Verification Checklist

- [x] **Dark Premium Visuals:** Professional deep charcoal, violet, electric blue, and glassmorphism cards.
- [x] **All 4 Projects Feature Independent Visuals:** Separate SVG mockups for Fake News Detection, SwapWise, ZohoConnect, and UrbanEye.
- [x] **Honest Disclosures:** Every prototype and conceptual preview is transparently marked.
- [x] **Zero Fabricated Metrics:** No fake percentage bars or inflated ratings.
- [x] **Verified Links:** Direct links to Ajitha's authentic LinkedIn and GitHub profiles.
- [x] **Responsive Across Devices:** Tested for desktop, tablet, and mobile displays.
- [x] **Production Build Clean:** Passes strict TypeScript compiler check (`tsc`) with zero errors.

---

*Designed and engineered with pride for Ajitha Laxmi Balamurugan.*

