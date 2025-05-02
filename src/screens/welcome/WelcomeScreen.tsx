import { Image, StyleSheet, View } from 'react-native'
// @ts-ignore
import greetingsImage from '@/assets/images/welcome-page-image.png'
import { Button } from '@/src/shared/ui'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

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
          fullWidth
          onClick={() => router.push('/welcome/login')}
          title={t('startChatting')}
        />
        <Button
          fullWidth
          onClick={() => router.push('/welcome/register')}
          variant="text"
          title={t('haveAccount')}
        />
      </View>
    </View>
  )
}

export default WelcomeScreen
