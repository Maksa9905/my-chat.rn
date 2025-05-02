import { Image, StyleSheet, Text, View } from 'react-native'
import DialogsEmptyImage from '@/assets/images/dialogs-empty.png'
import { useTranslation } from 'react-i18next'
import { Button } from '@/src/shared/ui'
import { PlusIcon } from '@/src/shared/icons'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 24,
    paddingTop: 64,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
  description: {
    paddingBottom: 24,
  },
})

const DialogsEmpty = () => {
  const { t } = useTranslation()

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
        onClick={() => {}}
      />
    </View>
  )
}

export default DialogsEmpty
