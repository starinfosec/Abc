"use client"

import { useState, useRef } from "react"
import { Play, Pause, Share2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface AudioCard {
  title: string
  audioUrl: string
  prices: { label: string; value: number }[]
}

export function AudioPlayer({ card }: { card: AudioCard }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const audioRef = useRef<HTMLAudioElement>(null)
  const { t, language } = useLanguage()

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const togglePrice = (label: string) => {
    setSelectedPrices((prev) => (prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]))
  }

  const handleWhatsApp = () => {
    const selectedText = selectedPrices.join(", ")
    const message = encodeURIComponent(
      `I'm interested in: ${card.title}\nSelected prices: ${selectedText}\nLanguage: ${language}`,
    )
    window.open(`https://wa.me/+919404717182?text=${message}`, "_blank")
  }

  return (
    <div className="rounded-2xl bg-yellow-400/10 ring-1 ring-yellow-400/30 backdrop-blur p-8 flex flex-col h-full">
      <h3 className="text-2xl font-semibold text-yellow-400 mb-6">{card.title}</h3>

      {/* Audio Player */}
      <div className="mb-8 flex items-center justify-center">
        <audio ref={audioRef} src={card.audioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />
        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-yellow-400/20 hover:bg-yellow-400/30 flex items-center justify-center transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-yellow-400" />
          ) : (
            <Play className="w-8 h-8 text-yellow-400 ml-1" />
          )}
        </button>
      </div>

      {/* Price Checkboxes */}
      <div className="space-y-3 mb-8 flex-1">
        <p className="text-sm font-medium text-yellow-400">{t("selectPrice")}</p>
        {card.prices.map((price) => (
          <label key={price.label} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedPrices.includes(price.label)}
              onChange={() => togglePrice(price.label)}
              className="w-5 h-5 rounded border-yellow-400 bg-yellow-400/10 text-yellow-400 cursor-pointer"
            />
            <span className="text-white/80">
              {price.label} - ₹{price.value}
            </span>
          </label>
        ))}
      </div>

      {/* Share Button */}
      <button
        onClick={handleWhatsApp}
        disabled={selectedPrices.length === 0}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 disabled:bg-yellow-400/30 disabled:text-white/50 transition-colors"
      >
        <Share2 className="w-5 h-5" />
        {t("shareOnWhatsapp")}
      </button>
    </div>
  )
}
