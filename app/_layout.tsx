import { Slot } from 'expo-router'
import { View } from 'react-native'

import '@/src/application/18n'
import { AlertsList } from '@/src/entities/alert'

export default function RootLayout() {
  return (
    <View style={{ height: '100%' }}>
      <Slot />
      <AlertsList />
    </View>
  )
}
