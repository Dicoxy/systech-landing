'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
}

export default function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let mouseX = -1000
    let mouseY = -1000
    const attractionRadius = 200
    const connectionDistance = 150

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000))
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Base movement
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Attraction to cursor (instead of repulsion)
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < attractionRadius && dist > 0) {
          const force = (attractionRadius - dist) / attractionRadius
          // Притягиваем к курсору
          particle.x += dx * force * 0.03
          particle.y += dy * force * 0.03
        }

        // Draw particle
        const isNearCursor = dist < attractionRadius
        const particleOpacity = isNearCursor ? 0.8 : 0.4
        const particleSize = isNearCursor ? 3 : 2
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 136, ${particleOpacity})`
        ctx.fill()

        // Draw connections
        particles.forEach((other, j) => {
          if (i >= j) return
          
          const connDx = particle.x - other.x
          const connDy = particle.y - other.y
          const connDist = Math.sqrt(connDx * connDx + connDy * connDy)
          
          if (connDist < connectionDistance) {
            // Check if both particles are near cursor
            const otherDx = mouseX - other.x
            const otherDy = mouseY - other.y
            const otherDistToCursor = Math.sqrt(otherDx * otherDx + otherDy * otherDy)
            
            const bothNearCursor = dist < attractionRadius && otherDistToCursor < attractionRadius
            
            // Усиление связей около курсора
            const baseOpacity = 0.15 * (1 - connDist / connectionDistance)
            const opacity = bothNearCursor ? baseOpacity * 3 : baseOpacity
            const lineWidth = bothNearCursor ? 1.5 : 1
            
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(0, 255, 136, ${Math.min(opacity, 0.6)})`
            ctx.lineWidth = lineWidth
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}
