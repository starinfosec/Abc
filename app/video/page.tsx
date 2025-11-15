"use client"

import { Navbar } from "@/components/navbar"
import { VideoPlayer } from "@/components/video-player"
import { ClientReviews } from "@/components/client-reviews"
import { useLanguage } from "@/context/language-context"
import { Footer } from "@/components/footer"

export default function VideoPage() {
  const { t, language } = useLanguage()

  const videoCards = [
    {
      title: `${t("videoSamples")} - ${t("seconds30")}`,
      duration: t("seconds30"),
      videoUrl: "reel.mp4",
      prices: [
        { label: t("basic"), value: 499 },
        { label: t("standard"), value: 799 },
        { label: t("premium"), value: 899 },
        { label: t("exclusive"), value: 1499 },
      ],
    },
    {
      title: `${t("videoSamples")} - ${t("minute1")}`,
      duration: t("minute1"),
      videoUrl: "task.mp4",
      prices: [
        { label: t("basic"), value: 599 },
        { label: t("standard"), value: 899 },
        { label: t("premium"), value: 999 },
        { label: t("exclusive"), value: 1699 },
      ],
    },
    {
      title: `${t("videoSamples")} - ${t("1:30-2:00")}`,
      duration: t("minute"),
      videoUrl: "video.mp4",
      prices: [
        { label: t("basic"), value: 799 },
        { label: t("standard"), value: 999 },
        { label: t("premium"), value: 1199 },
        { label: t("exclusive"), value: 1799 },
      ],
    },
    {
      title: `${t("videoSamples")} - ${t("2:00-3:00")}`,
      duration: t("minute"),
      videoUrl: "video1.mp4",
      prices: [
        { label: t("basic"), value: 899 },
        { label: t("standard"), value: 1099 },
        { label: t("premium"), value: 1499 },
        { label: t("exclusive"), value: 1899 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 animate-slide-down">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400">{t("videoSamples")}</h1>
          <p className="text-xl text-white/80"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {videoCards.map((video, index) => (
            <div key={index} className="animate-scale-up" style={{ animationDelay: `${index * 100}ms` }}>
              <VideoPlayer {...video} />
            </div>
          ))}
        </div>
      </div>

      <ClientReviews />

      <Footer />
    </div>
  )
}
