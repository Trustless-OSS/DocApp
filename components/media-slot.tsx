'use client'

import Image from 'next/image'
import { Camera } from 'lucide-react'

interface MediaSlotProps {
  id: string
  type: 'image' | 'video' | 'gif'
  file?: string
  caption?: string
  alt?: string
  show?: string
}

const figureStyle = {
  margin: '1.25rem 0',
  borderRadius: 'var(--toss-radius-xl, 20px)',
  overflow: 'hidden',
  border: '1px solid var(--toss-border, #cac6b0)',
  boxShadow: 'var(--toss-shadow-sm, 0 0 18px 0 rgba(63,91,255,0.24))',
} as const

const captionStyle = {
  padding: '0.5rem',
  fontSize: '0.75rem',
  color: 'var(--toss-muted, #5a5a5a)',
  background: 'var(--toss-surface, #fff)',
} as const

/**
 * Development-mode placeholder that shows a subtle box with the slot ID.
 * In production (when file is provided), renders the actual image/video.
 */
export function MediaSlot({
  id,
  type,
  file,
  caption,
  alt,
  show,
}: MediaSlotProps) {
  // If file is provided, render the actual media
  if (file) {
    if (type === 'video') {
      return (
        <figure style={figureStyle}>
          <video
            controls
            preload="metadata"
            style={{ width: '100%', background: '#000' }}
            aria-label={alt || caption}
          >
            <source src={file} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
        </figure>
      )
    }

    // Image
    return (
      <figure style={figureStyle}>
        <Image
          src={file}
          alt={alt || caption || id}
          width={800}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
        {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
      </figure>
    )
  }

  // Development mode: show subtle placeholder
  return (
    <div
      style={{
        margin: '1.25rem 0',
        borderRadius: 'var(--toss-radius-xl, 20px)',
        border: '1px dashed var(--toss-border, #cac6b0)',
        background: 'color-mix(in srgb, var(--toss-primary) 5%, transparent)',
        padding: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.75rem',
          color: 'var(--toss-muted, #5a5a5a)',
          marginBottom: '0.5rem',
        }}
      >
        <Camera size={13} style={{ flexShrink: 0 }} />
        <span
          style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
        >
          {id}
        </span>
        <span style={{ opacity: 0.6 }}>—</span>
        <span>{type}</span>
      </div>
      {show && (
        <div
          style={{ fontSize: '0.75rem', color: 'var(--toss-muted, #5a5a5a)' }}
        >
          <span style={{ fontWeight: 600 }}>Show:</span> {show}
        </div>
      )}
      {caption && (
        <div
          style={{
            fontSize: '0.75rem',
            color: 'var(--toss-muted, #5a5a5a)',
            marginTop: '0.5rem',
          }}
        >
          <span style={{ fontWeight: 600 }}>Caption:</span> {caption}
        </div>
      )}
    </div>
  )
}
