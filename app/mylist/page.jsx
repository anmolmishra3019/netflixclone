"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieModal from "@/components/MovieModal";
import { useMyList } from "@/context/MyListContext";
import { Trash2, Play } from "lucide-react";

export default function MyListPage() {
  const { myList, removeFromList } = useMyList();
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <main className="min-h-screen bg-[#111] text-white">
      <Navbar />
      
      <div className="pt-24 px-4 sm:px-6 md:px-8 lg:px-14 min-h-[70vh] pb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">My List</h1>

        {myList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 text-lg sm:text-xl mb-4">Your list is currently empty.</p>
            <p className="text-gray-500 text-sm max-w-md mb-8">
              Explore trending shows and movies and click the plus icon to save them to your personal watchlist.
            </p>
            <Link
              href="/"
              className="bg-netflixRed hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition"
            >
              Explore Titles
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
            {myList.map((movie) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-xs sm:text-sm font-bold text-white mb-2">
                    {movie.title}
                  </span>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMovie(movie);
                      }}
                      className="flex items-center gap-1 bg-white text-black text-xs font-semibold px-2.5 py-1 rounded hover:bg-gray-200"
                    >
                      <Play className="w-3 h-3 fill-black" /> Play
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromList(movie.id);
                      }}
                      className="p-1.5 rounded-full bg-red-600/80 hover:bg-red-600 text-white transition"
                      title="Remove from My List"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}

      <Footer />
    </main>
  );
}
