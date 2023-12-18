import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { SelectOption, BuzzerOptions } from '@/lib/definitions'

export default function BuzzerSelect({
  selectedBuzzerValue,
  handleChange,
  size,
}: {
  selectedBuzzerValue: SelectOption['value']
  handleChange: (e: SelectChangeEvent) => void
  size: SelectProps['size']
}) {
  const buzzerOptions = BuzzerOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.text}
    </MenuItem>
  ))

  return (
    <FormControl fullWidth>
      <InputLabel id="buzzer-label">Buzzer</InputLabel>
      <Select
        labelId="buzzer-label"
        id="buzzer-select"
        label="Buzzer"
        value={selectedBuzzerValue}
        onChange={handleChange}
        size={size}
      >
        {buzzerOptions}
      </Select>
    </FormControl>
  )
}
