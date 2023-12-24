import Image from 'next/image'
import { HTMLAttributes, useState, TouchEvent, useRef } from 'react'
import styles from '@/styles/easter-egg.module.scss'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'

const audio = new Audio('/audio/jumpscare.mp3')

export default function EasterEgg(props: HTMLAttributes<HTMLDivElement>) {
  const [showJumpscare, setShowJumpscare] = useState(false)
  const tapCount = useRef(0)

  const onLogoTouchStart = (e: TouchEvent) => {
    e.preventDefault();

    if (tapCount.current > 3) {
      tapCount.current = 0;
      audio.play();
      setShowJumpscare(true)

      setTimeout(() => {
        setShowJumpscare(false)
      }, 3000)
    } else {
      tapCount.current = tapCount.current + 1;
    }
  }

  return (
    <>
      <button
        onTouchStart={onLogoTouchStart}
        onContextMenu={(e) => e.preventDefault()}
        className={props.className}
      >
        <GraphicEqIcon />
      </button>
      <Image
        src="/images/jumpscare.jpg"
        alt=""
        width="400"
        height="400"
        className={`${styles.image} ${showJumpscare && styles.active}`}
      />
    </>
  )
}
