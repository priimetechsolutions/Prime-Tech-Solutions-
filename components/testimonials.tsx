'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useCallback, useState } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/types'

// Placeholders — prontos para receber depoimentos reais futuramente.
const testimonials: Testimonial[] = [
  {
    name: 'Seu depoimento aqui',
    role: 'Cargo do cliente',
    company: 'Nome da empresa',
    quote:
      'Este espaço está preparado para receber os depoimentos dos seus clientes. Compartilhe resultados reais e conquiste a confiança de novos visitantes.',
  },
  {
    name: 'Seu depoimento aqui',
    role: 'Cargo do cliente',
    company: 'Nome da empresa',
    quote:
      'Adicione aqui a experiência de quem já transformou a gestão com a implantação do ERP Omie feita pela Prime Tech Solutions.',
  },
  {
    name: 'Seu depoimento aqui',
    role: 'Cargo do cliente',
    company: 'Nome da empresa',
    quote:
      'Mais um espaço reservado para um depoimento. Histórias de sucesso são o melhor argumento de venda para o seu negócio.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const paginate = useCallback(
    (dir: number) => setIndex((prev) => (prev + dir + count) % count),
    [count],
  )

  const active = testimonials[index]

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem confia na Prime Tech"
          description="Em breve, histórias reais de clientes que transformaram a gestão com a nossa ajuda."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
            <Quote className="size-10 text-primary/30" />
            <div className="mt-4 min-h-40">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-pretty text-xl leading-relaxed text-foreground">
                    {active.quote}
                  </p>
                  <footer className="mt-6">
                    <p className="font-semibold text-foreground">{active.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {active.role} — {active.company}
                    </p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir para o depoimento ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      i === index ? 'w-6 bg-primary' : 'w-2 bg-border',
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Depoimento anterior"
                  onClick={() => paginate(-1)}
                >
                  <ChevronLeft />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Próximo depoimento"
                  onClick={() => paginate(1)}
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
