'use client'

import React from 'react'
import { WhatsappLogoIcon } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className='w-full bg-white border-t border-border fixed bottom-0 left-0 right-0 px-4 lg:px-8 z-50'>
      <div className='flex items-center justify-between mx-auto max-w-[1400px] py-1 text-sm text-accent underline'>
        <p>© Hei Hospitality 2025</p>
        <a href="https://wa.me/6285150007878" target="_blank" rel="noopener noreferrer" className='flex items-center gap-x-1'>
          <WhatsappLogoIcon/>
          <p>Whatsapp</p>
        </a>
      </div>
    </footer>
  )
}
