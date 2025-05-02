import { Link, Redirect, Tabs } from 'expo-router'
import { Text, View } from 'react-native'

export default function Home() {
  const isAuthorized = false

  if (!isAuthorized) return <Redirect href={'/welcome'} />
  if (isAuthorized) return <Redirect href={'/dialogs'} />

  return (
    <View>
      <Link href={'/welcome'}>INDEX PAGE</Link>
    </View>
  )
}
