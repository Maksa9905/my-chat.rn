import { Text, View } from 'react-native'
import { Message } from '../model/types'
import { getMessageStyles } from './MessageItem.styles'

const MessageItem = ({ text, id, mine, datetime }: Message) => {
  const styles = getMessageStyles(mine)

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text style={styles.datetime}>{datetime}</Text>
    </View>
  )
}

export default MessageItem
