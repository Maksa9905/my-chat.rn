import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import * as SecureStore from 'expo-secure-store'

export class ApiHandler {
  static async send<TResponse>(config?: AxiosRequestConfig) {
    const token = await SecureStore.getItemAsync('authorization')

    const response = await axios<any, AxiosResponse<TResponse>>({
      ...config,
      url: `${process.env.EXPO_PUBLIC_BASE_API_URL}/${config?.url}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: config?.method || 'GET',
    })

    return response
  }
}
