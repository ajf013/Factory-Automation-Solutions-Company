'use client'

import { motion } from 'framer-motion'
import { Footer } from '@/components/ui/Footer'
import { Cpu, Settings, Layers, Box, Truck, Layout, Workflow, Gauge } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    icon: Cpu,
    title: "Robotic Automations",
    desc: "Robotic Automation has found its way into many different areas in manufacturing. Robots perform tasks like welding, assembly, shipping, handling raw materials, and product packing. Manufacturers are leveraging robotic automation for a wider number of applications.",
    link: "/solutions/robotic"
  },
  {
    icon: Workflow,
    title: "Assembly Automation",
    desc: "Assembly automation is the application of robotics, software, digitalized data, and plant design engineering to manufacturing processes in order to minimize manual labor requirements while maximizing efficiency, safety, and output.",
    link: "#"
  },
  {
    icon: Box,
    title: "CNC Auto Loaders",
    desc: "Autoloaders automatically load and unload components to CNC turning centers. They are a low cost alternative to Robots.",
    link: "#"
  },
  {
    icon: Layers,
    title: "Gantry Systems",
    desc: "A motion-centric system designed for multi-axis operation with an overhead bridge is regularly called Gantry System.",
    link: "#"
  },
  {
    icon: Truck,
    title: "Conveyors",
    desc: "Conveyor systems allow for quick and efficient transportation of materials and products as well as being able to move heavy items such as cars down a production line which make them popular in the material handling and packaging industries as well as the manufacturing industries.",
    link: "#"
  },
  {
    icon: Settings,
    title: "Special Purpose Machines – SPMs",
    desc: "Infeed & outfeed systems ensure that the machine is continuously running and maximizes the production output.",
    link: "#"
  },
  {
    icon: Gauge,
    title: "ASRS & AGV Systems",
    desc: "Vending machines automatically dispense stored material when the customer places an order. Typical machines are food vending, medicine vending and tools vending. They are also called Automatic Storage and Retrieval systems.",
    link: "#"
  },
  {
    icon: Layout,
    title: "Line Automation Solutions",
    desc: "Workstations and assembly cells are at the heart of many manufacturing operations. They allow parts to be assembled at one station and progress to the next station. It is therefore critical that they are designed to be as ergonomic, flexible and efficient as possible.",
    link: "#"
  }
]

const weServe = [
  "Automotive Industry", "Textile Industry", "Electrical Industry", "Food & Beverage",
  "Castings & Forgings", "Plastic", "Sheet, Pipe, Tube ware house",
  "Pharmaceutical & healthcare industry segments"
]

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 px-4 md:px-12 max-w-7xl mx-auto py-20 pt-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-left mb-20 max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight uppercase leading-none">
            OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">SOLUTIONS</span>
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed font-medium">
            Discover our comprehensive suite of industrial automation and robotic solutions.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 lg:pr-[30%]">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-10 rounded-3xl glass border border-black/5 bg-white/40 hover:bg-white hover:border-blue-600/20 transition-all flex flex-col items-start group shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <sol.icon size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight uppercase tracking-tight">{sol.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow font-bold">{sol.desc}</p>
              <Link 
                href={sol.link}
                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group/link uppercase tracking-wider"
              >
                View more <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Instant Quote + We Serve */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Instant Quote Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 md:p-14 rounded-[40px] glass border border-black/5 bg-white/60 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none" />
            <h3 className="text-4xl font-bold text-gray-900 mb-10 tracking-tight uppercase">Get an <span className="text-blue-600">Instant Quote</span></h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-600/5 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                <input type="email" placeholder="Email Address" className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-600/5 transition-all" />
              </div>
              <div className="space-y-3 md:col-span-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Product Interest</label>
                <input type="text" placeholder="e.g. Robotic Arm" className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-600/5 transition-all" />
              </div>
              <button className="md:col-span-2 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 uppercase tracking-widest text-sm mt-4">
                Submit Quote Request
              </button>
            </form>
          </motion.div>

          {/* We Serve */}
          <div className="flex flex-col justify-center lg:pl-10">
            <h3 className="text-5xl font-bold text-gray-900 mb-12 tracking-tighter">INDUSTRIES <br /><span className="text-blue-600 uppercase">WE SERVE</span></h3>
            <div className="flex flex-wrap gap-4">
              {weServe.map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-8 py-4 rounded-2xl glass text-sm text-gray-800 font-bold hover:text-blue-600 hover:border-blue-600/30 transition-all border border-black/5 bg-white/40 shadow-sm"
                >
                  {ind}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

