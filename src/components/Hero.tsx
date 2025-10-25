'use client'

import React from 'react'
import dotsBg from "../../public/dots.png"
import Image from 'next/image'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { ArrowBendLeftDownIcon } from '@phosphor-icons/react'

export default function Hero() {
  const heroBg = 'https://images.unsplash.com/photo-1572965382862-ee7beacb7b10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1156'

  return (
    <section className='w-full h-[110vh] bg-cover bg-top relative py-32' style={{ backgroundImage: `url(${heroBg})` }}>
      <Image src={dotsBg} alt={''} layout='fill' objectFit='cover' className='z-10 opacity-2'/>
      <div className='absolute inset-0 bg-black/50 z-0'/>
      <div className='max-w-[1400px] mx-auto relative flex flex-col justify-end items-start text-white h-full z-20'>
        <div className=''>
          <div className='flex items-center px-4 py-2 rounded-lg bg-background/20 backdrop-blur-xl inline-block'>
            <div className='flex items-center gap-x-2'>
              <p className='text-sm'>HEI • Hospitality Education Institute</p>
              <ArrowUpRightIcon/>
            </div>
          </div>
          <div className='font-serif text-7xl my-6'>
            <h1>Unlock your </h1>
            <h1>future in global</h1>
            <h1 className='text-accent'>hospitality careers</h1>
          </div>
          <div className='flex items-center rounded-xl bg-white text-foreground p-4 text-sm shadow-[0px_0px_100px_-5px_rgba(234,_179,_8,_0.5)] font-medium'>
            <input type="text" placeholder='name@gmail.com' className='w-[60%] placeholder:text-accent focus:outline-none' />
            <button className='w-[40%] flex items-center justify-end gap-x-1 cursor-pointer '>
              <ArrowBendLeftDownIcon/>
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
