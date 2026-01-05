# Проект: СисТех (Системные Технологии)

## ⚠️ КРИТИЧЕСКИ ВАЖНО — ПРОЧИТАЙ ПЕРВЫМ

### Правило изменений
**Улучшаем существующее — НЕ переписываем.**

- Делаем ОДНУ задачу за раз
- После каждой задачи — коммит и СТОП
- Ждём подтверждения перед следующей задачей
- Проверяем что остальные секции НЕ сломались

### Структура веток
```
main      — рабочая версия (сейчас здесь)
redesign  — референс с компонентами для копирования
```

### Как брать компоненты из redesign
```bash
# Посмотреть файл из redesign:
git show redesign:components/AboutBento.tsx

# Скопировать файл из redesign в текущую ветку:
git checkout redesign -- components/AboutBento.tsx
```

### Компоненты в ветке redesign (для копирования):
- `components/AboutBento.tsx` — Bento Grid
- `components/Symbiosis.tsx` — секция Человек + AI
- `components/effects/Snowfall.tsx` — снег
- `components/effects/Ticker.tsx` — бегущая строка
- `components/Footer.tsx` — новый футер

---

## О проекте
Корпоративный сайт IT-компании из Петербурга. Стиль: тёмный, технологичный, вдохновлён Love, Death & Robots.

## Стек
- Next.js 14 (App Router)
- TypeScript  
- Tailwind CSS
- Framer Motion (анимации)
- Docker (деплой)

## Структура секций (финальная)
```
1. Header — навигация
2. Hero — главный экран + Snowfall + 2 робота по бокам
3. About (Bento) — статистика, glassmorphism, Ticker внизу
4. Products — карусель с дашбордами (desktop), аккордеон (mobile)
5. Services — услуги
6. Symbiosis — Человек + AI (выровнять влево!)
7. Footer — из редизайна
```

## Требования к эффектам

### Snowfall
- z-index НИЖЕ блоков (снег ЗА контентом)
- Виден сквозь полупрозрачные блоки (glassmorphism)

### Glassmorphism
- Блоки = "мутное стекло"
- `backdrop-filter: blur()`
- Полупрозрачный фон

### Hover на Bento
- Блок должен ЗАМЕТНО увеличиваться (scale 1.05+)
- Не еле-еле, а чтобы было видно

### Роботы-маскоты
- 2 штуки по бокам экрана
- Левый машет левой рукой
- Правый машет правой рукой
- Не перекрывают контент

### Products адаптив
- Desktop (>768px): карусель с дашбордами
- Mobile (≤768px): аккордеон

---

## Цветовая схема
- Фон: #0a0a0f (primary), #12121a (secondary)
- Акцент: #00ff88 (зелёный), #3b82f6 (синий)
- Текст: #ffffff (primary), #94a3b8 (secondary), #64748b (muted)

## Шрифты
- Заголовки: Space Grotesk
- Текст: Inter

## Команды
```bash
npm run dev      # Локальная разработка (порт 3003)
npm run build    # Сборка
npm run start    # Запуск production

# Docker
docker compose build
docker compose up -d
```

## Серверы
- **Dev:** 89.125.2.35 (Финляндия) — порт 3003
- **Prod:** 5.44.45.166 (Россия) — systech-team.ru

## Контакты компании
- ООО "СИСТЕМНЫЕ ТЕХНОЛОГИИ"
- ИНН: 7813680891
- КПП: 781301001
- ОГРН: 1247800064258
- Email: main@systech-team.ru
- Локация: Санкт-Петербург

---

## Текущая задача
> Получи задачу от человека. Делай ТОЛЬКО её. После — коммит и СТОП.

## Анимированные линии к карточкам

**Компонент:** `components/ui/AnimatedLines.tsx`

**Использование:**
```tsx
<AnimatedLines
  containerRef={containerRef}
  originRef={originRef}
  targetRefs={[ref1, ref2, ref3]}
  colors={['#00ff88', '#3b82f6', '#f59e0b']}
  isInView={isInView}
  pattern="fan"
/>
```

**⚠️ КРИТИЧНО — частые ошибки:**
1. **НЕ анимировать x/y целевых элементов** — только `opacity`. Иначе `getBoundingClientRect()` вернёт неверные координаты
2. **containerRef** должен быть на родителе с `position: relative`
3. **targetRefs** — массив refs на элементы к которым идут линии (обычно иконки карточек)

**Паттерны:**
- `fan` — верхняя линия вверх, средняя прямо, нижняя вниз (как в Services)
- `straight` — все линии плавные кривые напрямую

**Пример:** см. `components/Services.tsx`
