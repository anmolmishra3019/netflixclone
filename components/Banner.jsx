"use client";

import { useState, useEffect, useCallback } from "react";
import { Play, Info } from "lucide-react";
import { mockData } from "@/lib/mockData";
import MovieModal from "./MovieModal";

export default function Banner() {
  const [movie, setMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const originals = mockData.originals;
    setMovie(originals[Math.floor(Math.random() * originals.length)]);
    // Trigger fade-in animation
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate banner every 12s
  const rotateBanner = useCallback(() => {
    setFadeIn(false);
    setTimeout(() => {
      const originals = mockData.originals;
      setMovie(originals[Math.floor(Math.random() * originals.length)]);
      setFadeIn(true);
    }, 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateBanner, 12000);
    return () => clearInterval(interval);
  }, [rotateBanner]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  if (!movie) return <header className="h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] bg-[#111]" />;

  return (
    <>
      <header
        className={`h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] text-white flex items-end sm:items-center bg-cover bg-center relative transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url("${movie?.backdrop}")` }}
      >
        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-14 pb-16 sm:pb-0 sm:pt-16 md:pt-20 lg:pt-24 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[550px] xl:max-w-[600px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold pb-1 sm:pb-2 drop-shadow-lg leading-tight">
            {movie?.title}
          </h1>

          <div className="flex gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-6">
            <button className="cursor-pointer text-black bg-white font-semibold rounded px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base lg:text-lg flex items-center gap-1.5 sm:gap-2 transition hover:bg-white/70 active:scale-95">
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-black" /> Play
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="cursor-pointer text-white bg-[#6d6d6e]/70 font-semibold rounded px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base lg:text-lg flex items-center gap-1.5 sm:gap-2 transition hover:bg-[#6d6d6e]/40 active:scale-95"
            >
              <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" /> More Info
            </button>
          </div>

          <p className="mt-2 sm:mt-3 md:mt-4 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg max-w-full sm:max-w-[400px] md:max-w-[420px] lg:max-w-[450px] drop-shadow-lg font-medium line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
            {truncate(movie?.overview, 150)}
          </p>

          {/* Maturity badge */}
          {movie?.maturity && (
            <div className="flex items-center gap-2 mt-3 sm:mt-4">
              <span className="border border-white/40 px-2 py-0.5 text-[10px] sm:text-xs font-medium">
                {movie.maturity}
              </span>
            </div>
          )}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="h-[8rem] sm:h-[10rem] md:h-[12rem] lg:h-[15rem] absolute bottom-0 w-full bg-gradient-to-b" />
      </header>

      {/* Modal */}
      {modalOpen && <MovieModal movie={movie} onClose={() => setModalOpen(false)} />}
    </>
  );
}
