import { Link, Redirect, Tabs } from 'expo-router'
import { View } from 'react-native'
import * as SecureStore from 'expo-secure-store'

export default function Home() {
  const isAuthorized = SecureStore.getItem('authorization')

  if (!isAuthorized) return <Redirect href={'/welcome'} />
  if (isAuthorized) return <Redirect href={'/dialogs'} />

  return (
    <View>
      <Link href={'/welcome'}>INDEX PAGE</Link>
    </View>
  )
}
