import { $theme } from '@/src/application/theme'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 72,
    paddingBottom: 24,
  },
  greetings: {
    fontSize: 42,
    fontWeight: 700,
  },
  myChat: {
    fontSize: 40,
    fontWeight: 700,
    color: $theme.getState().primary,
  },
})

const GreetingsTitle = () => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>
        {t('welcome')} <Text style={styles.myChat}>{t('myChat')}</Text>
      </Text>
    </View>
  )
}

export default GreetingsTitle
