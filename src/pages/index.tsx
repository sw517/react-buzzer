import { Inter } from 'next/font/google'
import BuzzerSelect from '@/ui/buzzer-select'
import BuzzerButton from '@/ui/buzzer-button'
import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import { BuzzerOptions } from '@/lib/definitions'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selectedBuzzerId, setSelectedBuzzerId] = useState(BuzzerOptions[0].id)

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedBuzzerId(e.target.value)
  }

  const handlePlay = () => {
    const audio = new Audio('/audio/yay.mp3')
    audio.play()
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <BuzzerSelect
        selectedBuzzerId={selectedBuzzerId}
        handleChange={handleChange}
      />
      <BuzzerButton selectedBuzzerId={selectedBuzzerId} onPlay={handlePlay} />
    </main>
  )
}
