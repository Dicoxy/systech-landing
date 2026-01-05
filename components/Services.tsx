'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Monitor, FileText, Brain } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Системы управления и мониторинга',
    description: 'Разработка комплексных решений для контроля и управления оборудованием, флотами роботов и производственными процессами в реальном времени.',
  },
  {
    icon: FileText,
    title: 'Автоматизация документооборота',
    description: 'Внедрение систем электронного документооборота, автоматизация рутинных процессов, интеграция с существующими бизнес-системами.',
  },
  {
    icon: Brain,
    title: 'Интеграция ИИ в бизнес-процессы',
    description: 'Применение искусственного интеллекта для оптимизации принятия решений, анализа данных и повышения эффективности бизнеса.',
  },
]

function ServiceCard({ service, index, isInView }: { service: typeof services[0], index: number, isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = service.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: '32px',
        borderRadius: '16px',
        backgroundColor: isHovered ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',
        border: `1px solid ${isHovered ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255,255,255,0.06)'}`,
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
      }}
    >
      {/* Hover gradient background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isHovered 
          ? 'radial-gradient(ellipse at top left, rgba(0, 255, 136, 0.08) 0%, transparent 50%)'
          : 'none',
        transition: 'all 0.4s ease',
        pointerEvents: 'none',
      }} />
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Icon + Title row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            backgroundColor: isHovered ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${isHovered ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255,255,255,0.08)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.4s ease',
            flexShrink: 0,
          }}>
            <Icon 
              size={24} 
              color={isHovered ? '#00ff88' : '#64748b'}
              strokeWidth={1.5}
              style={{ transition: 'color 0.4s ease' }}
            />
          </div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: isHovered ? '#ffffff' : '#e2e8f0',
            fontFamily: "'Space Grotesk', sans-serif",
            margin: 0,
            lineHeight: 1.4,
            transition: 'color 0.4s ease',
          }}>
            {service.title}
          </h3>
        </div>
        
        {/* Description */}
        <p style={{
          fontSize: '14px',
          color: '#64748b',
          fontFamily: "'Inter', sans-serif",
          margin: 0,
          lineHeight: 1.7,
          paddingLeft: '64px',
        }}>
          {service.description}
        </p>
        
        {/* Plus icon */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          backgroundColor: isHovered ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${isHovered ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255,255,255,0.06)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.4s ease',
        }}>
          <span style={{ 
            color: isHovered ? '#00ff88' : '#475569', 
            fontSize: '18px',
            transition: 'color 0.4s ease',
          }}>+</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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
        ref={sectionRef}
        id="services" 
        style={{ 
          minHeight: '100vh',
          backgroundColor: '#0a0a0f',
          position: 'relative',
          overflow: 'hidden',
          padding: '120px 40px',
        }}
      >
        {/* Background gradient */}
        <div 
          style={{ 
            position: 'absolute',
            top: '20%',
            left: '5%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0, 255, 136, 0.05) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          maxWidth: '1100px', 
          margin: '0 auto',
        }}>
          
          {/* Layout: Title on left, Cards on right with connecting lines */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '60px',
            alignItems: 'start',
          }}>
            
            {/* Left side: Title + Lines origin */}
            <div style={{ position: 'relative', paddingTop: '20px' }}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'inline-block',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: '#00ff88',
                  fontFamily: "'Space Grotesk', sans-serif",
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                Направления
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  margin: '0 0 24px 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                Услуги
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: '15px',
                  color: '#64748b',
                  fontFamily: "'Inter', sans-serif",
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                Комплексные IT-решения для современного бизнеса
              </motion.p>

              {/* Lines connecting to cards */}
              <svg 
                style={{ 
                  position: 'absolute',
                  top: '160px',
                  left: '100%',
                  width: '100px',
                  height: '450px',
                  overflow: 'visible',
                }}
              >
                {/* Line 1 - straight to first card icon */}
                <motion.path
                  d="M 0,0 L 80,0 Q 100,0 100,-20 L 100,-35 Q 100,-55 120,-55 L 160,-55"
                  fill="none"
                  stroke="#00ff88"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                <motion.circle
                  cx="160" cy="-55"
                  r="4"
                  fill="#00ff88"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 }}
                />
                
                {/* Line 2 - curves down to second card icon */}
                <motion.path
                  d="M 0,0 L 50,0 Q 70,0 70,20 L 70,175 Q 70,195 90,195 L 160,195"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.circle
                  cx="160"
                  cy="195"
                  r="4"
                  fill="#3b82f6"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.3 }}
                />
                
                {/* Line 3 - curves further down to third card icon */}
                <motion.path
                  d="M 0,0 L 20,0 Q 40,0 40,20 L 40,315 Q 40,335 60,335 L 160,335"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.0, delay: 0.8 }}
                />
                <motion.circle
                  cx="160"
                  cy="335"
                  r="4"
                  fill="#f59e0b"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.7 }}
                />
                
                {/* Origin point */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="6"
                  fill="#0a0a0f"
                  stroke="#00ff88"
                  strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 }}
                />
              </svg>
            </div>

            {/* Right side: Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  service={service} 
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
