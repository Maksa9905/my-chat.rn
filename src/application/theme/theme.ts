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
  states: {
    success: {
      backgroundColor: '#a8ffad',
      borderColor: '#00c10b',
      color: '#000000',
    },
    error: {
      backgroundColor: '#ffa8a8',
      borderColor: '#ff2626',
      color: '#000000',
    },
    warning: {
      backgroundColor: '#ffd9a8',
      borderColor: '#f68a00',
      color: '#000000',
    },
  },
  primary: '#2c6fff',
  green: '#a8ffad',
}

export const $theme = createStore(defaultTheme)
