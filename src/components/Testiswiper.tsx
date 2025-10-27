'use client'

import React from 'react'
import Title from './reusable/Title'
import { UserListIcon } from '@phosphor-icons/react'
import { testiData } from '@/data/data'
import Image from 'next/image'
import Blur from '@/animation/blur'
import Fadein from '@/animation/Fadein'

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

export default function TestiSwiper() {
  return (
    <section className='max-w-[1400px] mx-auto py-24 border-x border-dashed border-border bg-white border-b px-'>
      <div className='relative'>
        <div className='flex items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-between w-[600px] '>
          {blob.map((item) => {
            return (
              <div key={item.id} className={`w-[120px] h-[120px] ${item.color} blur-[90px]`}/>
            )
          })}
        </div>
        <div className='relative'>
          <Title title={['See the face of our ', 'happy smile of', 'students']} desc={'Programs'} IconBase={UserListIcon}/>
        </div>
      </div>
      <div className='mt-8 md:mt-16 px-4 lg:px-8'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 xl:grid-cols-3 lg:gap-8'>
          {testiData.map((item, i) => {
            return (
              <div key={i} className='h-[40vh] flex items-end'>  
                <div className='w-full flex items-end gap-x-3'>
                  <div className='w-16 h-16 relative'>
                    <Image src={item.pic} alt={''} fill className='object-cover absolute inset-0 border-2 border-border rounded-full'/>
                    <Blur delay={item.id * 0.35}>
                      <div className='p-4 lg:p-5 bg-secondary text-white left-10 -top-48 lg:-top-49 absolute w-[300px] h-auto rounded-t-2xl rounded-br-2xl font-medium'>
                        <p>{item.desc}</p>
                      </div>
                    </Blur>
                  </div>
                  <div>
                    <Fadein delay={0.4}>
                      <p className='font-semibold text-foreground'>{item.name}</p>
                    </Fadein>
                    <Fadein delay={0.45}>
                      <p className='text-sm text-accent font-medium'>{item.title}</p>
                    </Fadein>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
