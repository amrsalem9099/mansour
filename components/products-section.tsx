"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from "lucide-react"

interface ProductsSectionProps {
  language: "ar" | "en"
  products: Array<{ id: number; name: string; image: string }>
  currentProductSlide: number
  setCurrentProductSlide: (slide: number) => void
  nextProductSlide: () => void
  prevProductSlide: () => void
}

export default function ProductsSection({
  language,
  products,
  currentProductSlide,
  setCurrentProductSlide,
  nextProductSlide,
  prevProductSlide,
}: ProductsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const content = {
    ar: {
      title: "منتجاتنا",
      subtitle: "تشكيلة واسعة من منتجات الورق والتغليف",
      orderBtn: "طلب المنتج",
      viewBtn: "عرض التفاصيل",
      products: [
        { name: "ورق A4", desc: "ورق طباعة عالي الجودة للمكاتب والمدارس" },
        { name: "بكر كاشير", desc: "بكر حرارية للطباعة في نقاط البيع" },
        { name: "ورق جريدة", desc: "ورق عالي الجودة للطباعة والنشر" },
        { name: "ورق تغليف", desc: "حلول تغليف متنوعة لجميع الاحتياجات" },
        { name: "أكياس ورقية", desc: "أكياس صديقة للبيئة بتصاميم مختلفة" },
        { name: "كراتين تغليف", desc: "كراتين قوية ومتينة للشحن والتخزين" },
      ],
    },
    en: {
      title: "Our Products",
      subtitle: "Wide Range of Paper and Packaging Products",
      orderBtn: "Order Product",
      viewBtn: "View Details",
      products: [
        { name: "A4 Paper", desc: "High-quality printing paper for offices and schools" },
        { name: "Cashier Rolls", desc: "Thermal rolls for point-of-sale printing" },
        { name: "Newspaper", desc: "High-quality paper for printing and publishing" },
        { name: "Wrapping Paper", desc: "Diverse packaging solutions for all needs" },
        { name: "Paper Bags", desc: "Eco-friendly bags with various designs" },
        { name: "Packaging Boxes", desc: "Strong and durable boxes for shipping and storage" },
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

  const productsPerSlide = 3
  const totalSlides = Math.ceil(products.length / productsPerSlide)

  const getCurrentProducts = () => {
    const start = currentProductSlide * productsPerSlide
    return products.slice(start, start + productsPerSlide)
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden"
      id="products"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 section-reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">{content[language].title}</h2>
          <p className="text-xl text-blue-600 font-semibold">{content[language].subtitle}</p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {getCurrentProducts().map((product, index) => {
              const productInfo = content[language].products[products.indexOf(product)]
              return (
                <div
                  key={product.id}
                  className={`enhanced-card bg-white rounded-2xl shadow-lg overflow-hidden group section-reveal ${isVisible ? "revealed" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={productInfo?.name || product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center space-x-4 rtl:space-x-reverse transition-all duration-300 ${
                        hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full p-3">
                        <Eye className="w-5 h-5" />
                      </Button>
                      <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full p-3">
                        <ShoppingCart className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {productInfo?.name || product.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {productInfo?.desc || "وصف المنتج يمكن إضافته هنا"}
                    </p>

                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <Button className="btn-enhanced flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        <ShoppingCart className="w-4 h-4 mr-2 rtl:ml-2" />
                        {content[language].orderBtn}
                      </Button>
                      <Button variant="outline" className="btn-enhanced border-blue-600 text-blue-600 hover:bg-blue-50">
                        {content[language].viewBtn}
                      </Button>
                    </div>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )
            })}
          </div>

          {/* Enhanced Navigation */}
          <div className="flex justify-center items-center space-x-6 rtl:space-x-reverse">
            <Button
              variant="outline"
              size="lg"
              onClick={prevProductSlide}
              className="btn-enhanced rounded-full p-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {language === "ar" ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
            </Button>

            <div className="flex space-x-3 rtl:space-x-reverse">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentProductSlide ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-blue-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextProductSlide}
              className="btn-enhanced rounded-full p-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {language === "ar" ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
