'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion'
import { whatsappUrl } from '@/lib/site-config'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Fundo decorativo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={staggerItem}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium text-muted-foreground"
          >
            <Sparkles className="size-4 text-primary" />
            Parceiro especialista em implantação Omie
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Transformamos a gestão da sua empresa com{' '}
            <span className="text-primary">tecnologia</span>.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Implantamos o ERP Omie para organizar processos, automatizar tarefas e
            aumentar a produtividade da sua empresa.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              size="lg"
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
              className="w-full sm:w-auto"
              nativeButton={false}
              render={<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" />}
            >
              <MessageCircle />
              Falar no WhatsApp
            </Button>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <ShieldCheck className="size-4 text-primary" />
            Implantação segura, treinamento incluso e suporte contínuo
          </motion.p>
        </motion.div>

        {/* Imagem do dashboard */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative mx-auto mt-14 max-w-5xl"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5 ring-1 ring-border/50">
            <Image
              src="/hero-dashboard.png"
              alt="Painel de gestão empresarial do ERP Omie mostrando gráficos financeiros e indicadores"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
