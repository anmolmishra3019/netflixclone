import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-netflixRed mb-4">
        404
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
        Lost your way?
      </h2>
      <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-lg">
        Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.
      </p>
      <Link
        href="/"
        className="bg-white text-black font-bold px-8 py-3 rounded hover:bg-gray-200 transition text-sm sm:text-base"
      >
        Netflix Home
      </Link>
      <p className="mt-8 text-gray-600 text-xs sm:text-sm">
        Error Code: <span className="font-bold">NSES-404</span>
      </p>
    </div>
  );
}
