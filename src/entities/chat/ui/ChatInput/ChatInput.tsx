import { SendIcon } from '@/src/shared/icons'
import { TextField } from '@/src/shared/ui'
import { useUnit } from 'effector-react'
import { useTranslation } from 'react-i18next'
import { $message, changeMessage } from '../../model/model'
import { sendMessageMutation } from '../../api/api'
import { useLocalSearchParams } from 'expo-router'
import { useCallback } from 'react'

const ChatInput = () => {
  const { t } = useTranslation()

  const { id } = useLocalSearchParams<{ id: string }>()

  const message = useUnit($message)

  const handleSendButtonClick = useCallback(() => {
    sendMessage({
      text: message,
      dialogId: id,
    })
    changeMessage('')
  }, [id, message])

  const { start: sendMessage } = useUnit(sendMessageMutation)

  return (
    <TextField
      label={t('enterMessage')}
      value={message}
      type="filled"
      onChange={changeMessage}
      onClickIcon={handleSendButtonClick}
      icon={() => <SendIcon />}
    />
  )
}

export default ChatInput
