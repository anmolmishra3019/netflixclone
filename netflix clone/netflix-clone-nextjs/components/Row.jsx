"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus, Check } from "lucide-react";
import { useMyList } from "@/context/MyListContext";
import MovieModal from "./MovieModal";

export default function Row({ title, movies, isLargeRow = false }) {
  const rowRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { isInList, toggleList } = useMyList();

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="mb-6 sm:mb-8 md:mb-10 group/row">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2 md:mb-3 px-4 sm:px-6 md:px-8 lg:px-14 text-[#e5e5e5] hover:text-white transition-colors cursor-pointer">
          {title}
        </h2>

        <div className="relative">
          {/* Left scroll */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-0 bottom-0 z-20 w-10 lg:w-14 items-center justify-center bg-black/40 hover:bg-black/70 transition-all opacity-0 group-hover/row:opacity-100 cursor-pointer rounded-r-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </button>

          {/* Scrollable row */}
          <div
            ref={rowRef}
            className="flex overflow-x-auto overflow-y-hidden px-4 sm:px-6 md:px-8 lg:px-14 py-3 sm:py-4 md:py-5 gap-2 sm:gap-3 md:gap-4 no-scrollbar scroll-smooth snap-x snap-mandatory md:snap-none"
          >
            {movies.map((movie) => {
              const inList = isInList(movie.id);
              return (
                <div
                  key={movie.id}
                  className={`group/card flex-none relative transition-transform duration-300 md:hover:scale-110 md:hover:z-10 cursor-pointer snap-start rounded-md overflow-hidden ${
                    isLargeRow
                      ? "w-[100px] h-[150px] sm:w-[130px] sm:h-[195px] md:w-[170px] md:h-[255px] lg:w-[200px] lg:h-[300px] xl:w-[220px] xl:h-[330px]"
                      : "w-[140px] h-[79px] sm:w-[180px] sm:h-[101px] md:w-[230px] md:h-[129px] lg:w-[280px] lg:h-[157px] xl:w-[300px] xl:h-[169px]"
                  }`}
                  onClick={() => setSelectedMovie(movie)}
                >
                  <Image
                    src={isLargeRow ? movie.poster : movie.backdrop}
                    alt={movie.title}
                    fill
                    className="rounded-md object-cover"
                    sizes={
                      isLargeRow
                        ? "(max-width: 640px) 100px, (max-width: 768px) 130px, (max-width: 1024px) 170px, 220px"
                        : "(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 230px, 300px"
                    }
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3">
                    <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold leading-tight drop-shadow-lg mb-1.5">
                      {movie.title}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleList(movie);
                        }}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-400 flex items-center justify-center hover:border-white transition bg-black/50 cursor-pointer"
                        aria-label={inList ? "Remove from list" : "Add to list"}
                        title={inList ? "Remove from My List" : "Add to My List"}
                      >
                        {inList ? (
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-400" />
                        ) : (
                          <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        )}
                      </button>
                      {movie.rating && (
                        <span className="text-green-400 text-[9px] sm:text-[10px] font-bold">
                          ★ {movie.rating}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right scroll */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-0 bottom-0 z-20 w-10 lg:w-14 items-center justify-center bg-black/40 hover:bg-black/70 transition-all opacity-0 group-hover/row:opacity-100 cursor-pointer rounded-l-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
}
