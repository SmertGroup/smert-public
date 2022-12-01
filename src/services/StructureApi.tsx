import axios from "axios";
import { IStructureData } from "../interfaces";




export const getStructureData = async () => {
  try {
    const { data, status } = await axios.get<IStructureData>(
      'https://638517da3fa7acb14f098b3d.mockapi.io/api/v1/edificio',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log('response status is: ', status);

    return data;
  } catch (error) 
  {
    throw new Error("error");
    
  }
}
