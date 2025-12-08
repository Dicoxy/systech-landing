# DESIGN.md — Дизайн-система SYSTECH

## Концепция

**Стиль:** Love, Death & Robots
- Тёмный, кинематографичный
- Дерзкий, уверенный
- Короткие рубленые фразы
- Каждая секция — как постер к эпизоду
- Визуал важнее текста

## Цветовая палитра

```css
/* Основные */
--bg-primary: #0a0a0f;        /* Почти чёрный — основной фон */
--bg-secondary: #12121a;      /* Тёмно-синий — карточки, секции */
--bg-tertiary: #1a1a24;       /* Для hover состояний */

/* Акценты */
--accent-primary: #00ff88;    /* Неоновый зелёный — главный акцент */
--accent-secondary: #3b82f6;  /* Синий — вторичный акцент */
--accent-danger: #ff3366;     /* Красный — для "опасных" элементов */

/* Текст */
--text-primary: #ffffff;      /* Белый — заголовки */
--text-secondary: #94a3b8;    /* Серый — обычный текст */
--text-muted: #64748b;        /* Приглушённый — подписи */

/* Градиенты */
--gradient-hero: linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%);
--gradient-accent: linear-gradient(90deg, #00ff88 0%, #3b82f6 100%);
--gradient-glow: radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 70%);
```

## Типографика

### Шрифты
- **Заголовки:** Space Grotesk, 700-800 weight
- **Текст:** Inter, 400-500 weight
- **Акценты/числа:** Space Grotesk, 700

### Размеры (desktop)
```css
--text-hero: 4.5rem;          /* 72px — главный заголовок */
--text-h1: 3rem;              /* 48px — заголовки секций */
--text-h2: 2rem;              /* 32px — подзаголовки */
--text-h3: 1.5rem;            /* 24px — заголовки карточек */
--text-body: 1.125rem;        /* 18px — основной текст */
--text-small: 0.875rem;       /* 14px — подписи */
```

### Размеры (mobile)
```css
--text-hero-mobile: 2.5rem;   /* 40px */
--text-h1-mobile: 2rem;       /* 32px */
--text-h2-mobile: 1.5rem;     /* 24px */
```

## Эффекты и анимации

### 1. Particle Grid (Hero фон)
- Сетка точек, соединённых линиями
- Точки слегка двигаются
- При движении курсора — точки отталкиваются
- Цвет: accent-primary с opacity 0.3

### 2. Gradient Orbs
- Размытые цветные сферы на фоне
- Медленно перемещаются
- Цвета: accent-primary, accent-secondary
- Blur: 100-150px

### 3. Text Reveal
- Текст появляется снизу вверх
- Opacity: 0 → 1
- Transform: translateY(20px) → translateY(0)
- Duration: 0.6s, ease-out
- Stagger: 0.1s между элементами

### 4. Count Up (статистика)
- Числа "накручиваются" от 0 до значения
- Duration: 2s
- Trigger: при появлении в viewport

### 5. Card Hover
- Scale: 1.02
- Border: gradient появляется
- Glow: box-shadow с accent-primary
- Duration: 0.3s

## Компоненты

### Header
- Position: fixed
- Background: transparent → rgba(10,10,15,0.9) при скролле
- Backdrop-filter: blur(10px)
- Border-bottom: 1px solid rgba(255,255,255,0.1) при скролле
- Transition: 0.3s

### Hero
- Height: 100vh
- Background: particle grid + gradient orbs
- Content: центрирован
- Scroll indicator: анимированная стрелка внизу

### Cards (Services)
- Background: bg-secondary
- Border: 1px solid rgba(255,255,255,0.1)
- Border-radius: 12px
- Hover: gradient border, glow

### Buttons
- Primary: gradient background (accent-primary → accent-secondary)
- Secondary: transparent, border accent-primary
- Padding: 12px 24px
- Border-radius: 8px
- Font: Space Grotesk, 600

### Form Inputs
- Background: bg-secondary
- Border: 1px solid rgba(255,255,255,0.2)
- Focus: border accent-primary, glow
- Border-radius: 8px
- Padding: 12px 16px

## Адаптивность

### Breakpoints
```css
--mobile: 640px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1280px;
```

### Правила
- Mobile-first подход
- Hero: текст меньше, эффекты упрощены на mobile
- Cards: 1 колонка на mobile, 3 на desktop
- Particle grid: меньше частиц на mobile (производительность)
