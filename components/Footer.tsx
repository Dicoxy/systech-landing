'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
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
      
      <footer 
        id="contact"
        style={{ 
          backgroundColor: '#0a0a0f',
          padding: '80px 40px 40px',
          position: 'relative',
        }}
      >
        <div style={{ 
          maxWidth: '1100px', 
          margin: '0 auto',
        }}>
          {/* Main content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px',
            marginBottom: '60px',
          }}>
            {/* Company info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '16px',
              }}>
                <span style={{ color: '#00ff88' }}>Сис</span>Тех
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#64748b',
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.7,
                maxWidth: '300px',
              }}>
                ООО «Системные Технологии» — разработка систем управления, мониторинга и автоматизации для современного бизнеса.
              </p>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#00ff88',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '20px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Контакты
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a 
                  href="mailto:main@systech-team.ru"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#00ff88'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  <Mail size={18} strokeWidth={1.5} />
                  main@systech-team.ru
                </a>
                <a 
                  href="tel:+78001234567"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#00ff88'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  <Phone size={18} strokeWidth={1.5} />
                  +7 800 123 45 67
                </a>
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#64748b',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <MapPin size={18} strokeWidth={1.5} />
                  Санкт-Петербург, Россия
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#00ff88',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '20px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Навигация
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['О компании', 'MARS', 'Услуги'].map((item, i) => (
                  <a 
                    key={i}
                    href={`#${item === 'О компании' ? 'about' : item === 'MARS' ? 'mars' : 'services'}`}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontFamily: "'Inter', sans-serif",
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#00ff88'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <p style={{
              fontSize: '13px',
              color: '#475569',
              fontFamily: "'Inter', sans-serif",
              margin: 0,
            }}>
              © 2025 ООО «Системные Технологии». Все права защищены.
            </p>
            <p style={{
              fontSize: '12px',
              color: '#334155',
              fontFamily: "'Inter', sans-serif",
              margin: 0,
            }}>
              ИНН 7804012345 • ОГРН 1257800012345
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
