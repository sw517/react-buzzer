import { SelectOption } from '@/lib/definitions'
import styles from '@/styles/buzzer.module.scss'
import { KeyboardEvent, TouchEvent, HTMLProps, useState } from 'react'

interface BuzzerButtonProps extends HTMLProps<HTMLDivElement> {
  selectedColorValue: SelectOption['value']
  onPlay: () => void
  small?: boolean
}

export default function BuzzerButton({
  selectedColorValue,
  onPlay,
  small,
  className,
}: BuzzerButtonProps) {
  const [isTouching, setIsTouching] = useState(false)
  const onTouchStart = (e: TouchEvent) => {
    e.preventDefault()
    setIsTouching(true)
    onPlay()
  }

  const onTouchMove = (e: TouchEvent) => {
    // Prevent mousedown triggering
    e.preventDefault()
  }

  const onTouchEnd = (e: TouchEvent) => {
    // Prevent mousedown triggering
    e.preventDefault()
    setIsTouching(false)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      onPlay()
    }
  }

  return (
    <button
      className={`
        transform-gpu
        ${className}
        ${styles.button}
        ${small && styles['button--small']}
        ${isTouching && styles.active}
      `}
      onMouseDown={onPlay}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onKeyDown={onKeyDown}
      style={{ color: selectedColorValue }}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <g className={styles['svg-inner']}>
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            fill={selectedColorValue}
            className={`${styles['svg-button']}`}
          />
          <ellipse
            cx="50%"
            cy="50%"
            rx="20%"
            ry="10%"
            fill="white"
            fillOpacity="30%"
            className={styles['svg-shine']}
          />
        </g>
      </svg>
    </button>
  )
}
