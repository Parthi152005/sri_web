"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dr. Gowtham",
    company: "Dr. Gowtham's Smile Care",
    content: "Sri Web Squad transformed our clinic's online presence completely. The modern website they built for us has significantly increased our patient inquiries and appointments.",
    rating: 5,
  },
]

export function Reviews() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play
  React.useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Client Reviews" 
          subtitle="Don't just take our word for it. Here's what our partners have to say."
        />

        <div className="max-w-4xl mx-auto mt-12 relative">
          <div className="flex justify-center items-center h-full min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <GlassCard className="p-8 md:p-12 text-center relative max-w-3xl mx-auto" hoverEffect={false}>
                  <Quote className="w-12 h-12 text-primary-500/20 absolute top-8 left-8" />
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 italic mb-8 relative z-10">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Controls */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex 
                        ? "bg-primary-600 w-8" 
                        : "bg-slate-300 dark:bg-slate-700"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
