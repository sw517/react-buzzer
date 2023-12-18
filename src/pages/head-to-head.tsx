import { Inter } from 'next/font/google'
import Buzzer from '@/ui/buzzer'
import { Box, Typography, Modal, Button } from '@mui/material'
import { useState, MouseEvent } from 'react'
import styles from '@/styles/head-to-head.module.scss'

const inter = Inter({ subsets: ['latin'] })
const buzzerBoxStyles = {
  border: '1px solid',
  borderColor: 'text.primary',
  p: 4,
  borderRadius: 3,
  width: '100%',
}
const modalBoxStyle = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: { xs: 260, sm: 500, md: 600 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
}

export default function HeadToHead() {
  const onPress = (id?: string) => {
    if (id) {
      setLastBuzzerId(id)
      setModalOpen(true)
    }
  }

  const handleModalClose = (
    e: MouseEvent<HTMLDivElement>,
    reason: 'escapeKeyDown' | 'backdropClick'
  ) => {
    if (reason === 'backdropClick') {
      e.preventDefault()
      return
    }
    setModalOpen(false)
  }

  const [modalOpen, setModalOpen] = useState(false)
  const [lastBuzzerId, setLastBuzzerId] = useState('')

  return (
    <main
      className={`flex min-h-screen pt-24 px-8 pb-8 ${inter.className} ${styles['main']}`}
    >
      <Box sx={buzzerBoxStyles}>
        <Typography variant="subtitle1" className="mb-4">
          Player 1
        </Typography>
        <Buzzer id="Player 1" size="small" onPress={onPress} />
      </Box>
      <div className={styles.spacer} />
      <Box sx={buzzerBoxStyles}>
        <Typography variant="subtitle1" className="mb-4">
          Player 2
        </Typography>
        <Buzzer id="Player 2" size="small" onPress={onPress} />
      </Box>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box sx={modalBoxStyle}>
          <Typography variant="h5">{lastBuzzerId} has buzzed in!</Typography>
          <Button onClick={() => setModalOpen(false)} className="mt-6">
            Close
          </Button>
        </Box>
      </Modal>
    </main>
  )
}
