import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { $password, changePassword } from '../model/model'

const PasswordTextField = () => {
  const password = useUnit($password)

  return (
    <TextField
      label="Введите пароль"
      value={password}
      onChange={changePassword}
    />
  )
}

export default PasswordTextField
