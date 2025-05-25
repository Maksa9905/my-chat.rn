import { $theme } from '@/src/application/theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    position: 'relative',
    height: 47,
    paddingLeft: 12,
  },
  iconContainer: {
    position: 'absolute',
    right: 16,
    top: 4,
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
    backgroundColor: $theme.getState().common.neutral[20],
  },
})

export const getTextFieldStyles = (type: 'filled' | 'outlined') => {
  if (type === 'outlined')
    return {
      input: {
        ...styles.input,
        ...inputStyles.input,
      },
      iconContainer: styles.iconContainer,
    }

  return {
    input: {
      ...styles.input,
      ...searchStyles.input,
    },
    iconContainer: styles.iconContainer,
  }
}
