import { AlertController } from '@/src/entities/alert'
import { ApiHandler } from '@/src/shared/api'
import { createMutation } from '@farfetched/core'
import { AxiosError } from 'axios'
import { router } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { t } from 'i18next'

export const loginMutation = createMutation({
  handler: async (body: LoginDto) => {
    try {
      const response = await ApiHandler.send<LoginResponseDto>({
        url: 'auth/login',
        data: body,
        method: 'POST',
      })

      await SecureStore.setItemAsync(
        'authorization',
        response.data.access_token,
      )

      router.push('/dialogs')
    } catch (error) {
      console.log(JSON.stringify(error))

      AlertController.showAlert(
        t('error'),
        t('loginError', { context: (error as AxiosError).status }),
        'error',
      )
    }
  },
})
