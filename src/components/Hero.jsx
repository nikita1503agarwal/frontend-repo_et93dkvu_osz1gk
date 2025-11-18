import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/40 via-[#0E0E10]/40 to-[#0E0E10] pointer-events-none" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#EDEAE3] tracking-tight"
        >
          Where elegance meets confidence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-[#EDEAE3]/80"
        >
          Lele’s Boutique, crafted for the woman who knows her worth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#services" className="inline-flex items-center rounded-full bg-gradient-to-r from-[#D7C8A0] to-[#C7B37A] text-[#0E0E10] px-6 py-3 text-sm font-semibold">Explore Services</a>
          <a href="#shop" className="inline-flex items-center rounded-full border border-[#D7C8A0]/60 text-[#EDEAE3] px-6 py-3 text-sm font-semibold hover:bg-white/5">Explore Collection</a>
        </motion.div>
      </div>
    </section>
  )
}
