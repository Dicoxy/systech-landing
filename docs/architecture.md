# ARCHITECTURE.md — Системные Технологии

## Проект
Лендинг для IT-компании ООО "Системные Технологии"
Домен: systech-team.ru
Сервер: 5.44.45.166

## Технический стек

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (кастомизированные под тёмную тему)
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Шрифты
- **Заголовки:** Space Grotesk
- **Текст:** Inter

## Структура проекта

```
systech-landing/
├── app/
│   ├── layout.tsx          # Корневой layout
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Глобальные стили + Tailwind
├── components/
│   ├── ui/                 # shadcn компоненты
│   ├── IntroAnimation.tsx  # Заставка LD&R
│   ├── Header.tsx          # Фиксированный header
│   ├── Hero.tsx            # Главный экран с эффектами
│   ├── Stats.tsx           # Статистика (50+ • 5 • ∞)
│   ├── About.tsx           # О компании
│   ├── Mars.tsx            # Секция MARS
│   ├── Services.tsx        # Направления работы
│   ├── Contact.tsx         # Контакты + форма
│   ├── Footer.tsx          # Футер
│   └── effects/            # Визуальные эффекты
│       ├── ParticleGrid.tsx
│       └── GradientOrb.tsx
├── lib/
│   └── utils.ts            # Утилиты
├── public/
│   ├── fonts/
│   └── images/
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Секции лендинга (порядок)

1. **IntroAnimation** — заставка в стиле LD&R (3 сек)
2. **Header** — фиксированный, прозрачный → solid при скролле
3. **Hero** — 100vh, главный экран с particle эффектом
4. **Stats** — полоса со статистикой
5. **About** — о компании
6. **MARS** — флагманский продукт
7. **Services** — направления работы (3 карточки)
8. **Contact** — контакты + форма
9. **Footer** — копирайт

## Принципы кода

- Компоненты маленькие, до 100 строк
- Один компонент = один файл
- Tailwind для стилей
- Анимации через Framer Motion
- Адаптивность: mobile-first
- Семантический HTML

## SEO требования

- Мета-теги на каждой странице
- Open Graph для соцсетей
- robots.txt
- sitemap.xml
- Structured data (JSON-LD)
- Lighthouse score: 90+
