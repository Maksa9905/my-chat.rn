import { View } from 'react-native'
import { useUnit } from 'effector-react'
import { $alerts } from '../../model/model'
import { styles } from './AlertsList.styles'
import { Alert } from '../Alert'

const AlertsList = () => {
  const alerts = useUnit($alerts)

  return (
    <View style={styles.container}>
      {alerts.map((alert) => (
        <Alert
          {...alert}
          key={alert.id}
        />
      ))}
    </View>
  )
}

export default AlertsList
