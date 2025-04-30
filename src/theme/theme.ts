import { createStore } from 'effector'

export const defaultTheme = {
  common: {
    white: '#ffffff',
    black: '#000000',
    neutral: {
      0: '#ffffff',
      10: '#f5f5f5',
      20: '#f6f6f6',
      30: '#d9d9d9',
      40: '#939393',
    },
  },
  primary: '#2c6fff',
  green: '#a8ffad',
}

export const $theme = createStore(defaultTheme)
