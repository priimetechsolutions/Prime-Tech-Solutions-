/**
 * Configuração central da Prime Tech Solutions.
 * Centraliza dados reutilizados em vários componentes (contato, links, SEO).
 */

export const siteConfig = {
  name: 'Prime Tech Solutions',
  shortName: 'Prime Tech',
  description:
    'Implantamos o ERP Omie para organizar processos, automatizar tarefas e aumentar a produtividade da sua empresa. Consultoria empresarial, automação e integração de sistemas.',
  url: 'https://primetechssolutions.com.br',
  // Número usado no botão flutuante e CTAs (formato internacional, apenas dígitos)
  whatsapp: '5575982498211',
  whatsappMessage:
    'Olá! Gostaria de solicitar uma demonstração do ERP Omie com a Prime Tech Solutions.',
  email: 'priimetechsolutions@gmail.com',
  phone: '+55 (75) 98249-8211',
  mapsUrl: 'https://maps.app.goo.gl/oRexvsyGmZvx5Fuz6',
  social: {
    instagram: 'https://instagram.com/primetechsolutionsbr',
    instagramHandle: '@primetechsolutionsbr',
    linkedin: 'https://www.linkedin.com/in/prime-tech-solutions-1735a6424',
  },
} as const

/** URL pronta do WhatsApp com mensagem pré-preenchida. */
export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`

/** Itens de navegação da navbar (âncoras da single-page). */
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
] as const
