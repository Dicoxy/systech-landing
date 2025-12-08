# INTRO-ANIMATION.md — Заставка в стиле Love, Death & Robots

## Референс
Заставка сериала Love, Death & Robots:
- Глитч-эффекты
- RGB split (хроматическая аберрация)
- Резкие появления/исчезновения
- Мерцание
- Тёмный фон, яркий текст

## Тайминг заставки

```
0.0s  — Чёрный экран
0.3s  — Глитч-вспышка
0.5s  — "СИСТЕМНЫЕ" появляется с глитчем
0.8s  — Короткий глитч
1.0s  — "ТЕХНОЛОГИИ" появляется с глитчем
1.3s  — RGB split эффект на обоих словах
1.5s  — Мерцание (2-3 раза)
1.8s  — Стабилизация
2.0s  — "Роботы. Данные. Контроль." — плавное появление снизу
2.5s  — Пауза
3.0s  — Fade out заставки → Hero секция с particles
```

**Общая длительность:** 3 секунды

## Эффекты (CSS + Framer Motion)

### 1. Glitch Effect (глитч)
```css
.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 #ff00ff;
  clip-path: inset(40% 0 61% 0);
  animation: glitch-anim-1 2s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -2px 0 #00ffff;
  clip-path: inset(10% 0 85% 0);
  animation: glitch-anim-2 2s infinite linear alternate-reverse;
}

@keyframes glitch-anim-1 {
  0% { clip-path: inset(30% 0 25% 0); }
  20% { clip-path: inset(70% 0 5% 0); }
  40% { clip-path: inset(10% 0 60% 0); }
  60% { clip-path: inset(50% 0 30% 0); }
  80% { clip-path: inset(20% 0 55% 0); }
  100% { clip-path: inset(65% 0 10% 0); }
}
```

### 2. RGB Split (хроматическая аберрация)
```css
.rgb-split {
  animation: rgb-shift 0.3s ease-in-out;
}

@keyframes rgb-shift {
  0% {
    text-shadow: 
      -2px 0 #ff0000,
      2px 0 #00ffff;
  }
  50% {
    text-shadow: 
      -5px 0 #ff0000,
      5px 0 #00ffff;
  }
  100% {
    text-shadow: 
      0 0 transparent;
  }
}
```

### 3. Flicker (мерцание)
```css
.flicker {
  animation: flicker 0.5s ease-in-out;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  10% { opacity: 0.8; }
  20% { opacity: 1; }
  30% { opacity: 0.4; }
  40% { opacity: 1; }
  50% { opacity: 0.7; }
  60% { opacity: 1; }
}
```

### 4. Scan Lines (опционально)
```css
.scanlines::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
}
```

## Цвета заставки

```css
--intro-bg: #000000;           /* Чистый чёрный */
--intro-text: #ffffff;         /* Белый текст */
--intro-glitch-1: #ff0040;     /* Красный (как в LD&R) */
--intro-glitch-2: #00ffff;     /* Циан */
--intro-accent: #ff0040;       /* Акцент — красный */
```

## Skip кнопка

Добавить маленькую кнопку "Skip" в углу:
```tsx
<button 
  onClick={onComplete}
  className="absolute bottom-8 right-8 text-white/50 text-sm hover:text-white"
>
  Skip
</button>
```

## Показывать заставку

Рекомендация: **каждый раз** при загрузке — это фишка сайта.
