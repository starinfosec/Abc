"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t, language } = useLanguage()

  const brandName = language === "marathi" ? "माइक मित्र" : language === "hindi" ? "माइक मित्र" : "Mic Mitr"

  const footerDescription =
    language === "marathi"
      ? "आपल्या व्यावसायिक ऑडिओ आणि व्हिडिओ उत्पादन सेवा।"
      : language === "hindi"
        ? "आपके व्यावसायिक ऑडियो और वीडियो उत्पादन सेवा।"
        : "Professional audio and video production services for your business."

  return (
    <footer className="relative z-10 bg-black border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">{brandName}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{footerDescription}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/audio" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
                  {t("audioSample")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("services")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/audio" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
                  {t("audioSamples")}
                </Link>
              </li>
              <li>
                <Link href="/video" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
                  {t("videoSamples")}
                </Link>
              </li>
              <li>
                <Link href="/ads" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
                  {t("advertisements")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("followUs")}</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61583479513554" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mic_mitra?igsh=MWttNmg4cmI2OXdwOQ==" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>             
              <a href="https://www.linkedin.com/in/mic-mitr-3270a2399" className="text-white/60 hover:text-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 {brandName}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}

