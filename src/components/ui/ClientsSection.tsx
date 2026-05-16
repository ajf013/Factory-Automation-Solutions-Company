'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clientLogos = [
  { name: "Ars-HTA", src: "/clients/ars-hta.jpg" },
  { name: "Redlands", src: "/clients/Redlans-logo.png" },
  { name: "Brakes India", src: "/clients/brakes-india.png" },
  { name: "Double Horse", src: "/clients/double-horse.png" },
  { name: "Siderforgerossi", src: "/clients/Siderforgerossi-Logo.png" },
  { name: "TVS Rubber", src: "/clients/tvs-rubber.svg" },
  { name: "ELGi", src: "/clients/elgi.png" },
]

// Duplicate the array to create a seamless infinite scroll
const scrollingLogos = [...clientLogos, ...clientLogos, ...clientLogos]

export function ClientsSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-fasco-primary" />
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter text-shadow-xl text-glow">
              Our <span className="text-fasco-primary">Clients</span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-fasco-primary" />
          </div>
          <p className="text-white text-xl font-bold text-shadow-md">
            Trusted by Industry Leaders Worldwide
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee - White Background for high visibility */}
      <div className="relative flex overflow-hidden py-12 bg-white shadow-2xl">
        <motion.div
          className="flex gap-24 items-center whitespace-nowrap"
          animate={{
            x: [0, -1920], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {scrollingLogos.map((client, i) => (
            <div 
              key={i} 
              className="relative w-48 h-20 flex-shrink-0 group hover:scale-110 transition-transform duration-500"
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Subtle Side Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}

