import { StyleSheet } from 'react-native'
import { $theme } from '@/src/application/theme'

const typeStyles = StyleSheet.create({
  success: {
    backgroundColor: $theme.getState().common.neutral[10],
    borderColor: $theme.getState().states.success.borderColor,
    color: $theme.getState().states.success.color,
  },
  error: {
    backgroundColor: $theme.getState().common.neutral[10],
    borderColor: $theme.getState().states.error.borderColor,
    color: $theme.getState().states.error.color,
  },
  warning: {
    backgroundColor: $theme.getState().states.warning.backgroundColor,
    borderColor: $theme.getState().states.warning.borderColor,
    color: $theme.getState().states.warning.color,
  },
})

export const useStyles = (type: 'success' | 'error' | 'warning') =>
  StyleSheet.create({
    container: {
      ...typeStyles[type],
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderRadius: 8,
      margin: 8,
      borderWidth: 1,
      opacity: 0.8,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
    },
  })
