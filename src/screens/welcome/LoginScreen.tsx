import { LoginForm } from '@/src/features/login'
import { Button, TextField } from '@/src/shared/ui'
import { useRouter } from 'expo-router'
import { View } from 'react-native'

const LoginScreen = () => {
  const router = useRouter()

  return (
    <View>
      <LoginForm />
    </View>
  )
}

export default LoginScreen
