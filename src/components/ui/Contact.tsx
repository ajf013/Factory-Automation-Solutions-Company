'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="p-10 md:p-20 rounded-[40px] glass-strong text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            GET IN <span className="text-blue-400">TOUCH</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
          >
            Ready to automate your production line? Our technical sales team is here to help you design the perfect solution.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MapPin, title: "Locations", desc: "Singapore (HQ) & Coimbatore, India (Factory)" },
              { icon: Mail, title: "Email", desc: "sales@fascoindia.com" },
              { icon: Phone, title: "Technical Sales", desc: "+91 78714 00997 | +91 99945 22566\nMr. Ravikannan" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass text-center"
              >
                <item.icon className="text-blue-400 mx-auto mb-4" size={24} />
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm whitespace-pre-line">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold flex items-center gap-2 transition-all group shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/get-a-quote" className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-semibold transition-all">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
