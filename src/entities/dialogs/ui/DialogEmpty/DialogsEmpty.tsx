import { Image, StyleSheet, Text, View } from 'react-native'
import DialogsEmptyImage from '@/assets/images/dialogs-empty.png'
import { useTranslation } from 'react-i18next'
import { Button } from '@/src/shared/ui'
import { styles } from './DialogsEmpty.styles'
import { useRouter } from 'expo-router'

const DialogsEmpty = () => {
  const { t } = useTranslation()

  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image
        width={373}
        height={248}
        source={DialogsEmptyImage}
      />
      <Text style={styles.title}>{t('dialogsEmpty')}</Text>
      <Text style={styles.description}>{t('startChattingNow')}</Text>
      <Button
        fullWidth
        title={t('createDialog')}
        onClick={() => router.push('/dialogs/new')}
      />
    </View>
  )
}

export default DialogsEmpty
