'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface IntroAnimationProps {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 500),
      setTimeout(() => setStage(3), 1000),
      setTimeout(() => setStage(4), 1500),
      setTimeout(() => setStage(5), 2000),
      setTimeout(() => setStage(6), 2800),
      setTimeout(() => onComplete(), 3300),
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

          {/* Glitch flash */}
          {stage === 1 && (
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.1 }}
            />
          )}

          {/* Main text */}
          <div className="relative text-center">
            {stage >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
              >
                <h1 
                  className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider ${stage === 2 ? 'glitch' : ''} ${stage === 4 ? 'rgb-split flicker' : ''}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  data-text="СИСТЕМНЫЕ"
                >
                  СИСТЕМНЫЕ
                </h1>
              </motion.div>
            )}

            {stage >= 3 && (
              <motion.div
                className="mt-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
              >
                <h1 
                  className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider ${stage === 3 ? 'glitch' : ''} ${stage === 4 ? 'rgb-split flicker' : ''}`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  data-text="ТЕХНОЛОГИИ"
                >
                  ТЕХНОЛОГИИ
                </h1>
              </motion.div>
            )}

            {stage >= 5 && (
              <motion.p
                className="mt-8 text-xl md:text-2xl tracking-widest"
                style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Роботы. Данные. Контроль.
              </motion.p>
            )}
          </div>

          {/* Skip button */}
          <motion.button
            onClick={onComplete}
            className="absolute bottom-8 right-8 text-sm transition-colors"
            style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Skip →
          </motion.button>

          {/* Accent line */}
          {stage >= 4 && (
            <motion.div
              className="absolute bottom-0 left-0 h-1"
              style={{ backgroundColor: '#00ff88' }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
