interface StepActionProps {
  children: React.ReactNode
}

/**
 * Wrapper for a single step action. Displays as a <p> with appropriate styling.
 */
export function StepAction({ children }: StepActionProps) {
  return (
    <p style={{ color: 'var(--toss-ink, #000)', lineHeight: 1.6 }}>
      {children}
    </p>
  )
}
