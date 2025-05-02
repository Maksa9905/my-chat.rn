import {
  FindDialogsHeader,
  FindDialogsList,
  FindDialogTextField,
} from '@/src/entities/dialogs'
import { View } from 'react-native'

const NewDialogScreen = () => {
  return (
    <View>
      <FindDialogsHeader />
      <FindDialogsList />
    </View>
  )
}

export default NewDialogScreen
