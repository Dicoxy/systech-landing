'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section 
      className="py-8 border-y border-white/10"
      style={{ backgroundColor: '#12121a' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span 
              className="text-3xl md:text-4xl font-bold"
              style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <CountUp target={50} />+
            </span>
            <span style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}>
              машин
            </span>
          </div>

          <span className="hidden md:block" style={{ color: '#64748b' }}>•</span>

          <div className="flex items-center gap-2">
            <span 
              className="text-3xl md:text-4xl font-bold"
              style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <CountUp target={5} />
            </span>
            <span style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}>
              городов
            </span>
          </div>

          <span className="hidden md:block" style={{ color: '#64748b' }}>•</span>

          <div className="flex items-center gap-2">
            <span 
              className="text-3xl md:text-4xl font-bold"
              style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ∞
            </span>
            <span style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}>
              контроль
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
