import { Chat } from '@/src/entities/chat'
import { ChatHeader, ChatInput } from '@/src/entities/chat'
import { View } from 'react-native'
import { styles } from './DialogScreen.styles'

const DialogScreen = () => {
  return (
    <View style={styles.container}>
      <ChatHeader />
      <Chat />
      <View style={styles.chatInputContainer}>
        <ChatInput />
      </View>
    </View>
  )
}

export default DialogScreen
