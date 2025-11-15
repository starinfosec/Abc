"use client"

import { Navbar } from "@/components/navbar"
import { ClientReviews } from "@/components/client-reviews"
import { MessageCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"

export default function AdsPage() {
  const { t, language } = useLanguage()

  interface PlanCard {
    title: string
    description: string
    price: number
  }

  interface Plan {
    name: string
    cards: PlanCard[]
  }

  const plans: Plan[] = [
    {
      name: t("silverPlan"),
      cards: [
        {
          title:
  language === "marathi"
    ? "१ आठवड्याचे पॅकेज"
    : language === "hindi"
      ? "1-सप्ताह पैकेज"
      : "1-Week Package",

description:
  language === "marathi"
    ? "मूलभूत लक्ष्यीकरणासह मानक जाहिरात स्थान.\n\n📅 कालावधी: ६ दिवस\n📈 अपेक्षित लीड्स:\n   • दररोज: किमान १० ते जास्तीत जास्त २० ग्राहक\n   • एकूण (३ ते ४ दिवसांत): किमान ३० ते जास्तीत जास्त ८० ग्राहक\n\n💰 किंमत: ₹५,९९९"
    : language === "hindi"
      ? "बुनियादी लक्ष्यीकरण के साथ मानक विज्ञापन प्लेसमेंट।\n\n📅 अवधि: 6 दिन\n📈 अपेक्षित लीड्स:\n   • प्रति दिन: न्यूनतम 10 से अधिकतम 20 ग्राहक\n   • कुल (3 से 4 दिनों में): न्यूनतम 30 से अधिकतम 80 ग्राहक\n\n💰 मूल्य: ₹5,999"
      : "Standard ad placement with basic targeting.\n\n📅 Duration: 6 Days\n📈 Expected Leads:\n   • Per Day: Minimum 10 – Maximum 20 clients\n   • Total (3 to 4 Days): Minimum 30 – Maximum 80 clients\n\n💰 Price: ₹5,999",

price: 5999,
        },
        {
          title:
  language === "marathi"
    ? "१५ दिवसांचे पॅकेज"
    : language === "hindi"
      ? "15-दिनों का पैकेज"
      : "15-Day Package",

description:
  language === "marathi"
    ? "मूलभूत लक्ष्यीकरणासह विस्तारित जाहिरात स्थान.\n\n📅 कालावधी: १४ दिवस\n📈 अपेक्षित लीड्स:\n   • दररोज: किमान १० ते जास्तीत जास्त २० ग्राहक\n   • एकूण (७ ते ८ दिवसांत): किमान ७० ते जास्तीत जास्त १८० ग्राहक\n\n💰 किंमत: ₹९,९९९"
    : language === "hindi"
      ? "बुनियादी लक्ष्यीकरण के साथ विस्तारित विज्ञापन प्लेसमेंट।\n\n📅 अवधि: 14 दिन\n📈 अपेक्षित लीड्स:\n   • प्रति दिन: न्यूनतम 10 से अधिकतम 20 ग्राहक\n   • कुल (7 से 8 दिनों में): न्यूनतम 70 से अधिकतम 180 ग्राहक\n\n💰 मूल्य: ₹9,999"
      : "Extended ad placement with basic targeting.\n\n📅 Duration: 14 Days\n📈 Expected Leads:\n   • Per Day: Minimum 10 – Maximum 20 clients\n   • Total (7 to 8 Days): Minimum 70 – Maximum 180 clients\n\n💰 Price: ₹9,999",

price: 9999,

        },
        {
          title:
  language === "marathi"
    ? "१ महिन्याचे पॅकेज"
    : language === "hindi"
      ? "1-महीने का पैकेज"
      : "1-Month Package",

description:
  language === "marathi"
    ? "मूलभूत लक्ष्यीकरणासह दीर्घकालीन जाहिरात स्थान.\n\n📅 कालावधी: २९ दिवस\n📈 अपेक्षित लीड्स:\n   • दररोज: किमान १० ते जास्तीत जास्त २० ग्राहक\n   • एकूण (१५ ते १८ दिवसांत): किमान १५० ते जास्तीत जास्त ३६० ग्राहक\n\n💰 किंमत: ₹१२,९९९"
    : language === "hindi"
      ? "बुनियादी लक्ष्यीकरण के साथ दीर्घकालिक विज्ञापन प्लेसमेंट।\n\n📅 अवधि: 29 दिन\n📈 अपेक्षित लीड्स:\n   • प्रति दिन: न्यूनतम 10 से अधिकतम 20 ग्राहक\n   • कुल (15 से 18 दिनों में): न्यूनतम 150 से अधिकतम 360 ग्राहक\n\n💰 मूल्य: ₹12,999"
      : "Long-term ad placement with basic targeting.\n\n📅 Duration: 29 Days\n📈 Expected Leads:\n   • Per Day: Minimum 10 – Maximum 20 clients\n   • Total (15 to 18 Days): Minimum 150 – Maximum 360 clients\n\n💰 Price: ₹12,999",

price: 12999,

        },
      ],
    },
    {
      name: t("goldPlan"),
      cards: [
        {
          title:
  language === "marathi"
    ? "१ आठवड्याचे पॅकेज"
    : language === "hindi"
      ? "1-सप्ताह का पैकेज"
      : "1-Week Package",

description:
  language === "marathi"
    ? "मूलभूत लक्ष्यीकरणासह मानक जाहिरात स्थान.\n\n📅 कालावधी: ७ दिवस\n📈 अपेक्षित लीड्स:\n   • दररोज: किमान १० ते जास्तीत जास्त २० ग्राहक\n   • एकूण (७ दिवसांत): किमान ७० ते जास्तीत जास्त १४० ग्राहक\n\n💰 किंमत: ₹९,९९९"
    : language === "hindi"
      ? "बुनियादी लक्ष्यीकरण के साथ मानक विज्ञापन प्लेसमेंट।\n\n📅 अवधि: 7 दिन\n📈 अपेक्षित लीड्स:\n   • प्रति दिन: न्यूनतम 10 से अधिकतम 20 ग्राहक\n   • कुल (7 दिनों में): न्यूनतम 70 से अधिकतम 140 ग्राहक\n\n💰 मूल्य: ₹9,999"
      : "Standard ad placement with basic targeting.\n\n📅 Duration: 7 Days\n📈 Expected Leads:\n   • Per Day: Minimum 10 – Maximum 20 clients\n   • Total (7 Days): Minimum 70 – Maximum 140 clients\n\n💰 Price: ₹9,999",

price: 9999,

        },
        {
          title:
  language === "marathi"
    ? "१५ दिवसांचे पॅकेज"
    : language === "hindi"
      ? "15-दिनों का पैकेज"
      : "15-Day Package",

description:
  language === "marathi"
    ? "मूलभूत लक्ष्यीकरणासह विस्तारित जाहिरात स्थान.\n\n📅 कालावधी: १५ दिवस\n📈 अपेक्षित लीड्स:\n   • दररोज: किमान १० ते जास्तीत जास्त २० ग्राहक\n   • एकूण (१५ दिवसांत): किमान १५० ते जास्तीत जास्त ३०० ग्राहक\n\n💰 किंमत: ₹१८,९९९"
    : language === "hindi"
      ? "बुनियादी लक्ष्यीकरण के साथ विस्तारित विज्ञापन प्लेसमेंट।\n\n📅 अवधि: 15 दिन\n📈 अपेक्षित लीड्स:\n   • प्रति दिन: न्यूनतम 10 से अधिकतम 20 ग्राहक\n   • कुल (15 दिनों में): न्यूनतम 150 से अधिकतम 300 ग्राहक\n\n💰 मूल्य: ₹18,999"
      : "Extended ad placement with basic targeting.\n\n📅 Duration: 15 Days\n📈 Expected Leads:\n   • Per Day: Minimum 10 – Maximum 20 clients\n   • Total (15 Days): Minimum 150 – Maximum 300 clients\n\n💰 Price: ₹18,999",

price: 18999,

        },
        {
          title:
  language === "marathi"
    ? "१ महिन्याचे पॅकेज"
    : language === "hindi"
      ? "1-महीने का पैकेज"
      : "1-Month Package",

description:
  language === "marathi"
    ? "मूलभूत लक्ष्यीकरणासह दीर्घकालीन जाहिरात स्थान.\n\n📅 कालावधी: ३० दिवस\n📈 अपेक्षित लीड्स:\n   • दररोज: किमान १० ते जास्तीत जास्त २० ग्राहक\n   • एकूण (३० दिवसांत): किमान ३०० ते जास्तीत जास्त ६०० ग्राहक\n\n💰 किंमत: ₹२५,९९९"
    : language === "hindi"
      ? "बुनियादी लक्ष्यीकरण के साथ दीर्घकालिक विज्ञापन प्लेसमेंट।\n\n📅 अवधि: 30 दिन\n📈 अपेक्षित लीड्स:\n   • प्रति दिन: न्यूनतम 10 से अधिकतम 20 ग्राहक\n   • कुल (30 दिनों में): न्यूनतम 300 से अधिकतम 600 ग्राहक\n\n💰 मूल्य: ₹25,999"
      : "Long-term ad placement with basic targeting.\n\n📅 Duration: 30 Days\n📈 Expected Leads:\n   • Per Day: Minimum 10 – Maximum 20 clients\n   • Total (30 Days): Minimum 300 – Maximum 600 clients\n\n💰 Price: ₹25,999",

price: 25999,

        },
      ],
    },
  ]

  const handleWhatsAppShare = (planName: string, cardTitle: string, price: number) => {
    const message = `Hi, I'm interested in ${planName} - ${cardTitle}\nPrice: Rs ${price}\n\nPlease provide more details.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/+919404717182?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative h-80 md:h-96 overflow-hidden">
        <img src="/digital-marketing-advertising-campaign.jpg" alt="Advertising Solutions" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 text-center">{t("advertisements")}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 animate-slide-down">
          <p className="text-xl text-white/80"></p>
        </div>

        <div className="space-y-24">
          {plans.map((plan, planIndex) => (
            <div key={planIndex} className="animate-fade-in" style={{ animationDelay: `${planIndex * 200}ms` }}>
              <div className="text-center mb-12 animate-slide-down">
                <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">{plan.name}</h2>
                <p className="text-white/80"></p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plan.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="rounded-2xl bg-yellow-400/5 ring-1 ring-yellow-400/20 backdrop-blur overflow-hidden hover:ring-yellow-400/40 transition-all animate-scale-up"
                    style={{ animationDelay: `${(planIndex * 3 + cardIndex) * 100}ms` }}
                  >
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{card.title}</h3>
                      <p className="text-white/80 mb-8 leading-relaxed">{card.description}</p>

                      <div className="mb-8 pb-8 border-b border-yellow-400/20">
                        <div className="text-4xl font-bold text-yellow-400">Rs {card.price}</div>
                        <p className="text-white/60 text-sm mt-2">{t("priceInr")}</p>
                      </div>

                      <button
                        onClick={() => handleWhatsAppShare(plan.name, card.title, card.price)}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-yellow-400/10 ring-1 ring-yellow-400/30 hover:bg-yellow-400/20 text-yellow-400 font-semibold transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        {t("shareOnWhatsapp")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ClientReviews />

      <Footer />
    </div>
  )
}
