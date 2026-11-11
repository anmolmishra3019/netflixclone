# 🎬 Netflix Clone

A Netflix-inspired streaming platform UI built with **Next.js, React, and Tailwind CSS**. This project focuses on reusable components, App Router architecture, dynamic routing, search, movie details, and client-side My List functionality.

> This project is for educational and portfolio purposes and is not affiliated with or endorsed by Netflix, Inc.

## 🚀 Features

- 🎥 Netflix-style home page with hero banner and movie rows
- 🔥 Multiple movie categories including Trending, Top Rated, Originals, Action, Comedy, and Horror
- 🔎 Movie search
- 🎞️ Movie details
- 🗂️ Dynamic category routes
- ➕ Add/remove movies from **My List**
- 💾 My List persistence using browser `localStorage`
- 📱 Responsive design
- 🧩 Reusable React components
- ⚡ Next.js App Router
- 🎨 Tailwind CSS styling
- ⏳ Loading and error states

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework & App Router |
| **React 18** | UI development |
| **Tailwind CSS 3** | Styling & responsive design |
| **JavaScript / JSX** | Application logic |
| **Lucide React** | Icons |
| **localStorage** | My List persistence |

## 📁 Project Structure

```text
netflixclone/
├── app/
│   ├── browse/[category]/
│   ├── movie/[id]/
│   ├── mylist/
│   ├── search/
│   ├── page.jsx
│   ├── layout.jsx
│   ├── loading.jsx
│   ├── error.jsx
│   └── globals.css
├── components/
│   ├── Banner.jsx
│   ├── Navbar.jsx
│   ├── Row.jsx
│   ├── MovieModal.jsx
│   ├── Skeleton.jsx
│   └── Footer.jsx
├── context/
│   └── MyListContext.jsx
├── hooks/
│   ├── useDebounce.js
│   └── useLocalStorage.js
├── lib/
│   └── mockData.js
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/anmolmishra3019/netflixclone.git
cd netflixclone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### 4. Production build

```bash
npm run build
npm run start
```

## 🧠 What I Practiced

- React component-based architecture
- Next.js App Router
- Dynamic routing
- React Context API
- Client-side state management
- Custom React hooks
- Browser localStorage
- Responsive UI development
- Reusable UI components
- Loading and error handling
- Organizing a scalable frontend project structure

## 🔮 Future Improvements

- [ ] Integrate the TMDB API for live movie data
- [ ] Replace mock movie data with API responses
- [ ] Add authentication
- [ ] Add a backend/database for user-specific data
- [ ] Add trailer playback
- [ ] Improve search and filtering
- [ ] Deploy with Vercel
- [ ] Add a live demo and project screenshots

## 👨‍💻 Author

**Anmol Mishra**

- GitHub: [@anmolmishra3019](https://github.com/anmolmishra3019)

---

⭐ If you find this project useful, consider giving it a star.
