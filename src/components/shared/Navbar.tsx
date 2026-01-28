"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
  FiBox,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (currPage: string) => pathname === currPage;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-white/10 text-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-1 border border-primary/50 rounded-sm group-hover:border-primary transition-colors duration-300">
              <FiBox className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase text-foreground group-hover:text-primary transition-colors duration-300">
              VoidRunner
            </span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>


        {/* Links Section */}
        <div
          className={`absolute top-full left-0 w-full md:static md:w-auto md:flex space-y-4 md:space-y-0 md:space-x-8 items-center bg-background md:bg-transparent p-4 md:p-0 border-b md:border-none border-white/10 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"
            }`}
        >
          <Link
            href="/"
            className={`hover-link block md:inline-block uppercase text-sm tracking-wider ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover-link block md:inline-block uppercase text-sm tracking-wider ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`hover-link block md:inline-block uppercase text-sm tracking-wider ${isActive("/contact") ? "active" : ""}`}
          >
            Comms
          </Link>

          {/* Mobile Auth Buttons (visible in menu) */}
          <div className="flex flex-col md:hidden gap-4 mt-4">
            <Link href="/register">
              <button className="w-full px-6 py-2 uppercase text-xs tracking-widest text-primary border border-primary hover:bg-primary hover:text-white transition duration-300 clip-path-slant">
                Initialize
              </button>
            </Link>
            <Link href="/login">
              <button className="w-full px-6 py-2 uppercase text-xs tracking-widest text-background bg-primary border border-primary hover:bg-primary/80 transition duration-300 clip-path-slant">
                Access
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/register">
            <button className="px-6 py-2 uppercase text-xs tracking-widest text-primary border border-primary hover:bg-primary hover:text-white transition duration-300 clip-path-slant">
              Initialize
            </button>
          </Link>
          <Link href="/login">
            <button className="px-6 py-2 uppercase text-xs tracking-widest text-background bg-primary border border-primary hover:bg-primary/80 transition duration-300 clip-path-slant">
              Access
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
