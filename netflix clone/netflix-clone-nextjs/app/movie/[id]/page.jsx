"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Row from "@/components/Row";
import { getMovieById, getAllMovies } from "@/lib/mockData";
import { Play, Plus, Check, Star, ArrowLeft } from "lucide-react";
import { useMyList } from "@/context/MyListContext";

export default function MovieDetailPage({ params }) {
  const resolvedParams = use(params);
  const movie = getMovieById(resolvedParams.id);
  const { isInList, toggleList } = useMyList();

  if (!movie) {
    notFound();
  }

  const inList = isInList(movie.id);

  // Recommendations: movies sharing same genre or other originals/trending
  const recommendations = getAllMovies().filter(
    (m) => m.id !== movie.id && m.genre?.some((g) => movie.genre?.includes(g))
  );

  return (
    <main className="min-h-screen bg-[#111] text-white">
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative h-[65vh] md:h-[80vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url("${movie.backdrop || movie.poster}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-black/60" />

        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-14 pb-12 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 text-sm bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            {movie.title}
          </h1>

          <div className="flex items-center gap-3 text-sm sm:text-base text-gray-300 mb-6 flex-wrap">
            {movie.rating && (
              <span className="text-green-400 font-bold flex items-center gap-1">
                <Star className="w-4 h-4 fill-green-400" /> {movie.rating}/10
              </span>
            )}
            {movie.year && <span>{movie.year}</span>}
            {movie.maturity && (
              <span className="border border-gray-500 px-2 py-0.5 text-xs font-semibold">
                {movie.maturity}
              </span>
            )}
            {movie.duration && <span>{movie.duration}</span>}
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-white text-black font-bold px-8 py-3 rounded flex items-center gap-2 text-base hover:bg-gray-200 transition">
              <Play className="w-5 h-5 fill-black" /> Play
            </button>
            <button
              onClick={() => toggleList(movie)}
              className="bg-[#333]/80 hover:bg-[#444] text-white font-semibold px-6 py-3 rounded flex items-center gap-2 text-base backdrop-blur-sm transition"
            >
              {inList ? (
                <>
                  <Check className="w-5 h-5 text-green-400" /> Saved to List
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5" /> Add to My List
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Overview & Metadata */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-14 py-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-3 text-gray-200">Overview</h2>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              {movie.overview}
            </p>
          </div>

          <div className="space-y-4 text-sm border-t md:border-t-0 md:border-l border-gray-800 pt-6 md:pt-0 md:pl-8">
            {movie.cast && (
              <div>
                <span className="text-gray-500 block mb-1">Cast</span>
                <span className="text-gray-200">{movie.cast.join(", ")}</span>
              </div>
            )}
            {movie.genre && (
              <div>
                <span className="text-gray-500 block mb-1">Genres</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {movie.genre.map((g) => (
                    <span
                      key={g}
                      className="bg-[#222] px-2.5 py-1 rounded text-xs text-gray-300 border border-gray-700"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Movies */}
      {recommendations.length > 0 && (
        <div className="mt-8">
          <Row title="More Like This" movies={recommendations} />
        </div>
      )}

      <Footer />
    </main>
  );
}
