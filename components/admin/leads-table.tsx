import { Mail, Phone } from 'lucide-react'
import type { Lead } from '@/lib/db/schema'

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

export function LeadsTable({ leads }: { leads: Lead[] }) {
  return (
    <>
      {/* Desktop: tabela */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card md:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-muted/50 text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Data</th>
              <th className="px-4 py-3 font-medium">Nome</th>
              <th className="px-4 py-3 font-medium">Empresa</th>
              <th className="px-4 py-3 font-medium">Contato</th>
              <th className="px-4 py-3 font-medium">Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-border last:border-0 align-top">
                <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                  {formatDate(lead.createdAt)}
                </td>
                <td className="px-4 py-3 font-medium text-foreground">{lead.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{lead.company || '-'}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1">
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-primary hover:underline"
                    >
                      {lead.email}
                    </a>
                    <span className="text-muted-foreground">{lead.phone}</span>
                  </div>
                </td>
                <td className="max-w-xs px-4 py-3 text-muted-foreground">{lead.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {leads.map((lead) => (
          <div key={lead.id} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-foreground">{lead.name}</p>
                {lead.company && (
                  <p className="text-sm text-muted-foreground">{lead.company}</p>
                )}
              </div>
              <span className="whitespace-nowrap text-xs text-muted-foreground">
                {formatDate(lead.createdAt)}
              </span>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">{lead.message}</p>

            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-sm">
              <a
                href={`mailto:${lead.email}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="size-4" />
                {lead.email}
              </a>
              <a
                href={`tel:${lead.phone}`}
                className="flex items-center gap-2 text-foreground"
              >
                <Phone className="size-4" />
                {lead.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
