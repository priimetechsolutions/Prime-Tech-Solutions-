'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { InstagramIcon } from '@/components/icons/social'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Reveal } from '@/components/animations/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { siteConfig, whatsappUrl } from '@/lib/site-config'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import { submitLead } from '@/app/actions/leads'

const contactInfo = [
  { icon: Mail, label: 'E-mail', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'WhatsApp', value: siteConfig.phone, href: whatsappUrl },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: siteConfig.social.instagramHandle,
    href: siteConfig.social.instagram,
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null)
    const result = await submitLead(data)
    if (result.success) {
      setSubmitted(true)
      reset()
    } else {
      setSubmitError(result.error ?? 'Ocorreu um erro. Tente novamente.')
    }
  }

  return (
    <section id="contato" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos transformar sua empresa juntos"
          description="Preencha o formulário e nossa equipe entrará em contato para agendar sua demonstração."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Formulário */}
          <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-14 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  Mensagem enviada!
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Obrigado pelo interesse. Em breve entraremos em contato para agendar sua
                  demonstração.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nome" error={errors.name?.message} htmlFor="name">
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      aria-invalid={!!errors.name}
                      {...register('name')}
                    />
                  </Field>
                  <Field label="Empresa" error={errors.company?.message} htmlFor="company">
                    <Input
                      id="company"
                      placeholder="Nome da empresa"
                      aria-invalid={!!errors.company}
                      {...register('company')}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Telefone" error={errors.phone?.message} htmlFor="phone">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      aria-invalid={!!errors.phone}
                      {...register('phone')}
                    />
                  </Field>
                  <Field label="E-mail" error={errors.email?.message} htmlFor="email">
                    <Input
                      id="email"
                      type="email"
                      placeholder="voce@empresa.com.br"
                      aria-invalid={!!errors.email}
                      {...register('email')}
                    />
                  </Field>
                </div>

                <Field label="Mensagem" error={errors.message?.message} htmlFor="message">
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Conte-nos sobre a sua necessidade..."
                    aria-invalid={!!errors.message}
                    {...register('message')}
                  />
                </Field>

                {submitError && (
                  <p className="text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                )}

                <Button type="submit" size="lg" disabled={isSubmitting} className="mt-1">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Solicitar Demonstração'
                  )}
                </Button>
              </form>
            )}
          </Reveal>

          {/* Informações + mapa */}
          <Reveal delay={0.15} className="flex flex-col gap-6">
            <div className="grid gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Maps */}
            <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Localização da Prime Tech Solutions"
                src="https://www.google.com/maps?q=Prime+Tech+Solutions&output=embed"
                className="h-full min-h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-t border-border bg-card py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
              >
                <MapPin className="size-4" />
                Ver no Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Campo de formulário com label e mensagem de erro. */
function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error && (
        <p className={cn('text-sm text-destructive')} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
