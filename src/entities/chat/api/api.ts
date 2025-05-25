import { ApiHandler } from '@/src/shared/api'
import { createMutation, createQuery } from '@farfetched/core'
import {
  ChatInfo,
  MessageResponse,
  SendFirstMessage,
  SendMessageDto,
} from './types'
import { sample } from 'effector'

export const getMessagesByDialogIdQuery = createQuery({
  handler: async (id: string) =>
    await ApiHandler.send<MessageResponse[]>({
      url: `chat/dialogs/${id}/messages`,
    }),
})

export const getDialogById = createQuery({
  handler: async (id: string) =>
    await ApiHandler.send<ChatInfo>({
      url: `chat/dialogs/${id}/info`,
    }),
})

export const sendMessageMutation = createMutation({
  handler: async (body: SendMessageDto) =>
    await ApiHandler.send({
      url: 'chat/messages',
      method: 'POST',
      data: body,
    }),
})

export const sendFirstMessageMutation = createMutation({
  handler: async (body: SendFirstMessage) =>
    await ApiHandler.send({
      url: 'chat/messages',
      method: 'POST',
      data: body,
    }),
})

sample({
  clock: sendMessageMutation.finished.success,
  fn: (request) => request.params.dialogId,
  target: getMessagesByDialogIdQuery.start,
})
