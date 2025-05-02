import { Slot } from 'expo-router'
import { View } from 'react-native'

import '@/src/18n.ts'

export default function RootLayout() {
  const isAuthorized = false

  return (
    <View style={{ height: '100%' }}>
      <Slot />
    </View>
  )
}
