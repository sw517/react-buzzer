import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '@/styles/easter-egg.module.scss'

export default function EasterEgg() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const audio = new Audio('/audio/echo-jumpscare.mp3')
    audio.play()
    setLoaded(true)
  }, [])

  return (
    <Image
      src="/images/jump-scare.jpg"
      alt=""
      width="400"
      height="400"
      className={`${styles.image} ${loaded && styles.active}`}
    />
  )
}
