import { ColorOptions, SelectOption } from '@/lib/definitions'
import buzzerStyles from '@/styles/buzzer.module.scss'
import { KeyboardEvent, TouchEvent } from 'react'

export default function BuzzerButton({
  selectedColorValue,
  onPlay,
}: {
  selectedColorValue: SelectOption['value']
  onPlay: () => void
}) {
  const selectedColor = ColorOptions.find(
    (b: SelectOption) => b.value === selectedColorValue
  )

  if (!selectedColor) return null

  const onTouchStart = (e: TouchEvent) => {
    e.preventDefault()
    onPlay()
  }

  const onTouchMove = (e: TouchEvent) => {
    // Prevent mousedown triggering
    e.preventDefault()
  }

  const onTouchEnd = (e: TouchEvent) => {
    // Prevent mousedown triggering
    e.preventDefault()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      onPlay()
    }
  }

  return (
    <button
      className={buzzerStyles.button}
      onMouseDown={onPlay}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onKeyDown={onKeyDown}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={buzzerStyles.svg}
      >
        <g className={buzzerStyles['svg-inner']}>
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            fill={selectedColor.value}
            className={buzzerStyles['svg-button']}
          />
          <ellipse
            cx="50%"
            cy="50%"
            rx="20%"
            ry="10%"
            fill="white"
            fillOpacity="30%"
            className={buzzerStyles['svg-shine']}
          />
        </g>
      </svg>
    </button>
  )
}
