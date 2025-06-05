import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  language: "ar" | "en"
  navigation: Array<{ name: string; href: string }>
}

export default function Footer({ language, navigation }: FooterProps) {
  const content = {
    ar: {
      company: "Mansour Pack",
      description: "رائدون في صناعة وتوزيع منتجات الورق والتعبئة والتغليف",
      quickLinks: "روابط سريعة",
      contact: "معلومات التواصل",
      social: "تابعونا",
      copyright: "© 2024 Mansour Pack. جميع الحقوق محفوظة.",
      address: "القاهرة، جمهورية مصر العربية",
      phone: "+20 2 1234 5678",
      email: "info@mansourpack.com",
    },
    en: {
      company: "Mansour Pack",
      description: "Leaders in manufacturing and distributing paper and packaging products",
      quickLinks: "Quick Links",
      contact: "Contact Information",
      social: "Follow Us",
      copyright: "© 2024 Mansour Pack. All rights reserved.",
      address: "Cairo, Egypt",
      phone: "+20 2 1234 5678",
      email: "info@mansourpack.com",
    },
  }

  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{content[language].company}</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">{content[language].description}</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {/* يمكن تعديل الروابط لتوجه إلى حسابات الشركة الفعلية */}
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content[language].quickLinks}</h4>
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-blue-200 hover:text-white transition-colors duration-200 hover:translate-x-1 rtl:hover:-translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{content[language].contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm">{content[language].address}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm">{content[language].phone}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm">{content[language].email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-200">{content[language].copyright}</p>
        </div>
      </div>
    </footer>
  )
}
