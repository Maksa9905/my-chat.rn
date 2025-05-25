export type TAlert = {
  id: string
  title: string
  description: string
}

export type CreateAlertEvent = {
  title: string
  description: string
  type: 'success' | 'error' | 'warning'
}
