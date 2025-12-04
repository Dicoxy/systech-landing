'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Bot, Brain, Cog } from 'lucide-react'

// 3D Tilt Service Card with Glitch
function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  index,
  mascotName 
}: { 
  icon: any
  title: string
  description: string
  index: number
  mascotName: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="h-full"
      >
        <div 
          className="relative h-full p-8 rounded-2xl transition-all duration-300"
          style={{ 
            backgroundColor: '#12121a',
            border: '1px solid rgba(255,255,255,0.1)',
            transform: 'translateZ(20px)'
          }}
        >
          {/* Gradient border on hover */}
          <motion.div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ 
              background: 'linear-gradient(45deg, #00ff88, #3b82f6)',
              padding: '1px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Glow */}
          <motion.div 
            className="absolute -inset-2 rounded-2xl -z-10"
            style={{ 
              background: 'linear-gradient(45deg, rgba(0,255,136,0.15), rgba(59,130,246,0.15))',
              filter: 'blur(20px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Icon with glitch on hover */}
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-8 relative"
            style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
          >
            <motion.div
              animate={isHovered ? {
                x: [0, -2, 2, -2, 0],
                filter: [
                  'hue-rotate(0deg)',
                  'hue-rotate(90deg)',
                  'hue-rotate(-90deg)',
                  'hue-rotate(45deg)',
                  'hue-rotate(0deg)'
                ]
              } : {}}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-8 h-8" style={{ color: '#00ff88' }} />
            </motion.div>
            
            {/* Glitch shadows */}
            {isHovered && (
              <>
                <Icon 
                  className="w-8 h-8 absolute"
                  style={{ color: '#ff0040', opacity: 0.5, transform: 'translate(-2px, 0)' }} 
                />
                <Icon 
                  className="w-8 h-8 absolute"
                  style={{ color: '#00ffff', opacity: 0.5, transform: 'translate(2px, 0)' }} 
                />
              </>
            )}
          </div>

          <h3 
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {title}
          </h3>

          <p 
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
          >
            {description}
          </p>

          {/* Mascot placeholder */}
          <div 
            className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto"
            style={{ 
              border: '2px dashed rgba(0,255,136,0.2)',
              backgroundColor: 'rgba(0,255,136,0.02)'
            }}
          >
            <span 
              className="text-[10px] text-center"
              style={{ color: 'rgba(0,255,136,0.3)', fontFamily: "'Inter', sans-serif" }}
            >
              {mascotName}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const services = [
  {
    icon: Bot,
    title: 'Управление роботами',
    description: 'Мониторинг, телеметрия и контроль флотов автономных роботов любого масштаба. От одного робота до сотни.',
    mascotName: 'Дрон'
  },
  {
    icon: Brain,
    title: 'Интеграция AI',
    description: 'Внедрение искусственного интеллекта в существующие бизнес-процессы. Автоматизация принятия решений.',
    mascotName: 'Мозг'
  },
  {
    icon: Cog,
    title: 'Автоматизация',
    description: 'Разработка систем автоматизации под ключ. От анализа процессов до внедрения и поддержки.',
    mascotName: 'Шестерня'
  },
]

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Услуги
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
          >
            Три направления, одна цель — сделать ваш бизнес эффективнее
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              mascotName={service.mascotName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
