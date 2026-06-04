# ConstitutionIQ ⚖️

ConstitutionIQ is a premium, feature-rich static web platform designed to help students master the **Constitution of India, Cyber Law, and Professional Ethics**.

The platform is built with high-performance vanilla web technologies and features interactive mind maps, previous year question (PYQ) analytics, a simulated exam environment, digital flashcards, and a smart revision mode.

## 🚀 Key Features

*   **🗺️ Stable Vector Mind Maps:** Deterministic radial and staggered elliptical tree layouts powered by **D3.js**. Employs a custom, instant collision-relaxation algorithm (AABB minimum-overlap axis resolution) to guarantee exactly **0 overlapping nodes** while displaying all subtopic branches.
*   **📖 Tabbed Topic Detail Panel:** Sticky modern 3-tab study dashboard layout (*Study Content*, *Key Facts*, *PYQs & Notes*) containing rich explanations, associated articles, legal cases, related amendments, memory tricks, and personal persistent study notes.
*   **📊 PYQ Analytics:** Interactive performance tracking, category weightage matrices, and yearly exam appearance heatmaps rendered with **Chart.js**.
*   **🎓 Exam Mode:** Comprehensive exam simulator with unit/topic filtering, mock timers, immediate answer validation with feedback, and score tracking.
*   **🃏 Flashcards:** 68 digital study flashcards containing key articles, definitions, and concepts.
*   **🎯 Smart Revision Mode:** A curated list of high-priority topics and must-practice PYQs for last-minute revision.
*   **📝 Robust Markdown Parser:** Built-in line-by-line parser in vanilla JS that handles nested indented bullet lists and contiguous Markdown tables wrapped inside responsive scrollable containers.
*   **📱 PWA & Theme Support:** Offline-ready manifest configurations, mobile-responsive navigation with animated micro-interactions, and a cohesive dark/light mode toggle.

## 🛠️ Technology Stack

*   **Frontend Structure:** HTML5 (Semantic & Accessible)
*   **Styling & Design System:** Vanilla CSS3 (curated Slate HSL palette, CSS variables, glassmorphic legend overlays, and responsive flexbox layouts)
*   **Core Logic:** Vanilla JavaScript (ES6+ state-based architecture, zero framework overhead)
*   **Libraries:** 
    *   [D3.js v7](https://d3js.org/) (Mind Map rendering)
    *   [Chart.js v4](https://www.chartjs.org/) (Interactive Analytics charts)
*   **Font System:** Google Fonts (`Inter`, `Space Grotesk`)

## 💻 Local Development

Since ConstitutionIQ is a pure static web application, it doesn't require any compilation step. However, because it fetches resources and utilizes localStorage/cookies safely, it should be run on a local HTTP server.

### Option 1: Python HTTP Server (Recommended)
If you have Python installed, run the following command in the project root:
```bash
python -m http.server 8080
```
Then, open [http://localhost:8080](http://localhost:8080) in your browser.

### Option 2: Node.js (via static-server or live-server)
Install and run a lightweight static server:
```bash
npx live-server
```

---

## ☁️ Deploying to Vercel

Vercel provides zero-config static hosting with fast CDN delivery. Follow either of the two methods below to publish your site:

### Method 1: Git Integration (Recommended)
1. Initialize git and push your codebase to a remote repository (GitHub, GitLab, or Bitbucket):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of ConstitutionIQ"
   ```
2. Log in to [Vercel](https://vercel.com) and click **Add New** > **Project**.
3. Import your repository.
4. Keep the default settings (Vercel automatically detects the static structure and uses `./` as the root) and click **Deploy**.

### Method 2: Vercel CLI (Quickest)
Deploy directly from your terminal in seconds:
1. Run the Vercel deployment tool:
   ```bash
   npx vercel
   ```
2. Follow the on-screen prompts:
   - Set the project name (e.g., `constitution-iq`)
   - Confirm settings (select default static settings)
3. Your live deployment URL will be generated and copied to your clipboard instantly!
