"use client"

import { Navbar } from "@/components/navbar"
import { AudioPlayer } from "@/components/audio-player"
import { ClientReviews } from "@/components/client-reviews"
import { useLanguage } from "@/context/language-context"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"

export default function AudioPage() {
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const audioCards = [
    {
      id: 1,
      title: t("maleAudio"),
      audioUrl: "/male.mp4",
      prices: [
        { label: t("basic"), value: 299 },
        { label: t("standard"), value: 499 },
        { label: t("premium"), value: 799 },
        { label: t("exclusive"), value: 1299 },
      ],
    },
    {
      id: 2,
      title: t("femaleAudio"),
      audioUrl: "/female.mp4",
      prices: [
        { label: t("basic"), value: 299 },
        { label: t("standard"), value: 499 },
        { label: t("premium"), value: 799 },
        { label: t("exclusive"), value: 1299 },
      ],
    },
    {
      id: 3,
      title: t("maleFemaleAudio"),
      audioUrl: "mahalxmi.mp4",
      prices: [
        { label: t("basic"), value: 399 },
        { label: t("standard"), value: 599 },
        { label: t("premium"), value: 899 },
        { label: t("exclusive"), value: 1499 },
      ],
    },
    {
      id: 4,
      title: t("backgroundAudio"),
      audioUrl: "background.mp3",
      prices: [
        { label: t("basic"), value: 199 },
        { label: t("standard"), value: 399 },
        { label: t("premium"), value: 599 },
        { label: t("exclusive"), value: 999 },
      ],
    },
  ]

  const reviews = [
    {
      name: "Rajesh Kumar",
      text: "Amazing audio quality and professional service. Highly recommended for anyone looking for professional audio.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      text: "Excellent work! The audio was exactly what I needed for my business. Quick delivery and great support.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      text: "Very impressed with the quality and professionalism. Will definitely work with them again.",
      rating: 5,
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400">{t("audioSamples")}</h1>
          <p className="text-xl text-white/80">{t("selectAudio")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audioCards.map((card, index) => (
            <div key={card.id} className={`card-stagger-${(index % 4) + 1}`}>
              <AudioPlayer card={card} />
            </div>
          ))}
        </div>
      </div>

      <ClientReviews reviews={reviews} />

      <Footer />
    </div>
  )
}
