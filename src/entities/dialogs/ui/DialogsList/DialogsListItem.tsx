import { NotReadIcon, ReadIcon } from '@/src/shared/icons'
import { $theme } from '@/src/application/theme'
import { useMemo } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { MAX_MESSAGE_LENGTH } from '../../lib/constants'
import { formatDate } from '../../lib/formatDate'
import { getDialogsListItemStyles } from './DialogsListItem.styles'
import { useRouter } from 'expo-router'

const DialogsListItem = ({
  isMyMessage,
  read,
  lastMessage,
  avatarUrl,
  unreadMessagesCount,
  username,
  datetime,
  id,
}: Dialog) => {
  const styles = getDialogsListItemStyles()

  const router = useRouter()

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
    <Pressable
      onPress={() => router.push(`/dialogs/${id}`)}
      style={styles.container}
    >
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
    </Pressable>
  )
}

export default DialogsListItem
