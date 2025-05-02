type Dialog = {
  id: string
  username: string
  datetime: string
  lastMessage: string
  unreadMessagesCount: number
  avatarUrl: string

  read: boolean
  isMyMessage: boolean
}

type NewDialog = {
  id: string
  username: string
  avatarUrl: string
}
