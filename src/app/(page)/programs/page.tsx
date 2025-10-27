'use client'

import React from 'react'
import Programs from '@/components/Programs'
import { AppWindowIcon } from '@phosphor-icons/react'
import Title from '@/components/reusable/Title'
import Whyus from '@/components/whyus'

const blob = [
  {
    id: 0,
    color: 'bg-red-200',
  },
  {
    id: 1,
    color: 'bg-primary/70',
  },
  {
    id: 2, 
    color: 'bg-green-200',
  },
  {
    id: 3, 
    color: 'bg-blue-200',
  },
]

export default function ProgramsPage() {
  return (
    <section className='overflow-hidden '>
      <div className='max-w-[1400px] mx-auto border-x border-dashed border-border bg-white pt-24 lg:pt-42 relative'>
        <div className='relative'>
          <div className='flex items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-between w-[600px] '>
            {blob.map((item) => {
              return (
                <div key={item.id} className={`w-[120px] h-[120px] ${item.color} blur-[90px]`}/>
              )
            })}
          </div>
          <div className='relative'>
            <Title title={['World-class training', 'Exclusive programs', 'Real industry success']} desc={'Programs'} IconBase={AppWindowIcon}/>
          </div>
        </div>
      </div>
      <Programs/>
      <Whyus/>
    </section>
  )
}
