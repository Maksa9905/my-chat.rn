import { Image, Text, View } from 'react-native'
import { getFindDialogItemStyles } from './FindDialogListItem.styles'

const FindDialogListItem = ({ avatarUrl, username }: NewDialog) => {
  const styles = getFindDialogItemStyles()

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: avatarUrl }}
      />
      <Text style={styles.username}>{username}</Text>
    </View>
  )
}

export default FindDialogListItem
