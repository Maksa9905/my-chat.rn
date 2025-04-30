import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { $login, changeLogin } from '../model/model'

const LoginTextField = () => {
  const login = useUnit($login)

  return (
    <TextField
      label="Введите логин"
      value={login}
      onChange={changeLogin}
    />
  )
}

export default LoginTextField
