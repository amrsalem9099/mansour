"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, ScrollText, File } from "lucide-react"

interface HeroSectionProps {
  language: "ar" | "en"
}

export default function HeroSection({ language }: HeroSectionProps) {
  const [papers, setPapers] = useState<
    Array<{ id: number; type: string; size: number; left: number; delay: number; rotation: number }>
  >([])

  const content = {
    ar: {
      title: "Mansour Pack",
      subtitle: "الجودة في كل ورقة",
      description: "حلول متكاملة في منتجات الورق والتغليف",
      cta: "تواصل معنا",
      cta2: "اطلب الآن",
      features: ["جودة عالية", "خدمة سريعة", "أسعار تنافسية"],
    },
    en: {
      title: "Mansour Pack",
      subtitle: "Quality in Every Sheet",
      description: "Comprehensive solutions in paper and packaging products",
      cta: "Contact Us",
      cta2: "Order Now",
      features: ["High Quality", "Fast Service", "Competitive Prices"],
    },
  }

  useEffect(() => {
    // Generate paper elements
    const paperTypes = ["scroll", "file", "sheet"]
    const newPapers = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: paperTypes[Math.floor(Math.random() * paperTypes.length)],
      size: Math.random() * 30 + 20,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      rotation: Math.random() * 360,
    }))
    setPapers(newPapers)
  }, [])

  const renderPaperIcon = (type: string, size: number) => {
    switch (type) {
      case "scroll":
        return <ScrollText className="w-full h-full text-white/10" />
      case "file":
        return <FileText className="w-full h-full text-white/10" />
      case "sheet":
      default:
        return <File className="w-full h-full text-white/10" />
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Paper Elements */}
        <div className="particles">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="absolute floating-animation"
              style={{
                width: `${paper.size}px`,
                height: `${paper.size}px`,
                left: `${paper.left}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${paper.delay}s`,
                transform: `rotate(${paper.rotation}deg)`,
              }}
            >
              {renderPaperIcon(paper.type, paper.size)}
            </div>
          ))}
        </div>

        {/* Paper Roll Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 floating-animation">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white/10 rounded-full"></div>
            <div className="absolute inset-2 bg-blue-900/30 rounded-full"></div>
            <div className="absolute inset-4 bg-white/10 rounded-full"></div>
            <div className="absolute inset-6 bg-blue-900/30 rounded-full"></div>
            <div className="absolute inset-8 bg-white/10 rounded-full"></div>
          </div>
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 floating-animation" style={{ animationDelay: "1s" }}>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white/10 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-2 bg-blue-900/30 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-4 bg-white/10 rounded-lg transform rotate-45"></div>
          </div>
        </div>
        <div className="absolute bottom-40 left-20 w-16 h-24 floating-animation" style={{ animationDelay: "2s" }}>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
            <div className="absolute inset-y-0 inset-x-2 bg-blue-900/30"></div>
            <div className="absolute inset-y-0 inset-x-4 bg-white/10"></div>
            <div className="absolute inset-y-0 inset-x-6 bg-blue-900/30"></div>
          </div>
        </div>
      </div>

      {/* Background Image - يمكن استبدالها بصورة خلفية مناسبة للشركة */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/MLOGO.png?height=800&width=1200"
          alt="Mansour Pack Background"
          fill
          className="object-cover opacity-5 blur-sm"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in-up">{content[language].title}</h1>

          <h2
            className="text-2xl md:text-4xl font-semibold text-blue-200 mb-8 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {content[language].subtitle}
          </h2>

          <p
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {content[language].description}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-blue-600 px-10 py-5 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              {content[language].cta2}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
