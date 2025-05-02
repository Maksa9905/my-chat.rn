import { StyleSheet, View } from 'react-native'
import LoginTextField from './LoginTextField'
import UsernameTextField from './UsernameTextField'
import PasswordTextField from './PasswordTextField'
import RepeatedPasswordTextField from './RepeatedPasswordTextField'
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

const RegisterForm = () => {
  const { t } = useTranslation()

  const router = useRouter()

  return (
    <View style={styles.container}>
      <UsernameTextField />
      <LoginTextField />
      <PasswordTextField />
      <RepeatedPasswordTextField />
      <View style={styles.buttons}>
        <Button
          onClick={() => {}}
          title={t('signUp')}
        />
        <Button
          variant="text"
          onClick={() => router.push('/welcome/login')}
          title={t('haveAccount')}
        />
      </View>
    </View>
  )
}

export default RegisterForm
