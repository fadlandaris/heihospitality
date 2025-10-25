'use client'

import React from 'react'
import { testiData } from '@/data/data'
import dotsBg from "../../../../public/dots.png"
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'

export default function TestimonialsPage() {
const testiBg = 'https://images.unsplash.com/photo-1590910705086-a5f1ffc25fc2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074'
const choosenData = testiData.filter((item) => item.id === 0)

  return (
  <section>
    <div className='border w-full h-screen bg-cover bg-center relative flex items-center justify-center' style={{ backgroundImage: `url(${testiBg})` }}>
      <Image src={dotsBg} alt='' fill className='object-cover absolute inset-0 opacity-4' />
      <div className='bg-gradient-to-t from-foreground via-foreground/90 to-transparent absolute inset-0' />
      <div className='relative text-white max-w-3xl'>
       {choosenData.map((item) => (
        <div key={item.id} className=''>
          <h1 className='text-center text-[42px] leading-[1] font-medium font-serif'>&quot;{item.desc}&quot;</h1>
          <div className='text-center font-semibold mt-12'>
          <div className='relative w-[55px] h-[55px] border-3 border-white rounded-xl mx-auto mb-4 -rotate-3 overflow-hidden'>
            <Image src={item.pic ?? '/founder.png'} alt={item.name || 'Testimonial photo'} fill className='object-cover rounded-xl' sizes='60px' />
          </div>
          <p>{item.name}</p>
          <p className='text-white/50 text-sm'>{item.title}</p>
        </div>
      </div>
      ))}
      </div>
    </div>
    <Testimonials />
  </section>
  )
  }
