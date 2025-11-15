"use client"

import { useState } from "react"
import { Play, Pause, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface VideoPlayerProps {
  title: string
  duration: string
  videoUrl: string
  prices: Array<{ label: string; value: number }>
}

export function VideoPlayer({ title, duration, videoUrl, prices }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const { t } = useLanguage()

  const togglePrice = (label: string) => {
    setSelectedPrices((prev) => (prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]))
  }

  const handleWhatsAppShare = () => {
    if (selectedPrices.length === 0) return

    const selectedItems = selectedPrices.map((label) => {
      const price = prices.find((p) => p.label === label)
      return `${label}: Rs ${price?.value}`
    })

    const message = `Hi, I'm interested in: ${title}\n\n${selectedItems.join("\n")}\n\nPlease provide more details.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/+919404717182?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur overflow-hidden">
      {/* Video Player */}
      <div className="aspect-video bg-black relative group">
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{title}</h3>
            <p className="text-white/60">{duration}</p>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full bg-yellow-400/10 ring-1 ring-yellow-400/30 hover:bg-yellow-400/20 transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6 text-yellow-400" /> : <Play className="w-6 h-6 text-yellow-400" />}
          </button>
        </div>

        {/* Price Checkboxes */}
        <div className="space-y-3 mb-6">
          {prices.map((price) => (
            <label key={price.label} className="flex items-center gap-3 cursor-pointer group/checkbox">
              <input
                type="checkbox"
                checked={selectedPrices.includes(price.label)}
                onChange={() => togglePrice(price.label)}
                className="w-5 h-5 rounded bg-yellow-400/10 border border-yellow-400/30 cursor-pointer accent-yellow-400"
              />
              <span className="text-white/80 group-hover/checkbox:text-white transition-colors">
                {price.label} - Rs {price.value}
              </span>
            </label>
          ))}
        </div>

        {/* WhatsApp Share Button */}
        <button
          onClick={handleWhatsAppShare}
          disabled={selectedPrices.length === 0}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-yellow-400/10 ring-1 ring-yellow-400/30 hover:bg-yellow-400/20 disabled:opacity-50 disabled:cursor-not-allowed text-yellow-400 font-semibold transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          {t("shareOnWhatsapp")}
        </button>
      </div>
    </div>
  )
}
