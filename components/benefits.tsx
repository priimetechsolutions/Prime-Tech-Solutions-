import {
  BarChart3,
  Clock,
  Cpu,
  PiggyBank,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import { Reveal } from '@/components/animations/reveal'
import { SectionHeading } from '@/components/section-heading'
import type { Benefit } from '@/types'

const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: 'Mais produtividade',
    description:
      'Equipes focadas no que importa, com rotinas otimizadas e menos retrabalho.',
  },
  {
    icon: Wallet,
    title: 'Controle financeiro',
    description:
      'Fluxo de caixa, contas a pagar e receber sob total controle e visibilidade.',
  },
  {
    icon: Cpu,
    title: 'Automação',
    description:
      'Tarefas repetitivas automatizadas para reduzir erros e ganhar escala.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios inteligentes',
    description:
      'Dados transformados em decisões com relatórios claros e personalizados.',
  },
  {
    icon: Clock,
    title: 'Gestão em tempo real',
    description:
      'Acompanhe indicadores e resultados do seu negócio a qualquer momento.',
  },
  {
    icon: PiggyBank,
    title: 'Redução de custos',
    description:
      'Elimine desperdícios e otimize recursos com processos enxutos e integrados.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Benefícios"
          title="O que sua empresa ganha com a Prime Tech"
          description="Resultados concretos que impactam diretamente a eficiência e a lucratividade do seu negócio."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={(index % 3) * 0.1}>
              <div className="group flex h-full flex-col gap-3 rounded-xl border border-border p-6 transition-colors hover:border-primary/40 hover:bg-accent/40">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <benefit.icon className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
