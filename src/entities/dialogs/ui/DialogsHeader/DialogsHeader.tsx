import { PlusIcon } from '@/src/shared/icons'
import { IconButton } from '@/src/shared/ui'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { styles } from './DialogsHeader.styles'
import { useRouter } from 'expo-router'

const DialogsHeader = () => {
  const { t } = useTranslation()

  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('dialogs')}</Text>
      <IconButton
        onClick={() => router.push('/dialogs/new')}
        icon={PlusIcon}
      />
    </View>
  )
}

export default DialogsHeader
