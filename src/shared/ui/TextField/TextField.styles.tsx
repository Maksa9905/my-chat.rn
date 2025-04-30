import { $theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    height: 47,
    paddingLeft: 12,
  },
})

const inputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: $theme.getState().common.neutral[40],
  },
})

const searchStyles = StyleSheet.create({
  input: {
    borderRadius: 50,
    backgroundColor: $theme.getState().common.neutral[30],
  },
})

export const getTextFieldStyles = (type: 'input' | 'search') => {
  if (type === 'input')
    return {
      input: {
        ...styles.input,
        ...inputStyles.input,
      },
    }

  return {
    input: {
      ...styles.input,
      ...searchStyles.input,
    },
  }
}
