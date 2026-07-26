'use server'

import { Resend } from 'resend'
import { db } from '@/lib/db'
import { leads } from '@/lib/db/schema'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import { siteConfig } from '@/lib/site-config'

type SubmitResult = { success: boolean; error?: string }

export async function submitLead(data: ContactFormData): Promise<SubmitResult> {
  // Revalida no servidor — nunca confie apenas na validação do cliente.
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Dados inválidos. Verifique os campos e tente novamente.' }
  }

  const { name, company, phone, email, message } = parsed.data

  try {
    // 1. Persiste o lead no banco de dados (Neon).
    await db.insert(leads).values({ name, company, phone, email, message })
  } catch (err) {
    console.log('[v0] Erro ao salvar lead no banco:', err)
    return { success: false, error: 'Não foi possível registrar seu contato. Tente novamente.' }
  }

  // 2. Envia notificação por e-mail (Resend). Não bloqueia o sucesso do envio.
  const apiKey = process.env.RESEND_API_KEY
  if (apiKey) {
    try {
      const resend = new Resend(apiKey)
      await resend.emails.send({
        // Sem domínio verificado, o Resend permite envio a partir deste remetente de teste.
        from: 'Prime Tech Solutions <onboarding@resend.dev>',
        to: siteConfig.email,
        replyTo: email,
        subject: `Novo contato do site: ${name}${company ? ` (${company})` : ''}`,
        text: [
          'Novo lead recebido pelo site:',
          '',
          `Nome: ${name}`,
          `Empresa: ${company || '-'}`,
          `Telefone: ${phone}`,
          `E-mail: ${email}`,
          '',
          'Mensagem:',
          message,
        ].join('\n'),
      })
    } catch (err) {
      // O lead já está salvo; apenas registramos a falha de e-mail.
      console.log('[v0] Erro ao enviar e-mail via Resend:', err)
    }
  }

  return { success: true }
}
