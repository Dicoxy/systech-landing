'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback, forwardRef } from 'react'
import { Monitor, FileText, Brain } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Системы управления и мониторинга',
    description: 'Разработка комплексных решений для контроля и управления оборудованием, флотами роботов и производственными процессами в реальном времени.',
    color: '#00ff88',
  },
  {
    icon: FileText,
    title: 'Автоматизация документооборота',
    description: 'Внедрение систем электронного документооборота, автоматизация рутинных процессов, интеграция с существующими бизнес-системами.',
    color: '#3b82f6',
  },
  {
    icon: Brain,
    title: 'Интеграция ИИ в бизнес-процессы',
    description: 'Применение искусственного интеллекта для оптимизации принятия решений, анализа данных и повышения эффективности бизнеса.',
    color: '#f59e0b',
  },
]

// ServiceCard с forwardRef для получения ref на иконку
interface ServiceCardProps {
  service: typeof services[0]
  index: number
  isInView: boolean
  onIconRef: (index: number, el: HTMLDivElement | null) => void
}

function ServiceCard({ service, index, isInView, onIconRef }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = service.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.4 }}
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
          <div 
            ref={(el) => onIconRef(index, el)}
            style={{
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
            }}
          >
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
      </div>
      
      {/* Plus icon - positioned relative to card */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        backgroundColor: isHovered ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${isHovered ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255,255,255,0.06)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.4s ease',
        zIndex: 2,
      }}>
        <span style={{ 
          color: isHovered ? '#00ff88' : '#475569', 
          fontSize: '18px',
          transition: 'color 0.4s ease',
        }}>+</span>
      </div>
    </motion.div>
  )
}

// Компонент для динамических линий
interface AnimatedLinesProps {
  originRef: React.RefObject<HTMLDivElement>
  iconRefs: (HTMLDivElement | null)[]
  isInView: boolean
  containerRef: React.RefObject<HTMLElement>
}

function AnimatedServiceLines({ originRef, iconRefs, isInView, containerRef }: AnimatedLinesProps) {
  const [paths, setPaths] = useState<{ d: string; color: string; delay: number }[]>([])
  const [originPoint, setOriginPoint] = useState({ x: 0, y: 0 })
  const [endPoints, setEndPoints] = useState<{ x: number; y: number }[]>([])

  const calculatePaths = useCallback(() => {
    if (!originRef.current || !containerRef.current) return
    
    const containerRect = containerRef.current.getBoundingClientRect()
    const originRect = originRef.current.getBoundingClientRect()
    
    // Точка старта относительно контейнера
    const originX = originRect.left + originRect.width / 2 - containerRect.left
    const originY = originRect.top + originRect.height / 2 - containerRect.top
    
    setOriginPoint({ x: originX, y: originY })
    
    const newEndPoints: { x: number; y: number }[] = []
    const newPaths: { d: string; color: string; delay: number }[] = []
    
    iconRefs.forEach((iconEl, index) => {
      if (!iconEl) return
      
      const iconRect = iconEl.getBoundingClientRect()
      // Центр левой стороны иконки
      const endX = iconRect.left - containerRect.left
      const endY = iconRect.top + iconRect.height / 2 - containerRect.top
      
      newEndPoints.push({ x: endX, y: endY })
      
      // Строим кривую Безье от origin к иконке
      const deltaY = endY - originY
      const deltaX = endX - originX
      
      // Радиус скругления
      const radius = 20
      
      // Определяем направление: вверх, прямо или вниз
      let path: string
      
      if (index === 0) {
        // Первая карточка - линия идёт вверх, потом вправо
        // Горизонтальный участок от origin
        const horizLength = deltaX * 0.6
        // Вертикальный участок вверх
        const vertEnd = endY + radius
        
        path = `
          M ${originX},${originY}
          L ${originX + horizLength - radius},${originY}
          Q ${originX + horizLength},${originY} ${originX + horizLength},${originY - radius}
          L ${originX + horizLength},${endY + radius}
          Q ${originX + horizLength},${endY} ${originX + horizLength + radius},${endY}
          L ${endX},${endY}
        `
      } else if (index === 1) {
        // Вторая карточка - линия идёт немного вниз, потом вправо
        const horizLength = deltaX * 0.4
        
        path = `
          M ${originX},${originY}
          L ${originX + horizLength - radius},${originY}
          Q ${originX + horizLength},${originY} ${originX + horizLength},${originY + radius}
          L ${originX + horizLength},${endY - radius}
          Q ${originX + horizLength},${endY} ${originX + horizLength + radius},${endY}
          L ${endX},${endY}
        `
      } else {
        // Третья карточка - линия идёт вниз, потом вправо
        const horizLength = deltaX * 0.2
        
        path = `
          M ${originX},${originY}
          L ${originX + horizLength - radius},${originY}
          Q ${originX + horizLength},${originY} ${originX + horizLength},${originY + radius}
          L ${originX + horizLength},${endY - radius}
          Q ${originX + horizLength},${endY} ${originX + horizLength + radius},${endY}
          L ${endX},${endY}
        `
      }
      
      newPaths.push({
        d: path.replace(/\s+/g, ' ').trim(),
        color: services[index].color,
        delay: 0.4 + index * 0.3,
      })
    })
    
    setEndPoints(newEndPoints)
    setPaths(newPaths)
  }, [originRef, iconRefs, containerRef])

  useEffect(() => {
    // Начальный расчёт с задержкой для рендера
    const timer = setTimeout(calculatePaths, 100)
    
    // Пересчёт при resize
    const handleResize = () => {
      calculatePaths()
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [calculatePaths])

  // Пересчитываем когда появляются refs
  useEffect(() => {
    if (iconRefs.every(ref => ref !== null)) {
      calculatePaths()
    }
  }, [iconRefs, calculatePaths])

  if (paths.length === 0) return null

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      {/* Origin point */}
      <motion.circle
        cx={originPoint.x}
        cy={originPoint.y}
        r="6"
        fill="#0a0a0f"
        stroke="#00ff88"
        strokeWidth="2"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.3 }}
      />
      
      {/* Animated paths */}
      {paths.map((path, index) => (
        <g key={index}>
          <motion.path
            d={path.d}
            fill="none"
            stroke={path.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: path.delay }}
          />
          {/* End point circle */}
          <motion.circle
            cx={endPoints[index]?.x || 0}
            cy={endPoints[index]?.y || 0}
            r="4"
            fill={path.color}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: path.delay + 0.7 }}
          />
        </g>
      ))}
    </svg>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const originRef = useRef<HTMLDivElement>(null)
  const [iconRefs, setIconRefs] = useState<(HTMLDivElement | null)[]>([null, null, null])
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleIconRef = useCallback((index: number, el: HTMLDivElement | null) => {
    setIconRefs(prev => {
      const newRefs = [...prev]
      newRefs[index] = el
      return newRefs
    })
  }, [])

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

        <div 
          ref={containerRef}
          style={{ 
            position: 'relative', 
            zIndex: 10, 
            maxWidth: '1100px', 
            margin: '0 auto',
          }}
        >
          {/* Animated lines SVG overlay */}
          <AnimatedServiceLines 
            originRef={originRef}
            iconRefs={iconRefs}
            isInView={isInView}
            containerRef={containerRef}
          />
          
          {/* Layout: Title on left, Cards on right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '60px',
            alignItems: 'start',
          }}>
            
            {/* Left side: Title + Origin point */}
            <div style={{ position: 'relative', paddingTop: '20px' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  backgroundColor: 'rgba(0, 255, 136, 0.05)',
                  marginBottom: '24px',
                }}
              >
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#00ff88',
                }} />
                <span style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: '#00ff88',
                  fontFamily: "'Space Grotesk', sans-serif",
                  textTransform: 'uppercase',
                }}>
                  Направления
                </span>
              </motion.div>
              
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
                  margin: '0 0 40px 0',
                  lineHeight: 1.7,
                }}
              >
                Комплексные IT-решения для современного бизнеса
              </motion.p>

              {/* Origin point for lines */}
              <div 
                ref={originRef}
                style={{
                  width: '12px',
                  height: '12px',
                  marginLeft: '100%',
                  marginTop: '20px',
                }}
              />
            </div>

            {/* Right side: Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  service={service} 
                  index={index}
                  isInView={isInView}
                  onIconRef={handleIconRef}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
