import { ClipboardList, LifeBuoy, Rocket, Search } from 'lucide-react'
import { Reveal } from '@/components/animations/reveal'
import { SectionHeading } from '@/components/section-heading'
import type { ProcessStep } from '@/types'

const steps: ProcessStep[] = [
  {
    icon: Search,
    step: '01',
    title: 'Diagnóstico',
    description:
      'Entendemos a fundo seus processos, dores e objetivos para desenhar a solução ideal.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Planejamento',
    description:
      'Estruturamos o cronograma, as configurações e as integrações da implantação.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Implantação',
    description:
      'Configuramos o Omie, migramos os dados e treinamos a sua equipe para o go-live.',
  },
  {
    icon: LifeBuoy,
    step: '04',
    title: 'Suporte contínuo',
    description:
      'Acompanhamos os resultados e oferecemos suporte especializado no dia a dia.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Uma metodologia clara em 4 etapas"
          description="Um processo transparente e comprovado, do primeiro contato ao acompanhamento contínuo."
        />

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Linha conectora (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-border md:block"
          />

          {steps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.12} className="relative">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <step.icon className="size-6" />
                </span>
                <span className="mt-4 text-sm font-bold tracking-widest text-primary">
                  {step.step}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
