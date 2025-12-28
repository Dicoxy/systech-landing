'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import GlassCard from './ui/GlassCard';

/**
 * Секция О нас в стиле Bento Grid
 * iOS 18 Glassmorphism с модульной сеткой
 */

// Хук для анимации накручивания цифр
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function для более плавного движения
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return { count, ref };
}

// Компонент для анимированного счетчика
function AnimatedCounter({ end, suffix = '', duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const { count, ref } = useCountUp(end, duration);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

// Варианты анимации для grid контейнера
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Варианты анимации для каждой карточки
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
};

// Варианты для glow-вспышки обводки
const glowVariants = {
  initial: {
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  glow: {
    boxShadow: [
      '0 8px 32px rgba(0, 0, 0, 0.1)',
      '0 0 30px rgba(0, 255, 136, 0.6), 0 0 60px rgba(0, 255, 136, 0.3), inset 0 0 20px rgba(0, 255, 136, 0.2)',
      '0 8px 32px rgba(0, 0, 0, 0.1)',
    ],
    transition: {
      duration: 0.4,
      times: [0, 0.5, 1],
      delay: 0.5,
    },
  },
};

export default function AboutBento() {
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
        id="about"
        className="relative min-h-screen overflow-hidden px-6 pt-32 pb-32 md:px-10 md:pt-40 md:pb-40"
        style={{
          scrollSnapAlign: 'start',
        }}
      >
      {/* Фоновое свечение */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Bento Grid */}
        <motion.div
          className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Основная карточка — О компании */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 lg:row-span-2"
          >
            <motion.div
              variants={glowVariants}
              initial="initial"
              whileInView="glow"
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
            {/* Локация */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/10 px-4 py-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-[#00ff88]"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(0, 255, 136, 0.4)',
                    '0 0 0 8px rgba(0, 255, 136, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className="font-grotesk text-sm font-medium text-[#00ff88]">
                Санкт-Петербург
              </span>
            </motion.div>

            {/* Описание компании */}
            <motion.h2
              className="font-grotesk mb-4 text-xl font-semibold leading-relaxed text-white md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              ООО «Системные Технологии» — российская инновационная компания из
              Санкт-Петербурга.
            </motion.h2>
            <motion.p
              className="text-base leading-relaxed text-[#94a3b8] md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Создаём программные продукты для автоматизации систем и бизнес-процессов.
            </motion.p>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Статистика — 100+ роботов */}
          <motion.div variants={cardVariants}>
            <motion.div
              variants={glowVariants}
              initial="initial"
              whileInView="glow"
              viewport={{ once: true }}
            >
              <GlassCard className="flex min-h-[140px] flex-col items-center justify-center text-center">
            <motion.div
              className="font-grotesk mb-2 text-5xl font-bold text-[#00ff88]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <AnimatedCounter end={100} suffix="+" duration={1800} />
            </motion.div>
            <div className="text-sm text-[#64748b]">роботов</div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Статистика — 5 городов */}
          <motion.div variants={cardVariants}>
            <motion.div
              variants={glowVariants}
              initial="initial"
              whileInView="glow"
              viewport={{ once: true }}
            >
              <GlassCard className="flex min-h-[140px] flex-col items-center justify-center text-center">
            <motion.div
              className="font-grotesk mb-2 text-5xl font-bold text-[#00ff88]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2 }}
            >
              <AnimatedCounter end={5} duration={1500} />
            </motion.div>
            <div className="text-sm text-[#64748b]">городов</div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Продукты — Акцент */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-1"
            onClick={() => {
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{ cursor: 'pointer' }}
          >
            <motion.div
              variants={glowVariants}
              initial="initial"
              whileInView="glow"
              viewport={{ once: true }}
            >
              <GlassCard
                className="flex min-h-[140px] flex-col items-center justify-center border-[#00ff88]/15 bg-[#00ff88]/[0.03] text-center"
                enableTilt={true}
              >
            <motion.div
              className="font-grotesk mb-3 flex items-center gap-2 text-4xl font-bold text-[#00ff88]"
              style={{
                textShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.3 }}
            >
              <span>ПРОДУКТЫ</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ fontSize: '0.8em' }}
              >
                →
              </motion.span>
            </motion.div>
            <div className="text-sm text-[#64748b]">Не консалтинг. Не аутсорс.</div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Статистика — 20+ лет */}
          <motion.div variants={cardVariants}>
            <motion.div
              variants={glowVariants}
              initial="initial"
              whileInView="glow"
              viewport={{ once: true }}
            >
              <GlassCard className="flex min-h-[140px] flex-col items-center justify-center text-center">
            <motion.div
              className="font-grotesk mb-2 text-5xl font-bold text-[#00ff88]"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.4 }}
            >
              <AnimatedCounter end={20} suffix="+" duration={1800} />
            </motion.div>
            <div className="text-sm text-[#64748b]">лет управления</div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Команда — Университеты */}
          <motion.div variants={cardVariants}>
            <motion.div
              variants={glowVariants}
              initial="initial"
              whileInView="glow"
              viewport={{ once: true }}
            >
              <GlassCard className="flex min-h-[140px] flex-col items-center justify-center text-center">
            <div className="mb-3 text-sm text-[#94a3b8]">Разработчики из</div>
            <motion.div
              className="font-grotesk text-base font-semibold leading-relaxed text-[#00ff88] md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              СПбГУ • ИТМО • ЛЭТИ
            </motion.div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Бесконечный контроль */}
          <motion.div variants={cardVariants}>
            <motion.div
              variants={glowVariants}
              initial="initial"
              whileInView="glow"
              viewport={{ once: true }}
            >
              <GlassCard className="flex min-h-[140px] flex-col items-center justify-center border-[#00ff88]/15 bg-[#00ff88]/[0.03] text-center">
            <motion.div
              className="font-grotesk mb-2 text-6xl font-bold text-[#00ff88]"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  '0 0 20px rgba(0, 255, 136, 0.3)',
                  '0 0 40px rgba(0, 255, 136, 0.5)',
                  '0 0 20px rgba(0, 255, 136, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ∞
            </motion.div>
            <div className="text-sm text-[#94a3b8]">контроль</div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Наши направления */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2"
          >
            <motion.div
              variants={glowVariants}
              initial="initial"
              whileInView="glow"
              viewport={{ once: true }}
            >
              <GlassCard className="flex min-h-[140px] flex-col justify-center">
            <ul className="space-y-3 text-base text-[#94a3b8] md:text-lg">
              <li className="flex items-start">
                <span className="mr-3 text-[#00ff88]">•</span>
                <span>Создаём управление флотами роботов</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#00ff88]">•</span>
                <span>Автоматизируем бизнес-процессы</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#00ff88]">•</span>
                <span>Внедряем Искусственный Интеллект в системы управления</span>
              </li>
            </ul>
              </GlassCard>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
