import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { $login, changeLogin } from '../model/model'
import { useTranslation } from 'react-i18next'

const LoginTextField = () => {
  const { t } = useTranslation()

  const login = useUnit($login)

  return (
    <TextField
      label={t('enterLogin')}
      value={login}
      onChange={changeLogin}
    />
  )
}

export default LoginTextField
