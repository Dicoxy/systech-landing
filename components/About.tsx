'use client'

import { motion } from 'framer-motion'

export default function About() {
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            О нас
          </h2>
          
          <div className="space-y-8">
            <p 
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed"
              style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
            >
              <span style={{ color: '#00ff88' }}>Петербург.</span> Команда инженеров, которые верят, 
              что будущее — за автономными системами.
            </p>
            
            <p 
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
            >
              Мы создаём программные решения для управления флотами роботов, 
              внедряем искусственный интеллект в бизнес-процессы и автоматизируем 
              то, что раньше требовало десятков рук.
            </p>

            <p 
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
            >
              Наш флагман — система <span style={{ color: '#00ff88' }}>MARS</span>. 
              Она следит за каждым роботом в режиме реального времени: 
              батарея, маршрут, статус, телеметрия. Один dashboard — полный контроль.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
