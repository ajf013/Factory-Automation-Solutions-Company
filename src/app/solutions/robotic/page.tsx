'use client'

import { motion } from 'framer-motion'
import { Footer } from '@/components/ui/Footer'
import { Bot, CheckCircle, Globe, Zap } from 'lucide-react'
import Link from 'next/link'

const roboticOfferings = [
  "Complete conveying automation solutions",
  "Machine tending solutions",
  "Material handling systems",
  "Turn key robotic solutions"
]

const applications = [
  "CNC machine tending automation",
  "Press tending automation",
  "Material handling automation",
  "Injection moulding automation",
  "Packing & palletizing automation",
  "Arc & spot welding automation",
  "Fettling & metal cutting automation",
  "Painting & glue dispensing automation",
  "Inspection & assembly automation",
  "Polishing & buffing automation",
  "Complete conveying automation"
]

const industries = [
  { name: "Manufacturing industry", desc: "Machining, welding, assembly products, etc." },
  { name: "Rubber industry", desc: "Tyre products, etc." },
  { name: "Metal industry", desc: "Casting, forging, etc." },
  { name: "Plastic & glass industry", desc: "Lens, plastic, mirror products, etc." },
  { name: "FMCG industry", desc: "Soft drinks, biscuits, etc." },
  { name: "Logistics industry", desc: "Electronic products, etc." },
  { name: "Chemical industry", desc: "Paint products, etc." },
  { name: "Bricks industry", desc: "Sand, clay products, etc." },
  { name: "Agri & sea food industry", desc: "Fertilizer, etc." },
  { name: "Paramedical industry", desc: "Tablets, drops, etc." },
  { name: "Plywood & paper industry", desc: "Paper, plywood products" }
]

export default function RoboticSolutionsPage() {
  return (
    <main className="relative pt-32 min-h-screen">
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="w-16 h-16 bg-blue-600/5 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-8 shadow-sm">
            <Bot size={36} />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight uppercase leading-none">
            Robotic <span className="text-blue-600">Solutions</span>
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Robotic Automation has found its way into many different areas in manufacturing. Robots perform tasks like welding, assembly, shipping, handling raw materials, and product packing. Manufacturers are leveraging robotic automation for a wider number of applications.
          </p>
        </motion.div>

        {/* What We Offer */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 uppercase tracking-tight">We offer the following <span className="text-blue-600">robotic solutions</span> for all types of industry sectors in India:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roboticOfferings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass border border-black/5 bg-white/40 flex items-center gap-5 group hover:bg-white hover:border-blue-600/20 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600/5 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CheckCircle size={20} />
                </div>
                <span className="text-gray-800 font-bold group-hover:text-blue-600 transition-colors uppercase text-sm tracking-wide">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Types of Applications */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 flex items-center gap-4 uppercase tracking-tighter">
            <Zap className="text-blue-600" size={36} />
            Types of Robotics Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="p-6 rounded-2xl glass border border-black/5 bg-white/40 flex items-center gap-4 group hover:bg-white hover:border-blue-600/20 transition-all shadow-sm"
              >
                <CheckCircle className="text-blue-600 shrink-0" size={18} />
                <span className="text-gray-800 text-xs font-bold uppercase tracking-wider group-hover:text-blue-600 transition-colors">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-32">
          <div className="p-12 md:p-20 rounded-[40px] glass border border-black/5 bg-white/50 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
              <Globe size={600} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-16 relative z-10 uppercase tracking-tight">Industries that use <span className="text-blue-600">Robotics</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              {industries.map((ind, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="space-y-2 group"
                >
                  <h3 className="text-gray-900 font-bold text-lg group-hover:text-blue-600 transition-colors uppercase tracking-tight">{ind.name}</h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">{ind.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-32 text-center">
          <div className="p-20 rounded-[40px] glass border border-black/5 bg-white/60 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-5xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">Ready to <span className="text-blue-600">Automate?</span></h3>
            <p className="text-gray-700 text-lg mb-12 font-medium">Get a specialized quote for your robotic automation needs today.</p>
            <Link href="/contact" className="inline-flex px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl shadow-blue-600/20 active:scale-95 uppercase tracking-widest text-sm">
              Get a Quote for Robotic Solutions
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

