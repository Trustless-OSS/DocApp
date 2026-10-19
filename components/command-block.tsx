'use client'

import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'

interface CommandBlockProps {
  command: string
  description: string
  where?: string
}

export function CommandBlock({
  command,
  description,
  where = 'Comment on the bounty issue',
}: CommandBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      style={{
        margin: '0.75rem 0',
        borderRadius: 'var(--toss-radius-xl, 20px)',
        border: '1px solid var(--toss-border, #cac6b0)',
        background: 'var(--toss-surface, #fff)',
        boxShadow: 'var(--toss-shadow-sm, 0 0 18px 0 rgba(63,91,255,0.24))',
        padding: '0.75rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--toss-muted, #5a5a5a)',
              marginBottom: '0.375rem',
            }}
          >
            <Terminal size={13} style={{ flexShrink: 0 }} />
            {where}
          </div>
          <code
            style={{
              display: 'block',
              background: '#010e5f',
              color: 'var(--toss-primary-200, #99d4ff)',
              padding: '0.5rem',
              borderRadius: 'var(--toss-radius-md, 8px)',
              fontFamily:
                "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: '0.75rem',
              overflowX: 'auto',
              wordBreak: 'break-word',
            }}
          >
            {command}
          </code>
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--toss-ink, #000)',
              opacity: 0.8,
              marginTop: '0.375rem',
            }}
          >
            ↳ {description}
          </div>
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy command"
          style={{
            flexShrink: 0,
            padding: '0.375rem',
            borderRadius: 'var(--toss-radius-full, 9999px)',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'var(--toss-muted, #5a5a5a)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              'color-mix(in srgb, var(--toss-primary) 12%, transparent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          {copied ? (
            <Check size={16} style={{ color: 'var(--toss-accent, #00a849)' }} />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>
    </div>
  )
}
