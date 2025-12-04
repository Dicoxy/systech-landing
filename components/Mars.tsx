'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Activity, Battery, MapPin, Wifi } from 'lucide-react'

// 3D Tilt Card Component
function TiltCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig)

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
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated Counter - simulates live data
function LiveCounter({ base, variance }: { base: number, variance: number }) {
  const [value, setValue] = useState(base)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(base + Math.floor(Math.random() * variance) - variance/2)
    }, 2000)
    return () => clearInterval(interval)
  }, [base, variance])
  
  return <motion.span key={value} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}>{value}</motion.span>
}

export default function Mars() {
  const features = [
    { icon: Activity, text: 'Телеметрия в реальном времени' },
    { icon: Battery, text: 'Мониторинг батареи и расходников' },
    { icon: MapPin, text: 'Отслеживание локации' },
    { icon: Wifi, text: 'Статус онлайн/офлайн' },
  ]

  return (
    <section 
      id="mars" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#12121a' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="text-sm font-semibold tracking-widest mb-4 block"
              style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ФЛАГМАНСКИЙ ПРОДУКТ
            </span>
            
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              MARS
            </h2>
            
            <p 
              className="text-xl md:text-2xl mb-10"
              style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
            >
              Система мониторинга и управления флотами автономных роботов
            </p>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: '#00ff88' }} />
                  </div>
                  <span 
                    className="text-lg md:text-xl"
                    style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
                  >
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mascot placeholder */}
            <motion.div 
              className="mt-12 hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div 
                className="w-40 h-40 rounded-2xl flex items-center justify-center"
                style={{ 
                  border: '2px dashed rgba(0,255,136,0.3)',
                  backgroundColor: 'rgba(0,255,136,0.02)'
                }}
              >
                <span 
                  className="text-xs text-center px-2"
                  style={{ color: 'rgba(0,255,136,0.4)', fontFamily: "'Inter', sans-serif" }}
                >
                  Маскот: Оператор
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 3D Tilt Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="perspective-1000"
          >
            <TiltCard>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ 
                  backgroundColor: '#1a1a24',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transform: 'translateZ(50px)'
                }}
              >
                {/* Mock dashboard */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
                    <span className="ml-4 text-xs" style={{ color: '#64748b' }}>mars.systech-team.ru</span>
                  </div>
                  
                  {/* Dashboard content with live data */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="h-8 rounded"
                        style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)', width: '60%' }}
                      />
                      <div 
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{ backgroundColor: '#00ff88' }}
                      />
                      <span className="text-xs" style={{ color: '#00ff88' }}>Live</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div 
                        className="h-28 rounded-lg p-4"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                      >
                        <div className="text-xs mb-2" style={{ color: '#64748b' }}>Батарея</div>
                        <div 
                          className="text-3xl font-bold"
                          style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          <LiveCounter base={94} variance={8} />%
                        </div>
                      </div>
                      <div 
                        className="h-28 rounded-lg p-4"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                      >
                        <div className="text-xs mb-2" style={{ color: '#64748b' }}>Онлайн</div>
                        <div 
                          className="text-3xl font-bold"
                          style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          <LiveCounter base={98} variance={6} />
                        </div>
                      </div>
                      <div 
                        className="h-28 rounded-lg p-4"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                      >
                        <div className="text-xs mb-2" style={{ color: '#64748b' }}>Пробег</div>
                        <div 
                          className="text-3xl font-bold"
                          style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          <LiveCounter base={127} variance={20} />
                          <span className="text-lg">км</span>
                        </div>
                      </div>
                    </div>

                    <div 
                      className="h-48 rounded-lg relative overflow-hidden"
                      style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                    >
                      {/* Animated chart lines */}
                      <svg className="w-full h-full p-6">
                        <motion.path
                          d="M 0 100 Q 80 70 160 85 T 320 55 T 480 70 T 640 40"
                          stroke="#00ff88"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.6"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        />
                        <motion.path
                          d="M 0 120 Q 80 100 160 95 T 320 80 T 480 90 T 640 75"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.6"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl -z-10"
                  style={{ 
                    background: 'linear-gradient(45deg, rgba(0,255,136,0.2), rgba(59,130,246,0.2))',
                    filter: 'blur(30px)'
                  }}
                />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
