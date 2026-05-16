'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clientLogos = [
  { name: "Ars-HTA", src: "/clients/ars-hta.png" },
  { name: "Redlands", src: "/clients/redlands.png" },
  { name: "Brakes India", src: "/clients/brakes-india.png" },
  { name: "Double Horse", src: "/clients/double-horse.png" },
  { name: "Siderforgerossi", src: "/clients/siderforgerossi.png" },
  { name: "TVS Rubber", src: "/clients/tvs-rubber.png" },
  { name: "ELGi", src: "/clients/elgi.png" },
]

// Duplicate the array to create a seamless infinite scroll
const scrollingLogos = [...clientLogos, ...clientLogos, ...clientLogos]

export function ClientsSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-fasco-primary" />
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter text-shadow-lg">
              Our <span className="text-fasco-primary">Clients</span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-fasco-primary" />
          </div>
          <p className="text-white/80 font-bold text-lg text-shadow-md">
            Trusted by Industry Leaders Worldwide
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative flex overflow-hidden py-10 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <motion.div
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{
            x: [0, -1920], // Adjust based on total width
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
              className="relative w-48 h-24 flex-shrink-0 group grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain filter brightness-100 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}

