"use client"

import { Mic, Headphones, SlidersHorizontal, Zap, Plus, Minus, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { t } = useLanguage()

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    
  ]

  const handleWhatsAppClick = () => {
    const message =
      "Hi, I'm interested in creating business audio starting at Rs 299. Please provide more details about the 2-day plan for Rs 999."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/+919404717182?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

     {/* Hero Section */}
<div className="relative min-h-screen">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url(/audio.jpeg?height=1080&width=1920&query=professional-audio-production-studio)",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 text-center">
    <div className="mb-4 sm:mb-6 px-4 py-2 bg-black/40 ring-1 ring-yellow-400/30 backdrop-blur rounded-full animate-fade-in-up">
      
    </div>

    {/* Title */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-4 sm:mb-6 text-balance text-yellow-400 animate-fade-in-up">
      {t("micMitr")}
    </h1>

    {/* Description */}
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mb-8 sm:mb-12 leading-relaxed text-pretty animate-fade-in-up px-2">
      {t("exploreColossal")}
    </p>

    {/* Hero Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 animate-fade-in-up w-full sm:w-auto px-4 sm:px-0">
      <a href="/audio">
        <Button
          size="lg"
          className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold w-full sm:w-auto"
        >
          {t("audioSample")}
        </Button>
      </a>

      <a href="/video">
        <Button
          size="lg"
          variant="outline"
          className="bg-black/40 ring-1 ring-yellow-400/30 backdrop-blur border-0 text-yellow-400 hover:bg-black/50 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg w-full sm:w-auto"
        >
          {t("videoSample")}
        </Button>
      </a>

      <a href="/ads">
        <Button
          size="lg"
          className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold w-full sm:w-auto"
        >
          {t("advertisements")}
        </Button>
      </a>
    </div>   
  </div>
</div>

      {/* Features Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-6 sm:p-8 text-center card-stagger-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 ring-1 ring-yellow-400/30 mb-4 sm:mb-6">
                <Mic className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-yellow-400">{t("expertLedTours")}</h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">{t("guidedByGeologists")}</p>
            </div>

            <div className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-6 sm:p-8 text-center card-stagger-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 ring-1 ring-yellow-400/30 mb-4 sm:mb-6">
                <Headphones className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-yellow-400">{t("worldClassSafety")}</h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">{t("rigorousProtocols")}</p>
            </div>

            <div className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-6 sm:p-8 text-center card-stagger-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 ring-1 ring-yellow-400/30 mb-4 sm:mb-6">
                <SlidersHorizontal className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-yellow-400">
                {t("allInclusivePackage")}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">{t("permitsGearMeals")}</p>
            </div>

            <div className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-6 sm:p-8 text-center card-stagger-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 ring-1 ring-yellow-400/30 mb-4 sm:mb-6">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-yellow-400">
                {t("ecoFriendlyCaving")}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">{t("committedToPreserving")}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Audio Business Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-balance text-yellow-400">
                  {t("createAudioBusiness")}
                </h2>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed text-pretty mb-6 sm:mb-8">
                  {t("get2DayPlan")}
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("shareViaWhatsapp")}
                </button>
              </div>

              <div className="rounded-2xl bg-yellow-400/10 ring-1 ring-yellow-400/30 p-6 sm:p-8 lg:p-12 text-center overflow-hidden order-1 lg:order-2">
                <div className="relative h-48 sm:h-64 lg:h-80 mb-4 sm:mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/audio-production-microphone.jpg"
                    alt="Audio Production Setup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-sm sm:text-base text-white/60 mb-2">Starting Price</p>
                  <div className="text-5xl sm:text-6xl font-bold text-yellow-400 mb-2">Rs 299</div>
                  <p className="text-sm sm:text-base text-white/60">2-Day Plan: Rs 999</p>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6 sm:px-8 py-3 font-semibold transition-colors text-sm sm:text-base"
                >
                  {t("startNow")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </div>
  )
}
