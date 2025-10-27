'use client'

import Hero from "@/components/Hero"
import About from "@/components/About"
import Programs from "@/components/Programs"
import Testimonials from "@/components/Testimonials"
import Whyus from "@/components/whyus"
import Navbar from "@/components/reusable/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Programs/>
      <Whyus/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}
