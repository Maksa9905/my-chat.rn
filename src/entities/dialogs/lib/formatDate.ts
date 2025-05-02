import { EMonths } from '@/src/shared/model'
import { t } from 'i18next'

export const formatDate = (dateISO: string) => {
  const date = new Date(dateISO)
  const now = new Date()

  const isToday = (date: Date, now: Date) => {
    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    )
  }

  const isYesterday = (date: Date, now: Date) => {
    const yesterday = new Date(now)
    yesterday.setDate(yesterday.getDate() - 1)
    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    )
  }

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const formatDatePart = (date: Date) => {
    const months = Object.keys(EMonths).map((_, index) =>
      t('formatDateMonth', { context: index }),
    )
    const day = date.getDate()
    const month = months[date.getMonth()]
    return `${day} ${month}`
  }

  if (isToday(date, now)) {
    return formatTime(date)
  } else if (isYesterday(date, now)) {
    return `вчера ${formatTime(date)}`
  } else {
    return `${formatDatePart(date)} ${formatTime(date)}`
  }
}
