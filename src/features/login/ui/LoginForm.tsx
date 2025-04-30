import { StyleSheet, View } from 'react-native'
import LoginTextField from './LoginTextField'
import PasswordTextField from './PasswordTextField'
import { Button } from '@/src/shared/ui'
import { useRouter } from 'expo-router'

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

  return (
    <View style={styles.container}>
      <LoginTextField />
      <PasswordTextField />
      <View style={styles.buttons}>
        <Button
          onClick={() => {}}
          title="Войти"
        />
        <Button
          variant="text"
          onClick={() => router.push('/welcome/register')}
          title="Нет аккаунта или забыли пароль?"
        />
      </View>
    </View>
  )
}

export default LoginForm
