'use client'

import { motion } from 'framer-motion'
import { Bot, Brain, Cog } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Управление роботами',
    description: 'Мониторинг, телеметрия и контроль флотов автономных роботов любого масштаба. От одного робота до сотни.',
  },
  {
    icon: Brain,
    title: 'Интеграция AI',
    description: 'Внедрение искусственного интеллекта в существующие бизнес-процессы. Автоматизация принятия решений.',
  },
  {
    icon: Cog,
    title: 'Автоматизация',
    description: 'Разработка систем автоматизации под ключ. От анализа процессов до внедрения и поддержки.',
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

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div 
                className="group relative h-full p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ 
                  backgroundColor: '#12121a',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{ 
                    background: 'linear-gradient(45deg, rgba(0,255,136,0.1), rgba(59,130,246,0.1))',
                    filter: 'blur(20px)'
                  }}
                />
                
                {/* Gradient border on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: 'linear-gradient(45deg, #00ff88, #3b82f6)',
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
                />

                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-8 transition-colors duration-500"
                  style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                >
                  <service.icon 
                    className="w-8 h-8 transition-colors duration-500" 
                    style={{ color: '#00ff88' }} 
                  />
                </div>

                <h3 
                  className="text-2xl md:text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {service.title}
                </h3>

                <p 
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
