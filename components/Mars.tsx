'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Activity, Battery, MapPin, Wifi } from 'lucide-react'

export default function Mars() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const features = [
    { icon: Activity, text: 'Телеметрия в реальном времени' },
    { icon: Battery, text: 'Мониторинг батареи и расходников' },
    { icon: MapPin, text: 'Отслеживание локации' },
    { icon: Wifi, text: 'Статус онлайн/офлайн' },
  ]

  return (
    <section 
      id="mars" 
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: '#12121a' }}
    >
      <div className="max-w-7xl mx-auto px-6">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              MARS
            </h2>
            
            <p 
              className="text-xl md:text-2xl mb-8"
              style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
            >
              Система мониторинга и управления флотами автономных роботов
            </p>

            <div className="space-y-4">
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: '#00ff88' }} />
                  </div>
                  <span 
                    className="text-lg"
                    style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
                  >
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Screenshot placeholder with parallax */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ 
                backgroundColor: '#1a1a24',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              {/* Mock dashboard */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#febc2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
                </div>
                
                {/* Dashboard content */}
                <div className="space-y-4">
                  <div 
                    className="h-8 rounded"
                    style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)', width: '60%' }}
                  />
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="h-24 rounded-lg p-4"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                      >
                        <div 
                          className="h-3 rounded mb-2"
                          style={{ backgroundColor: 'rgba(0, 255, 136, 0.3)', width: '50%' }}
                        />
                        <div 
                          className="text-2xl font-bold"
                          style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {i === 1 ? '98%' : i === 2 ? '12' : '5.2km'}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div 
                    className="h-40 rounded-lg"
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  >
                    {/* Fake chart lines */}
                    <svg className="w-full h-full p-4">
                      <path
                        d="M 0 80 Q 50 60 100 70 T 200 50 T 300 60 T 400 40"
                        stroke="#00ff88"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
                      />
                      <path
                        d="M 0 100 Q 50 90 100 85 T 200 75 T 300 80 T 400 70"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.5"
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
                  filter: 'blur(20px)'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
