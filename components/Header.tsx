'use client'

import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'О нас', href: '#about' },
  { name: 'MARS', href: '#mars' },
  { name: 'Услуги', href: '#services' },
  { name: 'Контакты', href: '#contact' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed left-0 right-0 z-40 flex justify-center"
      style={{
        top: '20px',
        padding: '0 24px',
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 4.3 }}
    >
      {/* Pill-shaped container - 2/3 width on desktop */}
      <div 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '12px',
          paddingBottom: '12px',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(18, 18, 26, 0.85)',
          // 2/3 ширины экрана для desktop, 100% для mobile
          width: '100%',
          maxWidth: '900px', // ~2/3 от 1400px контейнера
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05) inset' 
            : '0 4px 24px rgba(0, 0, 0, 0.2)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <a 
          href="#" 
          style={{ 
            fontSize: '18px',
            fontWeight: 700,
            color: 'white',
            fontFamily: "'Space Grotesk', sans-serif",
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#00ff88'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          SYSTECH
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              style={{ 
                fontSize: '14px',
                letterSpacing: '0.01em',
                color: '#94a3b8',
                fontFamily: "'Inter', sans-serif",
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 0',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          style={{
            position: 'absolute',
            top: '100%',
            marginTop: '8px',
            left: '24px',
            right: '24px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: 'rgba(18, 18, 26, 0.95)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '12px', gap: '4px' }}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                style={{ 
                  fontSize: '14px',
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  color: '#94a3b8',
                  fontFamily: "'Inter', sans-serif",
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

export default memo(Header)
