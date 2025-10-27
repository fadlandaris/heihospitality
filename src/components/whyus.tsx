'use client'

import React from 'react'
import Title from './reusable/Title'
import { HandHeartIcon } from '@phosphor-icons/react'
import Btn from './reusable/Btn'
import dotsBg from "../../public/dots.png"
import Image from 'next/image'
import { servicesData } from '@/data/data'
import agungPic from "../../public/agung.jpeg"
import rizkiPic from "../../public/rizki.jpeg"
import sultanPic from "../../public/sultan.jpeg"
import Fadein from '@/animation/Fadein'

export const image = [
  {
    id: 0,
    pic: agungPic,
  },
  {
    id: 1,
    pic: rizkiPic,
  },
  {
    id: 2,
    pic: sultanPic,
  },
]

export default function Whyus() {
  return (
    <section className='bg-foreground text-white relative px-4 lg:px-8'>
      <Image src={dotsBg} alt={''} fill className='object-cover object-fill absolute inset-0 opacity-7'/>
      <div className='max-w-[1400px] mx-auto py-12 lg:py-24 relative'>
        <Title title={['We offer wide range', 'hospitality Services', 'for anyone']} desc={'Why choose us?'} IconBase={HandHeartIcon}/>
        <div className='flex items-center justify-center mt-8'>
          <Fadein delay={0.15}>
            <Btn value='Enroll now'/>
          </Fadein>
        </div>
        <div className='mt-12 lg:mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {servicesData.map((item, i) => {
            const delay = [
              0.22,
              0.3,
              0.375,
            ]
            return (
              <Fadein key={i} delay={delay[item.id]}>
                <div className={`${item.id === servicesData.length - 1 ? 'bg-[#0f63ff] border-border/30 border-2' : 'bg-[#121212] border-2 border-border/20'} rounded-lg p-6 cursor-pointer hover:scale-102 transition-all duration-600`}>
                  <div className={`${item.id === servicesData.length - 1 ? 'bg-secondary border-border/10 border-2' : 'bg-[#202020]'} rounded-md p-6 `}>
                    <div className='rounded-md h-[20vh] md:h-[40vh] lg:h-[40vh] bg-cover bg-center relative overflow-hidden' style={{ backgroundImage: `url(${item.link})` }} >
                      <div className='absolute inset-0 bg-foreground/10'/>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <Fadein delay={1 * delay[item.id]}>
                      <h1 className='mb-3 text-[18px] font-semibold'>{item.title}</h1>
                    </Fadein>
                    <Fadein delay={1.5 * delay[item.id]}>
                      <p className={`w-[80%] font-semibold text-accent ${item.id === servicesData.length - 1 ? 'text-white/70' : ''}`}>{item.desc}</p>
                    </Fadein>
                  </div>
                </div>
              </Fadein>
            )
          })}
        </div>
        <div className='mt-12 lg:mt-32 grid grid-cols-1 lg:grid-cols-4'>
          <div className='col-span-3'>
            <div className='tracking-tighter font-medium text-4xl leading-11 text-center lg:text-left'>
              <Fadein delay={0.45}>
                <h1>Empowering</h1>
              </Fadein>
              <Fadein delay={0.525}>
                <h1>Future leaders in</h1>
              </Fadein>
              <Fadein delay={0.6}>
                <h1 className='text-accent font-serif text-5xl'>Hospitality education</h1>
              </Fadein>
            </div>
            <Fadein delay={0.675}>
               <p className='text-[18px] text-white/60 w-full text-center lg:text-left lg:w-[70%] mt-6 font-medium'>Di HEI, kami menumbuhkan keunggulan dalam bidang hospitality melalui pembelajaran inovatif, standar global, dan pengalaman nyata di dunia kerja.</p>
            </Fadein>
          </div>
          <div className='mt-12 lg:mt-0'>
            <div className='flex items-center justify-center lg:justify-start'>
              {image.map((item, i) => {
                const rotate = [
                  'rotate-4',
                  '-rotate-2 -ml-2',
                  'rotate-2 -ml-2',
                ]
                return (
                  <Fadein key={i} delay={item.id * 0.3}>
                    <div className={`w-12 h-12 ${rotate[item.id]}`}>
                      <Image src={item.pic} alt={''} fill className='object-cover border-neutral-300 border-2 rounded-lg'/>
                    </div>
                  </Fadein> 
                )
              })}
            </div>
            <Fadein delay={0.45}>
              <p className='mt-6 font-semibold text-[18px] text-center lg:text-left'>Your Hospitality dream</p>
            </Fadein>
            <Fadein delay={0.675}>
              <p className='mt-4 text-white/60 font-medium text-center lg:text-left'>Temukan peluang karir di industri perhotelan global dengan pelatihan berkualitas, pengalaman praktik langsung di hotel, resor, atau kapal pesiar internasional</p>
            </Fadein>
          </div>
        </div>
      </div>
    </section>
  )
}
