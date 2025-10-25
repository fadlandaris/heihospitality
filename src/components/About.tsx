'use client'

import React from 'react'
import Title from './reusable/Title'
import { CommandIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import founderPic from "../../public/founder.png"
import { aboutData } from '@/data/data'

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

export default function About() {
  const aboutBg = "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"

  return (
    <section className='border-b border-dashed border-border'>
      <div className='max-w-[1400px] mx-auto relative border-x border-dashed border-border bg-white py-24'>
        <Title title={['Experience seamless', 'hospitality at your fingertips', '—anytime, anywhere']} desc={'Get to know us'} IconBase={CommandIcon}/>
        <div className='max-w-5xl mx-auto mt-16 h-[90vh] relative'>
          <div className='flex items-center absolute left-0 right-0 top-0 justify-between'>
            {blob.map((item) => {
              return (
                <div key={item.id} className={`w-[120px] h-[80px] ${item.color} blur-3xl`}/>
              )
            })}
          </div>
          <div className='w-full h-full rounded-[32px] relative bg-border/20 backdrop-blur-md p-2'>
           <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white rounded-[25px]'/>
            <div className='w-full h-full rounded-[25px] bg-cover bg-center' style={{ backgroundImage: `url(${aboutBg})` }}>
            </div>
          </div>
        </div>
        <div className='mt-16 max-w-5xl mx-auto grid grid-cols-2 items-start'>
          <div className=''>
            <p className='text-[18px] font-semibold text-foreground'>HEI (Hospitality Education Institute) adalah lembaga pendidikan dan pelatihan perhotelan di Subang, Jawa Barat, yang membekali generasi muda dengan keterampilan standar internasional untuk bersaing di industri perhotelan global dan kapal pesiar, serta membantu mereka mendapatkan pekerjaan.</p>
            <div className='mt-6 flex items-end gap-x-4'>
              <Image src={founderPic} width={60} alt={''} className='rounded-lg border-4 border-border/50' />
              <div>
                <h1 className='font-medium'>Muhtarom Ayi Gunawan</h1>
                <p className='text-sm text-accent'>Founder of HEI Hospitality</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-end gap-x-12'>
            {aboutData.map((item, i) => {
              return (
                <div className='text-center' key={i}>
                  <h1 className='tracking-tighter text-5xl'>{item.title}</h1>
                  <p className='text-accent text-sm mt-1 capitalize'>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
