import type { ReactNode } from 'react'

/**
 * Renders a sidebar entry as an icon + label, matching the Nextra docs
 * sidebar style (icon on the left, text label on the right).
 */
export function SidebarTitle({
  icon,
  children,
}: {
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        lineHeight: 1,
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          width: 18,
          height: 18,
          color: 'currentColor',
          opacity: 0.9,
        }}
      >
        {icon}
      </span>
      {children}
    </span>
  )
}
