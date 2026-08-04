"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react"
import QRCode from "react-qr-code"

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleWhatsAppSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.message) {
      alert("Please fill in at least your name and message.")
      return
    }
    
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Company:* ${formData.company || 'N/A'}%0A%0A*Message:*%0A${formData.message}`
    window.open(`https://wa.me/917845391712?text=${text}`, '_blank')
  }

  const handleEmailSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.message) {
      alert("Please fill in at least your name and message.")
      return
    }
    
    const subject = `Website Inquiry from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company || 'N/A'}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = `mailto:sriwebsquad@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Get in Touch" 
          subtitle="Ready to start your digital transformation? Contact us today for a free consultation."
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Office Location</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Sri Web Squad<br/>
                      <a href="https://share.google/7zxcMzUmmJlVKwYFM" target="_blank" rel="noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline-offset-4 hover:underline">
                        Cuddalore, Tamil Nadu, India
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Phone Number</h4>
                    <p className="text-slate-600 dark:text-slate-400">+91 78453 91712</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Email Address</h4>
                    <p className="text-slate-600 dark:text-slate-400">sriwebsquad@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassCard className="p-6 bg-primary-50 dark:bg-primary-900/10 border-primary-100 dark:border-primary-900/30" hoverEffect={false}>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-primary-600" /> WhatsApp Direct
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Scan to chat with us directly on WhatsApp.
                </p>
                <div className="flex items-center gap-6 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm w-max">
                  <div className="bg-white p-2 rounded-xl shadow-sm">
                    <QRCode 
                      value="https://wa.me/917845391712" 
                      size={100}
                      level="H"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-lg text-slate-900 dark:text-white">Scan Me</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Or Click Below</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8" hoverEffect={false}>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                    <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                    <Input id="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 78453 91712" required />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                    <Input id="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700 dark:text-slate-300">Company (Optional)</label>
                    <Input id="company" value={formData.company} onChange={handleChange} placeholder="Your Company Name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project requirements..." required />
                </div>
                
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Button type="button" onClick={handleEmailSubmit} className="flex-1 shadow-lg shadow-primary-500/20">
                    <Mail className="w-4 h-4 mr-2" /> Send via Email
                  </Button>
                  <Button type="button" onClick={handleWhatsAppSubmit} variant="outline" className="flex-1 text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20">
                    <MessageCircle className="w-4 h-4 mr-2" /> Send via WhatsApp
                  </Button>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
