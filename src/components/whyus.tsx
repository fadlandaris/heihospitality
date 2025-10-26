'use client'

import React from 'react'
import Title from './reusable/Title'
import { HandHeartIcon } from '@phosphor-icons/react'
import Btn from './reusable/Btn'
import dotsBg from "../../public/dots.png"
import Image from 'next/image'
import { servicesData } from '@/data/data'

export const image = [
  {
    id: 0,
    link : 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    id: 1,
    link : 'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    id: 2,
    link : 'https://plus.unsplash.com/premium_photo-1689747698547-271d2d553cee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
]

export default function Whyus() {
  return (
    <section className='bg-foreground text-white relative'>
      <Image src={dotsBg} alt={''} fill className='object-cover object-fill absolute inset-0 opacity-7'/>
      <div className='max-w-[1400px] mx-auto py-24 relative'>
        <Title title={['We offer wide range', 'hospitality Services', 'for anyone']} desc={'Why choose us?'} IconBase={HandHeartIcon}/>
        <div className='flex items-center justify-center mt-8'>
          <Btn value='Enroll now'/>
        </div>
        <div className='mt-24 grid grid-cols-3 gap-6'>
          {servicesData.map((item, i) => {
            return (
              <div key={i} className={`${item.id === servicesData.length - 1 ? 'bg-secondary border-border/30 border-2' : 'bg-[#121212] border-2 border-border/20'} rounded-lg p-6 cursor-pointer hover:scale-102 transition-all duration-600`}>
                <div className={`${item.id === servicesData.length - 1 ? 'bg-[#0f63ff] border-border/10 border-2' : 'bg-[#202020]'} rounded-md p-6 `}>
                  <div className='rounded-md h-[40vh] bg-cover bg-center relative overflow-hidden' style={{ backgroundImage: `url(${item.link})` }} >
                    <div className='absolute inset-0 bg-foreground/10'/>
                  </div>
                </div>
                <div className='mt-6'>
                  <h1 className='mb-3 text-[18px] font-semibold'>{item.title}</h1>
                  <p className={`w-[80%] font-semibold text-accent ${item.id === servicesData.length - 1 ? 'text-white/70' : ''}`}>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='mt-32 grid grid-cols-4'>
          <div className='col-span-3'>
            <div className='tracking-tighter font-medium text-4xl leading-11'>
              <h1>Empowering</h1>
              <h1>Future leaders in</h1>
              <h1 className='text-accent font-serif text-5xl'>Hospitality education</h1>
            </div>
            <p className='text-[18px] text-white/60 w-[70%] mt-6 font-medium'>Di HEI, kami menumbuhkan keunggulan dalam bidang hospitality melalui pembelajaran inovatif, standar global, dan pengalaman nyata di dunia kerja.</p>
          </div>
          <div>
            <div className='flex items-center'>
              {image.map((item, i) => {
                const rotate = [
                  'rotate-4',
                  '-rotate-2 -ml-2',
                  'rotate-2 -ml-2',
                ]
                return (
                  <div key={i} className={`w-12 h-12 rounded-lg border-neutral-300 border-2 bg-cover bg-center ${rotate[item.id]}`} style={{ backgroundImage: `url(${item.link})` }}/>
                )
              })}
            </div>
            <p className='mt-6 font-semibold text-[18px]'>Your Hospitality dream</p>
            <p className='mt-4 text-white/60 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum omnis placeat dicta voluptatum harum dolorem.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
