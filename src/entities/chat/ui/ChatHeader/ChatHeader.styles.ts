import { $theme } from '@/src/application/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: $theme.getState().common.neutral[20],
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  usernameContainer: {
    justifyContent: 'space-around',
  },
  username: {
    fontSize: 18,
    fontWeight: 600,
  },
  image: {
    borderRadius: 100,
  },
  onlineStatus: {
    color: $theme.getState().common.neutral[40],
  },
})
