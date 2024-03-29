import { cva } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { cn } from '../configs/utils.js'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:hover:bg-gray-800 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-gray-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800',
    {
      variants: {
        variant: {
          default:
            'bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900',
          destructive:
            'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
          subtle:
            'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-aqua dark:text-gray-100 dark:hover:bg-aqua-light',
          ghost:
            'bg-transparent dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
          link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-gray-900 dark:text-gray-300 hover:bg-transparent dark:hover:bg-transparent',
        },
        size: {
          default: 'h-10 py-2 px-4',
          sm: 'h-9 px-2 rounded-md',
          lg: 'h-11 px-8 rounded-md',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  )

const Button = forwardRef(({className, size, variant, ...props}, ref) => {
  return (
    <button 
        ref = {ref}
        className={cn(buttonVariants({ variant, size, className }))} 
        {...props}
    />
  )
})

export { Button, buttonVariants }

