import { ApiHandler } from '@/src/shared/api'
import { createMutation } from '@farfetched/core'
import { SignUpDto, SignUpResponseDto } from './types'
import * as SecureStore from 'expo-secure-store'
import { t } from 'i18next'
import { AxiosError } from 'axios'
import { router } from 'expo-router'
import { AlertController } from '@/src/entities/alert'

export const signUpMutation = createMutation({
  handler: async (body: SignUpDto) => {
    try {
      const response = await ApiHandler.send<SignUpResponseDto>({
        url: 'auth/register',
        data: body,
        method: 'POST',
      })

      await SecureStore.setItemAsync(
        'authorization',
        response.data.access_token,
      )

      router.push('/dialogs')
    } catch (error) {
      AlertController.showAlert(
        t('error'),
        t('signUpError', { context: (error as AxiosError).status }),
        'error',
      )
    }
  },
})
