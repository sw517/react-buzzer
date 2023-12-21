import Image from 'next/image'
import { useEffect } from 'react'
import styles from '@/styles/easter-egg.module.scss'

const audio = new Audio('/audio/jumpscare.mp3')
export default function EasterEgg({ show }: { show: boolean }) {
  useEffect(() => {
    if (show) {
      audio.play()
    }
  }, [show])

  return (
    <Image
      src="/images/jumpscare.jpg"
      alt=""
      width="400"
      height="400"
      className={`${styles.image} ${show && styles.active}`}
    />
  )
}
