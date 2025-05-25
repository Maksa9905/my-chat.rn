import { ApiHandler } from '@/src/shared/api'
import { createQuery } from '@farfetched/core'
import { GetDialogsParamsDto, GetDialogsResponseDto } from './types'

export const getDialogsQuery = createQuery({
  handler: async (params: GetDialogsParamsDto) => {
    const response = await ApiHandler.send<GetDialogsResponseDto>({
      url: `chat/dialogs`,
      params,
    })

    return response
  },
})

export const getNewDialogsQuery = createQuery({
  handler: async () => {
    const response = await ApiHandler.send({
      url: ``,
    })
  },
})
