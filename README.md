# 🎬 Netflix Clone Projects

This repository contains **two versions of a Netflix-inspired streaming interface**, built at different stages of the frontend learning journey.

> **Note:** These are learning/portfolio projects inspired by Netflix. They are not affiliated with or endorsed by Netflix, Inc.

## 📌 Projects

### 1. Netflix Clone — HTML, CSS & JavaScript

A vanilla frontend implementation built without a framework. It focuses on recreating the Netflix-style UI and practicing core frontend fundamentals.

**Tech Stack**
- HTML5
- CSS3
- Vanilla JavaScript

**Project files**
```text
netflix clone/
├── index.html
├── style.css
└── script.js
```

**How to run**

Open `netflix clone/index.html` directly in a browser, or use a local development server such as VS Code Live Server.

---

### 2. Netflix Clone — Next.js / React

A more advanced version of the project rebuilt with **Next.js, React, Tailwind CSS, and reusable components**.

The application recreates a modern streaming-platform browsing experience with dynamic category pages, search, movie details, and a persistent My List.

**Tech Stack**
- **Next.js 14.2.3** — React framework and App Router
- **React 18** — component-based UI
- **Tailwind CSS 3.4** — responsive styling
- **JavaScript / JSX**
- **Lucide React** — icons
- **localStorage** — My List persistence

**Features**
- 🎥 Netflix-style home page with hero banner and movie rows
- 🔥 Trending, Top Rated, Originals, Action, Comedy, and Horror sections
- 🗂️ Dynamic category browsing routes
- 🔎 Movie search
- 🎞️ Movie details modal
- ➕ Add/remove movies from **My List**
- 💾 My List persistence using browser `localStorage`
- 📱 Responsive design for mobile, tablet, and desktop
- 🧩 Reusable React components
- ⚡ Next.js App Router architecture

**Project structure**
```text
netflix clone/
└── netflix-clone-nextjs/
    ├── app/
    │   ├── browse/[category]/
    │   ├── movie/
    │   ├── mylist/
    │   ├── search/
    │   ├── page.jsx
    │   ├── layout.jsx
    │   └── globals.css
    ├── components/
    ├── context/
    ├── hooks/
    ├── lib/
    ├── next.config.mjs
    ├── tailwind.config.js
    └── package.json
```

**How to run**

```bash
cd "netflix clone/netflix-clone-nextjs"
npm install
npm run dev
```

Then open **http://localhost:3000**.

For a production build:

```bash
npm run build
npm run start
```

## 🔄 Project Progression

The two projects show the progression from **core frontend development to a modern React/Next.js architecture**:

| Version | Technologies | Main Focus |
|---|---|---|
| Vanilla Netflix Clone | HTML, CSS, JavaScript | Frontend fundamentals, DOM manipulation, styling, interactions |
| Next.js Netflix Clone | Next.js, React, Tailwind CSS | Component architecture, routing, state management, responsive UI |

## 🧠 What I Practiced

### Vanilla Version
- Semantic HTML structure
- CSS layouts and responsive styling
- JavaScript DOM manipulation
- Event handling
- Interactive UI behaviour

### Next.js Version
- Next.js App Router
- React component architecture
- Dynamic routes
- React Context API
- Client-side state management
- Browser localStorage
- Reusable UI components
- Responsive layouts with Tailwind CSS

## 🔮 Future Improvements

- Integrate a real movie API such as TMDB
- Add authentication
- Add a backend/database for user-specific data
- Add real movie and trailer playback
- Improve search and filtering
- Deploy the application with a live demo

## 👨‍💻 Author

**Anmol Mishra**

GitHub: [@anmolmishra3019](https://github.com/anmolmishra3019)
