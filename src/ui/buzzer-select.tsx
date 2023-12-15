import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { BuzzerOption } from '@/lib/definitions'

export default function BuzzerSelect({
  selectedBuzzerId,
  handleChange,
}: {
  selectedBuzzerId: BuzzerOption['id']
  handleChange: (e: SelectChangeEvent) => void
}) {
  const buzzerItems = [
    { id: '1', text: 'Buzzer 1' },
    { id: '2', text: 'Buzzer 2' },
    { id: '3', text: 'Buzzer 3' },
  ]

  const buzzerOptions = buzzerItems.map((item) => (
    <MenuItem key={item.id} value={item.id}>
      {item.text}
    </MenuItem>
  ))

  return (
    <FormControl fullWidth>
      <InputLabel id="buzzer-label">Buzzer</InputLabel>
      <Select
        labelId="buzzer-label"
        id="buzzer-select"
        label="Buzzer"
        value={selectedBuzzerId}
        onChange={handleChange}
      >
        {buzzerOptions}
      </Select>
    </FormControl>
  )
}
