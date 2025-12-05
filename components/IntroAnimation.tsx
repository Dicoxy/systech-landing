'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface IntroAnimationProps {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    // Увеличенные паузы: 800ms между словами
    const timers = [
      setTimeout(() => setStage(1), 300),   // АВТОМАТИЗАЦИЯ
      setTimeout(() => setStage(2), 1100),  // УПРАВЛЕНИЕ (+800ms)
      setTimeout(() => setStage(3), 1900),  // + (+800ms)
      setTimeout(() => setStage(4), 2500),  // РОБОТЫ (+600ms)
      setTimeout(() => setStage(5), 3300),  // RGB split + мерцание
      setTimeout(() => setStage(6), 4300),  // Fade out начало
      setTimeout(() => onComplete(), 4800), // Завершение
    ]
    
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {stage < 6 && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Scan lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="w-full h-full" style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
            }} />
          </div>

          {/* Main text container */}
          <div className="relative text-center">
            {/* АВТОМАТИЗАЦИЯ - средний размер */}
            {stage >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
              >
                <h1 
                  className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider ${stage === 1 ? 'glitch' : ''} ${stage === 5 ? 'rgb-split flicker' : ''}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  data-text="АВТОМАТИЗАЦИЯ"
                >
                  АВТОМАТИЗАЦИЯ
                </h1>
              </motion.div>
            )}

            {/* УПРАВЛЕНИЕ - меньше */}
            {stage >= 2 && (
              <motion.div
                className="mt-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
              >
                <h1 
                  className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider ${stage === 2 ? 'glitch' : ''} ${stage === 5 ? 'rgb-split flicker' : ''}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  data-text="УПРАВЛЕНИЕ"
                >
                  УПРАВЛЕНИЕ
                </h1>
              </motion.div>
            )}

            {/* + */}
            {stage >= 3 && (
              <motion.div
                className="my-3"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider"
                  style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  +
                </span>
              </motion.div>
            )}

            {/* РОБОТЫ - самый большой */}
            {stage >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <h1 
                  className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider ${stage === 4 ? 'glitch' : ''} ${stage === 5 ? 'rgb-split flicker' : ''}`}
                  style={{ color: '#00ff88', fontFamily: "'Space Grotesk', sans-serif" }}
                  data-text="РОБОТЫ"
                >
                  РОБОТЫ
                </h1>
              </motion.div>
            )}
          </div>

          {/* Skip button */}
          <motion.button
            onClick={onComplete}
            className="absolute bottom-8 right-8 text-sm transition-colors hover:text-white/70"
            style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Пропустить →
          </motion.button>

          {/* Accent line */}
          {stage >= 5 && (
            <motion.div
              className="absolute bottom-0 left-0 h-1"
              style={{ backgroundColor: '#00ff88' }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
