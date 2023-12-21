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
    value: 'orange',
    text: 'Orange',
  },
  {
    value: '#d6d60d',
    text: 'Yellow',
  },
  {
    value: '#1976d2',
    text: 'Blue',
  },
  {
    value: 'purple',
    text: 'Purple',
  },
  {
    value: '#f5609a',
    text: 'Pink',
  },
  {
    value: 'custom',
    text: 'Custom',
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
  {
    value: 'man-scream.mp3',
    text: 'Man Scream',
  },
  {
    value: 'witch-laugh.mp3',
    text: 'Witch Laugh',
  },
]
