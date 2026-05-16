'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-3"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-strong rounded-2xl px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="/logo.jpg" alt="Fasco India" width={160} height={50} className="h-10 w-auto object-contain" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${pathname === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'}`}>
              Home
            </Link>
            
            {/* About Us Dropdown */}
            <div className="relative group">
              <button className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 ${pathname.startsWith('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'}`}>
                About Us <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-56 glass-strong rounded-2xl py-2 shadow-xl border border-black/5 bg-white/90 backdrop-blur-xl">
                  <Link href="/about" className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                    <div className="font-bold">About Fasco</div>
                    <div className="text-xs text-gray-500 mt-0.5">Our story and expertise</div>
                  </Link>
                  <Link href="/about/facility" className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                    <div className="font-bold">Facility & Team</div>
                    <div className="text-xs text-gray-500 mt-0.5">Infrastructure & process</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 ${pathname.startsWith('/solutions') ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'}`}>
                Solutions <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-56 glass-strong rounded-2xl py-2 shadow-xl border border-black/5 bg-white/90 backdrop-blur-xl">
                  <Link href="/solutions" className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                    <div className="font-bold">All Solutions</div>
                    <div className="text-xs text-gray-500 mt-0.5">Complete automation portfolio</div>
                  </Link>
                  <Link href="/solutions/robotic" className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                    <div className="font-bold">Robotic Solutions</div>
                    <div className="text-xs text-gray-500 mt-0.5">Industrial robotics applications</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/contact" className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${pathname === '/contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'}`}>
              Contact
            </Link>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/get-a-quote" className="hidden sm:flex px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20">
              Get a Quote
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-2xl p-4 space-y-1 bg-white/90 backdrop-blur-xl border border-black/5"
          >
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-sm font-bold">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-sm font-bold">About Fasco</Link>
            <Link href="/about/facility" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-sm font-bold">Facility & Team</Link>
            <Link href="/solutions" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-sm font-bold">Solutions</Link>
            <Link href="/solutions/robotic" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-sm font-bold">Robotic Solutions</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 text-sm font-bold">Contact</Link>
            <Link href="/get-a-quote" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold text-center mt-2 shadow-lg shadow-blue-600/20">Get a Quote</Link>
          </motion.div>
        )}

      </motion.nav>
    </>
  )
}
