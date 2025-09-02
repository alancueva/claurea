"use client";
import { useState } from "react";
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white-200/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center sm:justify-between">
          {/* Logo for mobile*/}
          <div className="flex flex-1 justify-center sm:hidden">
            <a className="rounded-md px-3 py-2 flex items-center" href="#">
              <Image
                src="/claurea-1-11.png"
                className="h-14 w-auto"
                alt="Claurea Logo"
                width={500}
                height={500}
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-gray-500"
              aria-expanded={menuOpen}
              aria-label="Open main menu"
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="sm:ml-6 sm:block">
              <div className="flex items-center space-x-6">
                <Link
                  href="/pages/products"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-white/5 hover:text-green-500 flex items-center"
                >
                  Productos
                </Link>
                <Link
                  className="rounded-md px-3 py-2 flex items-center"
                  href="/"
                >
                  <Image
                    src="/claurea-1-11.png"
                    className="h-14 w-auto"
                    alt="Claurea Logo"
                    width={500}
                    height={500}
                  />
                </Link>

                
                <Link
                  href="/"
                  className=" rounded-md px-3 py-2 text-sm font-medium text-black hover:text-green-500 flex items-center"
                >
                  Acerca de Claurea
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute left-2 right-2 top-16 z-20 sm:hidden">
            <div className="flex flex-col items-start space-y-2 rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5">
              <Link
                href="/pages/products"
                className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-white/5 hover:text-green-500 flex items-center"
              >
                Productos
              </Link>
              <Link
                href="/"
                className=" rounded-md px-3 py-2 text-sm font-medium text-black hover:text-green-500 flex items-center"
              >
                Acerca de Claurea
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
