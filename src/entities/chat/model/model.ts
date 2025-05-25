import { createEvent, createStore, sample } from 'effector'
import { sendMessageMutation } from '../api/api'

export const $message = createStore('')

export const changeMessage = createEvent<string>()
export const sendMessage = createEvent()

$message.on(changeMessage, (_, message) => message)
