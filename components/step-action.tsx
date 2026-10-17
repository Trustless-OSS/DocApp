interface StepActionProps {
  children: React.ReactNode
}

/**
 * Wrapper for a single step action. Displays as a <p> with appropriate styling.
 */
export function StepAction({ children }: StepActionProps) {
  return (
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </p>
  )
}
