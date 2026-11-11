"use client";

import { use, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieModal from "@/components/MovieModal";
import { getMoviesByGenre, getAllMovies, mockData } from "@/lib/mockData";
import { Plus, Check, Play } from "lucide-react";
import { useMyList } from "@/context/MyListContext";

export default function BrowseCategoryPage({ params }) {
  const resolvedParams = use(params);
  const category = resolvedParams.category;
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { isInList, toggleList } = useMyList();

  let movies = [];
  let displayTitle = category.charAt(0).toUpperCase() + category.slice(1);

  if (category === "trending") {
    movies = mockData.trending;
    displayTitle = "Trending Now";
  } else if (category === "action") {
    movies = mockData.action;
    displayTitle = "Action Movies";
  } else if (category === "drama") {
    movies = getMoviesByGenre("Drama");
    displayTitle = "Drama Shows & Movies";
  } else {
    movies = getMoviesByGenre(category);
    if (movies.length === 0) {
      movies = getAllMovies();
    }
  }

  return (
    <main className="min-h-screen bg-[#111] text-white">
      <Navbar />

      <div className="pt-24 px-4 sm:px-6 md:px-8 lg:px-14 min-h-[70vh] pb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
          {displayTitle}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {movies.map((movie) => {
            const inList = isInList(movie.id);
            return (
              <div
                key={movie.id}
                onClick={() => setSelectedMovie(movie)}
                className="group relative cursor-pointer rounded-md overflow-hidden bg-[#1f1f1f] aspect-video transition-transform duration-300 hover:scale-105 hover:z-10"
              >
                <Image
                  src={movie.backdrop || movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-xs sm:text-sm font-bold text-white mb-2">
                    {movie.title}
                  </span>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-1 bg-white text-black text-xs font-semibold px-2 py-0.5 rounded">
                      <Play className="w-3 h-3 fill-black" /> Play
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleList(movie);
                      }}
                      className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center bg-black/60 hover:border-white"
                      title={inList ? "Remove from list" : "Add to My List"}
                    >
                      {inList ? (
                        <Check className="w-3 h-3 text-green-400" />
                      ) : (
                        <Plus className="w-3 h-3 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}

      <Footer />
    </main>
  );
}
