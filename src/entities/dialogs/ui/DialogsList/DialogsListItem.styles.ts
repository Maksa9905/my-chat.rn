import { $theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const getDialogsListItemStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      gap: 12,
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
    datetime: {
      fontSize: 14,
      color: $theme.getState().common.neutral[40],
    },
    messageInfo: {
      flex: 1,
      justifyContent: 'space-around',
    },
    usernameRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    datetimeRow: {
      flexDirection: 'row',
      gap: 8,
    },
    messageRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textOverflow: 'ellipsis',
    },
    unreadMessagesChip: {
      borderRadius: '100%',
      width: 20,
      height: 20,
      position: 'relative',
      backgroundColor: $theme.getState().primary,
    },
    unreadMessageText: {
      fontSize: 10,
      color: $theme.getState().common.white,
      position: 'absolute',
      top: 3,
      left: 7,
      textAlign: 'center',
    },
    message: {
      color: $theme.getState().common.neutral[40],
    },
  })
