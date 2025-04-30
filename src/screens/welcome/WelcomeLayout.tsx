import { GreetingsTitle } from '@/src/entities/greetings'
import { Slot } from 'expo-router'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
  },
})

const WelcomeLayout = () => {
  return (
    <View style={styles.container}>
      <GreetingsTitle />
      <Slot />
    </View>
  )
}

export default WelcomeLayout
