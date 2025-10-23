'use client'

import React from 'react'
import { ArrowRightIcon } from '@phosphor-icons/react'

export default function Btn({value, variant, onClick} : {value:string, variant?:boolean, onClick?:() => void}) {
  return (
    <button className={`${variant ? 'bg-white text-foreground border border-border hover:bg-foreground hover:text-white' : 'bg-white text-foreground hover:bg-accent'} flex items-center gap-x-2 py-3 px-4 rounded-xl font-semibold cursor-pointer transition-all duration-400`}>
      <p>{value}</p>
      <ArrowRightIcon size={16}/>
    </button>
  )
}
