import { Mail, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/logo'
import { InstagramIcon, LinkedInIcon } from '@/components/icons/social'
import { navLinks, siteConfig, whatsappUrl } from '@/lib/site-config'

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: siteConfig.social.instagram },
  { icon: LinkedInIcon, label: 'LinkedIn', href: siteConfig.social.linkedin },
  { icon: MessageCircle, label: 'WhatsApp', href: whatsappUrl },
  { icon: Mail, label: 'E-mail', href: `mailto:${siteConfig.email}` },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca + descrição */}
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Especialistas em implantação do ERP Omie e soluções empresariais que
              transformam a gestão da sua empresa com tecnologia.
            </p>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links rápidos">
            <h3 className="text-sm font-semibold text-foreground">Links rápidos</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato + redes */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Fale conosco</h3>
            <p className="mt-4 text-sm text-muted-foreground">{siteConfig.email}</p>
            <p className="text-sm text-muted-foreground">{siteConfig.phone}</p>
            <div className="mt-4 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-primary"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
