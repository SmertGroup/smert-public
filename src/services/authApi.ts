import { api } from '../constants'
import { IAuthBody } from '../interfaces'

export const authPublicUser = async (body : IAuthBody) => {
    const { data, status } = await api.post<IAuthBody>(
      '/auth',
      body,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    )

    console.log('response status is: ', status)
    
    return data
}
