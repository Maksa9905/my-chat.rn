type Participant = {
  id: string
  username: string
  avatarUrl: string
}

type MessageResponse = {
  id: string
  text: string
  createdAt: string
  author: Participant
  read: boolean
}

export type DialogResponse = {
  id: string
  participants: Participant[]
  lastMessage: MessageResponse
  unreadCount: number
}

export type GetDialogsParamsDto = {
  page: number
  limit: number
}

export type GetDialogsResponseDto = DialogResponse[]
