# 🎬 Netflix Clone

A responsive Netflix-inspired streaming interface built with **Next.js 14, React 18, Tailwind CSS, and JavaScript**. The project focuses on recreating the browsing experience of a modern streaming platform with category pages, movie details, search, and a persistent **My List**.

> **Note:** This is a learning/portfolio project inspired by Netflix. It is not affiliated with or endorsed by Netflix, Inc.

## ✨ Features

- 🎥 Netflix-style home page with hero banner and movie rows
- 🔥 Trending, Top Rated, Originals, Action, Comedy, and Horror sections
- 🗂️ Dynamic category browsing routes
- 🔎 Movie search page
- 🎞️ Movie details modal with interactive actions
- ➕ Add/remove movies from **My List**
- 💾 My List persistence using browser `localStorage`
- 📱 Responsive layout for mobile, tablet, and desktop
- 🎨 Netflix-inspired dark UI built with Tailwind CSS
- ⚡ Next.js App Router architecture
- 🧩 Reusable components such as Navbar, Banner, Row, MovieModal, and Footer

## 🛠️ Tech Stack

- **Next.js 14.2.3** — React framework and routing
- **React 18** — UI components and client-side interactions
- **Tailwind CSS 3.4** — responsive styling
- **Lucide React** — icons
- **JavaScript / JSX**
- **LocalStorage** — client-side persistence for My List

## 📁 Project Structure

```text
netflixclone/
├── netflix clone/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── netflix-clone-nextjs/
│       ├── app/
│       │   ├── browse/[category]/
│       │   ├── movie/
│       │   ├── mylist/
│       │   ├── search/
│       │   ├── page.jsx
│       │   ├── layout.jsx
│       │   └── globals.css
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── lib/
│       ├── next.config.mjs
│       ├── tailwind.config.js
│       └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- Git

### Installation

```bash
git clone https://github.com/anmolmishra3019/netflixclone.git
cd netflixclone/netflix\ clone/netflix-clone-nextjs
npm install
```

### Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### Production build

```bash
npm run build
npm run start
```

## 🧠 How It Works

The main page composes reusable UI components such as the navigation bar, hero banner, movie rows, and footer. Movie data is currently provided through local mock data, while category pages filter that data for the requested genre/category.

The **My List** feature uses React Context for shared state and persists the selected movies in `localStorage`, so the list survives browser refreshes on the same device.

## 🎯 Learning Goals

This project was built to practice:

- Next.js App Router
- React component architecture
- Dynamic routes
- React Context API
- Client-side state management
- Browser localStorage
- Responsive layouts with Tailwind CSS
- Reusable UI components

## 🔮 Future Improvements

- Integrate a real movie API such as TMDB
- Add user authentication
- Add a backend/database for user-specific lists
- Add real movie/trailer playback
- Add pagination and richer search
- Add deployment configuration and live demo

## 👨‍💻 Author

**Anmol Mishra**

GitHub: [@anmolmishra3019](https://github.com/anmolmishra3019)
