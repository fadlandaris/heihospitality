'use client'

import React from 'react'
import Title from '@/components/reusable/Title'
import { MoneyIcon } from '@phosphor-icons/react'
import { pricingData } from '@/data/data'
import { WhatsappLogoIcon } from '@phosphor-icons/react'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
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

export default function PricingPage() {
  return (
    <section className='overflow-hidden px-4 lg:px-8'>
      <div className='max-w-[1400px] mx-auto border-x border-dashed border-border bg-white pt-24 lg:pt-42'>
        <div className='relative'>
          <div className='flex items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 justify-between w-[600px] '>
            {blob.map((item) => {
              return (
                <div key={item.id} className={`w-[120px] h-[120px] ${item.color} blur-[90px]`}/>
              )
            })}
          </div>
          <div className='relative'>
            <Title title={['Choose the plan', 'that fits your needs', 'simple, transparent, flexible']} desc={'Pricing'} IconBase={MoneyIcon}/>
          </div>
        </div>
        <div className='mt-12 lg:mt-24 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-3 w-full relative pb-24 border-b border-border border-dashed px-4 lg:px-8'>
          {pricingData.map((item, i) => {
            const buttonStyle = [
              'bg-white border border-border text-foreground hover:bg-foreground hover:text-white',
              'bg-white border border-border text-foreground hover:bg-foreground hover:text-white',
              'bg-white border border-secondary text-foreground hover:bg-secondary hover:text-white hover:border-white',
            ]
            return (
              <Fadein key={i} delay={0.3 * item.id}>
                <div className={`${i === pricingData.length - 1? 'bg-secondary' : 'bg-muted'} h-[85vh] rounded-md p-8 flex flex-col justify-between border border-border/30`}>
                  <div className=''>
                    <p className={`${i === pricingData.length - 1? 'text-white' : 'text-secondary'} font-medium`}>{item.title}</p>
                    <div className={`${i === pricingData.length - 1? 'text-white' : ''} flex items-end gap-x-1 my-4 font-medium`}>
                      <p>IDR</p>
                      <p className='text-3xl font-bold'>{item.price}</p>
                      <p>/{item.duration}</p>
                    </div>
                    <p className={`${i === pricingData.length - 1? 'text-white/70' : 'text-accent'} text-sm`}>{item.desc}</p>
                    <div className='mt-6 flex flex-col text-sm'>
                      {item.point.map((items, i) => {
                        return (
                          <div key={i} className={`${i === item.point.length - 1 ? 'border-b' : ''} border-t border-border/50 py-4`}>
                            <p className={`${item.id === pricingData.length - 1 ? 'text-white' : ''} mb-1 capitalize font-semibold`}>{items.title}</p>
                            <p className={`${item.id === pricingData.length - 1 ? 'text-white/70' : 'text-accent'}`}>{items.desc}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <button className={`${buttonStyle[item.id]} text-sm flex items-center justify-center gap-x-1 border p-3 rounded-xl hover:scale-102 transition-all duration-400 cursor-pointer font-medium`}>
                    Whatsapp Kami
                    <WhatsappLogoIcon/>
                  </button>
                </div>
              </Fadein>
            )
          })}
        </div>
        <Faq/>
      </div>
      <Footer/>
    </section>
  )
}
