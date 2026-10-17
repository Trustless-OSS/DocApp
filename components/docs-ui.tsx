import type { ReactNode } from 'react'
import {
  type LucideIcon,
  Eye,
  ShieldCheck,
  Users,
  GitPullRequest,
  Coins,
  Activity,
  Vote,
  Wallet,
  GitMerge,
  BadgeDollarSign,
  Rocket,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Feature grid + cards                                               */
/* ------------------------------------------------------------------ */

export function FeatureGrid({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1rem',
        margin: '1.5rem 0',
      }}
    >
      {children}
    </div>
  )
}

export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: keyof typeof iconMap
  title: string
  children: ReactNode
}) {
  const Icon = iconMap[icon] ?? Rocket
  return (
    <div
      style={{
        border: '1px solid var(--toss-border, rgba(125,125,125,0.2))',
        borderRadius: 12,
        padding: '1.25rem',
        background: 'color-mix(in srgb, var(--toss-blue) 4%, transparent)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 44,
          height: 44,
          borderRadius: 10,
          background: 'color-mix(in srgb, var(--toss-blue) 15%, transparent)',
          color: 'var(--toss-blue)',
          marginBottom: '0.85rem',
        }}
      >
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3
        style={{
          margin: '0 0 0.4rem',
          fontSize: '1.15rem',
          border: 'none',
          padding: 0,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: '0.95rem',
          opacity: 0.85,
          lineHeight: 1.6,
        }}
      >
        {children}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Numbered step list                                                 */
/* ------------------------------------------------------------------ */

export function Steps({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        margin: '1.5rem 0',
      }}
    >
      {children}
    </div>
  )
}

export function Step({
  n,
  icon,
  title,
  children,
}: {
  n: number
  icon?: keyof typeof iconMap
  title: string
  children?: ReactNode
}) {
  const Icon = icon ? iconMap[icon] : null
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <div
        style={{
          flexShrink: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'var(--toss-blue)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '1rem',
        }}
      >
        {n}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: 700,
            fontSize: '1.05rem',
          }}
        >
          {Icon ? (
            <Icon size={18} style={{ color: 'var(--toss-blue)' }} />
          ) : null}
          {title}
        </div>
        {children ? (
          <div
            style={{ margin: '0.25rem 0 0', opacity: 0.85, lineHeight: 1.6 }}
          >
            {children}
          </div>
        ) : null}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Icon map (Lucide)                                                  */
/* ------------------------------------------------------------------ */

const iconMap = {
  eye: Eye,
  shield: ShieldCheck,
  users: Users,
  github: GitPullRequest,
  coins: Coins,
  activity: Activity,
  vote: Vote,
  wallet: Wallet,
  merge: GitMerge,
  reward: BadgeDollarSign,
  rocket: Rocket,
} satisfies Record<string, LucideIcon>
