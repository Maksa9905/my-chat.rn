import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { $username, changeUsername } from '../model/model'

const UsernameTextField = () => {
  const username = useUnit($username)

  return (
    <TextField
      label="Придумайте логин"
      value={username}
      onChange={changeUsername}
    />
  )
}

export default UsernameTextField
