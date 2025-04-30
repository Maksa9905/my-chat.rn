import { Link, Tabs } from 'expo-router'
import { Text, View } from 'react-native'

export default function Home() {
  return (
    <View>
      <Link href={'/welcome'}>INDEX PAGE</Link>
    </View>
  )
}
