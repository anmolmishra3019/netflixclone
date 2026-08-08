"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, Bell, ChevronDown, Menu, X } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 400);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) setMobileMenuOpen(false);
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigate to search page when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(debouncedQuery.trim())}`);
    }
  }, [debouncedQuery, router]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "TV Shows", href: "/browse/drama" },
    { label: "Movies", href: "/browse/action" },
    { label: "New & Popular", href: "/browse/trending" },
    { label: "My List", href: "/mylist" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full px-4 sm:px-6 md:px-8 lg:px-14 h-[56px] sm:h-[60px] md:h-[68px] flex justify-between items-center z-50 transition-all duration-300 ease-in-out ${
          isScrolled || mobileMenuOpen
            ? "bg-[#141414] shadow-lg shadow-black/50"
            : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        {/* Left side */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link href="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
              width={100}
              height={30}
              className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] cursor-pointer object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-3 lg:gap-5 list-none text-xs lg:text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors ${
                    pathname === link.href
                      ? "font-bold text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          {/* Search */}
          <div className="relative flex items-center">
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                if (searchOpen) setSearchQuery("");
              }}
              className="cursor-pointer z-10"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 hover:text-gray-300 transition-colors" />
            </button>
            <input
              type="text"
              placeholder="Titles, people, genres"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`absolute right-0 h-8 sm:h-9 bg-[#141414]/90 border border-white/50 text-white text-xs sm:text-sm pl-8 sm:pl-10 pr-3 outline-none transition-all duration-300 ${
                searchOpen
                  ? "w-[180px] sm:w-[220px] md:w-[260px] opacity-100"
                  : "w-0 opacity-0 border-transparent"
              }`}
            />
          </div>

          <Bell className="w-4 h-4 sm:w-5 sm:h-5 hover:text-gray-300 transition-colors cursor-pointer hidden sm:block" />

          <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Profile"
              width={35}
              height={35}
              className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[35px] md:h-[35px] rounded"
            />
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 hover:text-gray-300 transition-colors hidden sm:block" />
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`fixed top-[56px] left-0 w-full bg-[#141414]/95 backdrop-blur-sm z-40 overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-[350px] border-b border-gray-800" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full py-3 px-3 rounded-md transition-colors text-sm ${
                  pathname === link.href
                    ? "font-bold text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
