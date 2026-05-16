'use client'

import { motion } from 'framer-motion'
import { Building2, Factory, ShieldCheck, Zap, Gauge, Settings, Cpu, Layers } from 'lucide-react'

const clients = [
  { name: "Mother-son Automotive", icon: Factory, color: "bg-blue-600" },
  { name: "Pricol Limited", icon: Gauge, color: "bg-slate-800" },
  { name: "Wheels India", icon: Settings, color: "bg-blue-500" },
  { name: "Murugappa Group", icon: Building2, color: "bg-slate-900" },
  { name: "LMW", icon: Cpu, color: "bg-blue-700" },
  { name: "ITW", icon: Zap, color: "bg-slate-700" },
  { name: "Saint Gobain", icon: Layers, color: "bg-blue-600" },
  { name: "ELGI", icon: ShieldCheck, color: "bg-slate-800" },
  { name: "L&T", icon: Building2, color: "bg-blue-900" },
  { name: "Rane", icon: Settings, color: "bg-slate-600" },
  { name: "ITC Limited", icon: Factory, color: "bg-blue-800" },
  { name: "Hindustan Unilever", icon: Building2, color: "bg-slate-700" },
  { name: "Marico", icon: Zap, color: "bg-blue-500" }
]

export function ClientsSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase text-shadow-white">
            Our <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-slate-900 font-bold text-lg text-shadow-sm">
            Trusted by Industry Leaders — Delivering Excellence One Project at a Time
          </p>
        </motion.div>

        {/* Vertical Staggered List - Appearing One by One Down */}
        <div className="flex flex-col gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: i * 0.15, // Deliberate stagger: coming one by one
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              className="group flex items-center justify-between p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-2xl shadow-slate-200/20 hover:bg-white hover:border-blue-600/30 transition-all duration-500"
            >
              <div className="flex items-center gap-8">
                {/* Generated 'Logo' Mark with Gradient */}
                <div className={`w-20 h-20 rounded-2xl ${client.color} bg-gradient-to-br from-current to-black/20 flex items-center justify-center text-white shadow-xl shadow-blue-600/10 group-hover:scale-105 group-hover:rotate-3 transition-all duration-500`}>
                  <client.icon size={36} />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-blue-600 transition-colors duration-500">
                    {client.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1 w-16 bg-blue-600 rounded-full group-hover:w-32 transition-all duration-700" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">Premier Partner</span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex flex-col items-end gap-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div key={s} className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  ))}
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Verified Excellence</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

