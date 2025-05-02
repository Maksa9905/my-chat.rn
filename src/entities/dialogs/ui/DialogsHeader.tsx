import { PlusIcon } from '@/src/shared/icons'
import { IconButton } from '@/src/shared/ui'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
  },
})

const DialogsHeader = () => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('dialogs')}</Text>
      <IconButton
        onClick={() => {}}
        icon={PlusIcon}
      />
    </View>
  )
}

export default DialogsHeader
