import { TextField } from '@/src/shared/ui'
import { $searchDialog, changeSearchTextField } from '../model/model'
import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { SearchIcon } from '@/src/shared/icons'

const FindDialogTextField = () => {
  const { t } = useTranslation()

  const search = useUnit($searchDialog)

  return (
    <TextField
      label={t('searchDialog')}
      value={search}
      onClickIcon={() => {}}
      icon={SearchIcon}
      onChange={changeSearchTextField}
      type="filled"
    />
  )
}

export default FindDialogTextField
