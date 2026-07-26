import { About } from '@/components/about'
import { BackToTop } from '@/components/back-to-top'
import { Benefits } from '@/components/benefits'
import { Contact } from '@/components/contact'
import { Cta } from '@/components/cta'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Contact />
        <Cta />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
