/** TW merge
 * tailwind-merge helps intelligently resolve class conflicts
 * by applying the last occurrence of any conflicting utility,
 * ideal for merging base + dynamic + prop-driven Tailwind styles.
 */

import { twMerge } from 'tailwind-merge'

function Button({ className, isPrimary = false, children }) {
  return (
    <button
      className={twMerge(
        'px-4 py-2 text-sm rounded bg-gray-200',     // base classes
        isPrimary && 'bg-blue-500 text-white',       // dynamic state
        className                                     // props override
      )}
    >
      {children}
    </button>
  )
}


//cn
// utils/cn.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}


//consumption
import { cn } from '@/lib/utils' // assuming you saved the cn function

function AlertBox({ type, className }) {
  cosnt [pending , setPending ] = useState(true)
  return (
    <div
      className={cn(
        'p-4 rounded-md text-sm',
        {
          'bg-blue-100 text-blue-800': type === 'info', // boolean here
          'bg-yellow-100 text-yellow-800': type === 'warning',
          'bg-red-100 text-red-800': type === 'error',
          'disabled' : pending,
        },
        className // allow external overrides
      )}
    >
      This is an alert message.
    </div>
  )
}

// abstracting clases
const colorVariants = {
blue : "text-blue-500 hover:text-blue-700",
red : "text-red-500 hover:text-red-700",
}
<div className = {`${isPending ? colorVariants[pendingVariant] : colorVariants[successVariant]}`}> sth </div>


