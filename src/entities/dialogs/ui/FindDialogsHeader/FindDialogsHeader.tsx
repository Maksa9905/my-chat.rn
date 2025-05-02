import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { styles } from './FindDialogsHeader.styles'
import { IconButton } from '@/src/shared/ui'
import { ArrowListIcon } from '@/src/shared/icons'
import { useRouter } from 'expo-router'
import FindDialogTextField from '../FindDIalogTextField'

const FindDialogsHeader = () => {
  const { t } = useTranslation()

  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <IconButton
          onClick={() => router.push('/dialogs')}
          icon={ArrowListIcon}
        />
        <Text style={styles.title}>{t('createDialog')}</Text>
      </View>
      <FindDialogTextField />
    </View>
  )
}

export default FindDialogsHeader
