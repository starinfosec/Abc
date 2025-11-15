"use client"

import { Star } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function ClientReviews() {
  const { t, language } = useLanguage()

  const reviewsData = {
    marathi: [
      {
        name: "विक्रम सिंह",
        text: "असाधारण व्हिडिओ गुणवत्ता आणि सृजनशील दिशा. आमच्या विपणन प्रचारासाठी परिपूर्ण.",
        rating: 5,
      },
      {
        name: "नेहा गुप्ता",
        text: "व्यावसायिक टीम उत्कृष्ट तपशीलाचे लक्ष देते. आमचा व्हिडिओ अपेक्षांपेक्षा अधिक आहे!",
        rating: 5,
      },
      {
        name: "रोहन देसाई",
        text: "उत्कृष्ट व्हिडिओ निर्माण सेवा. गुणवत्तेची सामग्री शोधणार्‍या कोणत्याही व्यवसायासाठी अत्यंत सुचवा.",
        rating: 5,
      },
    ],
    hindi: [
      {
        name: "विक्रम सिंह",
        text: "असाधारण वीडियो गुणवत्ता और रचनात्मक दिशा। हमारे विपणन प्रचार के लिए बिल्कुल सही।",
        rating: 5,
      },
      {
        name: "नेहा गुप्ता",
        text: "पेशेवर टीम बेहतरीन विस्तार पर ध्यान देते। हमारा वीडियो अपेक्षाओं से अधिक है!",
        rating: 5,
      },
      {
        name: "रोहन देसाई",
        text: "शानदार वीडियो उत्पादन सेवा। गुणवत्ता सामग्री के लिए किसी भी व्यवसाय के लिए अत्यधिक अनुशंसित।",
        rating: 5,
      },
    ],
    english: [
      {
        name: "Vikram Singh",
        text: "Outstanding video quality and creative direction. Perfect for our marketing campaign.",
        rating: 5,
      },
      {
        name: "Neha Gupta",
        text: "Professional team with excellent attention to detail. Our video exceeded expectations!",
        rating: 5,
      },
      {
        name: "Rohan Desai",
        text: "Great video production service. Highly recommend for any business looking for quality content.",
        rating: 5,
      },
    ],
  }

  const reviews = reviewsData[language as keyof typeof reviewsData]

  return (
    <section className="py-24 px-6 bg-black animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-yellow-400">{t("clientReviews")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur p-8 flex flex-col animate-scale-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/90 mb-6 flex-grow leading-relaxed">{review.text}</p>
              <p className="text-yellow-400 font-semibold">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
