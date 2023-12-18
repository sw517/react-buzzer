import AudioSelect from './audio-select'
import ColorSelect from './color-select'
import ColorPickerModal from './color-picker-modal'
import BuzzerButton from './button'
import { useState } from 'react'
import { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { Avatar, Button } from '@mui/material'
import { BuzzerOptions, ColorOptions } from '@/lib/definitions'

export default function Buzzer({
  id,
  size,
  onPress,
}: {
  id?: string
  onPress?: (arg0?: string) => void
  size?: SelectProps['size']
}) {
  const [selectedBuzzerValue, setSelectedBuzzerValue] = useState(
    BuzzerOptions[0].value
  )
  const [selectedColorValue, setSelectedColorValue] = useState(
    ColorOptions[0].value
  )
  const [selectedCustomColor, setSelectedCustomColor] = useState('#ff0000')

  const [customColorModalOpen, setCustomColorModalOpen] = useState(false)

  const handleBuzzerChange = (e: SelectChangeEvent) => {
    setSelectedBuzzerValue(e.target.value)
  }

  const handleColorChange = (e: SelectChangeEvent) => {
    setSelectedColorValue(e.target.value)
  }

  const handlePlay = () => {
    const audio = new Audio(`/audio/${selectedBuzzerValue}`)
    audio.play()
    onPress && onPress(id)
  }

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="w-full">
        <div className="mb-8">
          <AudioSelect
            selectedBuzzerValue={selectedBuzzerValue}
            handleChange={handleBuzzerChange}
            size={size}
          />
        </div>
        <div className="flex">
          <ColorSelect
            selectedColorValue={selectedColorValue}
            handleChange={handleColorChange}
            size={size}
          />
          {selectedColorValue === 'custom' && (
            <>
              <Button
                className="ml-4"
                variant="outlined"
                sx={{ minWidth: '130px' }}
                onClick={() => setCustomColorModalOpen(true)}
              >
                <span>Change</span>
                <Avatar
                  className="ml-4"
                  sx={{ bgcolor: selectedCustomColor, width: 24, height: 24 }}
                >
                  &nbsp;
                </Avatar>
              </Button>
              <ColorPickerModal
                open={customColorModalOpen}
                handleClose={() => setCustomColorModalOpen(false)}
                color={selectedCustomColor}
                onChange={setSelectedCustomColor}
              />
            </>
          )}
        </div>
      </div>
      <BuzzerButton
        selectedColorValue={
          selectedColorValue === 'custom'
            ? selectedCustomColor
            : selectedColorValue
        }
        small={size === 'small'}
        className="mt-4"
        onPlay={handlePlay}
      />
    </div>
  )
}
