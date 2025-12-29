'use client'

import { motion } from 'framer-motion'
import { Mic, FileCheck, Shield, FileText, Lock } from 'lucide-react'

export default function Stroidnevnik() {
  const features = [
    { icon: Mic, label: 'Голосовой ввод на стройке' },
    { icon: FileText, label: 'AI-структуризация данных' },
    { icon: FileCheck, label: 'Валидный XML по схемам Минстроя' },
    { icon: Shield, label: 'Соответствует Приказу № 1026/пр и ГОСТ Р 70108-2025' },
    { icon: Lock, label: 'Готов к подписанию ЭЦП' },
  ]

  const modules = [
    { name: 'Журнал работ', active: true },
    { name: 'Акты', active: false },
    { name: 'КС-формы', active: false },
    { name: 'Сдача объекта', active: false },
  ]

  // Wave bars heights for animation
  const waveBars = [12, 20, 28, 16, 32, 24, 18, 30, 14, 26, 20, 32, 18, 24, 12, 28, 16, 22, 30, 14]

  return (
    <>
      {/* Separator line */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, 0.4) 50%, transparent 100%)',
        }}
      />

      <section
        id="stroidnevnik"
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
            background: 'radial-gradient(ellipse, rgba(34, 197, 94, 0.08) 0%, transparent 60%)',
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
                color: '#22c55e',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              ПЛАТФОРМА ЭДО
            </motion.span>

            <motion.h2
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                margin: '0 0 12px 0',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              СТРОЙДНЕВНИК
            </motion.h2>

            <motion.p
              style={{
                fontSize: '16px',
                color: '#64748b',
                fontFamily: "'Inter', sans-serif",
                margin: '0 0 8px 0',
                fontWeight: 400,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              Первый модуль платформы
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
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Голосовой ввод строительной документации
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
              AI-система голосового ввода исполнительной документации. Формирование актов и журналов в XML-формате Минстроя за минуты.
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
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <feature.icon size={18} color="#22c55e" strokeWidth={2} />
                  </div>
                  <span style={{ fontSize: '15px', color: '#e2e8f0', fontFamily: "'Inter', sans-serif" }}>
                    {feature.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Ecosystem section */}
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
                Экосистема строительного документооборота
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {modules.map((module, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      background: module.active ? 'rgba(34, 197, 94, 0.15)' : '#12121a',
                      border: `1px solid ${module.active ? '#22c55e' : 'rgba(255,255,255,0.06)'}`,
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: module.active ? '#22c55e' : '#64748b',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: module.active ? '#22c55e' : '#64748b',
                      }}
                    />
                    {module.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Dashboard mockup */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main dashboard card */}
            <motion.div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow:
                  '0 40px 80px -20px rgba(0, 0, 0, 0.6), 0 0 40px -10px rgba(34, 197, 94, 0.1)',
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
                  t.me/stroidnevnik_bot
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
                      backgroundColor: '#22c55e',
                      animation: 'pulse 2s infinite',
                    }}
                  />
                  <span style={{ fontSize: '10px', color: '#22c55e' }}>Live</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div style={{ backgroundColor: '#0f1419', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: '#22c55e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ color: '#000', fontWeight: 700, fontSize: '12px' }}>С</span>
                  </div>
                  <span style={{ marginLeft: '10px', color: '#fff', fontSize: '14px', fontWeight: 600 }}>
                    СтройДневник
                  </span>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
                  <div
                    style={{
                      padding: '14px',
                      backgroundColor: 'rgba(34, 197, 94, 0.05)',
                      borderRadius: '8px',
                      border: '1px solid rgba(34, 197, 94, 0.1)',
                    }}
                  >
                    <div style={{ color: '#22c55e', fontSize: '24px', fontWeight: 700 }}>47</div>
                    <div style={{ color: '#64748b', fontSize: '10px' }}>Записей</div>
                  </div>
                  <div
                    style={{
                      padding: '14px',
                      backgroundColor: 'rgba(249, 115, 22, 0.05)',
                      borderRadius: '8px',
                      border: '1px solid rgba(249, 115, 22, 0.1)',
                    }}
                  >
                    <div style={{ color: '#f97316', fontSize: '24px', fontWeight: 700 }}>98%</div>
                    <div style={{ color: '#64748b', fontSize: '10px' }}>Точность AI</div>
                  </div>
                  <div
                    style={{
                      padding: '14px',
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                      borderRadius: '8px',
                      border: '1px solid rgba(59, 130, 246, 0.1)',
                    }}
                  >
                    <div style={{ color: '#3b82f6', fontSize: '24px', fontWeight: 700 }}>12</div>
                    <div style={{ color: '#64748b', fontSize: '10px' }}>Дней</div>
                  </div>
                </div>

                {/* Voice message */}
                <div
                  style={{
                    backgroundColor: 'rgba(10, 10, 15, 1)',
                    borderRadius: '12px',
                    padding: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    marginBottom: '12px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8' }}>
                      <Mic size={14} color="#22c55e" />
                      Голосовое сообщение
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: '#64748b',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      0:47
                    </div>
                  </div>
                  {/* Waveform */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '32px' }}>
                    {waveBars.map((height, i) => (
                      <div
                        key={i}
                        style={{
                          width: '4px',
                          height: `${height}px`,
                          background: '#22c55e',
                          borderRadius: '2px',
                          animation: 'wave 1.5s ease-in-out infinite',
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Parsed data */}
                <div
                  style={{
                    backgroundColor: 'rgba(10, 10, 15, 1)',
                    borderRadius: '12px',
                    padding: '16px',
                    border: '1px solid #22c55e',
                    borderLeft: '3px solid #22c55e',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '14px',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#22c55e',
                    }}
                  >
                    <span>✓</span>
                    Распознано
                  </div>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {[
                      { label: 'Дата', value: '8 декабря 2025' },
                      { label: 'Работы', value: 'Армирование плиты, 3 этаж' },
                      { label: 'Бригада', value: 'Сидоров, 6 чел.' },
                      { label: 'Материал', value: 'А500С ⌀12, 2.5т' },
                      { label: 'Погода', value: 'ясно, +15°C' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', fontSize: '13px' }}>
                        <span style={{ color: '#64748b', width: '90px', flexShrink: 0 }}>{row.label}</span>
                        <span
                          style={{
                            color: '#ffffff',
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '12px',
                          }}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      style={{
                        flex: 1,
                        padding: '12px 16px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 500,
                        border: 'none',
                        background: '#22c55e',
                        color: '#000',
                        cursor: 'pointer',
                      }}
                    >
                      ✓ Подтвердить
                    </button>
                    <button
                      style={{
                        flex: 1,
                        padding: '12px 16px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 500,
                        background: '#12121a',
                        color: '#94a3b8',
                        border: '1px solid rgba(255,255,255,0.06)',
                        cursor: 'pointer',
                      }}
                    >
                      ✎ Изменить
                    </button>
                  </div>
                  <div
                    style={{
                      background: 'rgba(10, 10, 15, 1)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      border: '1px solid rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Формат выгрузки</span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        color: '#22c55e',
                        fontWeight: 500,
                      }}
                    >
                      <span>●</span>
                      XML Минстрой
                    </span>
                  </div>
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
          @keyframes wave {
            0%,
            100% {
              height: 8px;
              opacity: 0.4;
            }
            50% {
              height: 100%;
              opacity: 1;
            }
          }
        `}</style>
      </section>
    </>
  )
}
