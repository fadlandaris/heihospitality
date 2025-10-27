'use client'

import React, { useState } from 'react'
import { navLinks } from '@/data/data'
import { SparkleIcon, PenNibIcon } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logoPic from "../../../public/logo.png"

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='w-full fixed top-0 left-0 right-0 z-50 bg-white border-b border-border px-8'>
      <div className='max-w-[1400px] mx-auto h-[46px] flex items-center justify-between'>
        <div className='flex items-center gap-x-10'>
          <div className='font-medium flex items-center gap-x-2'>
            <div className='w-6 h-6 rounded-lg bg-gradient-to-b from-neutral-600 to-foreground flex items-center justify-center'>
              <Image src={logoPic} alt={''} width={17}/>
            </div>
            <p className='font-bold text-md tracking-tighter flex'>Hei Hospitality</p>
          </div>
          <div className='hidden lg:flex items-center gap-x-4'>
            {navLinks.map((item, i) => {
              return (
                <button key={i} onClick={()=> router.push(item.link)} className={`${pathname === item.link ? 'text-foreground' : 'text-accent/50'} text-sm capitalize cursor-pointer`}>
                  {item.nav}
                </button>
              )
            })}
          </div>
        </div>
        <div className='hidden lg:flex items-center gap-x-2'>
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
        <button onClick={() => setIsOpen((prev) => !prev)} className={`flex lg:hidden w-4 h-3 flex flex-col justify-center items-center relative group transition-all duration-600`}>
          <div className={`w-full h-[1.5px] bg-foreground rounded-full absolute transition-all duration-300 ${ isOpen ? 'rotate-45 top-1/2' : 'top-0' }`}/>
          <div className={`w-full h-[1.5px] bg-foreground rounded-full transition-all duration-300 ${ isOpen ? 'opacity-0' : 'opacity-100' }`}/>
          <div className={`w-full h-[1.5px] bg-foreground rounded-full absolute transition-all duration-300 ${ isOpen ? '-rotate-45 top-1/2' : 'bottom-0' }`}/>
        </button>
        <div className={`absolute bg-muted top-11 left-0 right-0 p-4 flex flex-col gap-y-4 transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {navLinks.map((item, i) => {
            return (
              <button key={i} onClick={()=> router.push(item.link)} className={`${pathname === item.link ? 'text-foreground' : 'text-accent/50'} text-sm capitalize cursor-pointer text-left font-medium`}>
                {item.nav}
              </button>
            )
          })}
          <div className='flex items-center justify-between gap-x-4'>
            <button onClick={()=> router.push('/enrollment-class')} className='text-sm flex items-center gap-x-1 w-full md:w-1/2 lg: justify-center rounded-lg h-[32px] px-3 bg-gradient-to-b from-primary to-primary/60 text-foreground font-medium cursor-pointer border border-border/50 relative group'>
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
      </div>
    </nav>
  )
}
