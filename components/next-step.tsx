import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface NextStepProps {
  href: string
  label: string
}

export function NextStep({ href, label }: NextStepProps) {
  return (
    <div className="flex gap-4 items-center text-sm mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      <Link
        href={href}
        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
      >
        Next: {label}
        <ArrowRight size={16} />
      </Link>
    </div>
  )
}

export function StuckLink() {
  return (
    <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
      <Link
        href="/troubleshooting"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Stuck? Check Troubleshooting
      </Link>
    </div>
  )
}
