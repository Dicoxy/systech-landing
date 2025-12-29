'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Footer() {
  const snowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!snowRef.current) return
    // Создаём снежинки
    for (let i = 0; i < 30; i++) {
      const snowflake = document.createElement('div')
      const size = Math.random() * 3 + 2
      snowflake.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: #fff;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        animation: snowfall ${Math.random() * 8 + 8}s linear infinite;
        animation-delay: -${Math.random() * 8}s;
        opacity: ${Math.random() * 0.4 + 0.2};
      `
      snowRef.current.appendChild(snowflake)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes snowfall {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; transform: translateY(100vh) translateX(50px); }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(30deg); }
          75% { transform: rotate(-20deg); }
        }
        @keyframes pompom-swing {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .robot-container:hover .robot-arm-right {
          animation: wave 0.5s ease-in-out 3;
        }
      `}</style>

      {/* Separator line */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 136, 0.4) 50%, transparent 100%)',
        }}
      />

      <footer
        id="contact"
        style={{
          position: 'relative',
          padding: '80px 40px 40px',
          overflow: 'hidden',
          background: 'linear-gradient(to top, #080810, #0a0a0f)',
        }}
      >
        {/* Snow */}
        <div
          ref={snowRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto' }}>
          {/* Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
              gap: '60px',
              marginBottom: '60px',
            }}
            className="footer-grid"
          >
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #00ff88, #3b82f6)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: '#0a0a0f',
                    fontSize: '14px',
                  }}
                >
                  СТ
                </div>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>
                  Системные Технологии
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7 }}>
                Российская инновационная компания. Создаём программные продукты для автоматизации.
              </p>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#fff',
                }}
              >
                Продукты
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a href="#mars" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none' }}>
                    МАРС
                  </a>
                </li>
                <li>
                  <a href="#stroidnevnik" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none' }}>
                    СтройДневник
                  </a>
                </li>
                <li>
                  <a href="#skif" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none' }}>
                    СКИФ
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#fff',
                }}
              >
                Услуги
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <a href="#services" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none' }}>
                    Системы управления
                  </a>
                </li>
                <li>
                  <a href="#services" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none' }}>
                    Автоматизация
                  </a>
                </li>
                <li>
                  <a href="#services" style={{ fontSize: '14px', color: '#64748b', textDecoration: 'none' }}>
                    Интеграция ИИ
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#fff',
                }}
              >
                Контакты
              </h4>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>
                📍 Санкт-Петербург
              </p>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '12px' }}>
                ✉️ main@systech-team.ru
              </p>
            </motion.div>
          </div>

          {/* Bottom */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '30px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span style={{ fontSize: '13px', color: '#475569' }}>
              © 2024 ООО «Системные Технологии»
            </span>
          </div>
        </div>

        {/* Robot */}
        <div
          className="robot-container"
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            zIndex: 20,
            cursor: 'pointer',
          }}
        >
          <div style={{ width: '100px', height: '140px', position: 'relative' }}>
            {/* Hat */}
            <div
              style={{
                width: '50px',
                height: '20px',
                background: '#ff3b3b',
                borderRadius: '50% 50% 0 0',
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '-35px',
                left: '20px',
                width: '16px',
                height: '16px',
                background: '#fff',
                borderRadius: '50%',
                animation: 'pompom-swing 2s ease-in-out infinite',
              }}
            />

            {/* Head */}
            <div
              style={{
                width: '60px',
                height: '45px',
                background: '#1a1a24',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                borderRadius: '12px',
                margin: '0 auto 5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}
            >
              {/* Eyes */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    background: '#00ff88',
                    borderRadius: '50%',
                    animation: 'blink 4s infinite',
                  }}
                />
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    background: '#00ff88',
                    borderRadius: '50%',
                    animation: 'blink 4s infinite',
                  }}
                />
              </div>
            </div>

            {/* Arms */}
            <div
              className="robot-arm-left"
              style={{
                position: 'absolute',
                width: '8px',
                height: '35px',
                background: '#1a1a24',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                borderRadius: '4px',
                top: '70px',
                left: '10px',
              }}
            />
            <div
              className="robot-arm-right"
              style={{
                position: 'absolute',
                width: '8px',
                height: '35px',
                background: '#1a1a24',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                borderRadius: '4px',
                top: '70px',
                right: '10px',
                transformOrigin: 'top center',
              }}
            />

            {/* Body */}
            <div
              style={{
                width: '50px',
                height: '50px',
                background: '#1a1a24',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                borderRadius: '10px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00ff88',
                fontWeight: 700,
              }}
            >
              СТ
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
          .robot-container {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          footer {
            padding: 60px 20px 30px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </>
  )
}
