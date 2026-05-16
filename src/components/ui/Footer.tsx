'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Globe, Video, ExternalLink } from 'lucide-react'

const industries = [
  "Automotive Industry", "FMCG Industry", "Textile Industry", "Castings & Forgings",
  "Electrical Industry", "Sheet, Pipe, Tube ware house", "Plastic Industry",
  "Pharmaceutical & healthcare industry segments"
]

const services = [
  { name: "Robotic automations", href: "/solutions/robotic" },
  { name: "Assembly automation", href: "/solutions" },
  { name: "CNC Auto loaders", href: "/solutions" },
  { name: "Gantry systems", href: "/solutions" },
  { name: "Conveyors", href: "/solutions" },
  { name: "Special Purpose machines – SPMs", href: "/solutions" },
  { name: "ASRS & AGV Systems", href: "/solutions" },
  { name: "Line automation solutions", href: "/solutions" }
]

export function Footer() {
  return (
    <footer className="relative border-t border-black/5 bg-gray-50/80 backdrop-blur-xl">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* About Column */}
          <div className="lg:col-span-1">
            <Image src="/logo.jpg" alt="Fasco India" width={160} height={50} className="h-10 w-auto object-contain mb-8" />
            <p className="text-gray-700 text-sm leading-relaxed mb-8 font-medium">
              Factory Automation Solutions Company [FASCO] specializing in smart, value-optimized industrial automation systems that improve productivity, operational efficiency, and workplace safety.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-700 hover:text-fasco-primary hover:border-fasco-primary/30 transition-all shadow-sm">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-700 hover:text-red-600 hover:border-red-600/30 transition-all shadow-sm">
                <Video size={18} />
              </a>
              <a href="https://www.linkedin.com/company/fasco-pvt-ltd-robotic-automation-systems/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-700 hover:text-fasco-primary hover:border-fasco-primary/30 transition-all shadow-sm">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* We Serve Column */}
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-8 border-b border-fasco-primary/10 pb-2 w-fit">We Serve</h4>
            <ul className="space-y-3">
              {industries.map((ind, i) => (
                <li key={i} className="text-gray-700 text-sm font-medium hover:text-fasco-primary transition-colors cursor-default">{ind}</li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-8 border-b border-fasco-primary/10 pb-2 w-fit">Services</h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i}>
                  <Link href={s.href} className="text-gray-700 text-sm font-medium hover:text-fasco-primary transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-8 border-b border-fasco-primary/10 pb-2 w-fit">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-fasco-primary shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 text-sm font-bold">Unit 1 – Singapore</p>
                  <p className="text-gray-700 text-xs mt-1 leading-relaxed">#02-2056, Block 3012, Bedok Industrial Park E, Singapore 489978</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-fasco-primary shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900 text-sm font-bold">Unit 2 – Coimbatore</p>
                  <p className="text-gray-700 text-xs mt-1 leading-relaxed">1400, Eran Thottam, Behind Deccan Industries, Ganapathy, Coimbatore -641006, Tamilnadu, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-fasco-primary shrink-0 mt-1" />
                <div className="text-gray-700 text-sm space-y-1 font-medium">
                  <p>+91 422 4960258</p>
                  <p>+91 78714 00997</p>
                  <p>+91 99945 22566</p>
                  <p className="text-xs text-gray-500 font-bold mt-2">Mr. Ravikannan (Technical Sales)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-fasco-primary shrink-0 mt-1" />
                <a href="mailto:sales@fascoindia.com" className="text-gray-700 text-sm font-bold hover:text-fasco-primary transition-colors">sales@fascoindia.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-black/5 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-bold">
            © {new Date().getFullYear()} Fasco India. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs font-bold">
            Coimbatore, India | +91 422 4960258
          </p>
        </div>
      </div>
    </footer>
  )
}

