import { HexColorPicker } from 'react-colorful'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const modalBoxStyle = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: { xs: 260, sm: 500, md: 600 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'right',
}

export default function ColorPickerModal({
  open,
  handleClose,
  color,
  onChange,
}: {
  open: boolean
  handleClose: () => void
  color: string
  onChange: (c: string) => void
}) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalBoxStyle}>
        <HexColorPicker color={color} onChange={onChange} />
        <Button className="mt-6" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  )
}
