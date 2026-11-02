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
      className="toss-theme-toggle"
      type="button"
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      style={{}}
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
        <Sun size={18} />
      ) : isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}
