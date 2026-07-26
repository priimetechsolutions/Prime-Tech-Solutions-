import { z } from 'zod'

/** Schema de validação do formulário de contato. */
export const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome completo.'),
  company: z.string().min(2, 'Informe o nome da empresa.'),
  phone: z
    .string()
    .min(10, 'Informe um telefone válido com DDD.')
    .regex(/^[\d\s()+-]+$/, 'Telefone inválido.'),
  email: z.string().email('Informe um e-mail válido.'),
  message: z.string().min(10, 'Conte um pouco mais sobre a sua necessidade.'),
})

export type ContactFormData = z.infer<typeof contactSchema>
