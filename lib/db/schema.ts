import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

// Leads (contatos) enviados pelo formulário do site
export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  company: text('company'),
  phone: text('phone').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})

export type Lead = typeof leads.$inferSelect
