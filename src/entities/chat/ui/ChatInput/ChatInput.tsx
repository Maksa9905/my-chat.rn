import { SendIcon } from '@/src/shared/icons'
import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { $message, changeMessage } from '../../model/model'

const ChatInput = () => {
  const { t } = useTranslation()

  const message = useUnit($message)

  return (
    <TextField
      label={t('enterMessage')}
      value={message}
      type="filled"
      onChange={changeMessage}
      onClickIcon={() => {}}
      icon={() => <SendIcon />}
    />
  )
}

export default ChatInput
