export type MessageResponse = {
  id: string
  text: string
  createdAt: string
  read: boolean
  author: {
    id: string
    username: string
    login: string
  }
}

export type ChatInfo = {
  id: string
  participants: {
    id: string
    username: string
    login: string
  }[]
  lastMessage: {
    id: string
    text: string
    createdAt: string
    read: boolean
    author: {
      id: string
      username: string
      login: string
    }
  }
  unreadCount: number
}

export type SendMessageDto = {
  text: string
  dialogId: string
}

export type SendFirstMessage = {
  text: string
  recipientId: string
}
