import { StyleSheet, Text, View } from 'react-native'
import LoginTextField from './LoginTextField'
import PasswordTextField from './PasswordTextField'
import { Button } from '@/src/shared/ui'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { submitLoginForm } from '../model/model'
import { useUnit } from 'effector-react'
import { loginMutation } from '../api/api'

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

  const { pending } = useUnit(loginMutation)

  return (
    <View style={styles.container}>
      <LoginTextField />
      <PasswordTextField />
      <View style={styles.buttons}>
        <Button
          fullWidth
          onClick={submitLoginForm}
          title={t('login')}
          loading={pending}
        />
        <Button
          variant="text"
          fullWidth
          onClick={() => router.push('/welcome/register')}
          title={t('forgotPassword')}
        />
      </View>
    </View>
  )
}

export default LoginForm
