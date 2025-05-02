import { StyleSheet, Text, View } from 'react-native'
import LoginTextField from './LoginTextField'
import PasswordTextField from './PasswordTextField'
import { Button } from '@/src/shared/ui'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  buttons: {
    marginTop: 12,
    gap: 16,
  },
})

const LoginForm = () => {
  const router = useRouter()

  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <LoginTextField />
      <PasswordTextField />
      <View style={styles.buttons}>
        <Button
          onClick={() => {}}
          title={t('login')}
        />
        <Button
          variant="text"
          onClick={() => router.push('/welcome/register')}
          title={t('forgotPassword')}
        />
      </View>
    </View>
  )
}

export default LoginForm
