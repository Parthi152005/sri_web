"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, MonitorSmartphone, Globe, Layout } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 bg-black text-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col lg:flex-row items-center pt-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary-600 text-white font-bold tracking-wider px-4 py-1 rounded-sm text-sm mb-6 uppercase shadow-lg shadow-primary-600/30">
              Professional
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-2 tracking-tight">
              DIGITAL<br />
              <span className="text-primary-600">SOLUTIONS</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-slate-200 mb-6 uppercase">
              For Modern Businesses
            </h2>

            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              We create powerful digital experiences that drive growth, build brand value, 
              and connect you with your audience.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-4 bg-transparent border border-slate-700 hover:border-slate-500 rounded-full text-white font-semibold transition-all group overflow-hidden pl-1 pr-6 py-1"
              >
                <div className="bg-primary-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <span className="tracking-wide">LET'S GROW TOGETHER</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Abstract UI Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-2xl"
           >
              <div className="relative bg-[#0a0a0a] border border-slate-800 rounded-xl overflow-hidden shadow-2xl shadow-primary-900/20 aspect-video flex">
                {/* Fake Browser/App Header */}
                <div className="absolute top-0 w-full h-8 bg-[#111] border-b border-slate-800 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-800" />
                  <div className="w-3 h-3 rounded-full bg-slate-800" />
                  <div className="w-3 h-3 rounded-full bg-slate-800" />
                </div>

                {/* Internal UI Content */}
                <div className="flex-1 mt-8 p-8 md:p-12 flex flex-col justify-center items-start bg-gradient-to-br from-[#0a0a0a] to-[#111]">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded bg-primary-600/20 flex items-center justify-center">
                       <Layout className="w-4 h-4 text-primary-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                    WE BUILD<br />BRANDS THAT
                  </h3>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
                    LEAD & INSPIRE
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-8 max-w-sm">
                    Creative strategies. Stunning designs. Powerful results.
                  </p>
                  
                  <Link href="#services" className="px-6 py-2 bg-primary-600 rounded-full text-sm font-semibold hover:bg-primary-500 transition-colors cursor-pointer inline-flex items-center gap-2">
                    Explore Our Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Abstract graphic right side of mockup */}
                <div className="hidden md:flex absolute right-0 top-8 bottom-0 w-1/2 items-center justify-center pointer-events-none">
                  <div className="relative w-64 h-64 border border-slate-800 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 border border-primary-900/50 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-56 h-56 border-t border-primary-600 rounded-full animate-[spin_10s_linear_infinite]" />
                    <Globe className="w-24 h-24 text-primary-600/20 absolute" />
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-10 -right-6 md:right-10 w-40 md:w-48 bg-[#0a0a0a] border-4 border-slate-800 rounded-[2rem] shadow-2xl aspect-[9/19] overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-1/2 mx-auto" />
                <div className="p-4 pt-10 flex flex-col h-full bg-gradient-to-b from-[#111] to-black">
                  <h4 className="text-xs font-bold text-slate-300 mt-4 leading-snug">WE GROW<br/>YOUR BUSINESS</h4>
                  <h4 className="text-xs font-bold text-primary-600 mb-2">ONLINE</h4>
                  <p className="text-[10px] text-slate-500 mb-4">From ideas to impact, we turn your vision into digital success.</p>
                  
                  <Link href="#contact" className="text-[10px] bg-primary-600 rounded-full py-1.5 px-3 text-center mb-auto text-white hover:bg-primary-500 transition-colors">Get Free Quote →</Link>

                  <div className="flex justify-between border-t border-slate-800 pt-3 mt-4">
                    <div className="text-center">
                      <div className="text-primary-600 font-bold text-sm">50+</div>
                      <div className="text-[8px] text-slate-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-primary-600 font-bold text-sm">98%</div>
                      <div className="text-[8px] text-slate-500">Clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  )
}
