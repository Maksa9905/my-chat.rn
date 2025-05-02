import { TextField } from '@/src/shared/ui'
import { $searchDialog, changeSearchTextField } from '../model/model'
import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'

const FindDialogTextField = () => {
  const { t } = useTranslation()

  const search = useUnit($searchDialog)

  return (
    <TextField
      label={t('searchDialog')}
      value={search}
      onChange={changeSearchTextField}
      type="filled"
    />
  )
}

export default FindDialogTextField
