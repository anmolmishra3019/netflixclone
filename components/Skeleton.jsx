export default function Skeleton() {
  return (
    <div className="min-h-screen bg-[#111] animate-pulse">
      {/* Navbar skeleton */}
      <div className="h-[56px] sm:h-[60px] md:h-[68px] bg-[#222] w-full" />

      {/* Banner skeleton */}
      <div className="h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] bg-[#1a1a1a] relative">
        <div className="absolute bottom-16 left-6 sm:left-10 space-y-4">
          <div className="h-8 sm:h-10 md:h-12 w-48 sm:w-64 md:w-80 bg-[#333] rounded" />
          <div className="flex gap-3">
            <div className="h-8 sm:h-10 w-24 sm:w-28 bg-[#333] rounded" />
            <div className="h-8 sm:h-10 w-28 sm:w-32 bg-[#333] rounded" />
          </div>
          <div className="h-4 w-60 sm:w-80 bg-[#333] rounded" />
          <div className="h-4 w-40 sm:w-60 bg-[#333] rounded" />
        </div>
      </div>

      {/* Row skeletons */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="px-4 sm:px-6 md:px-8 lg:px-14 mt-8 sm:mt-10">
          <div className="h-6 sm:h-7 w-32 sm:w-48 bg-[#333] rounded mb-4 sm:mb-5" />
          <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((j) => (
              <div
                key={j}
                className="flex-none w-[140px] h-[79px] sm:w-[180px] sm:h-[101px] md:w-[230px] md:h-[129px] lg:w-[280px] lg:h-[157px] bg-[#333] rounded-md"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
