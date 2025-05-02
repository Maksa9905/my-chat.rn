import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { $password, changePassword } from '../model/model'
import { useTranslation } from 'react-i18next'

const PasswordTextField = () => {
  const { t } = useTranslation()

  const password = useUnit($password)

  return (
    <TextField
      label={t('enterPassword')}
      value={password}
      onChange={changePassword}
    />
  )
}

export default PasswordTextField
