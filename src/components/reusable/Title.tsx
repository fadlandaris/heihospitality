'use client'

import React from 'react'

interface TitleProps {
  title: string[]          
  desc: string
  IconBase: React.ElementType  
}

export default function Title({title, desc, IconBase} : TitleProps) {
  return (
    <div className=''>
      <div className='flex items-center justify-center'>
        <div className='flex items-center gap-x-1 rounded-full text-sm py-2 px-4 text-white bg-gradient-to-b from-neutral-600 to-foreground shadow-[0px_10px_11px_-13px_#000000] border border-neutral-800'>
          <IconBase size={18} className="text-primary"/>
          <p className=''>{desc}</p>
        </div>
      </div>
      <div className='text-center mt-6 tracking-tighter font-medium'>
        {title.map((item, i) => {
          return (
            <h1 key={i} className={`${i === title.length - 1 ? 'font-serif text-6xl italic' : 'text-5xl'} ${i === title.length - 2 ? 'text-accent' : ''}`}>
              {item}
            </h1>
          )
        })}
      </div>
    </div>
  )
}
