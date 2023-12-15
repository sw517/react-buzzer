import { Inter } from 'next/font/google'
import BuzzerSelect from '@/ui/buzzer-select'
import ColorSelect from '@/ui/color-select'
import BuzzerButton from '@/ui/buzzer-button'
import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import { BuzzerOptions, ColorOptions } from '@/lib/definitions'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selectedBuzzerValue, setSelectedBuzzerValue] = useState(
    BuzzerOptions[0].value
  )
  const [selectedColorValue, setSelectedColorValue] = useState(
    ColorOptions[0].value
  )

  const handleBuzzerChange = (e: SelectChangeEvent) => {
    setSelectedBuzzerValue(e.target.value)
  }

  const handleColorChange = (e: SelectChangeEvent) => {
    setSelectedColorValue(e.target.value)
  }

  const handlePlay = () => {
    const audio = new Audio(`/audio/${selectedBuzzerValue}`)
    audio.play()
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-full">
        <div className="mb-8">
          <BuzzerSelect
            selectedBuzzerValue={selectedBuzzerValue}
            handleChange={handleBuzzerChange}
          />
        </div>
        <ColorSelect
          selectedColorValue={selectedColorValue}
          handleChange={handleColorChange}
        />
      </div>
      <BuzzerButton
        selectedColorValue={selectedColorValue}
        onPlay={handlePlay}
      />
    </main>
  )
}
