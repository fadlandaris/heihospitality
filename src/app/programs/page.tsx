'use client'

import React from 'react'
import Image from 'next/image'
import gridBg from "../../../public/grid1.png"
import Programs from '@/components/Programs'
import { AppWindowIcon } from '@phosphor-icons/react'
import Title from '@/components/reusable/Title'

export default function ProgramsPage() {
  return (
    <section>
      <div className='max-w-[1400px] mx-auto border-x border-dashed border-border bg-white'>
         <div className='h-[40vh] relative oveflow-hidden'>
          <Image src={gridBg} alt={''} fill className='object-cover object-contain absolute inset-0 opacity-7 rounded-b-full'/>
        </div>
        <div className='-mt-32 relative'>
          <Title title={['Experience world-class training', 'through exclusive programs', 'built for real industry success']} desc={'Programs'} IconBase={AppWindowIcon}/>
          <Programs/>
        </div>
      </div>
    </section>
  )
}
