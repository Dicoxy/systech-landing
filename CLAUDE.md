# Проект: СисТех (Системные Технологии)

## О проекте
Корпоративный сайт IT-компании из Петербурга. Стиль: тёмный, технологичный, вдохновлён Love, Death & Robots.

## Стек
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (анимации)
- Docker (деплой)

## Структура
```
app/
├── layout.tsx      # Корневой layout
├── page.tsx        # Главная страница
└── globals.css     # Глобальные стили

components/
├── Header.tsx      # Шапка с навигацией
├── Hero.tsx        # Первый экран
├── AboutBento.tsx  # Блок статистики (100+, 5 городов)
├── Mars.tsx        # Продукт MARS (будет в карусели)
├── Services.tsx    # Услуги
├── Footer.tsx      # Подвал с контактами
└── IntroAnimation.tsx  # Интро-анимация
```

## Правила разработки
- Мобильная адаптация обязательна
- Комментарии на русском
- Коммит после каждого логического блока
- Семантичный HTML
- Анимации через Framer Motion

## Цветовая схема
- Фон: #0a0a0f (primary), #12121a (secondary)
- Акцент: #00ff88 (зелёный), #3b82f6 (синий)
- Текст: #ffffff (primary), #94a3b8 (secondary), #64748b (muted)

## Шрифты
- Заголовки: Space Grotesk
- Текст: Inter

## Команды
```bash
npm run dev      # Локальная разработка
npm run build    # Сборка
npm run start    # Запуск production

# Docker
docker compose build
docker compose up -d
```

## Деплой
- Сервер: 89.125.2.35 (Финляндия, разработка)
- Порт: 3002 (через nginx на 80)
- Docker: --restart=always

## Контакты компании
- ООО "СИСТЕМНЫЕ ТЕХНОЛОГИИ"
- ИНН: 7813680891
- КПП: 781301001
- ОГРН: 1247800064258
- Email: main@systech-team.ru
- Локация: Санкт-Петербург
