import { BuzzerOptions, BuzzerOption } from '@/lib/definitions'
import buzzerStyles from '@/styles/buzzer.module.scss'
import { MouseEventHandler } from 'react'

export default function BuzzerButton({
  selectedBuzzerId,
  onPlay,
}: {
  selectedBuzzerId: BuzzerOption['id']
  onPlay: () => void
}) {
  const selectedBuzzer = BuzzerOptions.find(
    (b: BuzzerOption) => b.id === selectedBuzzerId
  )

  if (!selectedBuzzer) return null

  return (
    <button className={buzzerStyles.button} onClick={onPlay}>
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
            fill={selectedBuzzer.color}
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
