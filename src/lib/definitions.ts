export interface SelectOption {
  text: string
  value: string
}

export const ColorOptions: SelectOption[] = [
  {
    value: 'red',
    text: 'Red',
  },
  {
    value: 'blue',
    text: 'Blue',
  },
  {
    value: 'purple',
    text: 'Purple',
  },
  {
    value: 'pink',
    text: 'Pink',
  },
]

export const BuzzerOptions: SelectOption[] = [
  {
    value: 'yay.mp3',
    text: 'Yay',
  },
  {
    value: 'pipe.mp3',
    text: 'Pipe',
  },
  {
    value: 'scream.mp3',
    text: 'Scream',
  },
  {
    value: 'spring.mp3',
    text: 'Spring',
  },
]
