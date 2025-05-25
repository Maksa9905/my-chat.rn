import { createAlert } from './model'

export class AlertController {
  static showAlert(
    title: string,
    description: string,
    type: 'success' | 'error' | 'warning',
  ) {
    createAlert({ title, description, type })
  }
}
