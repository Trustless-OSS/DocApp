'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch: only render the resolved state after mount.
  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  const toggle = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 34,
        height: 34,
        padding: 0,
        borderRadius: 8,
        border: '1px solid var(--toss-border, rgba(125,125,125,0.25))',
        background: 'transparent',
        color: 'currentColor',
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          'color-mix(in srgb, currentColor 10%, transparent)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {/* Render a stable icon until mounted to prevent SSR mismatch. */}
      {!mounted ? (
        <Sun size={18} style={{ opacity: 0 }} />
      ) : isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}
