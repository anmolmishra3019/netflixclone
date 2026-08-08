// Mock Dataset simulating an API response
const mockData = {
  originals: [
    { title: "Stranger Things", overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.", poster: "https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8m1MgjwP.jpg", backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg" },
    { title: "The Witcher", overview: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world.", poster: "https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", backdrop: "https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg" },
    { title: "Money Heist", overview: "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers.", poster: "https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", backdrop: "https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg" },
    { title: "Dark", overview: "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.", poster: "https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", backdrop: "https://image.tmdb.org/t/p/original/4D0BDo1sH0n2s4mU7tS08wBq9hF.jpg" },
    { title: "Squid Game", overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.", poster: "https://image.tmdb.org/t/p/original/dDlEmu3EZ0Pgg93K2SVNlcjCsJI.jpg", backdrop: "https://image.tmdb.org/t/p/original/n21uM3pOP9Z106DUS8KjXU1kX1X.jpg" },
    { title: "Ozark", overview: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.", poster: "https://image.tmdb.org/t/p/original/m73bD8VipiFjGqJpB9b3aFwR5K0.jpg", backdrop: "https://image.tmdb.org/t/p/original/xZVWcg0WfKq5Wz5tQO7JmZgA93M.jpg" },
    { title: "Peaky Blinders", overview: "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps.", poster: "https://image.tmdb.org/t/p/original/vUUqzWa2LcUAYBlc2H0sHjW6YxX.jpg", backdrop: "https://image.tmdb.org/t/p/original/711jXy4Hl1ZAMXbK2Ghp0NciB8v.jpg" },
  ],
  trending: [
    { title: "Dune: Part Two", overview: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.", poster: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9gGk5uTWe2tD7A6b.jpg", backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg" },
    { title: "Oppenheimer", overview: "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb.", poster: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", backdrop: "https://image.tmdb.org/t/p/original/nlCHUWjY9XWbuEUQauCEgnAQswm.jpg" },
    { title: "Poor Things", overview: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant scientist Dr. Godwin Baxter.", poster: "https://image.tmdb.org/t/p/original/kCGlIMHnOm8PhlsSyZ7qM2O234c.jpg", backdrop: "https://image.tmdb.org/t/p/original/bQS43ZoKBjcHKil1HR5czHk6kPj.jpg" },
    { title: "Godzilla Minus One", overview: "Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.", poster: "https://image.tmdb.org/t/p/original/hkxxMIGaiCTmrEArK7v56J07L1E.jpg", backdrop: "https://image.tmdb.org/t/p/original/fGtOOlQ5B6GimGzM9hZ77VwM2iA.jpg" },
    { title: "The Batman", overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family.", poster: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg", backdrop: "https://image.tmdb.org/t/p/original/b0PlSFdSmBgZAqfwSECJQh9enZq.jpg" },
  ],
  topRated: [
    { title: "The Godfather", backdrop: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg" },
    { title: "The Shawshank Redemption", backdrop: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg" },
    { title: "Schindler's List", backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1inv7jzOu9ANNpdsqBj.jpg" },
    { title: "Spirited Away", backdrop: "https://image.tmdb.org/t/p/original/2wT7E2fGzX4b3I7d9DszS2tV40D.jpg" },
    { title: "12 Angry Men", backdrop: "https://image.tmdb.org/t/p/original/qqHQsStV6exghCM7zbObn7w8d5.jpg" },
  ],
  action: [
    { title: "John Wick: Chapter 4", backdrop: "https://image.tmdb.org/t/p/original/7I6VUdPj6tQECNHdviJkUHD2u89.jpg" },
    { title: "Mad Max: Fury Road", backdrop: "https://image.tmdb.org/t/p/original/jsoz1HlxczSuZxaUEmZBCyaCMDz.jpg" },
    { title: "Die Hard", backdrop: "https://image.tmdb.org/t/p/original/yR27bZPIkNhpGEIP3jKV2EifTgo.jpg" },
    { title: "The Dark Knight", backdrop: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg" },
    { title: "Mission: Impossible - Fallout", backdrop: "https://image.tmdb.org/t/p/original/bH1Z2aL5Qc5QyEZ9tItxI03pDAn.jpg" },
  ]
};

// --- Navbar Scroll Effect ---
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// --- Banner Setup ---
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function setBanner() {
    const bannerData = mockData.originals;
    // Pick a random featured movie
    const randomMovie = bannerData[Math.floor(Math.random() * bannerData.length)];
    
    const banner = document.getElementById("banner");
    const title = document.getElementById("banner-title");
    const description = document.getElementById("banner-description");
    
    banner.style.backgroundImage = `url(${randomMovie.backdrop})`;
    title.innerText = randomMovie.title;
    description.innerText = truncate(randomMovie.overview, 150);
}

// --- Dynamic Row Generation ---
function buildRow(title, movies, isLargeRow = false) {
    const container = document.getElementById("netflix-rows");
    
    // Create section
    const section = document.createElement("section");
    section.className = "movie-row";
    
    const h2 = document.createElement("h2");
    h2.className = "row-title";
    h2.innerText = title;
    section.appendChild(h2);
    
    const postersDiv = document.createElement("div");
    postersDiv.className = "row-posters";
    
    movies.forEach(movie => {
        const img = document.createElement("img");
        // if large row (like originals), use portrait poster. Else use landscape backdrop
        img.src = isLargeRow ? movie.poster : movie.backdrop;
        img.className = `row-poster ${isLargeRow ? "row-poster-large" : "landscape-poster"}`;
        img.alt = movie.title;
        postersDiv.appendChild(img);
    });
    
    section.appendChild(postersDiv);
    container.appendChild(section);
}

// Initialize Application
function initializeApp() {
    setBanner();
    
    // Build Rows
    buildRow("Netflix Originals", mockData.originals, true); // true = portrait posters
    buildRow("Trending Now", mockData.trending);
    buildRow("Top Rated", mockData.topRated);
    buildRow("Action Movies", mockData.action);
}

window.onload = initializeApp;
