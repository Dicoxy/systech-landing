'use client'

import { motion } from 'framer-motion'
import ParticleGrid from '@/components/effects/ParticleGrid'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'linear-gradient(to bottom, #0a0a0f, #12121a, #0a0a0f)' 
        }} 
      />
      
      {/* Gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{ 
          backgroundColor: 'rgba(0, 255, 136, 0.1)',
          filter: 'blur(150px)'
        }} 
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
        style={{ 
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          filter: 'blur(150px)'
        }} 
      />
      
      {/* Particle grid */}
      <ParticleGrid />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          СИСТЕМНЫЕ ТЕХНОЛОГИИ
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl tracking-widest mb-12"
          style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.7 }}
        >
          Роботы. Данные. Контроль.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.9 }}
        >
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'linear-gradient(to right, #00ff88, #3b82f6)',
              color: '#0a0a0f',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            Узнать больше
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 font-semibold rounded-lg transition-all duration-300"
            style={{ 
              border: '1px solid #00ff88',
              color: '#00ff88',
              backgroundColor: 'transparent',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            Связаться
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 4.2, duration: 0.5 },
          y: { delay: 4.2, duration: 2, repeat: Infinity }
        }}
      >
        <ChevronDown className="w-8 h-8" style={{ color: '#64748b' }} />
      </motion.div>
    </section>
  )
}
