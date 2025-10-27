'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function Fadein({children, delay}: {children: ReactNode, delay: number}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
