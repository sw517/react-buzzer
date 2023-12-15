import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { SelectOption, ColorOptions } from '@/lib/definitions'

export default function ColorSelect({
  selectedColorValue,
  handleChange,
}: {
  selectedColorValue: SelectOption['value']
  handleChange: (e: SelectChangeEvent) => void
}) {
  const colorOptions = ColorOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.text}
    </MenuItem>
  ))

  return (
    <FormControl fullWidth>
      <InputLabel id="color-label">Colour</InputLabel>
      <Select
        labelId="color-label"
        id="color-select"
        label="Colour"
        value={selectedColorValue}
        onChange={handleChange}
      >
        {colorOptions}
      </Select>
    </FormControl>
  )
}
