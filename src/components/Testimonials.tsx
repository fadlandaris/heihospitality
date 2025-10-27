'use client'

import React from 'react'
import Title from './reusable/Title'
import { UserIcon } from '@phosphor-icons/react'
import Btn from './reusable/Btn'
import blurBg from "../../public/blur.png"
import Image from 'next/image'
import pixelPic from "../../public/pixel.png"
import { usePathname } from 'next/navigation'
import Fadein from '@/animation/Fadein'
import Blur from '@/animation/blur'

export default function Testimonials() {
  const testiBg = "https://images.unsplash.com/photo-1483192683197-083ca7511846?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1248"
  const pathname = usePathname()

  return (
    <section>
      <div className="max-w-[1400px] mx-auto border-x border-dashed border-border bg-white pt-24">
        
        {/* === Header === */}
        <Title 
          title={['What our students say', 'Real stories, real experiences', '—Straight from our customers']} 
          desc={'Testimonials'} 
          IconBase={UserIcon}
        />

        {/* === Button === */}
        <Fadein delay={0.3}>
          <div className={`${pathname === '/testimonials' ? 'hidden' : 'flex'}  items-center justify-center mt-8`}>
            <Btn variant={true} value="Read Stories" />
          </div>
        </Fadein>
      
        {/* === Background Section === */}
        <Blur delay={0.5}>
          <div className="relative w-full mt-32 flex items-end justify-center">
            {/* Background blur image */}
            <Image 
              src={blurBg} 
              alt="" 
              fill 
              className="object-fill inset-0 absolute"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-30" />

            {/* Main image card */}
            <Fadein delay={0.7}>
              <div className="relative w-[900px] h-[70vh] rounded-[25px] z-20 border-8 border-border/10">
                <Image src={testiBg} alt="Testimonials background" fill className="object-cover rounded-[20px]" priority/>
                <div className="absolute inset-0 bg-accent/40 backdrop-blur-sm rounded-[25px]" />
                <Image src={pixelPic} alt={''} width={800} className='absolute left-1/2 -translate-x-1/2 bottom-0 rounded-[25px]'/>
              </div>
            </Fadein>
          </div>
        </Blur>
      </div>
    </section>
  )
}
