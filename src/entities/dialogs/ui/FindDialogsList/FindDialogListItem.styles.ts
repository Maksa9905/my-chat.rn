import { $theme } from '@/src/application/theme'
import { StyleSheet } from 'react-native'

export const getFindDialogItemStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      gap: 12,
      alignItems: 'center',
      flexDirection: 'row',
      borderColor: $theme.getState().common.neutral[20],
      borderBottomWidth: 1,
    },
    image: {
      width: 58,
      height: 58,
      borderRadius: 100,
    },
    username: {
      fontSize: 16,
    },
  })
