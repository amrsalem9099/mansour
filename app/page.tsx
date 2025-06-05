"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentProductSlide, setCurrentProductSlide] = useState(0)
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0)
  const [language, setLanguage] = useState<"ar" | "en">("ar")

  // Sample products data - Replace with actual product data
  const products = [
    { id: 1, name: "ورق A4", image: "/A4.jpeg?height=200&width=200" },
    { id: 2, name: "بكر كاشير", image: "/FAWRY.jpg?height=200&width=200" },
    { id: 3, name: "ورق جريدة", image: "/ELMASRY.jpg?height=200&width=200" },
    { id: 4, name: "ورق تغليف", image: "/WB.jpg?height=200&width=200" },
    { id: 5, name: "أكياس ورقية", image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "كراتين تغليف", image: "/placeholder.svg?height=200&width=200" },
  ]

  // Sample services data - Replace with actual service data
  const services = [
    { id: 1, name: "خدمة قص الورق", image: "/ELMASRY2.jpg?height=200&width=200" },
    { id: 2, name: "خدمة الطباعة", image: "/KKKK.jpg?height=200&width=200" },
    { id: 3, name: "خدمة التغليف", image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "خدمة التوزيع", image: "/placeholder.svg?height=200&width=200" },
  ]

  const navigation = [
    { name: language === "ar" ? "الصفحة الرئيسية" : "Home", href: "#home" },
    { name: language === "ar" ? "من نحن" : "About Us", href: "#about", className: "ml-8" },
    { name: language === "ar" ? "المنتجات" : "Products", href: "#products", className: "ml-8" },
    { name: language === "ar" ? "الخدمات" : "Services", href: "#services", className: "ml-8" },
    { name: language === "ar" ? "تواصل معنا" : "Contact Us", href: "#contact", className: "ml-8" },
  ]

  const nextProductSlide = () => {
    setCurrentProductSlide((prev) => (prev + 1) % Math.ceil(products.length / 3))
  }

  const prevProductSlide = () => {
    setCurrentProductSlide((prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3))
  }

  const nextServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev + 1) % Math.ceil(services.length / 3))
  }

  const prevServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3))
  }

  return (
    <div
      className={`min-h-screen bg-white ${language === "ar" ? "rtl" : "ltr"}`}
      dir={language === "ar" ? "rtl" : "ltr"}
      lang={language}
    >
      {/* Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        navigation={navigation}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <HeroSection language={language} />

      {/* About Section */}
      <AboutSection language={language} />

      {/* Products Section */}
      <ProductsSection
        language={language}
        products={products}
        currentProductSlide={currentProductSlide}
        setCurrentProductSlide={setCurrentProductSlide}
        nextProductSlide={nextProductSlide}
        prevProductSlide={prevProductSlide}
      />

      {/* Services Section */}
      <ServicesSection
        language={language}
        services={services}
        currentServiceSlide={currentServiceSlide}
        setCurrentServiceSlide={setCurrentServiceSlide}
        nextServiceSlide={nextServiceSlide}
        prevServiceSlide={prevServiceSlide}
      />

      {/* Contact Section */}
      <ContactSection language={language} />

      {/* Footer */}
      <Footer language={language} navigation={navigation} />
    </div>
  )
}
