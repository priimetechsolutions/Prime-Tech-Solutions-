import { Compass, Eye, Gem } from 'lucide-react'
import { Reveal } from '@/components/animations/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Card } from '@/components/ui/card'

const pillars = [
  {
    icon: Compass,
    title: 'Missão',
    text: 'Simplificar a gestão empresarial por meio de tecnologia, entregando implantações de ERP que geram resultados reais e mensuráveis.',
  },
  {
    icon: Eye,
    title: 'Visão',
    text: 'Ser a referência nacional em implantação do ERP Omie, reconhecida pela excelência técnica e pelo sucesso dos nossos clientes.',
  },
  {
    icon: Gem,
    title: 'Valores',
    text: 'Transparência, compromisso com resultados, inovação contínua e um atendimento próximo e humano em cada etapa do projeto.',
  },
]

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre nós
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Especialistas em transformar processos em produtividade
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                A <strong className="text-foreground">Prime Tech Solutions</strong> é uma
                empresa de tecnologia especializada na implantação do ERP Omie e em
                soluções empresariais que colocam a gestão da sua empresa em outro
                patamar.
              </p>
              <p>
                Unimos conhecimento técnico, visão de negócio e metodologia comprovada
                para automatizar rotinas, integrar sistemas e dar clareza total sobre os
                números da sua operação — do financeiro ao comercial.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.1}>
                <Card className="flex flex-row items-start gap-4 p-6 transition-colors hover:border-primary/40">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <pillar.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {pillar.text}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
