'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface TickerProps {
  /** Текст для бегущей строки (с ** для выделений) */
  text: string;
  /** Длительность одного цикла в секундах */
  duration?: number;
}

/**
 * Бегущая строка с подсветкой акцентов в центре
 * Использует markdown-стиль ** для выделения слов
 */
export default function Ticker({ text, duration = 20 }: TickerProps) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Парсим текст с ** для выделений
  const parts = text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    const isHighlight = part.startsWith('**') && part.endsWith('**');
    const content = isHighlight ? part.slice(2, -2) : part;
    return { id: i, content, isHighlight };
  });

  useEffect(() => {
    controls.start({
      x: [0, -50], // Двигаем на 50% (половину дублированного текста)
      transition: {
        duration,
        repeat: Infinity,
        ease: 'linear',
      },
    });
  }, [controls, duration]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] py-6 backdrop-blur-xl"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: -50,
          transition: {
            duration,
            repeat: Infinity,
            ease: 'linear',
          },
        })
      }
    >
      {/* Центральная подсветка */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div
          className="absolute left-1/2 top-0 h-full w-32 -translate-x-1/2"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.05), transparent)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* Бегущий текст (дублированный для бесшовности) */}
      <motion.div className="flex whitespace-nowrap" animate={controls} style={{ x: 0 }}>
        {/* Первая копия */}
        <div className="flex items-center px-8">
          {parts.map((part) => (
            <span key={part.id} className="relative">
              <span
                className={`text-lg transition-colors duration-300 ${
                  part.isHighlight ? 'font-semibold' : ''
                }`}
                style={{
                  color: '#4a5568',
                }}
              >
                {part.content}
              </span>
              {/* Подсветка акцентов */}
              {part.isHighlight && (
                <motion.span
                  className="absolute inset-0 text-lg font-semibold text-[#00ff88]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: duration / 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                  }}
                >
                  {part.content}
                </motion.span>
              )}
            </span>
          ))}
          <span className="mx-8 text-[#4a5568]">•</span>
        </div>

        {/* Вторая копия (для бесшовности) */}
        <div className="flex items-center px-8">
          {parts.map((part) => (
            <span key={`dup-${part.id}`} className="relative">
              <span
                className={`text-lg transition-colors duration-300 ${
                  part.isHighlight ? 'font-semibold' : ''
                }`}
                style={{
                  color: '#4a5568',
                }}
              >
                {part.content}
              </span>
              {/* Подсветка акцентов */}
              {part.isHighlight && (
                <motion.span
                  className="absolute inset-0 text-lg font-semibold text-[#00ff88]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: duration / 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                  }}
                >
                  {part.content}
                </motion.span>
              )}
            </span>
          ))}
          <span className="mx-8 text-[#4a5568]">•</span>
        </div>
      </motion.div>
    </div>
  );
}
