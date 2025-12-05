'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState, memo } from 'react'
import ParticleGrid from './effects/ParticleGrid'
import DecorativeCode from './effects/DecorativeCode'
import { ChevronDown } from 'lucide-react'

// Magnetic Button Component
const MagneticButton = memo(function MagneticButton({ 
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

  if (!isPrimary) {
    return (
      <motion.button
        ref={ref}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          x: xSpring, 
          y: ySpring,
          position: 'relative',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div 
          style={{
            position: 'relative',
            borderRadius: '10px',
            padding: '2px',
            background: 'linear-gradient(90deg, #00ff88, #3b82f6, #00ff88, #3b82f6)',
            backgroundSize: '300% 100%',
            animation: 'borderGradient 3s linear infinite',
          }}
        >
          <div 
            style={{
              backgroundColor: '#0a0a0f',
              borderRadius: '8px',
              paddingLeft: '32px',
              paddingRight: '32px',
              paddingTop: '16px',
              paddingBottom: '16px',
            }}
          >
            <span 
              style={{ 
                color: '#00ff88',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              {children}
            </span>
          </div>
        </div>
      </motion.button>
    )
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        x: xSpring, 
        y: ySpring,
        background: 'linear-gradient(to right, #00ff88, #3b82f6)',
        border: 'none',
        borderRadius: '10px',
        paddingLeft: '32px',
        paddingRight: '32px',
        paddingTop: '16px',
        paddingBottom: '16px',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0, 255, 136, 0.2)',
      }}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0, 255, 136, 0.3)' }}
      whileTap={{ scale: 0.98 }}
    >
      <span 
        style={{ 
          color: '#0a0a0f',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </span>
    </motion.button>
  )
})

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
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
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      {/* Background gradient */}
      <div 
        style={{ 
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #0a0a0f, #12121a, #0a0a0f)' 
        }} 
      />
      
      {/* Spotlight effect */}
      <div 
        style={{ 
          position: 'absolute',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(0,255,136,0.02) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transition: 'opacity 0.3s',
        }} 
      />
      
      {/* Gradient orbs */}
      <div 
        style={{ 
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '384px',
          height: '384px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 255, 136, 0.08)',
          filter: 'blur(150px)'
        }} 
      />
      <div 
        style={{ 
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '384px',
          height: '384px',
          borderRadius: '50%',
          backgroundColor: 'rgba(59, 130, 246, 0.08)',
          filter: 'blur(150px)'
        }} 
      />
      
      {/* Particle grid */}
      <ParticleGrid />
      
      {/* Decorative code */}
      <DecorativeCode side="left" />
      <DecorativeCode side="right" />

      {/* Content */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <motion.h1
          style={{ 
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: 700,
            color: 'white',
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: '0',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          СИСТЕМНЫЕ
        </motion.h1>
        
        <motion.h1
          style={{ 
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: 700,
            color: 'white',
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ТЕХНОЛОГИИ
        </motion.h1>

        <motion.p
          style={{ 
            fontSize: 'clamp(18px, 3vw, 28px)',
            color: '#94a3b8',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '48px',
            letterSpacing: '0.2em',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Роботы. Данные. Контроль.
        </motion.p>

        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
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

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 2, repeat: Infinity }
        }}
      >
        <ChevronDown style={{ width: '32px', height: '32px', color: '#64748b' }} />
      </motion.div>
      
      <style jsx global>{`
        @keyframes borderGradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </section>
  )
}

export default memo(Hero)
