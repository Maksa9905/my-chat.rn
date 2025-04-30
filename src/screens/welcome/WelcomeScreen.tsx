import { Image, StyleSheet, View } from 'react-native'
// @ts-ignore
import greetingsImage from '@/assets/images/welcome-page-image.png'
import { Button } from '@/src/shared/ui'
import { useRouter } from 'expo-router'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  buttons: {
    gap: 16,
    width: '100%',
  },
})

const WelcomeScreen = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image
        width={324}
        height={324}
        source={greetingsImage}
      />
      <View style={styles.buttons}>
        <Button
          onClick={() => router.push('/welcome/login')}
          title={'Начать общаться'}
        />
        <Button
          onClick={() => router.push('/welcome/register')}
          variant="text"
          title={'Уже есть аккаунт?'}
        />
      </View>
    </View>
  )
}

export default WelcomeScreen
