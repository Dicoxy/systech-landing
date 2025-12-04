'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

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
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-6 py-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-300"
                  style={{ 
                    backgroundColor: '#1a1a24',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: "'Inter', sans-serif"
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-6 py-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-300"
                  style={{ 
                    backgroundColor: '#1a1a24',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: "'Inter', sans-serif"
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <div>
                <textarea
                  placeholder="Сообщение"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full px-6 py-4 rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-300 resize-none"
                  style={{ 
                    backgroundColor: '#1a1a24',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontFamily: "'Inter', sans-serif"
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
                style={{ 
                  background: 'linear-gradient(to right, #00ff88, #3b82f6)',
                  color: '#0a0a0f',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                <Send className="w-5 h-5" />
                Отправить
              </button>
            </form>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-10">
              <div className="flex items-start gap-6">
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
              </div>

              <div className="flex items-start gap-6">
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
              </div>

              <div className="flex items-start gap-6">
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
