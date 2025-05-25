import { Image, Text, View } from 'react-native'
import { styles } from './ChatHeader.styles'
import { useTranslation } from 'react-i18next'
import { IconButton } from '@/src/shared/ui'
import { ArrowListIcon } from '@/src/shared/icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useUnit } from 'effector-react'
import { getDialogById } from '../../api/api'
import { useEffect, useMemo } from 'react'
import { getProfileQuery } from '@/src/entities/users'

const ChatHeader = () => {
  const { t } = useTranslation()
  const { id } = useLocalSearchParams<{ id: string }>()

  const { data: dialogData, start: getDialogData } = useUnit(getDialogById)
  const { data: myInfoData, start: getMyInfo } = useUnit(getProfileQuery)

  useEffect(() => {
    getDialogData(id)
    getMyInfo()
  }, [])

  const username = useMemo(
    () =>
      dialogData?.data.participants.find(
        (member) => member.id !== myInfoData?.data.id,
      )?.username || '',
    [dialogData],
  )

  const router = useRouter()

  return (
    <View style={styles.container}>
      <IconButton
        onClick={() => router.push('/dialogs')}
        icon={ArrowListIcon}
      />
      <Image
        style={styles.image}
        width={58}
        height={58}
        source={{
          uri: 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
        }}
      />
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>{username || ''}</Text>
        <Text style={styles.onlineStatus}>
          {t('onlineStatus', { context: 'online' })}
        </Text>
      </View>
    </View>
  )
}

export default ChatHeader
