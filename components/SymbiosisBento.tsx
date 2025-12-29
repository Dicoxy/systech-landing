'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import GlassCard from './ui/GlassCard';

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

export default function SymbiosisBento() {
  // Для анимации частиц
  const particles = [0, 1, 2, 3, 4, 5];

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
        id="symbiosis"
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
          {/* Заголовок секции (выравнивание ВЛЕВО) */}
          <div className="mb-16 text-left">
            {/* Badge: НАШ ПОДХОД */}
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
                НАШ ПОДХОД
              </span>
            </motion.div>

            {/* H2: Человек + AI = Симбиоз */}
            <motion.h2
              className="font-grotesk mb-4 text-4xl font-bold text-white md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Человек + AI = Симбиоз
            </motion.h2>

            {/* Подзаголовок */}
            <motion.p
              className="text-lg text-[#94a3b8]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Мы не заменяем людей. Мы усиливаем их возможности.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <motion.div
            className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Блок 1: Визуализация симбиоза (2 колонки × 2 ряда) */}
            <motion.div
              variants={cardVariants}
              className="md:col-span-2 lg:row-span-2 flex flex-col min-h-[300px] lg:min-h-[320px] h-full"
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                whileInView="glow"
                viewport={{ once: true }}
                className="h-full"
              >
                <GlassCard className="h-full flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-2xl">
                    {/* Круг 👤 (синий) слева */}
                    <motion.div
                      className="absolute left-[15%] top-1/2 -translate-y-1/2 flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-2 text-4xl md:text-5xl"
                      style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderColor: 'rgba(59, 130, 246, 0.3)',
                        boxShadow: '0 0 40px rgba(59, 130, 246, 0.1)',
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: 'rgba(59, 130, 246, 0.6)',
                      }}
                    >
                      👤
                    </motion.div>

                    {/* Круг 🤖 (зелёный) справа */}
                    <motion.div
                      className="absolute right-[15%] top-1/2 -translate-y-1/2 flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-2 text-4xl md:text-5xl"
                      style={{
                        backgroundColor: 'rgba(0, 255, 136, 0.1)',
                        borderColor: 'rgba(0, 255, 136, 0.3)',
                        boxShadow: '0 0 40px rgba(0, 255, 136, 0.1)',
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: 'rgba(0, 255, 136, 0.6)',
                      }}
                    >
                      🤖
                    </motion.div>

                    {/* Анимированная линия связи с частицами */}
                    <div className="absolute left-1/2 top-1/2 h-1 w-[60%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
                      {/* Основная линия */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(59, 130, 246, 0.5) 0%, rgba(0, 255, 136, 0.8) 50%, rgba(59, 130, 246, 0.5) 100%)',
                        }}
                      />
                      {/* Анимированный блик */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                        }}
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      {/* Частицы */}
                      {particles.map((i) => (
                        <motion.div
                          key={i}
                          className="absolute h-1 w-1 rounded-full bg-[#00ff88]"
                          style={{
                            top: ['10%', '30%', '50%', '70%', '90%', '50%'][i],
                          }}
                          animate={{
                            left: ['0%', '100%'],
                            opacity: [0, 1, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      ))}
                    </div>

                    {/* Лейбл "СИМБИОЗ" по центру */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="font-grotesk text-sm font-semibold uppercase tracking-widest text-[#00ff88] bg-[#0a0a0f] px-4 py-2 rounded-full border border-[#00ff88]/20">
                        СИМБИОЗ
                      </span>
                    </div>

                    {/* Подписи */}
                    <div className="absolute -bottom-8 left-[15%] -translate-x-1/2 text-center">
                      <div className="font-grotesk text-sm font-semibold text-white">Человек</div>
                      <div className="text-xs text-[#64748b]">Принимает решения</div>
                    </div>
                    <div className="absolute -bottom-8 right-[15%] translate-x-1/2 text-center">
                      <div className="font-grotesk text-sm font-semibold text-white">AI</div>
                      <div className="text-xs text-[#64748b]">Обрабатывает данные</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Блок 2: Задачи человека (1 колонка × 1 ряд) */}
            <motion.div variants={cardVariants}>
              <motion.div
                variants={glowVariants}
                initial="initial"
                whileInView="glow"
                viewport={{ once: true }}
              >
                <GlassCard className="flex min-h-[140px] flex-col justify-center p-6 border border-[#3b82f6]/20">
                  <div className="mb-4 text-4xl">👤</div>
                  <div className="font-grotesk mb-3 text-lg font-semibold text-white">
                    Задачи человека
                  </div>
                  <ul className="space-y-2 text-sm text-[#94a3b8]">
                    <li className="flex items-start">
                      <span className="mr-2 text-[#3b82f6]">•</span>
                      <span>Принятие решений</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#3b82f6]">•</span>
                      <span>Креатив и стратегия</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#3b82f6]">•</span>
                      <span>Финальное слово</span>
                    </li>
                  </ul>
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Блок 3: Задачи AI (1 колонка × 1 ряд) */}
            <motion.div variants={cardVariants}>
              <motion.div
                variants={glowVariants}
                initial="initial"
                whileInView="glow"
                viewport={{ once: true }}
              >
                <GlassCard className="flex min-h-[140px] flex-col justify-center p-6 border border-[#00ff88]/20">
                  <div className="mb-4 text-4xl">🤖</div>
                  <div className="font-grotesk mb-3 text-lg font-semibold text-white">
                    Задачи AI
                  </div>
                  <ul className="space-y-2 text-sm text-[#94a3b8]">
                    <li className="flex items-start">
                      <span className="mr-2 text-[#00ff88]">•</span>
                      <span>Анализ данных</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#00ff88]">•</span>
                      <span>Рутинные задачи</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#00ff88]">•</span>
                      <span>Мониторинг 24/7</span>
                    </li>
                  </ul>
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Блок 4: Цитата (полная ширина) */}
            <motion.div
              variants={cardVariants}
              className="md:col-span-2 lg:col-span-3"
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                whileInView="glow"
                viewport={{ once: true }}
              >
                <GlassCard className="relative min-h-[140px] p-8 border border-[#00ff88]/10 bg-[#00ff88]/[0.03]">
                  {/* Кавычка декоративная слева */}
                  <span
                    className="absolute -top-4 left-8 font-serif text-6xl text-[#00ff88]/20"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    "
                  </span>
                  <p className="mb-4 text-lg leading-relaxed text-[#e2e8f0] md:text-xl">
                    AI — это инструмент, который работает лучше всего в руках человека. Не автономные системы, а симбиоз человеческого опыта и машинной эффективности.
                  </p>
                  <span className="font-grotesk text-sm font-medium text-[#00ff88]">
                    — Философия Системных Технологий
                  </span>
                </GlassCard>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}