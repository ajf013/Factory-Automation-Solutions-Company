'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Cpu, Settings, Truck, Layers, Box, Layout, Workflow, Gauge } from 'lucide-react'
import { useRef } from 'react'

const solutions = [
  { icon: Cpu, title: "Robotic Automations", desc: "Robots perform tasks like welding, assembly, shipping, handling raw materials, and product packing. Manufacturers are leveraging robotic automation for a wider number of applications.", link: "/solutions/robotic" },
  { icon: Workflow, title: "Assembly Automation", desc: "Application of robotics, software, digitalized data, and plant design engineering to minimize manual labor while maximizing efficiency, safety, and output.", link: "/solutions" },
  { icon: Box, title: "CNC Auto Loaders", desc: "Autoloaders automatically load and unload components to CNC turning centers. A low cost alternative to Robots.", link: "/solutions" },
  { icon: Layers, title: "Gantry Systems", desc: "A motion-centric system designed for multi-axis operation with an overhead bridge is regularly called Gantry System.", link: "/solutions" },
  { icon: Truck, title: "Conveyors", desc: "Quick and efficient transportation of materials and heavy items down a production line. Popular in material handling, packaging, and manufacturing.", link: "/solutions" },
  { icon: Settings, title: "Special Purpose Machines – SPMs", desc: "Infeed & outfeed systems ensure that the machine is continuously running and maximizes the production output.", link: "/solutions" },
  { icon: Gauge, title: "ASRS & AGV Systems", desc: "Automatic Storage and Retrieval systems. Vending machines automatically dispense stored material when orders are placed.", link: "/solutions" },
  { icon: Layout, title: "Line Automation Solutions", desc: "Workstations and assembly cells designed to be as ergonomic, flexible and efficient as possible for modern manufacturing.", link: "/solutions" }
]



export function Solutions() {
  return (
    <section id="solutions" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white mb-4 uppercase text-shadow-lg"
            >
              OUR <span className="text-fasco-primary">SOLUTIONS</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white max-w-xl text-lg font-bold text-shadow-md"
            >
              Where design, fit, form, and function come together for factory automation excellence.
            </motion.p>
          </div>
          <Link href="/solutions" className="px-8 py-3 bg-fasco-primary hover:bg-fasco-primary/90 text-white rounded-xl text-sm font-bold transition-all shadow-xl shadow-fasco-primary/20">
            View All Portfolio
          </Link>
        </div>
      </div>

      {/* Solutions Grid - Appearing One by One Down */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        {solutions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1, // Stagger effect: coming one by one
              ease: "easeOut" 
            }}
            className="group p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-slate-200 shadow-xl shadow-slate-200/10 hover:shadow-fasco-primary/20 transition-all flex flex-col justify-between h-[380px]"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-fasco-primary flex items-center justify-center text-white mb-8 shadow-lg shadow-fasco-primary/20 group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight whitespace-normal uppercase tracking-tight group-hover:text-fasco-primary transition-colors">{item.title}</h3>
              <p className="text-slate-800 text-base leading-relaxed whitespace-normal line-clamp-4 font-bold">{item.desc}</p>
            </div>
            
            <Link href={item.link} className="inline-flex items-center gap-2 text-fasco-primary text-sm font-black group/link mt-6 uppercase tracking-wider">
              Explore Solution <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

