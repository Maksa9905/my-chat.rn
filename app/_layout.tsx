import { Link, Redirect, Slot, Tabs } from 'expo-router'
import { SafeAreaView, Text, View } from 'react-native'

export default function RootLayout() {
  const isAuthorized = false

  return (
    <View style={{ height: '100%' }}>
      <Slot />
    </View>
  )
}
