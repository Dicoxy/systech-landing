'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef, useMemo } from 'react'
import { MessageCircle, Brain, BookOpen, Building, MapPin } from 'lucide-react'

// Хук для анимации накручивания цифр с поддержкой задержки
function useCountUp(end: number, duration: number = 1500, delay: number = 0) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const startAnimation = () => {
      let startTime: number | null = null
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        // Easing function для более плавного движения
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }

    if (delay > 0) {
      const timeoutId = setTimeout(startAnimation, delay)
      return () => clearTimeout(timeoutId)
    } else {
      return startAnimation()
    }
  }, [end, duration, delay, isInView])

  return { count, ref }
}

// Компонент для анимированного счетчика
function AnimatedCounter({ end, suffix = '', duration = 1500, delay = 0 }: { end: number; suffix?: string; duration?: number; delay?: number }) {
  const { count, ref } = useCountUp(end, duration, delay)

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

// Форматирование числа с пробелами для тысяч
function formatNumberWithSpaces(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// Компонент для анимированной суммы с форматированием
function AnimatedPrice() {
  const end = 12450000
  const duration = 1500
  const delay = 0
  const { count, ref } = useCountUp(end, duration, delay)

  return (
    <span ref={ref}>
      {formatNumberWithSpaces(count)} ₽
    </span>
  )
}

// Компонент для анимированного количества дней с задержкой после суммы
function AnimatedDays() {
  const end = 45
  const duration = 1500
  const delay = 1800 // 1500ms (длительность первой анимации) + 300ms задержки
  const { count, ref } = useCountUp(end, duration, delay)

  return (
    <span ref={ref}>
      {count} дней
    </span>
  )
}

export default function Skif() {
  const features = [
    { icon: MessageCircle, label: 'Чат-интерфейс с любого устройства' },
    { icon: Brain, label: 'Мультимодельность — Claude, GPT-4, DeepSeek, Gemini' },
    { icon: BookOpen, label: 'RAG — поиск по вашим документам' },
    { icon: Building, label: 'Workspaces — изоляция по отделам' },
    { icon: MapPin, label: 'Хранение в России — 152-ФЗ' },
  ]

  const models = [
    { name: 'Claude 3.5', active: true },
    { name: 'GPT-4o', active: false },
    { name: 'DeepSeek', active: false },
    { name: 'Gemini Pro', active: false },
  ]

  // Typewriter эффект для поля ввода
  const phrases = [
    'Создай договор поставки для ООО Альфа...',
    'Сделай КП на 50 роботов Pudu...',
    'Собери данные по роботу CC1 за неделю...',
    'Найди контакты поставщика Viggo...'
  ]

  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    if (isTyping) {
      if (charIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 50 + Math.random() * 30) // 50-80ms на букву
        return () => clearTimeout(timeout)
      } else {
        // Пауза перед стиранием
        const timeout = setTimeout(() => setIsTyping(false), 2000 + Math.random() * 1000) // 2-3 секунды
        return () => clearTimeout(timeout)
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 20) // 20ms на букву - быстрее стирание
        return () => clearTimeout(timeout)
      } else {
        // Следующая фраза
        setPhraseIndex((phraseIndex + 1) % phrases.length)
        setIsTyping(true)
      }
    }
  }, [charIndex, isTyping, phraseIndex, phrases])

  // Состояние для мигающего курсора
  const [cursorVisible, setCursorVisible] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 500) // мигание каждые 500ms
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Separator line */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.4) 50%, transparent 100%)',
        }}
      />

      <section
        id="skif"
        style={{
          minHeight: '100vh',
          backgroundColor: '#0a0a0f',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 40px',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            right: '10%',
            width: '800px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        {/* Two column layout */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1300px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                color: '#8b5cf6',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Корпоративный AI
            </motion.span>

            <motion.h2
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                margin: '0 0 8px 0',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              СКИФ
            </motion.h2>

            <motion.p
              style={{
                fontSize: '14px',
                color: '#64748b',
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '24px',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              Система Корпоративного ИИ на Фактах
            </motion.p>

            <motion.p
              style={{
                fontSize: '20px',
                color: '#94a3b8',
                fontFamily: "'Inter', sans-serif",
                margin: '0 0 24px 0',
                fontWeight: 400,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.27 }}
              viewport={{ once: true }}
            >
              AI-ассистент для вашей команды
            </motion.p>

            <motion.p
              style={{
                fontSize: '17px',
                color: '#94a3b8',
                fontFamily: "'Inter', sans-serif",
                margin: '0 0 32px 0',
                lineHeight: 1.7,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <strong style={{ color: '#ffffff', fontWeight: 500 }}>
                Мощные LLM + ваша база знаний.
              </strong>{' '}
              Модель знает всё о мире, RAG — всё о вашей компании. Не SaaS — внедряем под ключ.
            </motion.p>

            {/* Features list */}
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <feature.icon size={18} color="#8b5cf6" strokeWidth={2} />
                  </div>
                  <span style={{ fontSize: '15px', color: '#e2e8f0', fontFamily: "'Inter', sans-serif" }}>
                    {feature.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Models section */}
            <motion.div
              style={{
                paddingTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                style={{
                  fontSize: '13px',
                  color: '#64748b',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Доступные модели
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {models.map((model, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      background: model.active ? 'rgba(139, 92, 246, 0.15)' : '#12121a',
                      border: `1px solid ${model.active ? '#8b5cf6' : 'rgba(255,255,255,0.06)'}`,
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: model.active ? '#8b5cf6' : '#64748b',
                    }}
                  >
                    {model.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Chat mockup */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main chat card */}
            <motion.div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow:
                  '0 40px 80px -20px rgba(0, 0, 0, 0.6), 0 0 40px -10px rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Browser bar */}
              <div
                style={{
                  backgroundColor: '#1a1a24',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f57' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#febc2e' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#28c840' }} />
                <div
                  style={{
                    marginLeft: '12px',
                    padding: '4px 12px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '4px',
                    fontSize: '11px',
                    color: '#64748b',
                  }}
                >
                  skif.systech-team.ru
                </div>
                <div
                  style={{
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#8b5cf6',
                      animation: 'pulse 2s infinite',
                    }}
                  />
                  <span style={{ fontSize: '10px', color: '#8b5cf6' }}>Online</span>
                </div>
              </div>

              {/* Chat content */}
              <div style={{ backgroundColor: '#0f1419', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Chat header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '16px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: 'white',
                      }}
                    >
                      СК
                    </div>
                    <span style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>СКИФ</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      background: 'rgba(10, 10, 15, 1)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: '#94a3b8',
                    }}
                  >
                    <div style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%' }} />
                    Отдел продаж
                    <span style={{ marginLeft: '4px' }}>▾</span>
                  </div>
                </div>

                {/* User message */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(10, 10, 15, 1)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      flexShrink: 0,
                    }}
                  >
                    👤
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'rgba(10, 10, 15, 1)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.6,
                        color: '#ffffff',
                      }}
                    >
                      Составь КП для клиента ООО «Альфа» на поставку 50 роботов Pudu
                    </div>
                  </div>
                </div>

                {/* AI response */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      flexShrink: 0,
                    }}
                  >
                    🤖
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'rgba(10, 10, 15, 1)',
                      border: '1px solid #8b5cf6',
                      borderLeft: '3px solid #8b5cf6',
                      borderRadius: '12px',
                      padding: '14px 16px',
                    }}
                  >
                    <div style={{ fontSize: '14px', lineHeight: 1.6, color: '#ffffff', marginBottom: '12px' }}>
                      Готово! Сформировал коммерческое предложение на основе данных из базы знаний:
                    </div>

                    {/* RAG sources */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        marginBottom: '16px',
                        padding: '12px',
                        background: 'rgba(139, 92, 246, 0.05)',
                        borderRadius: '8px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          color: '#8b5cf6',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          marginBottom: '4px',
                        }}
                      >
                        Использованные документы
                      </div>
                      {['📊 Прайс-лист 2025.xlsx', '📄 Шаблон КП.docx', '📁 История работы с Альфа.pdf'].map(
                        (file, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '12px',
                              color: '#94a3b8',
                            }}
                          >
                            {file}
                          </div>
                        )
                      )}
                    </div>

                    {/* Result stats */}
                    <div
                      style={{
                        display: 'flex',
                        gap: '16px',
                        padding: '12px 0',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        marginBottom: '12px',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div
                          style={{
                            fontSize: '18px',
                            fontWeight: 700,
                            color: '#22c55e',
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          <AnimatedPrice />
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>Сумма КП</div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div
                          style={{
                            fontSize: '18px',
                            fontWeight: 700,
                            color: '#22c55e',
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          <AnimatedDays />
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>Срок поставки</div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        style={{
                          padding: '10px 16px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 500,
                          border: 'none',
                          background: '#8b5cf6',
                          color: 'white',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        📥 Скачать DOCX
                      </button>
                      <button
                        style={{
                          padding: '10px 16px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 500,
                          background: '#12121a',
                          color: '#94a3b8',
                          border: '1px solid rgba(255,255,255,0.06)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        📄 Скачать PDF
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chat input */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'rgba(10, 10, 15, 1)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px',
                  }}
                >
                  <div style={{ flex: 1, position: 'relative' }}>
                    <input
                      type="text"
                      readOnly
                      value={displayText}
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        fontSize: '14px',
                        color: '#ffffff',
                        outline: 'none',
                        caretColor: 'transparent', // скрываем системный курсор
                      }}
                    />
                    {/* Мигающий курсор */}
                    {cursorVisible && (
                      <span
                        style={{
                          position: 'absolute',
                          left: `${displayText.length * 8.5}px`, // приблизительная ширина символа
                          top: '50%',
                          transform: 'translateY(-50%)',
                          color: '#8b5cf6',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          animation: 'cursorBlink 1s infinite',
                        }}
                      >
                        |
                      </span>
                    )}
                  </div>
                  <button
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      border: 'none',
                      background: '#12121a',
                      color: '#64748b',
                      cursor: 'pointer',
                    }}
                  >
                    🎤
                  </button>
                  <button
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      border: 'none',
                      background: '#8b5cf6',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    ➤
                  </button>
                </div>

                {/* Model selector */}
                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {['Claude 3.5', 'GPT-4o', 'DeepSeek'].map((model, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        background: i === 0 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(10, 10, 15, 1)',
                        color: i === 0 ? '#8b5cf6' : '#64748b',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: i === 0 ? '#8b5cf6' : '#64748b',
                        }}
                      />
                      {model}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <style jsx global>{`
          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          @keyframes cursorBlink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}</style>
      </section>
    </>
  )
}
