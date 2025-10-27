'use client'

import React from 'react'
import dotsBg from "../../public/dots.png"
import Image from 'next/image'
import { ArrowUpRightIcon, StarIcon, StarHalfIcon } from '@phosphor-icons/react'
import gmapsLogo from "../../public/gmaps.png"
import Fadein from '@/animation/Fadein'
import Blur from '@/animation/blur'

const rating = [
  {
    id: 0,
    icon: StarIcon,
  },
  {
    id: 1,
    icon: StarIcon,
  },
  {
    id: 2,
    icon: StarIcon,
  },
  {
    id: 3,
    icon: StarIcon,
  },
  {
    id: 4,
    icon: StarHalfIcon,
  },
]

export default function Hero() {
  const heroBg = 'https://images.unsplash.com/photo-1572965382862-ee7beacb7b10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1156'

  return (
    <Blur delay={0}>
      <section className='w-full h-screen  lg:h-[110vh] bg-cover bg-top relative py-12 px-4 lg:px-8 lg:py-24 xl:py-32' style={{ backgroundImage: `url(${heroBg})` }}>
        <Image src={dotsBg} alt={''} layout='fill' objectFit='cover' className='z-10 opacity-5'/>
        <div className='absolute inset-0 bg-black/50 z-0'/>
        <div className='max-w-[1400px] mx-auto relative flex flex-col justify-end items-start text-white h-full z-20'>
          <div className=''>
            <Fadein delay={0.0}>
              <div className='flex items-center px-4 py-2 rounded-lg bg-background/20 backdrop-blur-xl inline-block'>
                <div className='flex items-center gap-x-2'>
                  <p className='text-sm'>HEI • Hospitality Education Institute</p>
                  <ArrowUpRightIcon/>
                </div>
              </div>
            </Fadein>
            <div className='font-serif text-5xl lg:text-7xl my-6'>
              <Fadein delay={0.225}>
                <h1>Unlock your </h1>
              </Fadein>
              <Fadein delay={0.45}>
                <h1>future in global</h1>
              </Fadein>
              <Fadein delay={0.675}>
                <h1 className='text-accent'>hospitality careers</h1>
              </Fadein>
            </div>
            <Fadein delay={0.9}>
              <a href='https://maps.app.goo.gl/rH8HGFXmo7D564n16' target='_blank' className='flex items-center'>
                <div className='flex items-center gap-x-3 rounded-lg bg-background/20 text-white p-3 text-sm shadow-[0px_0px_100px_-5px_rgba(234,_179,_8,_0.5)] font-medium '>
                  <div className='flex items-center'>
                    <p className='mr-1'>4.8</p>
                    {rating.map((item, i) => {
                      return (
                        <item.icon key={i} weight='fill' className='text-yellow-400'/>
                      )
                    })}
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <Image src={gmapsLogo} alt={''} width={15}/>
                    <p>Google Maps</p>
                  </div>
                </div>
              </a>
            </Fadein>
          </div>
        </div>
      </section>
    </Blur>
  )
}
