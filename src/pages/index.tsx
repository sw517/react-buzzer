import { Inter } from 'next/font/google'
import Buzzer from '@/ui/buzzer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <Buzzer />
    </main>
  )
}
