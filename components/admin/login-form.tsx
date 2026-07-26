'use client'

import { useActionState } from 'react'
import { Loader2, Lock } from 'lucide-react'
import { loginAdmin } from '@/app/actions/admin'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAdmin, null)

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-5 rounded-2xl border border-border bg-card p-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Lock className="size-6" />
        </span>
        <div>
          <h1 className="text-xl font-semibold text-foreground">Painel de Leads</h1>
          <p className="text-sm text-muted-foreground">Acesso restrito à administração.</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Digite a senha de acesso"
          required
          autoFocus
        />
      </div>

      {state?.error && (
        <p className="text-sm text-destructive" role="alert">
          {state.error}
        </p>
      )}

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="animate-spin" />
            Entrando...
          </>
        ) : (
          'Entrar'
        )}
      </Button>
    </form>
  )
}
