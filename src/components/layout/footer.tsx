import Link from "next/link"
import Image from "next/image"
import { Phone, Globe } from "lucide-react"

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-[#050505] text-slate-300 py-12 border-t border-slate-900 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Sleek Footer Bar */}
        <div className="max-w-6xl mx-auto border border-slate-800 rounded-full py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 bg-[#0a0a0a] shadow-[0_0_30px_rgba(37,99,235,0.05)]">
          
          {/* Phone */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <a href="tel:+917845391712" className="text-white font-medium hover:text-primary-500 transition-colors tracking-wide">
              +91 78453 91712
            </a>
          </div>

          <div className="hidden md:block w-px h-8 bg-slate-800" />

          {/* Website/Email */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <a href="https://sriwebsquad.com" className="text-white font-medium hover:text-primary-500 transition-colors tracking-wide">
              sriwebsquad@gmail.com
            </a>
          </div>

          <div className="hidden md:block w-px h-8 bg-slate-800" />

          {/* Socials */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500 hover:scale-110 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <FacebookIcon className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500 hover:scale-110 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <InstagramIcon className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500 hover:scale-110 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <LinkedinIcon className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500 hover:scale-110 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <YoutubeIcon className="w-5 h-5 text-white" />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Sri Web Squad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
