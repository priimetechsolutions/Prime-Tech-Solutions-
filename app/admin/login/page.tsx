import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { LoginForm } from '@/components/admin/login-form'
import { isAdminAuthenticated } from '@/lib/admin-auth'

export const metadata: Metadata = {
  title: 'Login — Painel de Leads',
  robots: { index: false, follow: false },
}

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect('/admin')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <LoginForm />
    </main>
  )
}
