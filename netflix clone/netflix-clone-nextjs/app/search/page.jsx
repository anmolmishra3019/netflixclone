"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieModal from "@/components/MovieModal";
import { searchMovies } from "@/lib/mockData";
import { Plus, Check } from "lucide-react";
import { useMyList } from "@/context/MyListContext";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = searchMovies(query);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { isInList, toggleList } = useMyList();

  return (
    <div className="pt-24 px-4 sm:px-6 md:px-8 lg:px-14 min-h-[70vh]">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-200">
        {query ? (
          <>
            Search results for: <span className="text-white">&quot;{query}&quot;</span>
          </>
        ) : (
          "Search Movies & TV Shows"
        )}
      </h1>

      {results.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg mb-2">No results found for &quot;{query}&quot;</p>
          <p className="text-sm text-gray-500">
            Try searching for titles like &quot;Stranger Things&quot;, &quot;Dune&quot;, or &quot;Batman&quot;.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
          {results.map((movie) => {
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-xs sm:text-sm font-bold text-white mb-1">
                    {movie.title}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-xs font-semibold">
                      ★ {movie.rating || 8.0}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleList(movie);
                      }}
                      className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center bg-black/60 hover:border-white"
                      title={inList ? "Remove from My List" : "Add to My List"}
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
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white">
      <Navbar />
      <Suspense fallback={<div className="pt-28 text-center text-gray-400">Loading search results...</div>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </main>
  );
}
