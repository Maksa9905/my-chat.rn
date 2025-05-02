import { ScrollView, Text, View } from 'react-native'
import { styles } from './Chat.styles'
import { MessageItem } from '@/src/entities/messages'

const Chat = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.messageList}>
        <MessageItem
          id="1"
          mine
          datetime="20:30"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero consequatur modi ut earum, soluta quia recusandae esse veritatis animi iusto?"
        />
        <MessageItem
          id="1"
          mine
          datetime="20:30"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero consequatur modi ut earum, soluta quia recusandae esse veritatis animi iusto?"
        />
      </View>
    </ScrollView>
  )
}

export default Chat
