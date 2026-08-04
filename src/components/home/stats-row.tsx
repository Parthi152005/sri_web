"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Briefcase, Users, HeadphonesIcon } from "lucide-react"

export function StatsRow() {
  return (
    <section className="bg-black py-12 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto border border-slate-800 rounded-3xl p-6 md:p-10 bg-[#0a0a0a] shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-6 px-4 py-4 md:py-0 w-full md:w-auto justify-center">
              <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-white tracking-tight">50+</span>
                <span className="text-sm text-slate-400 font-medium tracking-wide">Projects Completed</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-6 px-4 py-4 md:py-0 w-full md:w-auto justify-center">
              <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-white tracking-tight">98%</span>
                <span className="text-sm text-slate-400 font-medium tracking-wide">Client Satisfaction</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-6 px-4 py-4 md:py-0 w-full md:w-auto justify-center">
              <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                <HeadphonesIcon className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-white tracking-tight">24/7</span>
                <span className="text-sm text-slate-400 font-medium tracking-wide">Support Available</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
