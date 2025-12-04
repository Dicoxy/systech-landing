'use client'

export default function Footer() {
  return (
    <footer 
      className="py-8 border-t"
      style={{ 
        backgroundColor: '#0a0a0f',
        borderColor: 'rgba(255,255,255,0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p 
            className="text-sm"
            style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 ООО «Системные Технологии». Все права защищены.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="#about"
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
            >
              О нас
            </a>
            <a 
              href="#mars"
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
            >
              MARS
            </a>
            <a 
              href="#services"
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
            >
              Услуги
            </a>
            <a 
              href="#contact"
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}
            >
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
