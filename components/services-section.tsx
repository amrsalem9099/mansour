"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Scissors, Printer, Package, Truck } from "lucide-react"

interface ServicesSectionProps {
  language: "ar" | "en"
  services: Array<{ id: number; name: string; image: string }>
  currentServiceSlide: number
  setCurrentServiceSlide: (slide: number) => void
  nextServiceSlide: () => void
  prevServiceSlide: () => void
}

export default function ServicesSection({
  language,
  services,
  currentServiceSlide,
  setCurrentServiceSlide,
  nextServiceSlide,
  prevServiceSlide,
}: ServicesSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const content = {
    ar: {
      title: "خدماتنا",
      subtitle: "خدمات متكاملة لتلبية جميع احتياجاتكم",
      requestBtn: "اطلب الخدمة",
      services: [
        {
          name: "خدمة قص الورق",
          desc: "قص دقيق للورق بأحجام مخصصة حسب الطلب",
          icon: Scissors,
        },
        {
          name: "خدمة الطباعة",
          desc: "طباعة عالية الجودة بأحدث التقنيات",
          icon: Printer,
        },
        {
          name: "خدمة التغليف",
          desc: "حلول تغليف مبتكرة وآمنة للمنتجات",
          icon: Package,
        },
        {
          name: "خدمة التوصيل",
          desc: "توصيل سريع وآمن لجميع أنحاء المملكة",
          icon: Truck,
        },
      ],
    },
    en: {
      title: "Our Services",
      subtitle: "Comprehensive Services to Meet All Your Needs",
      requestBtn: "Request Service",
      services: [
        {
          name: "Paper Cutting Service",
          desc: "Precise paper cutting in custom sizes as per order",
          icon: Scissors,
        },
        {
          name: "Printing Service",
          desc: "High-quality printing with latest technologies",
          icon: Printer,
        },
        {
          name: "Packaging Service",
          desc: "Innovative and safe packaging solutions for products",
          icon: Package,
        },
        {
          name: "Delivery Service",
          desc: "Fast and secure delivery throughout the Kingdom",
          icon: Truck,
        },
      ],
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const servicesPerSlide = 2
  const totalSlides = Math.ceil(content[language].services.length / servicesPerSlide)

  const getCurrentServices = () => {
    const start = currentServiceSlide * servicesPerSlide
    return content[language].services.slice(start, start + servicesPerSlide)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden" id="services">
      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 section-reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">{content[language].title}</h2>
          <p className="text-xl text-blue-600 font-semibold">{content[language].subtitle}</p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {getCurrentServices().map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 section-reveal ${isVisible ? "revealed" : ""}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Image */}
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt={service.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-20 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{service.name}</h3>
                  <p className="text-gray-700 mb-4">{service.desc}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                    {content[language].requestBtn}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="lg"
              onClick={prevServiceSlide}
              className="rounded-full p-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              {language === "ar" ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </Button>

            <div className="flex space-x-2 rtl:space-x-reverse">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentServiceSlide ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-blue-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextServiceSlide}
              className="rounded-full p-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              {language === "ar" ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
