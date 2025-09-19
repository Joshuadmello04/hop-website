'use client'
import type React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import { Transition } from 'framer-motion'

const transition: Transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
}

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  icon
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  children?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative'>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-white hover:text-white/80 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300'
      >
        {icon}
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className='absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 pt-2'>
              <motion.div
                transition={transition}
                layoutId='active'
                className='bg-neutral-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-xl'
              >
                <motion.div layout className='w-max h-full p-4'>
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className='relative rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex justify-center space-x-4 px-5 py-3'
    >
      {children}
    </nav>
  )
}

export const HoveredLink = ({
  children,
  icon,
  ...rest
}: React.ComponentProps<typeof Link> & { icon?: React.ReactNode }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-300 hover:text-red-500 flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-800/70 transition-all duration-200"
    >
      {icon}
      {children}
    </Link>
  )
}


export const MenuSection = ({
  title,
  icon,
  children
}: {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <div className='space-y-3'>
      <div className='flex items-center gap-2 text-lg font-semibold text-white border-b border-neutral-200 pb-2'>
        {icon}
        {title}
      </div>
      <div className='space-y-1'>{children}</div>
    </div>
  )
}

export const ServiceItem = ({
  title,
  description,
  href,
  icon,
}: {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className="block p-3 rounded-lg hover:bg-neutral-800/70 transition-all duration-200 group"
    >
      <div className="flex items-start gap-3">
        <div className="text-red-500 mt-1">{icon}</div>
        <div>
          <h4 className="font-semibold text-white group-hover:text-red-500 transition-colors">
            {title}
          </h4>
          <p className="text-sm text-neutral-400 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  )
}


export const QuickAction = ({
  title,
  href,
  icon,
  variant = 'default'
}: {
  title: string
  href: string
  icon?: React.ReactNode
  variant?: 'default' | 'primary'
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm',
        variant === 'primary'
          ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl'
          : 'text-white hover:text-white/80 hover:bg-white/10 border border-white/20'
      )}
    >
      {icon}
      {title}
    </Link>
  )
}