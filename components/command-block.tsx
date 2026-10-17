'use client'

import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'

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
    <div className="my-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
            <Terminal size={13} className="flex-shrink-0" />
            {where}
          </div>
          <code className="block bg-gray-900 dark:bg-gray-950 text-green-400 p-2 rounded font-mono text-xs overflow-x-auto break-words">
            {command}
          </code>
          <div className="text-xs text-gray-600 dark:text-gray-300 mt-1.5">
            ↳ {description}
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Copy command"
        >
          {copied ? (
            <Check size={16} className="text-green-600" />
          ) : (
            <Copy size={16} className="text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
    </div>
  )
}
