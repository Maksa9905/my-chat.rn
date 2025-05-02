import { $theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const getMessageStyles = (rightAlignment: boolean) =>
  StyleSheet.create({
    container: {
      maxWidth: 200,
      paddingHorizontal: 16,
      paddingVertical: 8,
      alignSelf: rightAlignment ? 'flex-end' : 'flex-start',
      backgroundColor: $theme.getState().common.neutral[20],
      borderRadius: 8,
      gap: 8,
    },
    datetime: {
      color: $theme.getState().common.neutral[40],
    },
  })
