'use client'

import Image from 'next/image'

interface MediaSlotProps {
  id: string
  type: 'image' | 'video' | 'gif'
  file?: string
  caption?: string
  alt?: string
  show?: string
}

/**
 * Development-mode placeholder that shows a dashed box with the slot ID.
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
        <figure className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
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
            <figcaption className="p-3 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    }

    // Image
    return (
      <figure className="my-6 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <Image
          src={file}
          alt={alt || caption || id}
          width={800}
          height={600}
          className="w-full h-auto"
        />
        {caption && (
          <figcaption className="p-3 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  // Development mode: show placeholder
  return (
    <div className="my-6 rounded-lg border-2 border-dashed border-yellow-300 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 p-6">
      <div className="text-sm font-mono text-yellow-700 dark:text-yellow-200 mb-2">
        MEDIA SLOT
      </div>
      <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-100 mb-1">
        {id}
      </div>
      <div className="text-xs text-yellow-600 dark:text-yellow-300 mb-3">
        Type: {type}
      </div>
      {show && (
        <div className="text-xs text-yellow-700 dark:text-yellow-200">
          <span className="font-semibold">Show:</span> {show}
        </div>
      )}
      {caption && (
        <div className="text-xs text-yellow-700 dark:text-yellow-200 mt-2">
          <span className="font-semibold">Caption:</span> {caption}
        </div>
      )}
    </div>
  )
}
