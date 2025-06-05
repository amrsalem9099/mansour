"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface HeaderProps {
  language: "ar" | "en"
  setLanguage: (lang: "ar" | "en") => void
  navigation: Array<{ name: string; href: string; className?: string }>
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

export default function Header({ language, setLanguage, navigation, isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - يمكن استبدال الصورة بلوجو الشركة الفعلي */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="relative">
              <Image
                src="/MLOGO.png?height=50&width=50"
                alt="Mansour Pack Logo"
                width={50}
                height={50}
                className="rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-lg bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold gradient-text">Mansour Pack</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`nav-link ${language === "en" && item.className ? item.className : "mr-8 rtl:ml-8 rtl:mr-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="btn-enhanced flex items-center space-x-2 rtl:space-x-reverse hover:border-blue-600 hover:text-blue-600"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "ar" ? "EN" : "عربي"}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-blue-50 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "top-3"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2 rtl:hover:-translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
