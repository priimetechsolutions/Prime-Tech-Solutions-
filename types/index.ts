import type { LucideIcon } from 'lucide-react'

/** Item de serviço exibido na seção de Serviços. */
export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

/** Benefício exibido na seção de Benefícios. */
export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

/** Etapa da timeline "Como funciona". */
export interface ProcessStep {
  icon: LucideIcon
  step: string
  title: string
  description: string
}

/** Depoimento de cliente. */
export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
}

/** Pergunta e resposta do FAQ. */
export interface FaqItem {
  question: string
  answer: string
}
