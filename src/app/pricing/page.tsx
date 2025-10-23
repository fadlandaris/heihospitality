'use client'

import React from 'react'
import gridBg from "../../../public/grid1.png"
import Image from 'next/image'
import Title from '@/components/reusable/Title'
import { MoneyIcon } from '@phosphor-icons/react'
import { pricingData } from '@/data/data'
import { WhatsappLogoIcon } from '@phosphor-icons/react'

export default function PricingPage() {
  return (
    <section>
      <div className='max-w-[1400px] mx-auto border-x border-dashed border-border bg-white pb-24'>
        <div className='h-[40vh] relative oveflow-hidden'>
          <Image src={gridBg} alt={''} fill className='object-cover object-contain absolute inset-0 opacity-7 rounded-b-full'/>
        </div>
        <div className='-mt-32 relative'>
          <Title title={['Choose the plan', 'that fits your needs', 'simple, transparent, flexible']} desc={'Pricing'} IconBase={MoneyIcon}/>
          <div className='mt-24 grid grid-cols-3 gap-x-3 px-3'>
            {pricingData.map((item, i) => {
              const buttonStyle = [
                'bg-white border border-border text-foreground hover:bg-foreground hover:text-white',
                'bg-foreground text-white border-foreground hover:bg-primary hover:text-foreground hover:border-primary',
                'bg-white border border-secondary text-foreground hover:bg-secondary hover:text-white hover:border-white',
              ]
              return (
                <div key={i} className={`${i === pricingData.length - 1? 'bg-secondary' : 'bg-muted'} h-[80vh] rounded-xl p-8 flex flex-col justify-between font-medium border border-border`}>
                  <div className=''>
                    <p className={`${i === pricingData.length - 1? 'text-white' : 'text-secondary'} font-medium`}>{item.title}</p>
                    <div className={`${i === pricingData.length - 1? 'text-white' : ''} flex items-end gap-x-1 my-4 font-medium`}>
                      <p>IDR</p>
                      <p className='text-3xl font-bold'>{item.price}</p>
                      <p>/{item.duration}</p>
                    </div>
                    <p className={`${i === pricingData.length - 1? 'text-white/70' : 'text-accent'} text-sm`}>{item.desc}</p>
                    <div className='mt-6 flex flex-col font-medium text-sm'>
                      {item.point.map((items, i) => {
                        return (
                          <div key={i} className={`${i === item.point.length - 1 ? 'border-b' : ''} border-t border-border/50 py-4`}>
                            <p className={`${item.id === pricingData.length - 1 ? 'text-white' : ''} mb-1 capitalize`}>{items.title}</p>
                            <p className={`${item.id === pricingData.length - 1 ? 'text-white/70' : 'text-accent'}`}>{items.desc}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <button className={`${buttonStyle[item.id]} text-sm flex items-center justify-center gap-x-2 border p-3 rounded-xl hover:scale-102 transition-all duration-400 cursor-pointer`}>
                    Whatsapp Kami
                    <WhatsappLogoIcon weight='bold'/>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
