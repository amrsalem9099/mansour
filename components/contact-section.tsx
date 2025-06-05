"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react"

interface ContactSectionProps {
  language: "ar" | "en"
}

export default function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const content = {
    ar: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لخدمتكم",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "الرسالة",
        submit: "إرسال الرسالة",
      },
      info: {
        address: "العنوان: القاهرة، جمهورية مصر العربية",
        phone: "الهاتف: +20 2 1234 5678",
        email: "البريد الإلكتروني: info@mansourpack.com",
        social: "تابعونا على:",
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "We are here to serve you",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Message",
        submit: "Send Message",
      },
      info: {
        address: "Address: Cairo, Egypt",
        phone: "Phone: +20 2 1234 5678",
        email: "Email: info@mansourpack.com",
        social: "Follow us:",
      },
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // هنا يتم إضافة منطق إرسال النموذج إلى قاعدة البيانات أو الخادم
    console.log("Form submitted:", formData)
    alert(language === "ar" ? "تم إرسال رسالتكم بنجاح!" : "Your message has been sent successfully!")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-blue-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{content[language].title}</h2>
          <p className="text-xl text-blue-600 font-semibold">{content[language].subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content[language].form.name}</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content[language].form.email}</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content[language].form.phone}</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{content[language].form.message}</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {content[language].form.submit}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">{content[language].info.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">{content[language].info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">{content[language].info.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-bold text-blue-900 mb-6">{content[language].info.social}</h3>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {/* يجب تعديل هذه الروابط لتوجه إلى حسابات الشركة الفعلية على وسائل التواصل الاجتماعي */}
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* خريطة الموقع - يجب استبدال هذا القسم بخريطة Google Maps الفعلية للشركة */}
            <div className="bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">
                  {language === "ar"
                    ? "سيتم إضافة خريطة Google Maps هنا لموقع الشركة"
                    : "Google Maps will be added here for company location"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
