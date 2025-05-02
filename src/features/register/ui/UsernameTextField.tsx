import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { $username, changeUsername } from '../model/model'
import { useTranslation } from 'react-i18next'

const UsernameTextField = () => {
  const { t } = useTranslation()

  const username = useUnit($username)

  return (
    <TextField
      label={t('whatsYourName')}
      value={username}
      onChange={changeUsername}
    />
  )
}

export default UsernameTextField
