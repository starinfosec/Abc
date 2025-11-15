"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-yellow-400">{t("aboutUs")}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Image
                src="about.jpg"
                alt="Son Doong Cave"
                width={500}
                height={400}
                className="rounded-2xl ring-1 ring-yellow-400/30"
              />
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">{t("ourMission")}</h2>
              <p className="text-white/80 leading-relaxed mb-6">{t("missionText")}</p>
              <p className="text-white/80 leading-relaxed mb-8">
                {t("worldClassSafety")} - {t("rigorousProtocols")}
              </p>

              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">{t("whyChooseUs")}</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <span>{t("officialOperator")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <span>{t("certifiedGuides")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <span>{t("allInclusive")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <span>{t("environmentalCommitment")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold mt-1">•</span>
                  <span>{t("groupSizes")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
