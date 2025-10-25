'use client'

import React from 'react'
import { navLinks } from '@/data/data'
import { IslandIcon, SparkleIcon, PenNibIcon } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <nav className='w-full fixed top-0 left-0 right-0 z-50 bg-white border-b border-border'>
      <div className='max-w-[1400px] mx-auto h-[46px] flex items-center justify-between'>
        <div className='flex items-center gap-x-10'>
          <div className='font-medium flex items-center gap-x-2'>
            <div className='p-1 rounded-lg bg-primary border border-border/50'>
              <IslandIcon weight='fill' size={14}/>
            </div>
            <p className='font-bold text-md tracking-tighter'>Hei Hospitality</p>
          </div>
          <div className='flex items-center gap-x-4'>
            {navLinks.map((item, i) => {
              return (
                <button key={i} onClick={()=> router.push(item.link)} className={`${pathname === item.link ? 'text-foreground' : 'text-accent/50'} text-sm capitalize cursor-pointer`}>
                  {item.nav}
                </button>
              )
            })}
          </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <button onClick={()=> router.push('/enrollment-class')} className='text-sm flex items-center gap-x-1 rounded-lg h-[32px] px-3 bg-gradient-to-b from-primary to-primary/60 text-foreground font-medium cursor-pointer border border-border/50 relative group'>
            <SparkleIcon weight='regular'/>
            <span>Enroll now</span>
             <p className='absolute bg-white w-12 h-0 text-accent h-6 rounded-full top-0 left-1/2 -translate-x-1/2 border border-border text-xs flex items-center opacity-0 justify-center group-hover:opacity-100 group-hover:h-6 group-hover:w-18 group-hover:top-10  transition-all duration-400'>Enroll Now</p>
          </button>
          <button onClick={()=> router.push('/auth/admin-login')} className='text-sm flex items-center gap-x-1 rounded-lg h-[32px] px-3 bg-gradient-to-b from-neutral-700 to-foreground text-white font-medium cursor-pointer border border-border/50 relative group'>
            <PenNibIcon weight='fill'/>
            <p className='absolute bg-white w-0 h-0 text-accent h-6 rounded-full top-0 left-1/2 -translate-x-1/2 border border-border text-xs flex items-center opacity-0 justify-center group-hover:opacity-100 group-hover:h-6 group-hover:w-12 group-hover:top-10  transition-all duration-400'>admin</p>
          </button>
        </div>
      </div>
    </nav>
  )
}
