'use client'

import { useState } from 'react'
import IntroAnimation from '@/components/IntroAnimation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Intro Animation */}
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main content */}
      {introComplete && (
        <>
          <Header />
          <Hero />
          <Stats />
          
          {/* Placeholder sections for Day 3 */}
          <section 
            id="about" 
            className="min-h-screen flex items-center justify-center"
          >
            <p style={{ color: '#64748b' }}>About section — День 3</p>
          </section>
          
          <section 
            id="mars" 
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: '#12121a' }}
          >
            <p style={{ color: '#64748b' }}>MARS section — День 3</p>
          </section>
          
          <section 
            id="services" 
            className="min-h-screen flex items-center justify-center"
          >
            <p style={{ color: '#64748b' }}>Services section — День 3</p>
          </section>
          
          <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: '#12121a' }}
          >
            <p style={{ color: '#64748b' }}>Contact section — День 3</p>
          </section>

          {/* Footer */}
          <footer 
            className="py-8 text-center border-t border-white/10"
            style={{ color: '#64748b' }}
          >
            © 2025 ООО «Системные Технологии»
          </footer>
        </>
      )}
    </main>
  )
}
