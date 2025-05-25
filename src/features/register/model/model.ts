import { createEvent, createStore, sample } from 'effector'
import { signUpMutation } from '../api/api'

export const $username = createStore('')
export const $login = createStore('')
export const $password = createStore('')
export const $repeatedPassword = createStore('')

export const changeUsername = createEvent<string>()
export const changeLogin = createEvent<string>()
export const changePassword = createEvent<string>()
export const changeRepeatedPassword = createEvent<string>()

export const submitSignUpForm = createEvent()

$username.on(changeUsername, (_, username) => username)
$login.on(changeLogin, (_, login) => login)
$password.on(changePassword, (_, password) => password)
$repeatedPassword.on(
  changeRepeatedPassword,
  (_, repeatedPassword) => repeatedPassword,
)

sample({
  clock: submitSignUpForm,
  source: [$username, $login, $password],
  fn: ([username, login, password]) => ({ username, login, password }),
  target: signUpMutation.start,
})
