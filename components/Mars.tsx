'use client'

import { motion } from 'framer-motion'
import { Activity, Battery, MapPin, Wifi } from 'lucide-react'

export default function Mars() {
  const features = [
    { icon: Activity, label: 'Телеметрия в реальном времени' },
    { icon: Battery, label: 'Мониторинг батареи и расходников' },
    { icon: MapPin, label: 'Отслеживание локации' },
    { icon: Wifi, label: 'Статус онлайн/офлайн' },
  ]

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
        id="mars" 
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
            background: 'radial-gradient(ellipse, rgba(0, 255, 136, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        {/* Two column layout */}
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          maxWidth: '1300px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}>
          
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
                color: '#00ff88',
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Флагманский продукт
            </motion.span>
            
            <motion.h2
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                margin: '0 0 20px 0',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              MARS
            </motion.h2>
            
            <motion.p
              style={{
                fontSize: '18px',
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
              Система мониторинга и управления флотами автономных роботов. Телеметрия, отслеживание расходников и полный контроль в реальном времени.
            </motion.p>

            {/* Features list */}
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <feature.icon size={18} color="#00ff88" strokeWidth={2} />
                  </div>
                  <span style={{ fontSize: '15px', color: '#e2e8f0', fontFamily: "'Inter', sans-serif" }}>
                    {feature.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Vendor tags */}
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
                Поддерживаемые платформы
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Pudu', 'Viggo', 'X-Human', 'Yarbo'].map((vendor, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      background: '#12121a',
                      border: '1px solid rgba(0,255,136,0.06)',
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: '#00ff88',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#00ff88',
                      }}
                    />
                    {vendor}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Dashboard cards */}
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
                boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.6), 0 0 40px -10px rgba(0, 255, 136, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Browser bar */}
              <div style={{
                backgroundColor: '#1a1a24',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f57' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#febc2e' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#28c840' }} />
                <div style={{ marginLeft: '12px', padding: '4px 12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '11px', color: '#64748b' }}>
                  mars.systech-team.ru
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00ff88', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontSize: '10px', color: '#00ff88' }}>Live</span>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div style={{ backgroundColor: '#0f1419', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'linear-gradient(135deg, #00ff88, #00cc6a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#000', fontWeight: 700, fontSize: '12px' }}>M</span>
                  </div>
                  <span style={{ marginLeft: '10px', color: '#fff', fontSize: '14px', fontWeight: 600 }}>MARS Dashboard</span>
                </div>
                
                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ padding: '14px', backgroundColor: 'rgba(0,255,136,0.05)', borderRadius: '8px', border: '1px solid rgba(0,255,136,0.1)' }}>
                    <div style={{ color: '#00ff88', fontSize: '24px', fontWeight: 700 }}>127</div>
                    <div style={{ color: '#64748b', fontSize: '10px' }}>Роботов онлайн</div>
                  </div>
                  <div style={{ padding: '14px', backgroundColor: 'rgba(59,130,246,0.05)', borderRadius: '8px', border: '1px solid rgba(59,130,246,0.1)' }}>
                    <div style={{ color: '#3b82f6', fontSize: '24px', fontWeight: 700 }}>98%</div>
                    <div style={{ color: '#64748b', fontSize: '10px' }}>Эффективность</div>
                  </div>
                  <div style={{ padding: '14px', backgroundColor: 'rgba(245,158,11,0.05)', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.1)' }}>
                    <div style={{ color: '#f59e0b', fontSize: '24px', fontWeight: 700 }}>5</div>
                    <div style={{ color: '#64748b', fontSize: '10px' }}>Городов</div>
                  </div>
                </div>
                
                {/* Robot list */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  {['Viggo SC50', 'Viggo SC80', 'PUDU CC1', 'PUDU T300'].map((name, i) => (
                    <div key={i} style={{ padding: '8px 10px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: i === 2 ? '#f59e0b' : '#00ff88' }} />
                      <span style={{ color: '#94a3b8', fontSize: '11px' }}>{name}</span>
                      <span style={{ marginLeft: 'auto', color: '#64748b', fontSize: '10px' }}>{85 + i * 3}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Two smaller cards side by side */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {/* Robot detail card */}
              <motion.div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: '#12141a',
                  padding: '16px',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00ff88' }} />
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>Viggo SC50plus</span>
                  <span style={{ marginLeft: 'auto', padding: '2px 6px', backgroundColor: 'rgba(0,255,136,0.1)', borderRadius: '4px', color: '#00ff88', fontSize: '9px' }}>Online</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ color: '#64748b', fontSize: '11px' }}>Батарея</span>
                      <span style={{ color: '#00ff88', fontSize: '11px', fontWeight: 600 }}>95%</span>
                    </div>
                    <div style={{ height: '4px', backgroundColor: 'rgba(0,255,136,0.1)', borderRadius: '2px' }}>
                      <div style={{ width: '95%', height: '100%', backgroundColor: '#00ff88', borderRadius: '2px' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b', fontSize: '11px' }}>Пробег</span>
                    <span style={{ color: '#fff', fontSize: '11px' }}>118 км</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b', fontSize: '11px' }}>Убрано</span>
                    <span style={{ color: '#fff', fontSize: '11px' }}>2,450 м²</span>
                  </div>
                </div>
              </motion.div>

              {/* Chart card */}
              <motion.div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: '#12141a',
                  padding: '16px',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>Эффективность</span>
                  <span style={{ color: '#64748b', fontSize: '9px' }}>7 дней</span>
                </div>
                {/* Chart */}
                <div style={{ height: '80px', position: 'relative' }}>
                  <svg width="100%" height="100%" viewBox="0 0 200 70" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00ff88" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,60 Q30,55 50,45 T100,35 T150,25 T200,15 L200,70 L0,70 Z" fill="url(#chartGrad)" />
                    <path d="M0,60 Q30,55 50,45 T100,35 T150,25 T200,15" fill="none" stroke="#00ff88" strokeWidth="2" />
                  </svg>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d, i) => (
                    <span key={i} style={{ color: i === 6 ? '#00ff88' : '#64748b', fontSize: '9px' }}>{d}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
