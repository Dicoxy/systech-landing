'use client'

import { useRef, useState, useEffect, ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductsCarouselProps {
  children: ReactNode[]
}

export default function ProductsCarousel({ children }: ProductsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showArrows, setShowArrows] = useState(false)

  const totalProducts = children.length

  // Update current index on scroll
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const itemWidth = container.offsetWidth
      const index = Math.round(scrollLeft / itemWidth)
      setCurrentIndex(index)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current
    if (!container) return

    const itemWidth = container.offsetWidth
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    })
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < totalProducts - 1) {
      scrollToIndex(currentIndex + 1)
    }
  }

  return (
    <section id="products"
      style={{ position: 'relative' }} 
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {/* Horizontal scroll container */}
      <section id="products"
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
          WebkitOverflowScrolling: 'touch', // iOS smooth scrolling
        }}
        className="products-carousel-scroll"
      >
        {children.map((child, index) => (
          <section id="products"
            key={index}
            style={{
              minWidth: '100vw',
              maxWidth: '100vw',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            {child}
          </section>
        ))}
      </section>

      {/* Navigation arrows */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrevious}
          style={{
            position: 'fixed',
            left: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(18, 18, 26, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 50,
            opacity: showArrows ? 1 : 0,
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(18, 18, 26, 1)'
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(18, 18, 26, 0.9)'
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
          }}
        >
          <ChevronLeft size={24} color="#ffffff" strokeWidth={2} />
        </button>
      )}

      {currentIndex < totalProducts - 1 && (
        <button
          onClick={handleNext}
          style={{
            position: 'fixed',
            right: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(18, 18, 26, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 50,
            opacity: showArrows ? 1 : 0,
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(18, 18, 26, 1)'
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(18, 18, 26, 0.9)'
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
          }}
        >
          <ChevronRight size={24} color="#ffffff" strokeWidth={2} />
        </button>
      )}

      {/* Dot indicators */}
      <section id="products"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 50,
          padding: '12px 20px',
          borderRadius: '24px',
          backgroundColor: 'rgba(18, 18, 26, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {Array.from({ length: totalProducts }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            style={{
              width: currentIndex === index ? '32px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: currentIndex === index ? '#00ff88' : 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: currentIndex === index ? '0 0 12px rgba(0, 255, 136, 0.5)' : 'none',
            }}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </section>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .products-carousel-scroll::-webkit-scrollbar {
          display: none;
        }

        /* Mobile navigation hints */
        @media (max-width: 768px) {
          .products-carousel-scroll {
            scroll-padding: 0;
          }
        }
      `}</style>
    </section>
  )
}
