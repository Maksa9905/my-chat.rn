import { TextField } from '@/src/shared/ui'
import { $login, changeLogin } from '../model/model'
import { useUnit } from 'effector-react'

const LoginTextField = () => {
  const login = useUnit($login)

  return (
    <TextField
      label="Придумайте логин"
      onChange={changeLogin}
      value={login}
    />
  )
}

export default LoginTextField
