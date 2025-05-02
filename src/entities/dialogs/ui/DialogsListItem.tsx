import { NotReadIcon, ReadIcon } from '@/src/shared/icons'
import { $theme } from '@/src/theme'
import { useMemo } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MAX_MESSAGE_LENGTH } from '../lib/constants'
import { formatDate } from '../lib/formatDate'

const styles = StyleSheet.create({
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

const DialogsListItem = ({
  avatarUrl,
  username,
  datetime,
  lastMessage,
  unreadMessagesCount,
  isMyMessage,
  read,
}: Dialog) => {
  const readStatusIcon = useMemo(() => {
    if (!isMyMessage) return

    if (read) return <ReadIcon />
    return <NotReadIcon />
  }, [isMyMessage, read])

  const message = useMemo(() => {
    if (lastMessage.length > MAX_MESSAGE_LENGTH)
      return lastMessage.slice(0, 45) + '...'

    return lastMessage
  }, [lastMessage])

  return (
    <View style={styles.container}>
      <Image
        width={58}
        height={58}
        style={styles.image}
        source={{ uri: avatarUrl }}
      />
      <View style={styles.messageInfo}>
        <View style={styles.usernameRow}>
          <Text style={styles.username}>{username}</Text>
          <View style={styles.datetimeRow}>
            {readStatusIcon}
            <Text style={styles.datetime}>{formatDate(datetime)}</Text>
          </View>
        </View>
        <View style={styles.messageRow}>
          <Text style={styles.message}>{message}</Text>
          {Boolean(unreadMessagesCount) && (
            <View style={styles.unreadMessagesChip}>
              <Text style={styles.unreadMessageText}>
                {unreadMessagesCount}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default DialogsListItem
