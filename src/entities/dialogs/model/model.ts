import { createEvent, createStore } from 'effector'

export const $searchDialog = createStore('')

export const changeSearchTextField = createEvent<string>()

$searchDialog.on(changeSearchTextField, (_, value) => value)
