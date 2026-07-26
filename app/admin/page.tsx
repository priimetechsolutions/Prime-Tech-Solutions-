import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { LogOut, Inbox } from 'lucide-react'
import { getLeads, logoutAdmin } from '@/app/actions/admin'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { Button } from '@/components/ui/button'
import { LeadsTable } from '@/components/admin/leads-table'

export const metadata: Metadata = {
  title: 'Painel de Leads — Prime Tech Solutions',
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect('/admin/login')
  }

  const leads = await getLeads()

  return (
    <main className="min-h-screen bg-muted/40">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <h1 className="text-lg font-semibold text-foreground">Painel de Leads</h1>
            <p className="text-sm text-muted-foreground">
              {leads.length} contato{leads.length === 1 ? '' : 's'} recebido
              {leads.length === 1 ? '' : 's'}
            </p>
          </div>
          <form action={logoutAdmin}>
            <Button variant="outline" size="sm" type="submit">
              <LogOut className="size-4" />
              Sair
            </Button>
          </form>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {leads.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card py-20 text-center">
            <Inbox className="size-10 text-muted-foreground" />
            <p className="font-medium text-foreground">Nenhum contato ainda</p>
            <p className="max-w-sm text-sm text-muted-foreground">
              Os contatos enviados pelo formulário do site aparecerão aqui.
            </p>
          </div>
        ) : (
          <LeadsTable leads={leads} />
        )}
      </div>
    </main>
  )
}
