'use client'

import { useState } from 'react'
import IntroAnimation from '@/components/IntroAnimation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutBento from '@/components/AboutBento'
import Mars from '@/components/Mars'
import Services from '@/components/Services'
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
        <AboutBento />
        <Mars />
        <Services />
      </main>
      
      <Footer />
    </>
  )
}
