import { $theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 16,
    borderColor: $theme.getState().common.neutral[30],
    flex: 1,
  },
  messageList: {
    gap: 8,
  },
})
