import { createEvent, createStore, sample } from 'effector'
import { loginMutation } from '../api/api'

export const $login = createStore('')
export const $password = createStore('')

export const changeLogin = createEvent<string>()
export const changePassword = createEvent<string>()

export const submitLoginForm = createEvent()

$login.on(changeLogin, (_, login) => login)
$password.on(changePassword, (_, password) => password)

sample({
  clock: submitLoginForm,
  source: [$login, $password],
  fn: ([login, password]) => ({ login, password }),
  target: loginMutation.start,
})
