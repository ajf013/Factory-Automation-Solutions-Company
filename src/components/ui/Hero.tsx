'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Bot, Zap, Shield, Handshake, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-4 md:px-12 overflow-hidden">
      <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600/10 bg-blue-50 text-blue-600 text-sm font-bold mb-8"
          >
            <Bot size={16} />
            <span>Factory Automation Solutions Company</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight uppercase text-shadow-white"
          >
            INDUSTRIAL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-glow">
              AUTOMATION
            </span><br />
            <span className="text-xl sm:text-2xl md:text-3xl text-slate-500 font-bold tracking-wide">& ROBOTIC SOLUTIONS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-slate-900 max-w-xl mb-8 leading-relaxed font-bold text-shadow-sm"
          >
            We design and deploy advanced automation solutions engineered to maximize throughput, eliminate operational bottlenecks, and deliver consistent, high-precision performance across industrial environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row flex-wrap items-center gap-4 mb-12"
          >
            <Link href="/solutions" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all group shadow-xl shadow-blue-600/20 text-base">
              Explore Solutions
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold flex items-center justify-center transition-all shadow-md text-base">
              Get Started
            </Link>
          </motion.div>

          {/* Value Prop Cards - Now part of the flow to prevent overlap */}
          <div className="grid grid-cols-2 gap-4 max-w-xl">
            {[
              { icon: Zap, title: "Innovation", desc: "Going beyond the impossible." },
              { icon: Handshake, title: "Commitment", desc: "Long-term partnerships." },
              { icon: Shield, title: "Excellence", desc: "Surpassing expectations." },
              { icon: Star, title: "Satisfaction", desc: "Maximum returns for clients." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                className="p-4 rounded-xl bg-white/60 backdrop-blur-md border border-slate-200/50 shadow-sm group hover:bg-white transition-all"
              >
                <item.icon className="text-blue-600 mb-2 group-hover:scale-110 transition-transform" size={20} />
                <h3 className="text-slate-900 font-bold text-xs uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-[10px] font-bold leading-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side is intentionally empty for the background 3D element */}
        <div className="hidden lg:block h-[600px]"></div>
      </div>
    </section>
  )
}

