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
        <figure className="my-5 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <video
            controls
            preload="metadata"
            className="w-full bg-black"
            aria-label={alt || caption}
          >
            <source src={file} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {caption && (
            <figcaption className="p-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    }

    // Image
    return (
      <figure className="my-5 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <Image
          src={file}
          alt={alt || caption || id}
          width={800}
          height={600}
          className="w-full h-auto"
        />
        {caption && (
          <figcaption className="p-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  // Development mode: show subtle placeholder
  return (
    <div className="my-5 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 p-4">
      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
        <Camera size={13} className="flex-shrink-0" />
        <span className="font-mono">{id}</span>
        <span className="text-gray-400 dark:text-gray-600">—</span>
        <span>{type}</span>
      </div>
      {show && (
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Show:</span> {show}
        </div>
      )}
      {caption && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          <span className="font-semibold">Caption:</span> {caption}
        </div>
      )}
    </div>
  )
}
