'use server'

import { desc } from 'drizzle-orm'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { leads } from '@/lib/db/schema'
import {
  createAdminSession,
  destroyAdminSession,
  isAdminAuthenticated,
  isPasswordValid,
} from '@/lib/admin-auth'

export async function loginAdmin(_prev: unknown, formData: FormData) {
  const password = String(formData.get('password') ?? '')
  if (!isPasswordValid(password)) {
    return { error: 'Senha incorreta.' }
  }
  await createAdminSession()
  redirect('/admin')
}

export async function logoutAdmin() {
  await destroyAdminSession()
  redirect('/admin/login')
}

export async function getLeads() {
  if (!(await isAdminAuthenticated())) {
    throw new Error('Unauthorized')
  }
  return db.select().from(leads).orderBy(desc(leads.createdAt))
}
