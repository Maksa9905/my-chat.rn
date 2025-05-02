import { TextField } from '@/src/shared/ui'
import { $login, changeLogin } from '../model/model'
import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'

const LoginTextField = () => {
  const { t } = useTranslation()

  const login = useUnit($login)

  return (
    <TextField
      label={t('createUsername')}
      onChange={changeLogin}
      value={login}
    />
  )
}

export default LoginTextField
