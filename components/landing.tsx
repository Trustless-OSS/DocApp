import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  GitPullRequest,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

export function Hero() {
  return (
    <section className="toss-hero">
      <div className="toss-hero__content">
        <div className="toss-eyebrow">
          <Sparkles size={14} /> Open-source rewards, settled on Stellar
        </div>
        <h1>
          Fund the issue.
          <br />
          <span>Merge the proof.</span>
        </h1>
        <p className="toss-hero__lede">
          Attach USDC rewards to GitHub issues. TOSS verifies the work and
          releases payment from a non-custodial escrow when the linked pull
          request merges.
        </p>
        <div className="toss-hero__actions">
          <Link
            className="toss-button toss-button--primary"
            href="/m-01-sign-in"
          >
            <span>
              <small>I manage projects</small>Start as a maintainer
            </span>
            <ArrowRight size={18} />
          </Link>
          <Link
            className="toss-button toss-button--secondary"
            href="/c-01-find-bounty"
          >
            <span>
              <small>I build projects</small>Start as a contributor
            </span>
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="toss-trust-row" aria-label="Key product safeguards">
          <span>
            <ShieldCheck size={15} /> Non-custodial
          </span>
          <span>
            <GitPullRequest size={15} /> GitHub-native
          </span>
          <span>
            <LockKeyhole size={15} /> Live checks before payout
          </span>
        </div>
      </div>
    </section>
  )
}

export function PathGrid({ children }: { children: ReactNode }) {
  return <div className="toss-path-grid">{children}</div>
}

export function PathCard({
  role,
  title,
  description,
  href,
  steps,
}: {
  role: 'maintainer' | 'contributor'
  title: string
  description: string
  href: string
  steps: string[]
}) {
  const Icon = role === 'maintainer' ? Code2 : GitPullRequest
  return (
    <Link className={`toss-path-card toss-path-card--${role}`} href={href}>
      <div className="toss-path-card__top">
        <span className="toss-path-card__icon">
          <Icon size={22} />
        </span>
        <span className="toss-path-card__role">{role}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {steps.map((step) => (
          <li key={step}>
            <CheckCircle2 size={15} /> {step}
          </li>
        ))}
      </ul>
      <span className="toss-path-card__link">
        Open this path <ArrowRight size={16} />
      </span>
    </Link>
  )
}

export function FlowRail() {
  const items = [
    ['01', 'Fund', 'Maintainer deposits USDC into a repository escrow.'],
    ['02', 'Build', 'Contributor is assigned and opens a linked pull request.'],
    [
      '03',
      'Verify',
      'Workers re-check GitHub, database, wallet, and chain state.',
    ],
    ['04', 'Release', 'Escrow sends the approved reward to the payout wallet.'],
  ]
  return (
    <div className="toss-flow-rail">
      {items.map(([n, title, copy]) => (
        <div className="toss-flow-rail__item" key={n}>
          <span>{n}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </div>
      ))}
    </div>
  )
}
