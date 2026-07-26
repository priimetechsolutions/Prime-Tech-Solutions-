import {
  Blocks,
  GraduationCap,
  Headset,
  LayoutGrid,
  Lightbulb,
  Workflow,
} from 'lucide-react'
import { Reveal } from '@/components/animations/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Card } from '@/components/ui/card'
import type { Service } from '@/types'

const services: Service[] = [
  {
    icon: LayoutGrid,
    title: 'Implantação ERP Omie',
    description:
      'Configuramos e implantamos o Omie sob medida para a sua operação, do cadastro à emissão fiscal.',
  },
  {
    icon: Lightbulb,
    title: 'Consultoria Empresarial',
    description:
      'Analisamos seus processos e desenhamos a estratégia ideal para escalar a gestão do seu negócio.',
  },
  {
    icon: Workflow,
    title: 'Automação de Processos',
    description:
      'Eliminamos tarefas manuais e repetitivas, ganhando tempo e reduzindo erros operacionais.',
  },
  {
    icon: Blocks,
    title: 'Integração de Sistemas',
    description:
      'Conectamos o Omie a e-commerces, bancos e outras ferramentas para um fluxo de dados único.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamentos',
    description:
      'Capacitamos sua equipe com treinamentos práticos para extrair o máximo do sistema.',
  },
  {
    icon: Headset,
    title: 'Suporte Técnico',
    description:
      'Acompanhamento contínuo e suporte especializado para manter tudo funcionando sem falhas.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções completas para a sua gestão"
          description="Do diagnóstico ao suporte, cuidamos de cada etapa para que sua empresa opere com máxima eficiência."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.1}>
              <Card className="group h-full gap-4 p-6 ring-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:ring-2 hover:ring-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
