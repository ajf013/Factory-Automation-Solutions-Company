'use client'

import { motion } from 'framer-motion'
import { Footer } from '@/components/ui/Footer'
import { Target, Eye, CheckCircle, Lightbulb, Handshake, Shield, Star } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-32">
      <div className="relative z-10 px-4 md:px-12 max-w-7xl mx-auto py-20">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-left mb-20 max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight leading-none uppercase">
            ABOUT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">FASCO</span>
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed font-medium">
            Leading robotic systems integrator specializing in smart, value-optimized industrial automation systems.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-10">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gray-800 text-lg md:text-xl leading-relaxed font-bold">
              Factory Automation Solutions COmpany [FASCO] specializing in smart, value-optimized industrial automation systems that improve productivity, operational efficiency, and workplace safety.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-700 text-lg leading-relaxed">
              Driven by a mission to address manpower fatigue and critical safety challenges, FASCO focuses on automation solutions that enhance mechanical precision, reduce downtime, and ensure reliable, repeatable operations across industrial environments.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-600 leading-relaxed font-medium">
              Our advanced engineering and system design capabilities are led by Team Singapore, while our advanced manufacturing, assembly, and execution operations are based in Coimbatore, India.
            </motion.p>
          </div>
          
          {/* Placeholder for the 3D element on the right */}
          <div className="hidden lg:block h-[400px]"></div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 rounded-[40px] glass border border-black/5 bg-white/50 group shadow-sm hover:shadow-xl transition-all"
          >
            <Eye className="text-blue-600 mb-8" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              To work as a dedicated and committed team that is highly focused in constantly upgrading its quality, well on par with international standards.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="p-12 rounded-[40px] glass border border-black/5 bg-white/50 group shadow-sm hover:shadow-xl transition-all"
          >
            <Target className="text-blue-600 mb-8" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              Team with our customers to achieve manufacturing excellence by developing reliable factory automation solutions and smart machines.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 tracking-tighter uppercase">CORE <span className="text-blue-600">VALUES</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Going beyond the impossible." },
              { icon: Handshake, title: "Commitment", desc: "Fair and transparent business." },
              { icon: Shield, title: "Excellence", desc: "No compromise quality philosophy." },
              { icon: Star, title: "Satisfaction", desc: "Achieving maximum returns for clients." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl glass border border-black/5 bg-white/40 hover:bg-white transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <value.icon size={30} />
                </div>
                <h3 className="text-gray-900 font-bold mb-4 text-xl uppercase tracking-tight">{value.title}</h3>
                <p className="text-gray-600 text-sm font-bold leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

