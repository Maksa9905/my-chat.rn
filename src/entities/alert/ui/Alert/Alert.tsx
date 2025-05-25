import { Text, View } from 'react-native'
import { useStyles } from './Alert.styles'
import { SuccessIcon, WarningIcon } from '@/src/shared/icons'
import { ErrorIcon } from '@/src/shared/icons'

type AlertProps = {
  title: string
  description: string
  type?: 'success' | 'error' | 'warning'
}

const Alert = ({ title, description, type = 'error' }: AlertProps) => {
  const styles = useStyles(type)

  const Icon = {
    success: SuccessIcon,
    error: ErrorIcon,
    warning: WarningIcon,
  }[type]

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View>
        <Icon />
      </View>
    </View>
  )
}

export default Alert
