import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { $repeatedPassword, changeRepeatedPassword } from '../model/model'
import { useTranslation } from 'react-i18next'

const RepeatedPasswordTextField = () => {
  const { t } = useTranslation()

  const repeatedPassword = useUnit($repeatedPassword)

  return (
    <TextField
      label={t('repeatPassword')}
      value={repeatedPassword}
      onChange={changeRepeatedPassword}
    />
  )
}

export default RepeatedPasswordTextField
