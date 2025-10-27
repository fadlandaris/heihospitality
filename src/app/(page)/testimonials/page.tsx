'use client'

import React from 'react'
import { testiData } from '@/data/data'
import dotsBg from "../../../../public/dots.png"
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'
import TestiSwiper from '@/components/Testiswiper'
import Blur from '@/animation/blur'
import Fadein from '@/animation/Fadein'

export default function TestimonialsPage() {
const testiBg = 'https://images.unsplash.com/photo-1590910705086-a5f1ffc25fc2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074'
const choosenData = testiData.filter((item) => item.id === 0)

  return (
  <section className='overflow-hidden'>
    <Blur delay={0}>
      <div className='border w-full h-screen bg-cover bg-center relative flex items-center justify-center' style={{ backgroundImage: `url(${testiBg})` }}>
        <Image src={dotsBg} alt='' fill className='object-cover absolute inset-0 opacity-7' />
        <div className='bg-gradient-to-t from-foreground via-foreground/90 to-transparent absolute inset-0' />
        <div className='relative text-white max-w-3xl'>
        {choosenData.map((item) => (
          <div key={item.id} className=''>
            <Fadein delay={0.3}>
              <h1 className='text-center text-2xl md:text-3xl lg:text-[42px] leading-[1] font-medium font-serif px-8 md:px-24 lg:px-0'>&quot;{item.desc}&quot;</h1>
            </Fadein>
            <div className='text-center font-semibold mt-12'>
            <Fadein delay={0.4}>
              <div className='relative w-[55px] h-[55px] border-3 border-white rounded-xl mx-auto mb-4 -rotate-3 overflow-hidden'>
                <Image src={item.pic ?? '/founder.png'} alt={item.name || 'Testimonial photo'} fill className='object-cover rounded-xl' sizes='60px' />
              </div>
            </Fadein>
            <Fadein delay={0.5}>
              <p>{item.name}</p>
            </Fadein>
            <Fadein delay={0.6}>
              <p className='text-white/50 text-sm'>{item.title}</p>
            </Fadein>
          </div>
        </div>
        ))}
        </div>
      </div>
    </Blur>
    <TestiSwiper/>
    <Testimonials />
  </section>
  )
  }
