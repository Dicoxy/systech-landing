'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState, useRef } from 'react'

// Magnetic Button
function MagneticSendButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.2)
    y.set((e.clientY - centerY) * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      type="submit"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full px-8 py-4 font-semibold rounded-xl transition-shadow duration-300 flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#00ff88]/20"
    >
      <span 
        className="relative z-10 flex items-center gap-3"
        style={{ 
          color: '#0a0a0f',
          fontFamily: "'Space Grotesk', sans-serif"
        }}
      >
        <Send className="w-5 h-5" />
        {children}
      </span>
      <div 
        className="absolute inset-0 rounded-xl"
        style={{ background: 'linear-gradient(to right, #00ff88, #3b82f6)' }}
      />
    </motion.button>
  )
}

// Glow Input
function GlowInput({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  rows 
}: { 
  type?: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  rows?: number
}) {
  const [isFocused, setIsFocused] = useState(false)
  
  const Component = rows ? 'textarea' : 'input'
  
  return (
    <div className="relative">
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-xl -z-10"
        style={{ 
          background: 'linear-gradient(45deg, rgba(0,255,136,0.3), rgba(59,130,246,0.3))',
          filter: 'blur(10px)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <Component
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={rows}
        required
        className="w-full px-6 py-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-300 resize-none"
        style={{ 
          backgroundColor: '#1a1a24',
          border: isFocused ? '1px solid #00ff88' : '1px solid rgba(255,255,255,0.1)',
          fontFamily: "'Inter', sans-serif"
        }}
      />
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:info@systech-team.ru?subject=Заявка от ${formData.name}&body=${formData.message}`
  }

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#12121a' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Готовы говорить?
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
          >
            Расскажите о вашей задаче — мы предложим решение
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <GlowInput
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(value) => setFormData({...formData, name: value})}
              />

              <GlowInput
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(value) => setFormData({...formData, email: value})}
              />

              <GlowInput
                placeholder="Сообщение"
                value={formData.message}
                onChange={(value) => setFormData({...formData, message: value})}
                rows={5}
              />

              <MagneticSendButton>
                Отправить
              </MagneticSendButton>
            </form>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-10">
              <motion.div 
                className="flex items-start gap-6"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                >
                  <Mail className="w-7 h-7" style={{ color: '#00ff88' }} />
                </div>
                <div>
                  <h4 
                    className="text-xl font-semibold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Email
                  </h4>
                  <a 
                    href="mailto:info@systech-team.ru"
                    className="text-lg transition-colors hover:text-white"
                    style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
                  >
                    info@systech-team.ru
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                >
                  <Phone className="w-7 h-7" style={{ color: '#00ff88' }} />
                </div>
                <div>
                  <h4 
                    className="text-xl font-semibold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Телефон
                  </h4>
                  <a 
                    href="tel:+78001234567"
                    className="text-lg transition-colors hover:text-white"
                    style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
                  >
                    +7 (800) 123-45-67
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                >
                  <MapPin className="w-7 h-7" style={{ color: '#00ff88' }} />
                </div>
                <div>
                  <h4 
                    className="text-xl font-semibold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Адрес
                  </h4>
                  <p 
                    className="text-lg"
                    style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
                  >
                    Санкт-Петербург, Россия
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Mascot placeholder */}
            <motion.div 
              className="mt-12 hidden lg:flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div 
                className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{ 
                  border: '2px dashed rgba(0,255,136,0.3)',
                  backgroundColor: 'rgba(0,255,136,0.02)'
                }}
              >
                <span 
                  className="text-xs text-center px-2"
                  style={{ color: 'rgba(0,255,136,0.4)', fontFamily: "'Inter', sans-serif" }}
                >
                  Маскот: Коммуникатор
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
