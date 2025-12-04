'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import ParticleGrid from './effects/ParticleGrid'
import { ChevronDown } from 'lucide-react'

// Magnetic Button Component
function MagneticButton({ 
  children, 
  onClick, 
  variant = 'primary' 
}: { 
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * 0.3
    const deltaY = (e.clientY - centerY) * 0.3
    x.set(deltaX)
    y.set(deltaY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const isPrimary = variant === 'primary'

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-10 py-4 text-base font-semibold rounded-lg transition-colors duration-300 ${
        isPrimary ? '' : 'hover:bg-white/5'
      }`}
    >
      <span 
        className="relative z-10"
        style={{ 
          color: isPrimary ? '#0a0a0f' : '#00ff88',
          fontFamily: "'Space Grotesk', sans-serif"
        }}
      >
        {children}
      </span>
      {isPrimary && (
        <motion.div 
          className="absolute inset-0 rounded-lg -z-0"
          style={{ background: 'linear-gradient(to right, #00ff88, #3b82f6)' }}
        />
      )}
      {!isPrimary && (
        <div 
          className="absolute inset-0 rounded-lg"
          style={{ border: '1px solid #00ff88' }}
        />
      )}
    </motion.button>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'linear-gradient(to bottom, #0a0a0f, #12121a, #0a0a0f)' 
        }} 
      />
      
      {/* Spotlight effect - follows cursor */}
      <div 
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{ 
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
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

      {/* Content - Grid layout for mascot space */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-8 items-center">
        
        {/* Text content - 3 columns */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", marginBottom: '16px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            СИСТЕМНЫЕ ТЕХНОЛОГИИ
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl tracking-widest"
            style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif", marginBottom: '60px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Роботы. Данные. Контроль.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MagneticButton onClick={scrollToAbout} variant="primary">
              Узнать больше
            </MagneticButton>
            <MagneticButton onClick={scrollToContact} variant="secondary">
              Связаться
            </MagneticButton>
          </motion.div>
        </div>

        {/* Mascot space - 2 columns */}
        <motion.div 
          className="lg:col-span-2 hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Placeholder for mascot - "Наблюдатель" */}
          <div 
            className="w-80 h-80 rounded-full flex items-center justify-center"
            style={{ 
              border: '2px dashed rgba(0,255,136,0.3)',
              backgroundColor: 'rgba(0,255,136,0.02)'
            }}
          >
            <span 
              className="text-sm"
              style={{ color: 'rgba(0,255,136,0.4)', fontFamily: "'Inter', sans-serif" }}
            >
              Маскот: Наблюдатель
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 2, repeat: Infinity }
        }}
      >
        <ChevronDown className="w-8 h-8" style={{ color: '#64748b' }} />
      </motion.div>
    </section>
  )
}
