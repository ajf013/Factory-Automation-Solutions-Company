'use client'

import { motion } from 'framer-motion'
import { Phone, FileText, Users } from 'lucide-react'
import { Footer } from '@/components/ui/Footer'

export default function GetAQuotePage() {
  return (
    <main className="relative pt-32 bg-[#030305] min-h-screen">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />
      
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            GET A <span className="text-blue-400">QUOTE</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Just fill out this quick form and our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-32">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-3 p-8 md:p-12 rounded-3xl glass-strong"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name *</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fasco-primary/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email *</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fasco-primary/50 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Phone Number *</label>
                  <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fasco-primary/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Company Name *</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fasco-primary/50 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Project Title</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fasco-primary/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Requirements *</label>
                <textarea rows={6} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fasco-primary/50 transition-colors resize-none" />
              </div>
              <button className="w-full py-4 bg-fasco-primary hover:bg-fasco-primary text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Submit Quote Request
              </button>
            </form>
          </motion.div>

          {/* What You Get */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">What you get</h3>
            {[
              { icon: Phone, title: "Phone Consultation", desc: "A phone call from one of our business consultants" },
              { icon: FileText, title: "Cost Estimate", desc: "A cost estimate of your project based upon your submission" },
              { icon: Users, title: "In-Person Meeting", desc: "An in-person meeting to discuss the finer details if necessary" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-fasco-primary/10 border border-fasco-primary/20 flex items-center justify-center text-blue-400 shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
