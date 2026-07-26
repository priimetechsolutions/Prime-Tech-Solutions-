import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

interface LogoProps {
  className?: string
  /** Oculta o texto, exibindo apenas o símbolo. */
  iconOnly?: boolean
}

/** Logo da marca: símbolo geométrico + wordmark. */
export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-5">
          <path
            d="M6 20V4h7a5 5 0 0 1 0 10H9"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-bold tracking-tight text-foreground">
            Prime Tech
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-widest text-muted-foreground">
            Solutions
          </span>
        </span>
      )}
      <span className="sr-only">{siteConfig.name}</span>
    </span>
  )
}
