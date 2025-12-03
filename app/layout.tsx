import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Системные Технологии — Роботы. Данные. Контроль.',
  description: 'IT-компания из Петербурга. Управляем флотами роботов, внедряем AI, автоматизируем бизнес. MARS — система мониторинга 50+ роботов в реальном времени.',
  keywords: 'системные технологии, управление роботами, MARS, автоматизация бизнеса, телеметрия роботов, AI интеграция, Петербург IT',
  openGraph: {
    title: 'Системные Технологии — Роботы. Данные. Контроль.',
    description: 'IT-компания из Петербурга. Управляем флотами роботов.',
    url: 'https://systech-team.ru',
    siteName: 'Системные Технологии',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
