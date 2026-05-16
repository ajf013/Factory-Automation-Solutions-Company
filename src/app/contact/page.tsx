'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, User } from 'lucide-react'
import { Footer } from '@/components/ui/Footer'

export default function ContactPage() {
  return (
    <main className="relative pt-32 min-h-screen">
      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight uppercase leading-none">
            CONTACT <span className="text-fasco-primary">US</span>
          </h1>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Contact Details */}
          <div className="space-y-8">
            {/* Singapore */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-10 rounded-3xl glass border border-black/5 bg-white/50 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-fasco-primary" size={24} />
                <h3 className="text-gray-900 font-bold text-xl uppercase tracking-tight">Unit 1 – Singapore</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed ml-9 font-medium">#02-2056, Block 3012, Bedok Industrial Park E, Singapore 489978</p>
              <div className="flex items-center gap-3 mt-6 ml-9">
                <Mail size={18} className="text-fasco-primary" />
                <a href="mailto:sales@fascoindia.com" className="text-gray-700 font-bold hover:text-fasco-primary transition-colors">sales@fascoindia.com</a>
              </div>
            </motion.div>

            {/* Coimbatore */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-3xl glass border border-black/5 bg-white/50 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-fasco-primary" size={24} />
                <h3 className="text-gray-900 font-bold text-xl uppercase tracking-tight">Unit 2 – Coimbatore</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed ml-9 font-medium">1400, Eran Thottam, Behind Deccan Industries, Ganapathy, Coimbatore -641006, Tamilnadu, India.</p>
              <div className="space-y-3 mt-6 ml-9">
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <Phone size={18} className="text-fasco-primary" />
                  <span>+91 422 4960258</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <Phone size={18} className="text-fasco-primary" />
                  <span>+91 78714 00997</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 font-medium">
                  <Phone size={18} className="text-fasco-primary" />
                  <span>+91 99945 22566</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-fasco-primary" />
                  <a href="mailto:sales@fascoindia.com" className="text-gray-700 font-bold hover:text-fasco-primary transition-colors">sales@fascoindia.com</a>
                </div>
              </div>
            </motion.div>

            {/* Regional Contacts */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-3xl glass border border-black/5 bg-white/50 shadow-sm"
            >
              <h3 className="text-gray-900 font-bold text-xl mb-8 uppercase tracking-tight">Regional Contacts</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fasco-primary/5 flex items-center justify-center text-fasco-primary">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold block">Chennai Region</span>
                    <span className="text-gray-600 text-sm font-medium">Mr. Dinesh Raj — sales@fascoindia.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-fasco-primary/5 flex items-center justify-center text-fasco-primary">
                    <User size={20} />
                  </div>
                  <div>
                    <span className="text-gray-900 font-bold block">Madurai Region</span>
                    <span className="text-gray-600 text-sm font-medium">Mr. V.Vilvapathy — sales@fascoindia.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 md:p-14 rounded-[40px] glass border border-black/5 bg-white/60 shadow-2xl h-fit sticky top-32"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-10 tracking-tight uppercase">Send us a <span className="text-fasco-primary">message</span></h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Name *</label>
                  <input type="text" required placeholder="Your Name" className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-fasco-primary/5 transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Email *</label>
                  <input type="email" required placeholder="Email Address" className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-fasco-primary/5 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Phone Number *</label>
                  <input type="tel" required placeholder="Phone Number" className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-fasco-primary/5 transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Company Name</label>
                  <input type="text" placeholder="Company Name" className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-fasco-primary/5 transition-all" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Subject</label>
                <input type="text" placeholder="Topic of interest" className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-fasco-primary/5 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">Your Message *</label>
                <textarea rows={5} required placeholder="How can we help you?" className="w-full bg-black/5 border border-black/5 rounded-2xl px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-fasco-primary/5 transition-all resize-none" />
              </div>
              <button className="w-full py-5 bg-fasco-primary hover:bg-fasco-primary text-white font-bold rounded-2xl transition-all shadow-xl shadow-fasco-primary/20 active:scale-95 uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

