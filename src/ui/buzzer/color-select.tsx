import { InputLabel, MenuItem, FormControl } from '@mui/material'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { SelectOption, ColorOptions } from '@/lib/definitions'

export default function ColorSelect({
  selectedColorValue,
  handleChange,
  size,
}: {
  selectedColorValue: SelectOption['value']
  handleChange: (e: SelectChangeEvent) => void
  size: SelectProps['size']
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
        size={size}
        onChange={handleChange}
      >
        {colorOptions}
      </Select>
    </FormControl>
  )
}
