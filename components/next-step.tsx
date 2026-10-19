import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface NextStepProps {
  href: string
  label: string
}

export function NextStep({ href, label }: NextStepProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
        fontSize: '0.85rem',
        marginTop: '1.5rem',
        paddingTop: '1.25rem',
        borderTop: '1px solid var(--toss-border, #cac6b0)',
      }}
    >
      <Link
        href={href}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.375rem',
          color: 'var(--toss-primary, #061fd4)',
          fontWeight: 700,
        }}
      >
        Next: {label}
        <ChevronRight size={14} style={{ flexShrink: 0 }} />
      </Link>
    </div>
  )
}

export function StuckLink() {
  return (
    <div
      style={{
        fontSize: '0.85rem',
        color: 'var(--toss-muted, #5a5a5a)',
        marginTop: '0.75rem',
      }}
    >
      <Link
        href="/troubleshooting"
        style={{ color: 'var(--toss-link, #061fd4)' }}
      >
        Stuck? Check Troubleshooting
      </Link>
    </div>
  )
}
