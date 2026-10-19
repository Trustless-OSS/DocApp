import { Clock, Users, Package } from 'lucide-react'

interface TimeEstimateProps {
  minutes: number
  forRole?: 'Maintainers' | 'Contributors' | string
  needs?: string
}

const dotStyle = { color: 'var(--toss-border, #cac6b0)', flexShrink: 0 }
const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  flexShrink: 0,
} as const

export function TimeEstimate({ minutes, forRole, needs }: TimeEstimateProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontSize: '0.75rem',
        color: 'var(--toss-muted, #5a5a5a)',
        marginBottom: '1.25rem',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
      }}
    >
      <div style={itemStyle}>
        <Clock size={14} style={{ flexShrink: 0 }} />
        <span>{minutes} min</span>
      </div>
      {forRole && (
        <>
          <span style={dotStyle}>·</span>
          <div style={itemStyle}>
            <Users size={14} style={{ flexShrink: 0 }} />
            <span>{forRole}</span>
          </div>
        </>
      )}
      {needs && (
        <>
          <span style={dotStyle}>·</span>
          <div style={itemStyle}>
            <Package size={14} style={{ flexShrink: 0 }} />
            <span>{needs}</span>
          </div>
        </>
      )}
    </div>
  )
}
