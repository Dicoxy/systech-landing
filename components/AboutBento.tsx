'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Компонент счётчика с анимацией
function CountUp({
  target,
  suffix = '',
  duration = 1.5,
  delay = 0
}: {
  target: number
  suffix?: string
  duration?: number
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const startTimeout = setTimeout(() => {
      setHasStarted(true)
    }, delay * 1000)

    return () => clearTimeout(startTimeout)
  }, [isInView, delay])

  useEffect(() => {
    if (!hasStarted) return

    const totalSteps = 50 // количество шагов анимации
    const increment = target / totalSteps
    const stepDuration = (duration * 1000) / totalSteps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= totalSteps) {
        setCount(Math.floor(increment * currentStep))
      } else {
        setCount(target)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [hasStarted, target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function AboutBento() {
  return (
    <>
      {/* Separator line */}
      <div 
        style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 136, 0.4) 50%, transparent 100%)',
        }}
      />
      
      <section 
        id="about" 
        style={{ 
          minHeight: '100vh',
          backgroundColor: '#0a0a0f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 0',
        }}
      >
        {/* Background glow */}
        <motion.div 
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Centered container */}
        <div 
          style={{ 
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 40px',
          }}
        >
          {/* Bento Grid */}
          <div 
            style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
            }}
          >
            
            {/* Left: Text Block */}
            <motion.div 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                padding: '48px',
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Location tag */}
              <motion.div
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0, 255, 136, 0.1)',
                  border: '1px solid rgba(0, 255, 136, 0.2)',
                  marginBottom: '32px',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  style={{ 
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#00ff88',
                  }}
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(0, 255, 136, 0.4)', 
                      '0 0 0 8px rgba(0, 255, 136, 0)',
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span 
                  style={{ 
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#00ff88',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Санкт-Петербург
                </span>
              </motion.div>

              {/* Description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <motion.p
                  style={{ 
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Создаём управление флотами роботов
                </motion.p>
                <motion.p
                  style={{ 
                    fontSize: '24px',
                    fontWeight: 500,
                    color: '#94a3b8',
                    fontFamily: "'Space Grotesk', sans-serif",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Автоматизируем бизнес-процессы
                </motion.p>
                <motion.p
                  style={{ 
                    fontSize: '20px',
                    color: '#64748b',
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Внедряем Искусственный Интеллект в системы управления
                </motion.p>
              </div>
            </motion.div>

            {/* Right: Stats Grid */}
            <div 
              style={{ 
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '24px',
              }}
            >
              
              {/* Stat 1: Robots */}
              <motion.div
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: 700,
                    color: '#00ff88',
                    fontFamily: "'Space Grotesk', sans-serif",
                    marginBottom: '8px',
                  }}
                >
                  <CountUp target={100} suffix="+" duration={1.5} delay={0.4} />
                </div>
                <div 
                  style={{ 
                    fontSize: '14px',
                    color: '#64748b',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  роботов
                </div>
              </motion.div>

              {/* Stat 2: Cities */}
              <motion.div
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div
                  style={{
                    fontSize: '48px',
                    fontWeight: 700,
                    color: '#00ff88',
                    fontFamily: "'Space Grotesk', sans-serif",
                    marginBottom: '8px',
                  }}
                >
                  <CountUp target={5} duration={1.0} delay={2.0} />
                </div>
                <div 
                  style={{ 
                    fontSize: '14px',
                    color: '#64748b',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  городов
                </div>
              </motion.div>

              {/* Stat 3: Control */}
              <motion.div
                style={{ 
                  gridColumn: 'span 2',
                  backgroundColor: 'rgba(0, 255, 136, 0.05)',
                  border: '1px solid rgba(0, 255, 136, 0.15)',
                  borderRadius: '24px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.div 
                  style={{ 
                    fontSize: '56px',
                    fontWeight: 700,
                    color: '#00ff88',
                    fontFamily: "'Space Grotesk', sans-serif",
                    marginBottom: '8px',
                  }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  ∞
                </motion.div>
                <div 
                  style={{ 
                    fontSize: '14px',
                    color: '#94a3b8',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  контроль
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
