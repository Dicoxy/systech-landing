'use client'

import { useState } from 'react'
import IntroAnimation from '@/components/IntroAnimation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Mars from '@/components/Mars'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}
      
      <Header />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Mars />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}
