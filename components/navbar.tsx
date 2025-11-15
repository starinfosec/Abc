"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const brandName = language === "marathi" ? "माइक मित्र" : language === "hindi" ? "माइक मित्र" : "Mic Mitr"

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
  <div className="relative w-6 h-6 md:w-8 md:h-8">
    <Image
      src="/logo.png"
      alt="Mic Mitr Logo"
      fill
      className="object-contain"
      priority
    />
  </div>

  <span className="font-bold text-yellow-400 text-base md:text-lg">
    {brandName}
  </span>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-3 xl:px-4 py-2 text-xs xl:text-sm text-white hover:bg-yellow-400/10 rounded-full transition-colors whitespace-nowrap"
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="px-3 xl:px-4 py-2 text-xs xl:text-sm text-white hover:bg-yellow-400/10 rounded-full transition-colors whitespace-nowrap"
            >
              {t("aboutUs")}
            </Link>
            <Link
              href="/audio"
              className="px-3 xl:px-4 py-2 text-xs xl:text-sm text-white hover:bg-yellow-400/10 rounded-full transition-colors whitespace-nowrap"
            >
              {t("audioSample")}
            </Link>
            <Link
              href="/video"
              className="px-3 xl:px-4 py-2 text-xs xl:text-sm text-white hover:bg-yellow-400/10 rounded-full transition-colors whitespace-nowrap"
            >
              {t("videoSample")}
            </Link>
            <Link
              href="/ads"
              className="px-3 xl:px-4 py-2 text-xs xl:text-sm text-white hover:bg-yellow-400/10 rounded-full transition-colors whitespace-nowrap"
            >
              {t("advertisements")}
            </Link>
            <Link
              href="/contact"
              className="px-3 xl:px-4 py-2 text-xs xl:text-sm text-white hover:bg-yellow-400/10 rounded-full transition-colors whitespace-nowrap"
            >
              {t("contactUs")}
            </Link>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Selector */}
            <div className="flex gap-1 md:gap-2">
              <button
                onClick={() => setLanguage("marathi")}
                className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === "marathi"
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20"
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => setLanguage("hindi")}
                className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === "hindi"
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20"
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLanguage("english")}
                className={`px-2 md:px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  language === "english"
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-2 pb-4 animate-fade-in-up">
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-white hover:bg-yellow-400/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm text-white hover:bg-yellow-400/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t("aboutUs")}
            </Link>
            <Link
              href="/audio"
              className="block px-4 py-2 text-sm text-white hover:bg-yellow-400/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t("audioSample")}
            </Link>
            <Link
              href="/video"
              className="block px-4 py-2 text-sm text-white hover:bg-yellow-400/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t("videoSample")}
            </Link>
            <Link
              href="/ads"
              className="block px-4 py-2 text-sm text-white hover:bg-yellow-400/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t("advertisements")}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm text-white hover:bg-yellow-400/10 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {t("contactUs")}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

