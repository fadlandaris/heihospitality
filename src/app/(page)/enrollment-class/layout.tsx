import React from 'react'
import Navbar from '@/components/reusable/Navbar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "HEI • Enrollment",
  description: "",
};

export default function EnrollmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}
