'use client'

import React from 'react'
import Title from './reusable/Title'
import { UserIcon } from '@phosphor-icons/react'
import Btn from './reusable/Btn'
import blurBg from "../../public/blur.png"
import Image from 'next/image'
import pixelPic from "../../public/pixel.png"

export default function Testimonials() {
  const testiBg = "https://images.unsplash.com/photo-1483192683197-083ca7511846?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1248"
  
  return (
    <section>
      <div className="max-w-[1400px] mx-auto border-x border-dashed border-border bg-white py-24">
        
        {/* === Header === */}
        <Title 
          title={['What our students say', 'Real stories, real experiences', '—Straight from our customers']} 
          desc={'Testimonials'} 
          IconBase={UserIcon}
        />

        {/* === Button === */}
        <div className="flex items-center justify-center mt-8">
          <Btn variant={true} value="Read Stories" />
        </div>

        {/* === Background Section === */}
        <div className="relative w-full mt-32">
          {/* Background blur image */}
          <Image 
            src={blurBg} 
            alt="" 
            fill 
            className="object-cover inset-0 absolute"
            priority
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-30" />

          {/* Main image card */}
          <div className="relative max-w-5xl mx-auto mt-16 h-[70vh] rounded-[25px] z-20">
            <Image src={testiBg} alt="Testimonials background" fill className="object-cover rounded-[25px]" priority/>
            <div className="absolute inset-0 bg-accent/40 backdrop-blur-sm rounded-[25px]" />
            <Image src={pixelPic} alt={''} width={800} className='absolute left-1/2 -translate-x-1/2 bottom-0 rounded-[25px]'/>
          </div>
        </div>

      </div>
    </section>
  )
}
