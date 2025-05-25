import { createEvent, createStore } from 'effector'
import { CreateAlertEvent, TAlert } from './types'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { ALERT_DURATION } from './contants'

const $alerts = createStore<TAlert[]>([])

const createAlert = createEvent<CreateAlertEvent>()
const removeAlert = createEvent<string>()

$alerts.on(createAlert, (state, alert) => {
  const id = uuidv4()

  setTimeout(() => {
    removeAlert(id)
  }, ALERT_DURATION)

  return [...state, { ...alert, id }]
})
$alerts.on(removeAlert, (state, id) => state.filter((alert) => alert.id !== id))

export { $alerts, createAlert }
