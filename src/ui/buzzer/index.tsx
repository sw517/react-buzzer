import AudioSelect from './audio-select'
import ColorSelect from './color-select'
import ColorPickerModal from './color-picker-modal'
import BuzzerButton from './button'
import { useState } from 'react'
import { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import RotateIcon from '@mui/icons-material/RotateRight'
import Typography from '@mui/material/Typography'
import { BuzzerOptions, ColorOptions } from '@/lib/definitions'
import styles from '@/styles/buzzer.module.scss'

export default function Buzzer({
  id,
  size,
  outlined,
  allowRotate,
  onPress,
}: {
  id?: string
  onPress?: (arg0?: string) => void
  outlined?: boolean
  allowRotate?: boolean
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

  const [rotateClass, setRotateClass] = useState('')

  const handleBuzzerChange = (e: SelectChangeEvent) => {
    setSelectedBuzzerValue(e.target.value)
  }

  const handleColorChange = (e: SelectChangeEvent) => {
    setSelectedColorValue(e.target.value)
  }

  const handlePlay = () => {
    onPress && onPress(id)
    const audio = new Audio(`/audio/${selectedBuzzerValue}`)
    audio.play()
  }

  const handleRotate = () => {
    switch (rotateClass) {
      case '':
        setRotateClass('inner--rotate-90')
        return
      case 'inner--rotate-90':
        setRotateClass('inner--rotate-180')
        return
      case 'inner--rotate-180':
        setRotateClass('inner--rotate-270')
        return
      default:
        setRotateClass('')
    }
  }

  const rotatedSideways = ['rotate-90', 'rotate-270'].includes(rotateClass)

  return (
    <div className={`w-full relative ${outlined && styles['root--outlined']}`}>
      {allowRotate && (
        <IconButton
          className="absolute top-0 right-0 z-10"
          onClick={handleRotate}
        >
          <RotateIcon />
        </IconButton>
      )}
      <div
        className={`flex flex-col items-center justify-between ${
          outlined && styles['inner--outlined']
        } ${styles.inner} ${styles[rotateClass]} ${
          rotatedSideways && styles['inner--sideways']
        }`}
      >
        {id && (
          <Typography variant="subtitle1" className="pb-4 text-left">
            {id}
          </Typography>
        )}
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
    </div>
  )
}
