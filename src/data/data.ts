import { GlobeSimpleIcon, FlagBannerFoldIcon, BoatIcon, CoffeeIcon } from "@phosphor-icons/react"

export const navLinks = [
  {
    id: 0,
    nav: 'Home',
    link: '/',
  },
  {
    id: 1,
    nav: 'pricing',
    link: '/pricing',
  },
  {
    id: 2,
    nav: 'Programs',
    link: '/programs',
  },
  {
    id: 3,
    nav: 'testimonials',
    link: '/testimonials',
  },
]

export const aboutData = [
  {
    id: 0,
    title: '15x',
    desc: 'more insights'
  },
  {
    id: 1,
    title: '70%',
    desc: 'faster analysis'
  },
]

export const programData = [
  {
    id: 0,
    title: 'Hotel training Exclusive-International region',
    describe: [
      { title: 'Deskripsi Pembelajaran', desc: 'pembelajaran terkait pelayanan hotel berbasis International'},
      { title: 'Fokus Pembelajaran', desc: 'Fokus pembelajaran dan salah satu kelas utamanya adalah House Keeping'},
    ],
    icon: GlobeSimpleIcon,
    url: 'https://plus.unsplash.com/premium_photo-1681491802557-7ac580349fd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 1,
    title: 'Hotel training intensive-local region',
    describe: [
      { title: 'Deskripsi Pembelajaran', desc: 'pembelajaran terkait pelayanan hotel berbasis local dalam negeri'},
      { title: 'Fokus Pembelajaran', desc: 'Fokus pembelajaran dan salah satu kelas utamanya adalah House Keeping'},
    ],
    icon: FlagBannerFoldIcon,
    url: 'https://images.unsplash.com/photo-1606738157849-bf12a05454f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    id: 2,
    title: 'Hotel training executive cruise ship',
    describe: [
      { title: 'Deskripsi Pembelajaran', desc: 'pembelajaran terkait pelayanan kapal pesiar berbasis international'},
      { title: 'Fokus Pembelajaran', desc: 'Fokus pembelajran dan salah satu kelas utamanya adalah barista specalist'},
    ],
    icon: BoatIcon,
    url: 'https://images.unsplash.com/photo-1709154958618-8d6b27b598bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    id: 3,
    title: 'Barista cruise ship training specialist',
    describe: [
      { title: 'Deskripsi Pembelajaran', desc: 'pembelajaran terkait pelayanan kapal pesiar berbasis international dan lokal'},
      { title: 'Fokus Pembelajaran', desc: 'Fokus pembelajaran dan salah satu kelas utamanya adalah barista specalist'},
    ],
    icon: CoffeeIcon,
    url: 'https://images.unsplash.com/photo-1755095682226-edf089aab1a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
  },
]

export const servicesData = [
  {
    id: 0,
    title: 'Valid insfrastructure',
    desc: 'infrastuktur yang valid dan didukung oleh mentor profesional',
    link: 'https://images.unsplash.com/photo-1641926489586-dd5dae881415?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
  },
  {
    id: 1,
    title: 'Penempatan kerja',
    desc: 'Mendapatkan penempatan dan kesempatan bekerja diluar negeri',
    link: 'https://plus.unsplash.com/premium_photo-1685283298967-88bdc86e9c40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025',
  },
  {
    id: 2,
    title: 'Kuliah cepat kerja',
    desc: 'Melakukan praktek kerja langsung dan siap untuk bekerja',
    link: 'https://plus.unsplash.com/premium_photo-1714397546754-3c1ef1be26e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
]

export const pricingData = [
  {
    id: 0,
    title: 'Essentials',
    price: '2.500.000',
    desc: 'Pendidikan & teori praktek selama 3 bulan On the job training dalam negeri, pelatihan bahasa inggris dengan Native Speaker, sertifikasi pendidikan setara diploma, dan Mess selama pendidikan',
    point: [
      { title: 'Lokasi', desc: 'Dalam Negeri'},
      { title: 'Sertifikat', desc: 'Sertifkasi Dalam Negeri setara D3'},
      { title: 'durasi', desc: '3 bulan'},
    ],
    duration: '3 Bulan',
  },
  {
    id: 1,
    title: 'Advanced',
    price: '5.500.000',
    desc: 'Pendidikan & teori praktek selama 6 bulan On the job training Luar Negeri, pelatihan bahasa inggris dengan Native Speaker, sertifikasi pendidikan setara diploma, dan Mess selama pendidikan',
    point: [
      { title: 'Lokasi', desc: 'Luar Negeri & Dalam Negeri'},
      { title: 'Sertifikat', desc: 'Sertifkasi Internasional setara D3'},
      { title: 'durasi', desc: '6 bulan'},
    ],
    duration: '6 Bulan',
  },
  {
    id: 2,
    title: 'Enterprise',
    price: '7.500.000',
    desc: 'Pendidikan & teori praktek selama 6 bulan On the job training selama 1 Tahun (Luar Negeri), pelatihan bahasa inggris dengan Native Speaker, sertifikasi pendidikan setara diploma, dan Mess selama pendidikan',
    point: [
      { title: 'Lokasi', desc: 'Luar Negeri & Dalam Negeri'},
      { title: 'Sertifikat', desc: 'Sertifkasi Dalam Negeri & International setara D3'},
      { title: 'durasi', desc: '1.5 Tahun'},
    ],
    duration: '1.5 Bulan',
  }
]
