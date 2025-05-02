import { DialogsHeader, DialogsList } from '@/src/entities/dialogs'
import { Text, View } from 'react-native'

const DialogsListScreen = () => {
  return (
    <View>
      <DialogsHeader />
      <DialogsList />
    </View>
  )
}

export default DialogsListScreen
