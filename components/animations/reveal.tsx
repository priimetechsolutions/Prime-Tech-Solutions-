'use client'

import { motion, type Variants } from 'framer-motion'
import { useMemo, type ElementType, type ReactNode } from 'react'
import { fadeInUp } from '@/lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Atraso em segundos antes da animação iniciar. */
  delay?: number
  /** Variantes customizadas (padrão: fadeInUp). */
  variants?: Variants
  /** Elemento HTML renderizado. */
  as?: ElementType
}

/**
 * Envolve conteúdo e o revela suavemente quando entra na viewport.
 * Anima apenas uma vez para evitar re-renders desnecessários (performance).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeInUp,
  as = 'div',
}: RevealProps) {
  const MotionTag = useMemo(() => motion.create(as as ElementType), [as])

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
