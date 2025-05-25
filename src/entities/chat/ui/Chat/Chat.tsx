import { ScrollView, Text, View } from 'react-native'
import { styles } from './Chat.styles'
import { MessageItem } from '@/src/entities/messages'
import { useLocalSearchParams } from 'expo-router'
import { useUnit } from 'effector-react'
import { getMessagesByDialogIdQuery } from '../../api/api'
import { useEffect } from 'react'
import { getProfileQuery } from '@/src/entities/users'
import { formatDate } from '@/src/entities/dialogs/lib/formatDate'
import { io } from 'socket.io-client'
import * as SecureStore from 'expo-secure-store'

const Chat = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { data: dialogData, start: getDialog } = useUnit(
    getMessagesByDialogIdQuery,
  )

  console.log(dialogData)

  const { data: myInfoData, start: getMyInfo } = useUnit(getProfileQuery)

  useEffect(() => {
    getDialog(id)
    getMyInfo()
  }, [])

  const socket = io(process.env.EXPO_PUBLIC_BASE_API_URL, {
    auth: {
      token: SecureStore.getItemAsync('authorization'),
    },
  })

  useEffect(() => {
    socket.emit('joinDialog', id)

    socket.on('newMessage', (payload) => {
      console.log(payload)
      getDialog(id)
    })

    socket.on('messagesRead', (data) => {
      console.log(
        `User ${data.userId} read messages in dialog ${data.dialogId}`,
      )
    })
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.messageList}>
        {dialogData?.data.map((message) => (
          <MessageItem
            id={message.id}
            key={message.id}
            text={message.text}
            datetime={formatDate(message.createdAt)}
            mine={message.author.id === myInfoData?.data.id}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default Chat
