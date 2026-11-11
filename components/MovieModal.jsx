"use client";

import Image from "next/image";
import { Play, Plus, Check, ThumbsUp, ChevronDown, X, Star } from "lucide-react";
import { useMyList } from "@/context/MyListContext";
import { useRouter } from "next/navigation";

export default function MovieModal({ movie, onClose }) {
  const { isInList, toggleList } = useMyList();
  const router = useRouter();
  const inList = isInList(movie.id);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#181818] rounded-xl w-full max-w-[850px] max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px]">
          <Image
            src={movie.backdrop || movie.poster}
            alt={movie.title}
            fill
            className="object-cover rounded-t-xl"
            sizes="850px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 bg-[#181818] rounded-full flex items-center justify-center hover:bg-[#333] transition-colors z-10 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Title and buttons over image */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 sm:mb-4 drop-shadow-lg">
              {movie.title}
            </h2>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <button className="bg-white text-black font-semibold rounded px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:bg-white/80 transition cursor-pointer active:scale-95">
                <Play className="w-4 h-4 fill-black" /> Play
              </button>
              <button
                onClick={() => toggleList(movie)}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition cursor-pointer active:scale-90"
                aria-label={inList ? "Remove from My List" : "Add to My List"}
                title={inList ? "Remove from My List" : "Add to My List"}
              >
                {inList ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                ) : (
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition cursor-pointer">
                <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Details section */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Left column */}
            <div className="flex-1">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm flex-wrap">
                {movie.rating && (
                  <span className="text-green-400 font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-green-400" />
                    {movie.rating}/10
                  </span>
                )}
                {movie.year && <span className="text-gray-400">{movie.year}</span>}
                {movie.maturity && (
                  <span className="border border-gray-500 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs">
                    {movie.maturity}
                  </span>
                )}
                {movie.duration && <span className="text-gray-400">{movie.duration}</span>}
                {movie.seasons && (
                  <span className="text-gray-400">
                    {movie.seasons} Season{movie.seasons > 1 ? "s" : ""}
                  </span>
                )}
                <span className="border border-gray-600 px-1.5 py-0.5 text-[10px] rounded text-gray-400">
                  HD
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {movie.overview}
              </p>
            </div>

            {/* Right column */}
            <div className="md:w-[200px] lg:w-[250px] text-xs sm:text-sm space-y-2 sm:space-y-3">
              {movie.cast && (
                <p>
                  <span className="text-gray-500">Cast: </span>
                  <span className="text-gray-300">{movie.cast.join(", ")}</span>
                </p>
              )}
              {movie.genre && (
                <p>
                  <span className="text-gray-500">Genres: </span>
                  <span className="text-gray-300">{movie.genre.join(", ")}</span>
                </p>
              )}
            </div>
          </div>

          {/* View Details Link */}
          <button
            onClick={() => {
              onClose();
              router.push(`/movie/${movie.id}`);
            }}
            className="mt-4 sm:mt-6 w-full py-2.5 sm:py-3 bg-[#333] hover:bg-[#444] rounded-md text-center font-medium text-sm sm:text-base transition cursor-pointer flex items-center justify-center gap-2"
          >
            Full Details <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </div>
  );
}
