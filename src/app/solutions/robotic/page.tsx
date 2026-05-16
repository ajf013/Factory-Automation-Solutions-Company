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
          <div className="w-20 h-20 bg-fasco-primary/20 rounded-3xl flex items-center justify-center text-fasco-primary mx-auto mb-8 shadow-[0_0_30px_rgba(0,137,209,0.3)]">
            <Bot size={44} />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight uppercase leading-none text-shadow-xl">
            Robotic <span className="text-transparent bg-clip-text bg-gradient-to-r from-fasco-primary to-fasco-secondary text-shadow-blue text-glow">Solutions</span>
          </h1>
          <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed font-bold text-shadow-md">
            Robotic Automation has found its way into many different areas in manufacturing. Robots perform tasks like welding, assembly, shipping, handling raw materials, and product packing. Manufacturers are leveraging robotic automation for a wider number of applications.
          </p>
        </motion.div>

        {/* What We Offer */}
        <div className="mb-32">
          <h2 className="text-3xl font-black text-white mb-10 uppercase tracking-tight text-shadow-lg">We offer the following <span className="text-transparent bg-clip-text bg-gradient-to-r from-fasco-primary to-fasco-secondary text-shadow-blue">robotic solutions</span> for all types of industry sectors in India:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roboticOfferings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl glass-strong border border-white/20 bg-white/80 flex items-center gap-6 group hover:bg-white transition-all shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-fasco-primary/10 flex items-center justify-center text-fasco-primary shrink-0 group-hover:bg-fasco-primary group-hover:text-white transition-all shadow-md">
                  <CheckCircle size={24} />
                </div>
                <span className="text-slate-900 font-black group-hover:text-fasco-primary transition-colors uppercase text-sm tracking-widest leading-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Types of Applications */}
        <div className="mb-32">
          <h2 className="text-4xl font-black text-white mb-16 flex items-center gap-4 uppercase tracking-tighter text-shadow-xl">
            <Zap className="text-fasco-primary text-glow" size={44} />
            Types of Robotics Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                className="p-6 rounded-2xl glass-strong border border-white/20 bg-white/70 flex items-center gap-4 group hover:bg-white transition-all shadow-lg"
              >
                <CheckCircle className="text-fasco-primary shrink-0" size={20} />
                <span className="text-slate-900 text-xs font-black uppercase tracking-wider group-hover:text-fasco-primary transition-colors">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-32">
          <div className="p-12 md:p-20 rounded-[50px] glass-strong border border-white/20 bg-white/80 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-[0.05] pointer-events-none text-fasco-primary">
              <Globe size={600} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-16 relative z-10 uppercase tracking-tight border-b border-fasco-primary/20 pb-4 w-fit">Industries that use <span className="text-fasco-primary">Robotics</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              {industries.map((ind, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.05 }}
                   className="space-y-3 group"
                >
                  <h3 className="text-slate-900 font-black text-xl group-hover:text-fasco-primary transition-colors uppercase tracking-tight">{ind.name}</h3>
                  <p className="text-slate-700 text-sm font-bold leading-relaxed">{ind.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-32 text-center">
          <div className="p-20 rounded-[50px] glass-strong border border-white/20 bg-white/90 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Ready to <span className="text-fasco-primary">Automate?</span></h3>
            <p className="text-slate-700 text-xl mb-12 font-bold leading-relaxed">Get a specialized quote for your robotic automation needs today.</p>
            <Link href="/contact" className="inline-flex px-12 py-5 bg-fasco-primary hover:bg-fasco-primary/90 text-white font-black rounded-full transition-all shadow-2xl shadow-fasco-primary/40 active:scale-95 uppercase tracking-widest text-sm">
              Get a Quote for Robotic Solutions
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

