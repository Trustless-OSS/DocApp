'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CommandBlockProps {
  command: string
  description: string
  where?: string
}

export function CommandBlock({
  command,
  description,
  where = 'Comment on the bounty issue',
}: CommandBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            {where}
          </div>
          <code className="block bg-gray-900 dark:bg-gray-950 text-green-400 p-3 rounded font-mono text-sm overflow-x-auto break-words">
            {command}
          </code>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            ↳ {description}
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Copy command"
        >
          {copied ? (
            <Check size={18} className="text-green-600" />
          ) : (
            <Copy size={18} className="text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
    </div>
  )
}
