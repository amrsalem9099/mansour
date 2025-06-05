"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle, Award, Users, Truck, TrendingUp } from "lucide-react"

interface AboutSectionProps {
  language: "ar" | "en"
}

export default function AboutSection({ language }: AboutSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ experience: 0, clients: 0, projects: 0, satisfaction: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const content = {
    ar: {
      title: "من نحن",
      subtitle: "رائدون في صناعة الورق والتغليف",
      description:
        "نحن في Mansour Pack نُقدّم حلولًا متكاملة في صناعة وتوزيع منتجات الورق والتعبئة والتغليف. نتميز بجودة عالية، وتنوع في المنتجات، وخدمة عملاء موثوقة.",
      features: [
        { icon: Award, title: "جودة عالية", desc: "منتجات تلبي أعلى معايير الجودة العالمية" },
        { icon: Users, title: "فريق محترف", desc: "خبراء متخصصون في مجال الورق والتغليف" },
        { icon: Truck, title: "توصيل سريع", desc: "خدمة توصيل موثوقة وسريعة لجميع أنحاء المملكة" },
        { icon: CheckCircle, title: "ضمان الجودة", desc: "ضمان شامل على جميع منتجاتنا وخدماتنا" },
      ],
      stats: [
        { number: 40, label: "سنة خبرة", suffix: "+" },
        { number: 500, label: "عميل راضي", suffix: "+" },
        { number: 1000, label: "مشروع مكتمل", suffix: "+" },
        { number: 98, label: "نسبة الرضا", suffix: "%" },
      ],
    },
    en: {
      title: "About Us",
      subtitle: "Leaders in Paper and Packaging Industry",
      description:
        "At Mansour Pack, we provide comprehensive solutions in manufacturing and distributing paper and packaging products. We excel in high quality, product diversity, and reliable customer service.",
      features: [
        { icon: Award, title: "High Quality", desc: "Products that meet the highest international quality standards" },
        { icon: Users, title: "Professional Team", desc: "Specialized experts in paper and packaging field" },
        { icon: Truck, title: "Fast Delivery", desc: "Reliable and fast delivery service throughout the Kingdom" },
        {
          icon: CheckCircle,
          title: "Quality Assurance",
          desc: "Comprehensive warranty on all our products and services",
        },
      ],
      stats: [
        { number: 40, label: "Years Experience", suffix: "+" },
        { number: 500, label: "Happy Clients", suffix: "+" },
        { number: 1000, label: "Projects Done", suffix: "+" },
        { number: 98, label: "Satisfaction Rate", suffix: "%" },
      ],
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    content[language].stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.number / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= stat.number) {
          current = stat.number
          clearInterval(timer)
        }

        setCounters((prev) => ({
          ...prev,
          [index === 0 ? "experience" : index === 1 ? "clients" : index === 2 ? "projects" : "satisfaction"]:
            Math.floor(current),
        }))
      }, stepDuration)
    })
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      id="about"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g fill="%233b82f6" fillOpacity="0.1"><circle cx="30" cy="30" r="4"/></g></g></svg>\')',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 section-reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{content[language].title}</h2>
          <p className="text-xl text-blue-600 font-semibold mb-8">{content[language].subtitle}</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">{content[language].description}</p>
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 section-reveal ${isVisible ? "revealed" : ""}`}>
          {content[language].stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {index === 0
                    ? counters.experience
                    : index === 1
                      ? counters.clients
                      : index === 2
                        ? counters.projects
                        : counters.satisfaction}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Image */}
          <div className={`relative section-reveal ${isVisible ? "revealed" : ""}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <Image
                src="/POST.png?height=400&width=600"
                alt="Mansour Pack Factory"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg floating-animation">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-blue-600 rounded-full p-4 shadow-lg floating-animation"
              style={{ animationDelay: "1s" }}
            >
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content[language].features.map((feature, index) => (
              <div
                key={index}
                className={`enhanced-card bg-white p-6 rounded-2xl shadow-lg section-reveal ${isVisible ? "revealed" : ""}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
