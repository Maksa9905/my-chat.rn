import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { $repeatedPassword, changeRepeatedPassword } from '../model/model'

const RepeatedPasswordTextField = () => {
  const repeatedPassword = useUnit($repeatedPassword)

  return (
    <TextField
      label="Повторите пароль"
      value={repeatedPassword}
      onChange={changeRepeatedPassword}
    />
  )
}

export default RepeatedPasswordTextField
