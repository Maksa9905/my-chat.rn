import { Image, Text, View } from 'react-native'
import { styles } from './ChatHeader.styles'
import { useTranslation } from 'react-i18next'
import { IconButton } from '@/src/shared/ui'
import { ArrowListIcon } from '@/src/shared/icons'
import { useRouter } from 'expo-router'

const ChatHeader = () => {
  const { t } = useTranslation()

  const router = useRouter()

  const avatarUrl =
    'https://i.pinimg.com/originals/b3/b0/0a/b3b00ae0d7fc63c8b716d1c3c58e461e.jpg'

  const username = 'Мария Какая-то там'

  const onlineStatus = 'online'

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
        source={{ uri: avatarUrl }}
      />
      <View style={styles.usernameContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.onlineStatus}>
          {t('onlineStatus', { context: onlineStatus })}
        </Text>
      </View>
    </View>
  )
}

export default ChatHeader
