import { $theme } from '@/src/theme'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 72,
    paddingBottom: 24,
  },
  greetings: {
    fontSize: 42,
    fontWeight: 700,
  },
  myChat: {
    fontSize: 40,
    fontWeight: 700,
    color: $theme.getState().primary,
  },
})

const GreetingsTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>
        Добро пожаловать в <Text style={styles.myChat}>Мои Чаты</Text>
      </Text>
    </View>
  )
}

export default GreetingsTitle
