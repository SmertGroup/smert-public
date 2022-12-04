import { api } from '../constants'
import { IStructureData } from '../interfaces'

export const getStructureData = async (structureId: string, token: string) => {
    const response = await api.get<IStructureData>(
      `/structure/${structureId}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        }
      }
    )
    return response.data
}
