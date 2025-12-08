'use client'

import { memo, useEffect, useRef } from 'react'

const codeSnippets = [
  'import { MarsSystem } from "@systech/core"',
  'import { TelemetryStream } from "@systech/telemetry"',
  'import { RobotFleet } from "@systech/fleet"',
  '',
  'const mars = new MarsSystem({',
  '  fleet: "production",',
  '  region: "ru-spb",',
  '  telemetry: { interval: 10000 }',
  '})',
  '',
  'await mars.connect()',
  'const stream = new TelemetryStream(mars)',
  '',
  'stream.on("robot:status", (robot, data) => {',
  '  log(`[${robot.id}] Battery: ${data.battery}%`)',
  '  log(`[${robot.id}] Status: ${data.status}`)',
  '})',
  '',
  'stream.on("fleet:summary", (s) => {',
  '  dashboard.update({ online: s.online })',
  '})',
  '',
  'mars.startMonitoring()',
  '> Connected to MARS v2.4.1',
  '> Fleet: 127 robots online',
  '> Telemetry stream active',
  '',
  'robot.moveTo({ x: 142, y: 89 })',
  'robot.setSpeed(0.8)',
  'robot.startCleaning()',
  '',
  'await fleet.sync()',
  'fleet.robots.forEach(r => r.ping())',
  '',
  '> All systems operational',
  '> Uptime: 99.97%',
  '',
  'const report = await mars.generateReport()',
  'console.log(report.summary)',
  '',
  '> Daily report generated',
  '> Robots active: 127',
  '> Tasks completed: 1,847',
]

interface DecorativeCodeProps {
  side: 'left' | 'right'
}

function DecorativeCode({ side }: DecorativeCodeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const LINE_HEIGHT = 22
    const NEW_LINE_INTERVAL = 200 // мс между новыми строками
    const MAX_VISIBLE_LINES = 30
    
    let currentIndex = 0
    let lastLineTime = 0
    let startTime = Date.now() + 5000 // начинаем через 5 сек
    let lines: HTMLDivElement[] = []

    const getLineColor = (line: string) => {
      if (line.startsWith('import') || line.startsWith('const') || line.startsWith('await')) {
        return '#c792ea'
      }
      if (line.startsWith('//') || line.startsWith('>')) {
        return '#546e7a'
      }
      if (line.includes('"') || line.includes("'") || line.includes('`')) {
        return '#c3e88d'
      }
      if (line.includes('.on(') || line.includes('.start') || line.includes('.connect') || line.includes('.update') || line.includes('.moveTo') || line.includes('.sync') || line.includes('.generate')) {
        return '#82aaff'
      }
      return '#a6accd'
    }

    const isLeft = side === 'left'

    const animate = (timestamp: number) => {
      const now = Date.now()

      if (now >= startTime) {
        // Добавляем новую строку каждые NEW_LINE_INTERVAL мс
        if (now - lastLineTime >= NEW_LINE_INTERVAL) {
          const text = codeSnippets[currentIndex % codeSnippets.length]
          
          // Создаём новую строку
          const line = document.createElement('div')
          line.textContent = text || '\u00A0'
          line.style.cssText = `
            position: absolute;
            bottom: 0;
            ${isLeft ? 'left: 0' : 'right: 0'};
            width: 100%;
            color: ${getLineColor(text)};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: ${isLeft ? 'left' : 'right'};
            padding: ${isLeft ? '0 20px 0 0' : '0 0 0 20px'};
            opacity: 1;
            transition: opacity 0.5s ease;
          `
          
          container.appendChild(line)
          lines.push(line)
          
          // Двигаем ВСЕ строки вверх
          lines.forEach((l, i) => {
            const bottomPos = (lines.length - 1 - i) * LINE_HEIGHT
            l.style.bottom = `${bottomPos}px`
            
            // Плавное затухание для верхних строк
            const fadeStart = MAX_VISIBLE_LINES * LINE_HEIGHT * 0.5
            const fadeEnd = MAX_VISIBLE_LINES * LINE_HEIGHT
            if (bottomPos > fadeStart) {
              const fadeProgress = (bottomPos - fadeStart) / (fadeEnd - fadeStart)
              l.style.opacity = String(Math.max(0, 1 - fadeProgress))
            }
          })
          
          // Удаляем строки которые ушли слишком высоко
          while (lines.length > MAX_VISIBLE_LINES) {
            const oldLine = lines.shift()
            if (oldLine && oldLine.parentNode) {
              oldLine.parentNode.removeChild(oldLine)
            }
          }
          
          currentIndex++
          lastLineTime = now
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      // Очищаем все строки
      lines.forEach(l => {
        if (l.parentNode) l.parentNode.removeChild(l)
      })
      lines = []
    }
  }, [side])

  const isLeft = side === 'left'

  return (
    <div
      className="absolute hidden lg:block pointer-events-none select-none overflow-hidden"
      style={{
        [isLeft ? 'left' : 'right']: 0,
        bottom: 0,
        width: '30%',
        height: '75%',
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', monospace",
        fontSize: '11px',
        lineHeight: '22px',
        opacity: 0.12,
        zIndex: 0,
      }}
    >
      {/* Gradient fade mask - сверху затухает */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, transparent 0%, transparent 50%, rgba(10,10,15,0.9) 75%, #0a0a0f 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      
      {/* Container для строк кода */}
      <div 
        ref={containerRef}
        style={{
          position: 'absolute',
          bottom: '30px',
          [isLeft ? 'left' : 'right']: '30px',
          width: 'calc(100% - 60px)',
          height: 'calc(100% - 60px)',
        }}
      />
    </div>
  )
}

export default memo(DecorativeCode)
