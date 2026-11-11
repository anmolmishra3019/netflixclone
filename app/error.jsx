"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center px-4 text-center">
      <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-netflixRed mb-6" />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
        Something went wrong
      </h1>
      <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-md">
        We&apos;re having trouble loading this page. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-netflixRed hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded transition cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-[#333] hover:bg-[#444] text-white font-semibold px-6 py-2.5 rounded transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
