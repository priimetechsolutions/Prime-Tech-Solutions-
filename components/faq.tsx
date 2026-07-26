import { Reveal } from '@/components/animations/reveal'
import { SectionHeading } from '@/components/section-heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { FaqItem } from '@/types'

const faqs: FaqItem[] = [
  {
    question: 'Quanto tempo leva a implantação?',
    answer:
      'O prazo varia conforme o porte e a complexidade da empresa, mas a maioria das implantações é concluída entre 4 e 8 semanas. No diagnóstico inicial definimos um cronograma realista e transparente.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'O investimento é personalizado de acordo com as necessidades e o tamanho da sua operação. Solicite uma demonstração e preparamos uma proposta sob medida, sem compromisso.',
  },
  {
    question: 'O treinamento está incluso?',
    answer:
      'Sim. Todos os nossos projetos de implantação incluem treinamento prático para a sua equipe, garantindo que todos saibam utilizar o ERP Omie com autonomia.',
  },
  {
    question: 'Posso integrar outros sistemas?',
    answer:
      'Com certeza. Integramos o Omie a e-commerces, plataformas de pagamento, bancos e diversas outras ferramentas para centralizar as informações em um único fluxo.',
  },
  {
    question: 'Existe suporte após a implantação?',
    answer:
      'Sim. Oferecemos suporte técnico contínuo e acompanhamento dos resultados, para que sua empresa continue evoluindo mesmo depois do go-live.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Tire suas principais dúvidas sobre a implantação do ERP Omie."
        />

        <Reveal className="mt-12">
          <Accordion multiple={false} className="rounded-2xl border border-border bg-card px-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={index}>
                <AccordionTrigger className="py-5 text-base font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
