'use client'

import Image from 'next/image'
import { Camera, Film, ImagePlus, Upload } from 'lucide-react'

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

  const PlaceholderIcon = type === 'video' || type === 'gif' ? Film : ImagePlus

  // Visible production-safe placeholder: tells editors exactly what belongs here.
  return (
    <figure className="toss-media-slot">
      <div className="toss-media-slot__canvas">
        <span className="toss-media-slot__badge">
          <Camera size={13} /> Media placeholder · {type}
        </span>
        <span className="toss-media-slot__icon">
          <PlaceholderIcon size={30} />
        </span>
        <strong>
          Add{' '}
          {type === 'image' ? 'screenshot or diagram' : 'product walkthrough'}
        </strong>
        <code>{id}</code>
      </div>
      <figcaption className="toss-media-slot__meta">
        <Upload size={15} />
        <span>
          <strong>{show ? 'Capture:' : 'Replace later:'}</strong>{' '}
          {show || 'Add the final media asset when it is ready.'}
          {caption ? ` — ${caption}` : ''}
        </span>
      </figcaption>
    </figure>
  )
}
