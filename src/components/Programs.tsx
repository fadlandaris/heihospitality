'use client'

import React from 'react'
import { programData } from '@/data/data'
import gridBg from "../../public/grid.png"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Fadein from '@/animation/Fadein'
export default function Programs() {
  const pathname = usePathname()

  return (
    <section>
       <div className={`max-w-[1400px] mx-auto border-dashed border-border ${pathname === '/programs' ? 'border-0' : 'border-x'} bg-white grid grid-cols-1`}>
        {programData.map((item, i) => {
          return (
            <div key={i} className={`${item.id === programData.length - 1 ? 'border-0' : 'border-b'} grid grid-cols-2 border-dashed border-border p-24`}>
              <div className='flex flex-col justify-between'>
                <div>
                 <Fadein delay={0}>
                  <div className='p-[2px] inline-block rounded-xl text-white bg-secondary/50 shadow-[0px_30px_74px_-16px_#000000] relative'>
                    <Image src={gridBg} alt='' fill className='object-cover object-contain absolute inset-0 z-10'/>
                    <div className='p-2.5 rounded-xl bg-secondary'>
                      <item.icon size={25}/>
                    </div>
                  </div>
                 </Fadein>
                  <div className='my-4 text-4xl font-medium tracking-tighter'>
                    <Fadein delay={0.15}>
                      <h1>{item.title}</h1>
                    </Fadein>
                    <Fadein delay={0.25}>
                        <h1>{item.title2}</h1>
                    </Fadein>
                  </div>
                  <Fadein delay={0.3}>
                    <p className='text-2xl font-serif'>0{item.id + 1}</p>
                  </Fadein>
                </div>
                <div className='flex flex-col gap-y-4 tracking-tight'>
                  {item.describe.map((items, i) => {
                    return (
                      <div key={i}>
                        <Fadein delay={0.45}>
                            <p className='font-semibold'>{items.title}</p>
                        </Fadein>
                        <Fadein delay={0.55}>
                          <p className='mt-2 w-1/2 text-accent font-medium'>{items.desc}</p>
                        </Fadein>
                      </div>
                    )
                  })}
                </div>
              </div>
              <Fadein delay={0.6}>
                <div className='flex items-center relative h-[75vh]'>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white z-10'/>
                  <div className='w-full h-[90%] rounded-[32px] p-2 relative bg-border/20 backdrop-blur-md'>
                    <div className='w-full h-full bg-white rounded-[25px] bg-cover bg-cenyer' style={{ backgroundImage: `url(${item.url})` }}/>
                  </div>
                </div>
              </Fadein>
            </div>
          )
        })}
       </div>
    </section>
  )
}
