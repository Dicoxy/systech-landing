'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  /** Содержимое карточки */
  children: ReactNode;
  /** Включить 3D tilt эффект при hover */
  enableTilt?: boolean;
  /** Дополнительные классы */
  className?: string;
}

/**
 * Универсальная glassmorphism карточка
 * iOS 18 стиль с полупрозрачным фоном и размытием
 */
export default function GlassCard({
  children,
  enableTilt = true,
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-3xl border border-white/[0.15] bg-white/[0.02] p-6 backdrop-blur-xl ${className}`}
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
      whileHover={
        enableTilt
          ? {
              y: -4,
              scale: 1.06,
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
            }
          : undefined
      }
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
