'use client'

import { motion } from 'framer-motion'
import { Activity, Battery, MapPin, Wifi, Mic, Brain, FileCheck, Shield } from 'lucide-react'

const products = [
  {
    id: 'mars',
    tag: 'Флагманский продукт',
    tagColor: '#00ff88',
    name: 'MARS',
    description: 'Система мониторинга и управления флотами автономных роботов. Телеметрия, отслеживание расходников и полный контроль в реальном времени.',
    features: [
      { icon: Activity, label: 'Телеметрия в реальном времени' },
      { icon: Battery, label: 'Мониторинг батареи и расходников' },
      { icon: MapPin, label: 'Отслеживание локации' },
      { icon: Wifi, label: 'Статус онлайн/офлайн' },
    ],
    mockup: 'mars',
    gradientColor: 'rgba(0, 255, 136, 0.08)',
  },
  {
    id: 'stroidnevnik',
    tag: 'Новый продукт',
    tagColor: '#3b82f6',
    name: 'СТРОЙДНЕВНИК',
    description: 'Прораб надиктовывает — AI формирует готовый документ для надзорных органов. Вместо часа заполнения форм — минута голосом в Telegram.',
    features: [
      { icon: Mic, label: 'Голосовой ввод на стройке' },
      { icon: Brain, label: 'AI-структуризация данных' },
      { icon: FileCheck, label: 'Валидный XML по схемам Минстроя' },
      { icon: Shield, label: 'Готов к подписанию ЭЦП' },
    ],
    mockup: 'stroidnevnik',
    gradientColor: 'rgba(59, 130, 246, 0.08)',
  },
  {
    id: 'skif',
    tag: 'AI-ассистент',
    tagColor: '#a855f7',
    name: 'СКИФ',
    description: 'Искусственный интеллект для обработки документов, анализа данных и автоматизации рутинных задач. Экономит до 40% времени сотрудников.',
    features: [
      { icon: Brain, label: 'Распознавание документов (OCR)' },
      { icon: FileCheck, label: 'Анализ контрактов и договоров' },
      { icon: Activity, label: 'Автоматические ответы на email' },
      { icon: Wifi, label: 'Интеграция с Telegram и Slack' },
    ],
    mockup: 'skif',
    gradientColor: 'rgba(168, 85, 247, 0.08)',
  },
]

// MARS Mockup Component
function MarsMockup() {
  return (
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

      {/* Two smaller cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
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
          </div>
        </motion.div>

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
        </motion.div>
      </div>
    </motion.div>
  )
}

// StroyDnevnik Mockup Component
function StroyDnevnikMockup() {
  return (
    <motion.div
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Telegram bot interface */}
      <motion.div
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.6), 0 0 40px -10px rgba(59, 130, 246, 0.1)',
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
            t.me/stroidnevnik_bot
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '10px', color: '#3b82f6' }}>Active</span>
          </div>
        </div>

        {/* Telegram content */}
        <div style={{ backgroundColor: '#0f1419', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '12px' }}>СД</span>
            </div>
            <span style={{ marginLeft: '10px', color: '#fff', fontSize: '14px', fontWeight: 600 }}>СтройДневник Бот</span>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
            <div style={{ padding: '14px', backgroundColor: 'rgba(59,130,246,0.05)', borderRadius: '8px', border: '1px solid rgba(59,130,246,0.1)' }}>
              <div style={{ color: '#3b82f6', fontSize: '24px', fontWeight: 700 }}>47</div>
              <div style={{ color: '#64748b', fontSize: '10px' }}>Записей</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'rgba(0,255,136,0.05)', borderRadius: '8px', border: '1px solid rgba(0,255,136,0.1)' }}>
              <div style={{ color: '#00ff88', fontSize: '24px', fontWeight: 700 }}>98%</div>
              <div style={{ color: '#64748b', fontSize: '10px' }}>Точность AI</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'rgba(245,158,11,0.05)', borderRadius: '8px', border: '1px solid rgba(245,158,11,0.1)' }}>
              <div style={{ color: '#f59e0b', fontSize: '24px', fontWeight: 700 }}>12</div>
              <div style={{ color: '#64748b', fontSize: '10px' }}>Дней работы</div>
            </div>
          </div>

          {/* Voice message simulation */}
          <div style={{ padding: '12px', backgroundColor: 'rgba(59,130,246,0.1)', borderRadius: '12px', borderLeft: '3px solid #3b82f6', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Mic size={14} color="#3b82f6" />
              <span style={{ color: '#3b82f6', fontSize: '11px', fontWeight: 600 }}>Голосовое сообщение распознано</span>
            </div>
            <div style={{ color: '#94a3b8', fontSize: '11px', lineHeight: 1.5 }}>
              "Третий этаж, армирование плиты. Бригада Сидорова, шесть человек. Арматура А500С диаметр двенадцать, две с половиной тонны. Погода ясно, плюс пятнадцать"
            </div>
          </div>

          {/* Parsed data */}
          <div style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
            <div style={{ color: '#00ff88', fontSize: '11px', fontWeight: 600, marginBottom: '8px' }}>✓ Структурированные данные</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Дата:</span>
                <span style={{ color: '#fff' }}>8 декабря 2025</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Работы:</span>
                <span style={{ color: '#fff' }}>Армирование плиты, 3 этаж</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Бригада:</span>
                <span style={{ color: '#fff' }}>Сидоров, 6 чел.</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#64748b' }}>Материал:</span>
                <span style={{ color: '#fff' }}>А500С ⌀12, 2.5т</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Two smaller cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <motion.div
          style={{
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#12141a',
            padding: '16px',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>Модули</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Журнал работ', 'Акты', 'КС-формы', 'Сдача объекта'].map((module, i) => (
              <div key={i} style={{ padding: '6px 8px', backgroundColor: 'rgba(59,130,246,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: i === 0 ? '#00ff88' : '#64748b' }} />
                <span style={{ color: '#94a3b8', fontSize: '11px' }}>{module}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#12141a',
            padding: '16px',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>Соответствие</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '6px 8px', backgroundColor: 'rgba(0,255,136,0.05)', borderRadius: '6px' }}>
              <span style={{ color: '#00ff88', fontSize: '10px', fontWeight: 600 }}>✓ Приказ № 1026/пр</span>
            </div>
            <div style={{ padding: '6px 8px', backgroundColor: 'rgba(0,255,136,0.05)', borderRadius: '6px' }}>
              <span style={{ color: '#00ff88', fontSize: '10px', fontWeight: 600 }}>✓ ГОСТ Р 70108-2025</span>
            </div>
            <div style={{ padding: '6px 8px', backgroundColor: 'rgba(0,255,136,0.05)', borderRadius: '6px' }}>
              <span style={{ color: '#00ff88', fontSize: '10px', fontWeight: 600 }}>✓ Валидный XML</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// SKIF Mockup Component
function SkifMockup() {
  return (
    <motion.div
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Main AI dashboard */}
      <motion.div
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.6), 0 0 40px -10px rgba(168, 85, 247, 0.1)',
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
            skif.systech-team.ru
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a855f7', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '10px', color: '#a855f7' }}>Processing</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div style={{ backgroundColor: '#0f1419', padding: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'linear-gradient(135deg, #a855f7, #9333ea)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '12px' }}>С</span>
            </div>
            <span style={{ marginLeft: '10px', color: '#fff', fontSize: '14px', fontWeight: 600 }}>СКИФ AI Dashboard</span>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
            <div style={{ padding: '14px', backgroundColor: 'rgba(168,85,247,0.05)', borderRadius: '8px', border: '1px solid rgba(168,85,247,0.1)' }}>
              <div style={{ color: '#a855f7', fontSize: '24px', fontWeight: 700 }}>847</div>
              <div style={{ color: '#64748b', fontSize: '10px' }}>Документов</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'rgba(0,255,136,0.05)', borderRadius: '8px', border: '1px solid rgba(0,255,136,0.1)' }}>
              <div style={{ color: '#00ff88', fontSize: '24px', fontWeight: 700 }}>40%</div>
              <div style={{ color: '#64748b', fontSize: '10px' }}>Экономия времени</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'rgba(59,130,246,0.05)', borderRadius: '8px', border: '1px solid rgba(59,130,246,0.1)' }}>
              <div style={{ color: '#3b82f6', fontSize: '24px', fontWeight: 700 }}>24/7</div>
              <div style={{ color: '#64748b', fontSize: '10px' }}>Работает</div>
            </div>
          </div>

          {/* Document processing */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { name: 'Договор поставки №4521.pdf', status: 'processed', progress: 100 },
              { name: 'Акт сверки за ноябрь.xlsx', status: 'processed', progress: 100 },
              { name: 'Письмо от контрагента.docx', status: 'processing', progress: 67 },
              { name: 'Спецификация оборудования.pdf', status: 'queue', progress: 0 },
            ].map((doc, i) => (
              <div key={i} style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ color: '#94a3b8', fontSize: '11px' }}>{doc.name}</span>
                  <span style={{
                    padding: '2px 6px',
                    backgroundColor: doc.status === 'processed' ? 'rgba(0,255,136,0.1)' : doc.status === 'processing' ? 'rgba(168,85,247,0.1)' : 'rgba(100,116,139,0.1)',
                    borderRadius: '4px',
                    color: doc.status === 'processed' ? '#00ff88' : doc.status === 'processing' ? '#a855f7' : '#64748b',
                    fontSize: '9px',
                    fontWeight: 600
                  }}>
                    {doc.status === 'processed' ? 'Готово' : doc.status === 'processing' ? 'Обработка' : 'В очереди'}
                  </span>
                </div>
                {doc.progress > 0 && (
                  <div style={{ height: '3px', backgroundColor: 'rgba(168,85,247,0.1)', borderRadius: '2px' }}>
                    <div style={{ width: `${doc.progress}%`, height: '100%', backgroundColor: '#a855f7', borderRadius: '2px' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Two smaller cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <motion.div
          style={{
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#12141a',
            padding: '16px',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>Интеграции</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Telegram', 'Slack', 'Email', '1C'].map((integration, i) => (
              <div key={i} style={{ padding: '6px 8px', backgroundColor: 'rgba(168,85,247,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#00ff88' }} />
                <span style={{ color: '#94a3b8', fontSize: '11px' }}>{integration}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: '#12141a',
            padding: '16px',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>Сегодня</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Обработано</span>
              <span style={{ color: '#a855f7', fontWeight: 600 }}>142 док.</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Сэкономлено</span>
              <span style={{ color: '#00ff88', fontWeight: 600 }}>4.2 ч</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Точность</span>
              <span style={{ color: '#3b82f6', fontWeight: 600 }}>96%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ProductsCarousel() {
  return (
    <>
      {/* Separator line */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)',
        }}
      />

      <section
        id="products"
        style={{
          backgroundColor: '#0a0a0f',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ padding: '80px 40px 40px', textAlign: 'center' }}>
          <motion.div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              marginBottom: '24px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#3b82f6',
                fontFamily: "'Space Grotesk', sans-serif",
                letterSpacing: '0.05em',
              }}
            >
              ПРОДУКТЫ
            </span>
          </motion.div>

          <motion.h2
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Системы для бизнеса
          </motion.h2>
          <motion.p
            style={{
              fontSize: '18px',
              color: '#94a3b8',
              fontFamily: "'Inter', sans-serif",
              maxWidth: '600px',
              margin: '0 auto 40px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Прокрутите горизонтально, чтобы увидеть все решения
          </motion.p>
        </div>

        {/* Horizontal scroll container */}
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'thin',
            scrollbarColor: '#3b82f6 #12121a',
            paddingBottom: '80px',
          }}
          className="products-carousel"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{
                minWidth: '100vw',
                scrollSnapAlign: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '40px',
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
                  background: `radial-gradient(ellipse, ${product.gradientColor} 0%, transparent 60%)`,
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
                  width: '100%',
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
                      color: product.tagColor,
                      fontFamily: "'Space Grotesk', sans-serif",
                      marginBottom: '16px',
                      textTransform: 'uppercase',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {product.tag}
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
                    {product.name}
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
                    {product.description}
                  </motion.p>

                  {/* Features list */}
                  <motion.div
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {product.features.map((feature, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            backgroundColor: `${product.tagColor}1a`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <feature.icon size={18} color={product.tagColor} strokeWidth={2} />
                        </div>
                        <span
                          style={{
                            fontSize: '15px',
                            color: '#e2e8f0',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Right column - Mockup */}
                {product.mockup === 'mars' && <MarsMockup />}
                {product.mockup === 'stroidnevnik' && <StroyDnevnikMockup />}
                {product.mockup === 'skif' && <SkifMockup />}
              </div>
            </div>
          ))}
        </div>

        <style jsx global>{`
          .products-carousel::-webkit-scrollbar {
            height: 8px;
          }
          .products-carousel::-webkit-scrollbar-track {
            background: #12121a;
            border-radius: 4px;
          }
          .products-carousel::-webkit-scrollbar-thumb {
            background: #3b82f6;
            border-radius: 4px;
          }
          .products-carousel::-webkit-scrollbar-thumb:hover {
            background: #60a5fa;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </section>
    </>
  )
}
