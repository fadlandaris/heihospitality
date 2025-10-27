'use client'
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function Blur({ children, delay }: { children: ReactNode, delay: number }) {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0 }} 
      whileInView={{ filter: 'blur(0)', opacity: 1 }} 
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
