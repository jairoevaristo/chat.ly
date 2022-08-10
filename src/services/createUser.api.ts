import { api } from "../config/api";
import { endpointCreateUser } from "../config/endpoints";
import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { IApiResponse } from "../types/IApiResponse";

export const createUserAPI = async (
  createUserData: FormData
): Promise<ICreateUserDTO | undefined> => {
  
  const { data } = await api.post<IApiResponse<ICreateUserDTO>>(
    endpointCreateUser(),
    createUserData,
    {
      headers: {
        Authorization: 'Basic cmVuYW5AbWFpbDoxMjM0NTY3OA=='
      }
    }
  );

  if (data?.success === false) throw new Error(data?.message);
  return data?.entity;
}