"use client"

import { createContext, useContext, useState, type ReactNode, useEffect } from "react"

type Language = "marathi" | "hindi" | "english"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  marathi: {
  // Navbar
  home: "मुख्य पृष्ठ",
  aboutUs: "आमच्याबद्दल",
  audioSample: "ऑडिओ नमुने",
  videoSample: "व्हिडिओ नमुने",
  advertisements: "जाहिराती",
  contactUs: "संपर्क",
  bookNow: "आता बुक करा",
  micMitr: "Mic Mitr सोबत प्रोफेशनल ऑडिओ तयार करा",
  name: "तुमचं नाव",
  email: "ई-मेल",
  message: "मेसेज",
  sendMessage: "मेसेज पाठवा",
  contactOurTeam: "आमच्या टीमशी संपर्क करा",
  sendAnInquiry: "तुमचा प्रश्न पाठवा, आम्ही लवकर उत्तर देऊ",

  // Home page
  enterLostWorld: "नव्या आवाजाच्या जगात स्वागत!",
  exploreColossal: "तुमच्या ब्रँडला आवाज द्या",
  bookYourExpedition: "आजच बुक करा",
  viewItinerary: "तपशील पाहा",
  safetyPriority: "सुरक्षा आमची पहिली प्राधान्यक्रम",
  expertLedTours: "प्रोफेशनल व्हॉइसओव्हर",
  guidedByGeologists: "आपल्या व्यवसायाच्या प्रमोशनसाठी उच्च-गुणवत्तेची व्हॉइस रेकॉर्डिंग.",
  worldClassSafety: "स्टुडिओ-क्वालिटी ऑडिओ",
  rigorousProtocols: "प्रत्येक वेळी स्वच्छ आणि आवाज-रहित ऑडिओ",
  allInclusivePackage: "संपूर्ण ऑडिओ प्रॉडक्शन",
  permitsGearMeals: "व्हॉइस, म्युझिक, एडिटिंग – सगळं एकाच ठिकाणी",
  ecoFriendlyCaving: "जलद आणि विश्वासार्ह डिलिव्हरी",
  committedToPreserving: "आपला बिझनेस ऑडिओ काही तासांत तयार.",
  yourEpicJourney: "तुमची खास ऑडिओ सफर",
  fromJungleTreks: "स्क्रिप्टपासून एडिटिंगपर्यंत",
  checkAvailability: "उपलब्धता तपासा",
  frequentlyAsked: "नेहमी विचारले जाणारे प्रश्न",
  everythingYouNeed: "तुम्हाला लागणारी सर्व माहिती इथे",
  createAudioBusiness: "₹1499 मध्ये 3 दिवसांचे Meta-Ads सेटअप, Meta-Ads बजेटसह",
  get2DayPlan: "2 दिवसांची प्लॅन – फक्त ₹999",
  shareViaWhatsapp: "आता बुक करा",
  startNow: "आत्ताच सुरू करा",
  metaAdsSetup: "3 दिवसांचे Meta Ads सेटअप, ज्यात संपूर्ण ऍड बजेट व्यवस्थापन समाविष्ट आहे.",


  // Audio page
  audioSamples: "ऑडिओ नमुने",
  maleAudio: "पुरुष आवाज",
  femaleAudio: "महिला आवाज",
  maleFemaleAudio: "मिश्र आवाज",
  backgroundAudio: "पार्श्वसंगीत",
  selectPrice: "प्लॅन निवडा",
  shareOnWhatsapp: "WhatsApp वर शेअर करा",
  play: "प्ले",
  pause: "पॉज",
  selectAudio: "ऑडिओ निवडा",
  clientReviews: "ग्राहक प्रतिक्रिया",
  excellent: "खूप छान",
  basic: "बेसिक",
  standard: "स्टॅंडर्ड",
  premium: "प्रीमियम",
  exclusive: "एक्सक्लुझिव",

  // Video page
  videoSamples: "व्हिडिओ नमुने",
  seconds30: "30 सेकंद",
  minute1: "1 मिनिट",
  selectVideo: "व्हिडिओ निवडा",

  // Advertisement page
  silverPlan: "सिल्वर प्लॅन",
  goldPlan: "गोल्ड प्लॅन",
  priceInr: "किंमत",
  contentPlan: "कंटेंट प्लॅन",

  // About page
  ourMission: "आमचा उद्देश",
  missionText:
    "लोकांना प्रोफेशनल आणि किफायतशीर ऑडिओ-व्हिडिओ सेवा देणे हा आमचा उद्देश आहे. तुमच्या ब्रँडचा आवाज अधिक प्रभावी बनवणे हेच आमचं काम.",
  whyChooseUs: "आम्हीच का?",
  officialOperator: "आपल्या पूर्ण समाधानापर्यंत आम्ही काम करतो",
  certifiedGuides: "तज्ञ व्हॉइस आणि एडिटिंग टीम",
  allInclusive: "स्वच्छ आणि आवाज-रहित रेकॉर्डिंग",
  environmentalCommitment: "स्वच्छ, नॉईज-फ्री रेकॉर्डिंग",
  groupSizes: "प्रत्येक ग्राहकाला वैयक्तिक लक्ष",

  // Footer
  allRightsReserved: "सर्व हक्क राखीव",
  quickLinks: "क्विक लिंक्स",
  followUs: "आम्हाला फॉलो करा",
  contact: "संपर्क",
  services: "सेवा",
  address: "पत्ता",
  phone: "फोन",
},


  hindi: {
  // Navbar
  home: "होम",
  aboutUs: "हमारे बारे में",
  audioSample: "ऑडियो सैंपल",
  videoSample: "वीडियो सैंपल",
  advertisements: "ऐड्स",
  contactUs: "संपर्क करें",
  bookNow: "अभी बुक करें",
  micMitr: "Mic Mitr के साथ अपना प्रोफेशनल ऑडियो बनाएं",
  name: "नाम",
  email: "ईमेल",
  message: "मैसेज",
  sendMessage: "मैसेज भेजें",
  contactOurTeam: "हमारी टीम से संपर्क करें",
  sendAnInquiry: "अपना सवाल भेजें, हम जल्दी जवाब देंगे",

  // Home page
  enterLostWorld: "नयी ऑडियो दुनिया में आपका स्वागत!",
  exploreColossal: "अपने ब्रांड की आवाज़ बनाएं",
  bookYourExpedition: "आज ही बुक करें",
  viewItinerary: "डिटेल्स देखें",
  safetyPriority: "सुरक्षा सबसे पहले",
  expertLedTours: "प्रोफेशनल वॉइसओवर",
  guidedByGeologists: "आपके बिज़नेस प्रमोशन के लिए हाई-क्वालिटी वॉइस रिकॉर्डिंग",
  worldClassSafety: "स्टूडियो-क्वालिटी ऑडियो",
  rigorousProtocols: "हर बार साफ़ और शोर-रहित ऑडियो",
  allInclusivePackage: "पूरा ऑडियो प्रोडक्शन",
  permitsGearMeals: "वॉइस, म्यूजिक, एडिट – सब एक जगह",
  ecoFriendlyCaving: "तेज़ और भरोसेमंद डिलीवरी",
  committedToPreserving: "आपका बिज़नेस ऑडियो कुछ ही घंटों में तैयार",
  yourEpicJourney: "आपकी खास ऑडियो जर्नी",
  fromJungleTreks: "स्क्रिप्ट से एडिटिंग तक",
  checkAvailability: "उपलब्धता देखें",
  frequentlyAsked: "अक्सर पूछे जाने वाले सवाल",
  everythingYouNeed: "यहां सारी जानकारी मिलेगी",
  createAudioBusiness: "3 दिनों का मेटा-ऐड्स सेटअप सिर्फ ₹1499 में, जिसमें मेटा-ऐड्स बजट भी शामिल है",
  get2DayPlan: "2 दिन का प्लान – सिर्फ ₹999",
  shareViaWhatsapp: "अभी बुक करें",
  startNow: "अभी शुरू करें",
  metaAdsSetup: "3 दिनों का Meta Ads सेटअप, जिसमें पूरा ऐड बजट मैनेजमेंट भी शामिल है।",

  // Audio page
  audioSamples: "ऑडियो सैंपल",
  maleAudio: "पुरुष आवाज़",
  femaleAudio: "महिला आवाज़",
  maleFemaleAudio: "मिक्स आवाज़",
  backgroundAudio: "बैकग्राउंड म्यूजिक",
  selectPrice: "प्लान चुनें",
  shareOnWhatsapp: "WhatsApp पर शेयर करें",
  play: "प्ले",
  pause: "पॉज़",
  selectAudio: "ऑडियो चुनें",
  clientReviews: "कस्टमर रिव्यू",
  excellent: "बहुत बढ़िया",
  basic: "बेसिक",
  standard: "स्टैंडर्ड",
  premium: "प्रीमियम",
  exclusive: "एक्सक्लूसिव",

  // Video page
  videoSamples: "वीडियो सैंपल",
  seconds30: "30 सेकंड",
  minute1: "1 मिनट",
  selectVideo: "वीडियो चुनें",

  // Advertisement page
  silverPlan: "सिल्वर प्लान",
  goldPlan: "गोल्ड प्लान",
  priceInr: "कीमत",
  contentPlan: "कंटेंट प्लान",

  // About page
  ourMission: "हमारा लक्ष्य",
  missionText:
    "हम आपको प्रोफेशनल और किफायती ऑडियो-वीडियो सेवा देना चाहते हैं। आपका ब्रांड बेहतर आवाज़ के साथ लोगों तक पहुंचे, यही हमारा काम है।",
  whyChooseUs: "हमें क्यों चुनें?",
  officialOperator: "आपकी पूरी संतुष्टि तक काम करते हैं",
  certifiedGuides: "एक्सपर्ट वॉइस और एडिट टीम",
  allInclusive: "साफ़ और शोर-रहित रिकॉर्डिंग",
  environmentalCommitment: "क्लीन और नॉइज़-फ्री रिकॉर्डिंग",
  groupSizes: "हर कस्टमर को पर्सनल ध्यान",

  // Footer
  allRightsReserved: "सभी अधिकार सुरक्षित",
  quickLinks: "क्विक लिंक",
  followUs: "हमें फॉलो करें",
  contact: "संपर्क",
  services: "सेवाएं",
  address: "पता",
  phone: "फोन",
},


  english: {
    // Navbar
    home: "Home",
    aboutUs: "About Us",
    audioSample: "Audio Sample",
    videoSample: "Video Sample",
    advertisements: "Advertisements",
    contactUs: "Contact Us",
    bookNow: "Book Now",
    micMitr: "Create Your Business Audio With Mic Mitr",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    contactOurTeam: "Contact Our Team",
    sendAnInquiry: "Share your inquiry and we'll respond right away",

    // Home page
    enterLostWorld: "Enter a Lost World.",
    exploreColossal: "The voice your brand deserve",
    bookYourExpedition: "Book Your Expedition",
    viewItinerary: "View Itinerary",
    safetyPriority: "Safety is our Priority",
    expertLedTours: "Professional Voiceovers",
    guidedByGeologists: "High-quality voice recordings for your business promotions.",
    worldClassSafety: "Studio-Grade Audio Quality",
    rigorousProtocols: "Clear and noise-free audio every time.",
    allInclusivePackage: "Complete Audio Production",
    permitsGearMeals: "Scripting, recording, editing — everything included in one package.",
    ecoFriendlyCaving: "Fast & Reliable Delivery",
    committedToPreserving: "Get your business audio delivered within hours.",
    yourEpicJourney: "Your Epic Journey",
    fromJungleTreks: "From jungle treks to underground camps",
    checkAvailability: "Check Availability",
    frequentlyAsked: "Frequently Asked Questions",
    everythingYouNeed: "Everything you need to know about the expedition",
    createAudioBusiness: "3 days meta-ads setup in Rs 1499 including meta-ads budget",
    get2DayPlan: "Get 2 Day Plan Only Rs 999 Including Ad Budget",
    shareViaWhatsapp: "Book Now",
    startNow: "Start Now",
    metaAdsSetup: "3-day Meta Ads setup, including complete ad budget management.",
    
    // Audio page
    audioSamples: "Audio Samples",
    maleAudio: "Male Audio",
    femaleAudio: "Female Audio",
    maleFemaleAudio: "Male-Female Audio",
    backgroundAudio: "Background Audio",
    selectPrice: "Select Price",
    shareOnWhatsapp: "Share on WhatsApp",
    play: "Play",
    pause: "Pause",
    selectAudio: "Select Audio",
    clientReviews: "Client Reviews",
    excellent: "Excellent",
    basic: "Basic",
    standard: "Standard",
    premium: "Premium",
    exclusive: "Exclusive",

    // Video page
    videoSamples: "Video Samples",
    seconds30: "30 Seconds",
    minute1: "1 Minute",
    selectVideo: "Select Video",

    // Advertisement page
    silverPlan: "Silver Plan",
    goldPlan: "Gold Plan",
    priceInr: "Price (INR)",
    contentPlan: "Content Plan",

    // About page
    ourMission: "Our Mission",
    missionText:
      "We aim to provide you with professional and affordable audio–video services. Our job is to make sure your brand reaches people with better sound quality.",
    whyChooseUs: "Why Choose Us",
    officialOperator: "We work until you’re fully satisfied",
    certifiedGuides: "Expert voice and editing team",
    allInclusive: "Clean and loud recording",
    environmentalCommitment: "Clean and noise-free recording",
    groupSizes: "Personal attention to every customer.",

    // Footer
    allRightsReserved: "All Rights Reserved.",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    contact: "Contact",
    services: "Services",
    address: "Address",
    phone: "Phone",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("marathi")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.english] || key
  }

  if (!mounted) return null

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
