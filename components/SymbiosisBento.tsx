'use client';

import { motion } from 'framer-motion';
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
        className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32"
        style={{
          scrollSnapAlign: 'start',
        }}
      >
        {/* Фоновая tech-сетка */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Горизонтальные линии */}
            {Array.from({ length: 25 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 40}
                x2="1000"
                y2={i * 40}
                stroke="rgba(0, 255, 136, 0.15)"
                strokeWidth="0.5"
              />
            ))}
            {/* Вертикальные линии */}
            {Array.from({ length: 25 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 40}
                y1="0"
                x2={i * 40}
                y2="1000"
                stroke="rgba(0, 255, 136, 0.15)"
                strokeWidth="0.5"
              />
            ))}
            {/* Пульсирующие узлы */}
            {Array.from({ length: 12 }).map((_, i) => {
              const x = (i % 4) * 250 + 125;
              const y = Math.floor(i / 4) * 300 + 150;
              return (
                <motion.circle
                  key={`node-${i}`}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="rgba(0, 255, 136, 0.3)"
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </svg>
        </div>

        {/* Градиентные орбы */}
        <motion.div
          className="pointer-events-none absolute"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)',
            filter: 'blur(100px)',
            opacity: 0.1,
            left: '10%',
            top: '20%',
          }}
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute"
          style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(120px)',
            opacity: 0.08,
            right: '10%',
            bottom: '20%',
          }}
          animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Заголовок секции */}
          <div className="mb-12 text-left">
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
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="font-grotesk text-sm font-medium text-[#00ff88]">
                НАШ ПОДХОД
              </span>
            </motion.div>

            <motion.h2
              className="font-grotesk mb-4 text-4xl font-bold text-white md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Человек + AI = Симбиоз
            </motion.h2>

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

          {/* Bento Grid: 3 блока */}
          <motion.div
            className="grid grid-cols-1 gap-5 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Блок 1: Большой блок — визуализация + цитата (2 колонки) */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-2 lg:row-span-2"
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                whileInView="glow"
                viewport={{ once: true }}
                className="h-full"
              >
                <GlassCard className="h-full p-8 flex flex-col">
                  {/* Верхняя часть — визуализация симбиоза */}
                  <div className="flex-1 flex items-center justify-center py-8">
                    <div className="flex items-center gap-6 md:gap-12">
                      {/* Человек */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-2 text-4xl md:text-5xl mb-4"
                          style={{
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            borderColor: 'rgba(59, 130, 246, 0.4)',
                            boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
                          }}
                          whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.7)' }}
                        >
                          👤
                        </motion.div>
                        <div className="text-base font-semibold text-white">Человек</div>
                        <div className="text-sm text-[#94a3b8]">Принимает решения</div>
                      </div>

                      {/* Линия связи с СИМБИОЗ */}
                      <div className="relative w-32 md:w-48 h-3 flex items-center">
                        {/* Основная линия */}
                        <div
                          className="absolute inset-0 rounded-full overflow-hidden"
                          style={{
                            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.6) 0%, rgba(0, 255, 136, 0.8) 50%, rgba(59, 130, 246, 0.6) 100%)',
                          }}
                        >
                          {/* Анимированный блик */}
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                            }}
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          />
                          {/* Частицы летят вправо */}
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={`p-r-${i}`}
                              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00ff88]"
                              style={{ boxShadow: '0 0 6px #00ff88' }}
                              animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                              transition={{ duration: 2 + i * 0.5, delay: i * 0.6, repeat: Infinity, ease: 'linear' }}
                            />
                          ))}
                          {/* Частицы летят влево */}
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={`p-l-${i}`}
                              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3b82f6]"
                              style={{ boxShadow: '0 0 6px #3b82f6' }}
                              animate={{ left: ['100%', '0%'], opacity: [0, 1, 1, 0] }}
                              transition={{ duration: 2.5 + i * 0.4, delay: i * 0.5, repeat: Infinity, ease: 'linear' }}
                            />
                          ))}
                        </div>
                        {/* Лейбл СИМБИОЗ */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                          <span className="font-grotesk text-sm md:text-base font-bold uppercase tracking-wider text-[#00ff88] bg-[#0a0a0f]/90 px-4 py-2 rounded-full border border-[#00ff88]/40 whitespace-nowrap"
                            style={{ boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' }}
                          >
                            СИМБИОЗ
                          </span>
                        </div>
                      </div>

                      {/* AI */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-2 text-4xl md:text-5xl mb-4"
                          style={{
                            backgroundColor: 'rgba(0, 255, 136, 0.1)',
                            borderColor: 'rgba(0, 255, 136, 0.4)',
                            boxShadow: '0 0 40px rgba(0, 255, 136, 0.2)',
                          }}
                          whileHover={{ scale: 1.05, borderColor: 'rgba(0, 255, 136, 0.7)' }}
                        >
                          🤖
                        </motion.div>
                        <div className="text-base font-semibold text-white">AI</div>
                        <div className="text-sm text-[#94a3b8]">Обрабатывает данные</div>
                      </div>
                    </div>
                  </div>

                  {/* Разделитель */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent my-6" />

                  {/* Нижняя часть — цитата */}
                  <div className="relative pt-4">
                    <span
                      className="absolute -top-2 -left-2 font-serif text-6xl text-[#00ff88]/20"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      "
                    </span>
                    <p className="text-lg md:text-xl leading-relaxed text-[#e2e8f0] italic pl-6">
                      AI — это инструмент, который работает лучше всего в руках человека. 
                      Не автономные системы, а симбиоз человеческого опыта и машинной эффективности.
                    </p>
                    <div className="mt-4 pl-6">
                      <span className="font-grotesk text-sm font-medium text-[#00ff88]">
                        — Философия Системных Технологий
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Блок 2: Задачи человека */}
            <motion.div variants={cardVariants}>
              <motion.div
                variants={glowVariants}
                initial="initial"
                whileInView="glow"
                viewport={{ once: true }}
                className="h-full"
              >
                <GlassCard className="h-full p-6">
                  <div className="mb-4 text-4xl">👤</div>
                  <div className="font-grotesk mb-4 text-xl font-semibold text-white">
                    Задачи человека
                  </div>
                  <ul className="space-y-3 text-base text-[#94a3b8]">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                      Принятие решений
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                      Креатив и стратегия
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                      Финальное слово
                    </li>
                  </ul>
                </GlassCard>
              </motion.div>
            </motion.div>

            {/* Блок 3: Задачи AI */}
            <motion.div variants={cardVariants}>
              <motion.div
                variants={glowVariants}
                initial="initial"
                whileInView="glow"
                viewport={{ once: true }}
                className="h-full"
              >
                <GlassCard className="h-full p-6">
                  <div className="mb-4 text-4xl">🤖</div>
                  <div className="font-grotesk mb-4 text-xl font-semibold text-white">
                    Задачи AI
                  </div>
                  <ul className="space-y-3 text-base text-[#94a3b8]">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
                      Анализ данных
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
                      Рутинные задачи
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
                      Мониторинг 24/7
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
