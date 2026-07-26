import { createHash } from 'crypto'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'pts_admin'

/** Gera um token derivado da senha para armazenar no cookie (não guarda a senha em texto puro). */
function tokenFor(password: string) {
  return createHash('sha256').update(`pts::${password}`).digest('hex')
}

/** Valida a senha informada contra a ADMIN_PASSWORD do ambiente. */
export function isPasswordValid(password: string) {
  const expected = process.env.ADMIN_PASSWORD
  return Boolean(expected) && password === expected
}

/** Cria a sessão do admin (cookie httpOnly válido por 7 dias). */
export async function createAdminSession() {
  const password = process.env.ADMIN_PASSWORD ?? ''
  const store = await cookies()
  store.set(COOKIE_NAME, tokenFor(password), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

/** Remove a sessão do admin. */
export async function destroyAdminSession() {
  const store = await cookies()
  store.delete(COOKIE_NAME)
}

/** Verifica se a requisição atual possui uma sessão de admin válida. */
export async function isAdminAuthenticated() {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return false
  const store = await cookies()
  const token = store.get(COOKIE_NAME)?.value
  return token === tokenFor(password)
}
