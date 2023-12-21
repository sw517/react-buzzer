import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { SelectOption, BuzzerOptions } from '@/lib/definitions'
import uniqueId from 'lodash.uniqueid'

export default function BuzzerSelect({
  selectedBuzzerValue,
  handleChange,
  size,
}: {
  selectedBuzzerValue: SelectOption['value']
  handleChange: (e: SelectChangeEvent) => void
  size: SelectProps['size']
}) {
  const baseId = uniqueId('audio-select-')
  const buzzerOptions = BuzzerOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.text}
    </MenuItem>
  ))

  return (
    <FormControl fullWidth>
      <InputLabel id={`${baseId}-label`}>Buzzer</InputLabel>
      <Select
        labelId={`${baseId}-label`}
        id={baseId}
        label="Buzzer"
        value={selectedBuzzerValue}
        onChange={handleChange}
        size={size}
        MenuProps={{}}
      >
        {buzzerOptions}
      </Select>
    </FormControl>
  )
}
