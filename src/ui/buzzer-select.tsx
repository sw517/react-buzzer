import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { SelectOption, BuzzerOptions } from '@/lib/definitions'

export default function BuzzerSelect({
  selectedBuzzerValue,
  handleChange,
  className,
}: {
  selectedBuzzerValue: SelectOption['value']
  handleChange: (e: SelectChangeEvent) => void
  className: string
}) {
  const buzzerOptions = BuzzerOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.text}
    </MenuItem>
  ))

  return (
    <FormControl className={className} fullWidth>
      <InputLabel id="buzzer-label">Buzzer</InputLabel>
      <Select
        labelId="buzzer-label"
        id="buzzer-select"
        label="Buzzer"
        value={selectedBuzzerValue}
        onChange={handleChange}
      >
        {buzzerOptions}
      </Select>
    </FormControl>
  )
}
