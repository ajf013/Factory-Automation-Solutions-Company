'use client'

import { motion } from 'framer-motion'
import { Footer } from '@/components/ui/Footer'
import { Factory, Users, Cpu, CheckSquare, Zap, Shield, Rocket, Settings, Headphones, ClipboardCheck } from 'lucide-react'

const processSteps = [
  { icon: ClipboardCheck, title: "Economic Technical Proposal", desc: "Detailed feasibility and cost analysis." },
  { icon: Cpu, title: "Mechanical & Software Design", desc: "CAD modeling and simulation using latest licensed software." },
  { icon: CheckSquare, title: "Design Approval Process", desc: "Collaborative review with the customer." },
  { icon: Settings, title: "Procurement Planning", desc: "Optimized sourcing of high-quality components." },
  { icon: Zap, title: "Execution", desc: "Mechanical and electrical assembly in our 3500 sq.ft facility." },
  { icon: Shield, title: "Factory Acceptance Test (FAT)", desc: "Rigorous testing before shipment." },
  { icon: Rocket, title: "Installation at Site", desc: "Professional setup at customer premises." },
  { icon: ClipboardCheck, title: "Site Acceptance Test (SAT)", desc: "Final verification in live production." },
  { icon: Users, title: "Customer Training", desc: "Empowering your team to operate and maintain systems." },
  { icon: Headphones, title: "After Sales Service", desc: "Continuous support and maintenance." }
]

export default function FacilityPage() {
  return (
    <main className="relative pt-32 min-h-screen">
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight uppercase">
            Facility & <span className="text-fasco-primary">Team</span>
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            A state-of-the-art infrastructure supported by a team of specialized engineers.
          </p>
        </motion.div>

        {/* Infrastructure Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          <div className="lg:col-span-2 p-12 rounded-3xl glass border border-black/5 bg-white/50">
            <Factory className="text-fasco-primary mb-8" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">World-Class Infrastructure</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-800 text-lg md:text-xl font-medium">
                <div className="w-2.5 h-2.5 rounded-full bg-fasco-primary mt-2.5 shrink-0" />
                <span>3500 sq.ft workspace dedicated to machine building and assembly.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-800 text-lg md:text-xl font-medium">
                <div className="w-2.5 h-2.5 rounded-full bg-fasco-primary mt-2.5 shrink-0" />
                <span>2000 sq.ft in-house machine shop and fabrication setup.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-800 text-lg md:text-xl font-medium">
                <div className="w-2.5 h-2.5 rounded-full bg-fasco-primary mt-2.5 shrink-0" />
                <span>Fully equipped with latest tools and a well-supported supplier backend.</span>
              </li>
            </ul>
          </div>
          <div className="p-12 rounded-3xl bg-fasco-primary/5 border border-fasco-primary/10 backdrop-blur-md flex flex-col justify-center text-center">
            <Users className="text-fasco-primary mb-8 mx-auto" size={56} />
            <div className="text-7xl font-bold text-fasco-primary mb-2">20+</div>
            <div className="text-gray-900 font-bold uppercase tracking-widest text-sm mb-4">Expert Engineers</div>
            <p className="text-gray-700 font-bold text-sm">Trained in design, development, manufacturing, and quality assurance.</p>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-20 uppercase tracking-tight">Our Development <span className="text-fasco-primary">Lifecycle</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-2xl glass border border-black/5 hover:border-fasco-primary/20 bg-white/40 hover:bg-white transition-all flex flex-col items-center text-center group shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-fasco-primary/5 flex items-center justify-center text-fasco-primary mb-6 group-hover:bg-fasco-primary group-hover:text-white transition-all shadow-sm">
                  <step.icon size={24} />
                </div>
                <h3 className="text-gray-900 font-bold text-sm mb-3 leading-tight uppercase tracking-wide">{step.title}</h3>
                <p className="text-gray-600 text-xs font-bold leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

