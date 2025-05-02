import { createEvent, createStore } from 'effector'

export const $message = createStore('')

export const changeMessage = createEvent<string>()

$message.on(changeMessage, (_, message) => message)
