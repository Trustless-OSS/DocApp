import { Clock } from 'lucide-react'

interface TimeEstimateProps {
  minutes: number
  forRole?: 'Maintainers' | 'Contributors' | string
  needs?: string
}

export function TimeEstimate({
  minutes,
  forRole,
  needs,
}: TimeEstimateProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
      <div className="flex items-center gap-1">
        <Clock size={16} />
        <span>{minutes} min</span>
      </div>
      {forRole && <div>·</div>}
      {forRole && <div>For: {forRole}</div>}
      {needs && <div>·</div>}
      {needs && <div>You&apos;ll need: {needs}</div>}
    </div>
  )
}
