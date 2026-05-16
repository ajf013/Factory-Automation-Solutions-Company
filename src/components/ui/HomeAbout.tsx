'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HomeAbout() {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter uppercase text-shadow-white">
                Welcome to<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Fasco India</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-slate-900 text-xl md:text-2xl leading-relaxed font-bold tracking-tight text-shadow-sm">
                Factory Automation Solutions COmpany [FASCO] specializing in smart, value-optimized industrial automation systems that improve productivity, operational efficiency, and workplace safety.
              </p>
              <p className="text-slate-800 text-lg leading-relaxed font-semibold text-shadow-sm">
                As a leading robotic systems integrator, we design and deploy advanced automation solutions engineered to maximize throughput, eliminate operational bottlenecks, and deliver consistent, high-precision performance.
              </p>
              <p className="text-slate-700 leading-relaxed font-medium text-shadow-sm">
                Driven by a mission to address manpower fatigue and critical safety challenges, FASCO focuses on automation solutions that enhance mechanical precision, reduce downtime, and ensure reliable, repeatable operations across industrial environments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all group shadow-xl shadow-blue-600/20">
                KNOW MORE
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Stats + Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Robotic Systems" },
                { value: "25+", label: "Satisfied Customers" },
                { value: "0%", label: "Failure Ratio" },
                { value: "20+", label: "Expert Engineers" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/50 shadow-sm text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-slate-900 text-xs font-black uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-2xl glass border border-black/5 bg-white/40"
            >
              <h3 className="text-gray-900 font-bold mb-6">Multi-Brand Robot Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['ABB', 'DENSO', 'EPSON', 'NACHI', 'FANUC', 'YASKAWA'].map((brand) => (
                  <span key={brand} className="px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 text-blue-600 font-bold text-xs">{brand}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2 items-center">
                <span className="text-gray-500 text-xs font-bold uppercase mr-2">PLC Ecosystem:</span>
                {['SIEMENS', 'OMRON', 'DELTA', 'AB'].map((brand) => (
                  <span key={brand} className="px-3 py-1.5 rounded-full bg-black/5 border border-black/5 text-gray-600 font-bold text-xs">{brand}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

