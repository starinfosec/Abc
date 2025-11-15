"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useState } from "react"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:contact@micmitr.in?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
  }

  const placeholders = {
    marathi: {
      name: "आपले नाव",
      email: "your@email.com",
      message: "आपला संदेश...",
      phone: "फोन",
      location: "स्थान",
    },
    hindi: {
      name: "आपका नाम",
      email: "your@email.com",
      message: "आपका संदेश...",
      phone: "फोन",
      location: "स्थान",
    },
    english: {
      name: "Your name",
      email: "your@email.com",
      message: "Your message...",
      phone: "Phone",
      location: "Location",
    },
  }

  const currentPlaceholders = placeholders[language as keyof typeof placeholders]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
{/* Contact Form */}
<div className="animate-slide-right">
  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400 animate-slide-down">
    {t("contactOurTeam")}
  </h1>
  <p className="text-xl text-white/80 mb-12">{t("sendAnInquiry")}</p>

  {/* FINAL MERGED FORMSPREE FORM */}
  <form
    action="https://formspree.io/f/movyjrbn"
    method="POST"
    className="space-y-6"
  >
    {/* Name Field */}
    <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
      <label className="block text-white/80 mb-2 font-semibold">
        {t("name")}
      </label>
      <input
        type="text"
        name="name"
        required
        className="w-full px-6 py-3 rounded-lg bg-yellow-400/5 ring-1 ring-yellow-400/30 text-white placeholder-white/40 focus:outline-none focus:ring-yellow-400/60 transition-all"
        placeholder={currentPlaceholders.name}
      />
    </div>

    {/* Email Field */}
    <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
      <label className="block text-white/80 mb-2 font-semibold">
        {t("email")}
      </label>
      <input
        type="email"
        name="email"
        required
        className="w-full px-6 py-3 rounded-lg bg-yellow-400/5 ring-1 ring-yellow-400/30 text-white placeholder-white/40 focus:outline-none focus:ring-yellow-400/60 transition-all"
        placeholder={currentPlaceholders.email}
      />
    </div>

    {/* Message Field */}
    <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
      <label className="block text-white/80 mb-2 font-semibold">
        {t("message")}
      </label>
      <textarea
        name="message"
        required
        rows={6}
        className="w-full px-6 py-3 rounded-lg bg-yellow-400/5 ring-1 ring-yellow-400/30 text-white placeholder-white/40 focus:outline-none focus:ring-yellow-400/60 transition-all resize-none"
        placeholder={currentPlaceholders.message}
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-8 py-4 font-semibold transition-colors animate-fade-in"
      style={{ animationDelay: "400ms" }}
    >
      {t("sendMessage")}
    </button>
  </form>
</div>

          {/* Contact Info */}
          <div className="animate-slide-left">
            <div className="space-y-12">
              <div className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-8 animate-scale-up">
                <div className="flex gap-4 items-start">
                  <Mail className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">{t("email")}</h3>
                    <p className="text-white/80">contact@micmitr.in</p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-8 animate-scale-up"
                style={{ animationDelay: "100ms" }}
              >
                <div className="flex gap-4 items-start">
                  <Phone className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">{t("phone")}</h3>
                    <p className="text-white/80">+91 9404717182</p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-8 animate-scale-up"
                style={{ animationDelay: "200ms" }}
              >
                <div className="flex gap-4 items-start">
                  <MapPin className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">{t("address")}</h3>
                    <p className="text-white/80">Peth, Sangli, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

