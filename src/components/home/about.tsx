"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { Target, Lightbulb, Users, Clock, ShieldCheck } from "lucide-react"

const features = [
  { name: "Experienced Team", icon: Users },
  { name: "Latest Technologies", icon: Lightbulb },
  { name: "Affordable Pricing", icon: Target },
  { name: "Fast Delivery", icon: Clock },
  { name: "Quality Support", icon: ShieldCheck },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="About Us" 
          subtitle="Discover the story behind Sri Web Squad and our commitment to digital excellence."
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital solutions, automation, and intelligent software that drive growth, efficiency, and long-term success.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To become a global leader in technological innovation, helping organizations seamlessly transition into the future of digital business.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.name} className="flex items-center gap-4 p-2 hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-inner">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium text-slate-700 dark:text-slate-300">{feature.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
