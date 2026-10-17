import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

interface NextStepProps {
  href: string
  label: string
}

export function NextStep({ href, label }: NextStepProps) {
  return (
    <div className="flex gap-3 items-center text-xs mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
      <Link
        href={href}
        className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline transition-colors"
      >
        Next: {label}
        <ChevronRight size={14} className="flex-shrink-0" />
      </Link>
    </div>
  )
}

export function StuckLink() {
  return (
    <div className="text-xs text-gray-500 dark:text-gray-400 mt-3">
      <Link
        href="/troubleshooting"
        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors"
      >
        Stuck? Check Troubleshooting
      </Link>
    </div>
  )
}
