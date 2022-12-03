import { api } from '../constants'
import { IStructureData } from '../interfaces'

export const getStructureData = async (structureId: string, token: string) => {
  try {
    const { data, status } = await api.get<IStructureData>(
      `/structure/${structureId}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        }
      }
    )

    console.log('response status is: ', status)

    return data
  } catch (error) {
    throw new Error('error')
  }
}
