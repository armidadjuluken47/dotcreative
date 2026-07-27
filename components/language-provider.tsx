"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { usePathname } from "next/navigation"

export type LanguageCode = "en" | "fr" | "de" | "ar"

type TranslationKey =
  | "nav.services"
  | "nav.aboutUs"
  | "nav.erpSolutions"
  | "nav.contactUs"
  | "nav.blog"
  | "nav.bookDemo"

const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  en: {
    "nav.services": "Services",
    "nav.aboutUs": "About Us",
    "nav.erpSolutions": "ERP Solutions",
    "nav.contactUs": "Contact us",
    "nav.blog": "Blog",
    "nav.bookDemo": "Book a demo",
  },
  fr: {
    "nav.services": "Services",
    "nav.aboutUs": "A propos",
    "nav.erpSolutions": "Solutions ERP",
    "nav.contactUs": "Contact",
    "nav.blog": "Blog",
    "nav.bookDemo": "Reserver une demo",
  },
  de: {
    "nav.services": "Dienstleistungen",
    "nav.aboutUs": "Uber uns",
    "nav.erpSolutions": "ERP-Losungen",
    "nav.contactUs": "Kontakt",
    "nav.blog": "Blog",
    "nav.bookDemo": "Demo buchen",
  },
  ar: {
    "nav.services": "الخدمات",
    "nav.aboutUs": "من نحن",
    "nav.erpSolutions": "حلول ERP",
    "nav.contactUs": "اتصل بنا",
    "nav.blog": "المدونة",
    "nav.bookDemo": "احجز عرضا",
  },
}

type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (code: LanguageCode) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate?: {
        TranslateElement?: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          elementId: string,
        ) => unknown
      }
    }
  }
}

const GOOGLE_SCRIPT_ID = "google-translate-script"

function applyGoogleTranslate(language: LanguageCode) {
  const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null
  if (!combo) return false
  combo.value = language
  combo.dispatchEvent(new Event("change"))
  return true
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en")
  const pathname = usePathname()

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element",
        )
      }
    }

    if (!document.getElementById(GOOGLE_SCRIPT_ID)) {
      const script = document.createElement("script")
      script.id = GOOGLE_SCRIPT_ID
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    } else if (window.googleTranslateElementInit) {
      window.googleTranslateElementInit()
    }

    const savedLanguage = window.localStorage.getItem("preferredLanguage") as LanguageCode | null
    if (savedLanguage && savedLanguage in translations) {
      setLanguageState(savedLanguage)
      document.documentElement.lang = savedLanguage
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr"
      // Wait for Google widget render before applying saved language.
      setTimeout(() => {
        applyGoogleTranslate(savedLanguage)
      }, 600)
    }
  }, [])

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code)
    window.localStorage.setItem("preferredLanguage", code)
    document.documentElement.lang = code
    document.documentElement.dir = code === "ar" ? "rtl" : "ltr"
    // Apply full-page translation via Google Translate.
    if (!applyGoogleTranslate(code)) {
      setTimeout(() => {
        applyGoogleTranslate(code)
      }, 400)
    }
  }

  useEffect(() => {
    if (!language) return
    const timer = window.setTimeout(() => {
      applyGoogleTranslate(language)
    }, 250)
    return () => window.clearTimeout(timer)
  }, [pathname, language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => translations[language][key] ?? translations.en[key],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      <div id="google_translate_element" className="sr-only" />
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
