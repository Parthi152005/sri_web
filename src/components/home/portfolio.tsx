"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = ["All", "Website", "App", "Software", "AI", "Dashboard"]

const projects = [
  {
    id: 1,
    title: "Dr. Gowtham's Smile Care",
    client: "Dental Clinic in Cuddalore",
    category: "Website",
    description: "A modern, responsive business website for a leading dental clinic featuring services, appointments, and contact integration.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://drgowthamsmilecare.in/",
    githubUrl: "#"
  }
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  
  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return projects
    return projects.filter(project => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Our Portfolio" 
          subtitle="Explore some of our recent projects and digital transformations."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="h-full flex flex-col p-0 overflow-hidden" hoverEffect={true}>
                  <div className="relative h-48 w-full overflow-hidden">
                    {/* Using next/image requires domain config, so we use img for placeholder if domains are not configured in next.config.ts */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-primary-600 dark:text-primary-400">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-2">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Client: {project.client}</p>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button asChild size="sm" className="w-full">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
