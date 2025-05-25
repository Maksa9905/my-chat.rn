import { createQuery } from '@farfetched/core'
import { ApiHandler } from '../../../shared/api/ApiHandler'
import { UserInfoResponse } from './types'

export const getProfileQuery = createQuery({
  handler: async () =>
    await ApiHandler.send<UserInfoResponse>({ url: 'auth/profile' }),
})
