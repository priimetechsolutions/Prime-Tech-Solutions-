import { ArrowRight, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/animations/reveal'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/site-config'

export function Cta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Detalhe decorativo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Pronto para transformar sua empresa?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Fale com nossos especialistas e descubra como o ERP Omie pode organizar seus
              processos e impulsionar seus resultados. Dê o primeiro passo hoje.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                nativeButton={false}
                render={<a href="#contato" />}
              >
                Solicitar Demonstração
                <ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                nativeButton={false}
                render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <MessageCircle />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
