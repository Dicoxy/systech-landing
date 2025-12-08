'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Scramble Text Effect
function ScrambleText({ 
  text, 
  delay = 0,
  className = '',
  style = {}
}: { 
  text: string
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789!@#$%&*'

  useEffect(() => {
    if (!isInView || isAnimating) return
    
    const timeout = setTimeout(() => {
      setIsAnimating(true)
      let iteration = 0
      const originalText = text
      
      const interval = setInterval(() => {
        setDisplayText(
          originalText
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' '
              if (index < iteration) return originalText[index]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')
        )
        
        iteration += 1/3
        
        if (iteration >= originalText.length) {
          clearInterval(interval)
          setDisplayText(originalText)
        }
      }, 30)
      
      return () => clearInterval(interval)
    }, delay)
    
    return () => clearTimeout(timeout)
  }, [isInView, text, delay, isAnimating])

  return (
    <span ref={ref} className={className} style={style}>
      {displayText}
    </span>
  )
}

export default function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Gradient orb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ 
          backgroundColor: 'rgba(0, 255, 136, 0.05)',
          filter: 'blur(150px)'
        }} 
      />

      {/* Centered narrow container */}
      <div ref={containerRef} className="relative z-10 w-full max-w-3xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {isInView && <ScrambleText text="О нас" delay={0} />}
          </h2>
          
          <div className="space-y-8 text-center">
            <p 
              className="text-xl md:text-2xl leading-relaxed"
              style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
            >
              <span style={{ color: '#00ff88' }}>
                {isInView && <ScrambleText text="Петербург." delay={200} />}
              </span>{' '}
              {isInView && (
                <ScrambleText 
                  text="Команда инженеров, которые верят, что будущее — за автономными системами." 
                  delay={400} 
                />
              )}
            </p>
            
            <motion.p 
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Мы создаём программные решения для управления флотами роботов, 
              внедряем искусственный интеллект в бизнес-процессы и автоматизируем 
              то, что раньше требовало десятков рук.
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Наш флагман — система <span style={{ color: '#00ff88' }}>MARS</span>. 
              Она следит за каждым роботом в режиме реального времени: 
              батарея, маршрут, статус, телеметрия. Один dashboard — полный контроль.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
