import { Clock, Users, Package } from 'lucide-react'

interface TimeEstimateProps {
  minutes: number
  forRole?: 'Maintainers' | 'Contributors' | string
  needs?: string
}

export function TimeEstimate({ minutes, forRole, needs }: TimeEstimateProps) {
  return (
    <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mb-5 whitespace-nowrap overflow-x-auto">
      <div className="flex items-center gap-1 flex-shrink-0">
        <Clock size={14} className="flex-shrink-0" />
        <span>{minutes} min</span>
      </div>
      {forRole && (
        <>
          <span className="text-gray-400 dark:text-gray-600 flex-shrink-0">
            ·
          </span>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Users size={14} className="flex-shrink-0" />
            <span>{forRole}</span>
          </div>
        </>
      )}
      {needs && (
        <>
          <span className="text-gray-400 dark:text-gray-600 flex-shrink-0">
            ·
          </span>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Package size={14} className="flex-shrink-0" />
            <span>{needs}</span>
          </div>
        </>
      )}
    </div>
  )
}
