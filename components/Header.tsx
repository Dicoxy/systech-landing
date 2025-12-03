'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'О нас', href: '#about' },
  { name: 'MARS', href: '#mars' },
  { name: 'Услуги', href: '#services' },
  { name: 'Контакты', href: '#contact' },
]

export default function Header() {
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent' 
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 3.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-bold text-white transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          SYSTECH
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm tracking-wide transition-colors"
              style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden border-t border-white/10"
          style={{ backgroundColor: '#12121a' }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-lg text-left transition-colors"
                style={{ color: '#94a3b8', fontFamily: "'Inter', sans-serif" }}
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
