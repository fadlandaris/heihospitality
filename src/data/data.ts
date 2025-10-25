import { GlobeSimpleIcon, FlagBannerFoldIcon, BoatIcon, CoffeeIcon } from "@phosphor-icons/react"
import sultanPic from "../../public/sultan.jpeg"

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
    title: '5 Year',
    desc: 'Since founded'
  },
  {
    id: 1,
    title: '50+',
    desc: 'Overseas graduates'
  },
]

export const programData = [
  {
    id: 0,
    title: 'Hotel training Exclusive',
    title2: 'International region',
    describe: [
      { title: 'Learning Description', desc: 'pembelajaran terkait pelayanan hotel berbasis International'},
      { title: 'Focus of Learning', desc: 'Salah satu kelas utamanya adalah House Keeping'},
    ],
    icon: GlobeSimpleIcon,
    url: 'https://plus.unsplash.com/premium_photo-1681491802557-7ac580349fd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    id: 1,
    title: 'Hotel training intensive',
    title2: 'local region',
    describe: [
      { title: 'Learning Description', desc: 'pembelajaran terkait pelayanan hotel berbasis local dalam negeri'},
      { title: 'Focus of Learning', desc: 'Salah satu kelas utamanya adalah House Keeping'},
    ],
    icon: FlagBannerFoldIcon,
    url: 'https://images.unsplash.com/photo-1606738157849-bf12a05454f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    id: 2,
    title: 'Hotel training ',
    title2: 'executive cruise ship',
    describe: [
      { title: 'Learning Description', desc: 'pembelajaran terkait pelayanan kapal pesiar berbasis international'},
      { title: 'Focus of Learning', desc: 'Salah satu kelas utamanya adalah barista specalist'},
    ],
    icon: BoatIcon,
    url: 'https://images.unsplash.com/photo-1709154958618-8d6b27b598bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    id: 3,
    title: 'Barista cruise ship',
    title2: 'training specialist',
    describe: [
      { title: 'Learning Description', desc: 'pembelajaran terkait pelayanan kapal pesiar berbasis international dan lokal'},
      { title: 'Focus of Learning', desc: 'Salah satu kelas utamanya adalah barista specalist'},
    ],
    icon: CoffeeIcon,
    url: 'https://images.unsplash.com/photo-1755095682226-edf089aab1a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
  },
]

export const servicesData = [
  {
    id: 0,
    title: 'Valid insfrastructure',
    desc: 'Infrastuktur yang valid dan didukung oleh mentor profesional',
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
      { title: 'Location', desc: 'Dalam Negeri'},
      { title: 'Cerification', desc: 'Sertifkasi Dalam Negeri setara D3'},
      { title: 'Duration', desc: '3 bulan'},
    ],
    duration: '3 Bulan',
  },
  {
    id: 1,
    title: 'Advanced',
    price: '5.500.000',
    desc: 'Pendidikan & teori praktek selama 6 bulan On the job training Luar Negeri, pelatihan bahasa inggris dengan Native Speaker, sertifikasi pendidikan setara diploma, dan Mess selama pendidikan',
    point: [
      { title: 'Location', desc: 'Luar Negeri & Dalam Negeri'},
      { title: 'Cerification', desc: 'Sertifkasi Internasional setara D3'},
      { title: 'Duration', desc: '6 bulan'},
    ],
    duration: '6 Bulan',
  },
  {
    id: 2,
    title: 'Enterprise',
    price: '7.500.000',
    desc: 'Pendidikan & teori praktek selama 6 bulan On the job training selama 1 Tahun (Luar Negeri), pelatihan bahasa inggris dengan Native Speaker, sertifikasi pendidikan setara diploma, dan Mess selama pendidikan',
    point: [
      { title: 'Location', desc: 'Luar Negeri & Dalam Negeri'},
      { title: 'Cerification', desc: 'Sertifkasi Dalam Negeri & International setara D3'},
      { title: 'Duration', desc: '1.5 Tahun'},
    ],
    duration: '1.5 Bulan',
  }
]

export const testiData = [
  {
    id: 0,
    title: 'HK Attendant | Norwegian CL',
    desc: 'Proses tak pernah mengkhianati hasil dan semua perjuangan ku berbuah manis. Bisa bekerja di salah satu perusahaan Cruise Line terbesar di Dunia dan keliling dunia. Terimakasih HEI - Hospitallity Education Institute SUBANG',
    name: 'Sultan Ahmad R',
    pic: sultanPic
  },
  {
    id: 1,
    title: 'Waiter - Middle East',
    desc: 'Hei.. kalian anak-anak muda ayo mari jangan buang waktu kalian dirumah. langkahkan kaki kalian dan berjuang untuk masa depan. Pokoknya kalian tidak akan menyesal deh bergabung dengan HEI, saya buktinya HEI The hospitality champions',
    name: 'Rizki Saputra'
  },
  {
    id: 2,
    title: 'HK Attendant - Princess Cruise Lines',
    desc: 'Alhamdulillah di berikan kelancaran semuanya setelah bergabung dengan HEI. Mimpiku untuk berkarir di luar negeri akhirnya terwujud. Thank you very much HEI - dan TJL cabang Subang',
    name: 'Agung'
  },
]

export const faqData = [
  {
    id: 0,
    title: 'Is my data secure in platform ?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore placeat maiores veritatis ratione ipsum asperiores, distinctio quas delectus recusandae suscipit adipisci animi labore aperiam vero. Ad est atque minima.'
  },
  {
    id: 1,
    title: 'Is my data secure in platform ?',
    desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid iusto, id officia modi atque deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore placeat maiores veritatis ratione ipsum asperiores, distinctio quas delectus recusandae suscipit adipisci animi labore aperiam vero. Ad est atque minima'
  },
  {
    id: 2,
    title: 'Is my data secure in platform ?',
    desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore placeat maiores veritatis ratione ipsum asperiores, distinctio quas delectus recusandae suscipit adipisci animi labore aperiam vero. Ad est atque minima'
  },
  {
    id: 3,
    title: 'Is my data secure in platform ?',
    desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore placeat maiores veritatis ratione ipsum asperiores, distinctio quas delectus recusandae suscipit adipisci animi labore aperiam vero. Ad est atque minima'
  },
  {
    id: 4,
    title: 'Is my data secure in platform ?',
    desc: ' Lorem ipsum, dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore placeat maiores veritatis ratione ipsum asperiores, distinctio quas delectus recusandae suscipit adipisci animi labore aperiam vero. Ad est atque minima'
  },
]
