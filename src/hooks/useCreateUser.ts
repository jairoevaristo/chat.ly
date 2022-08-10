import { useCallback, useState } from "react";
import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { createUserAPI } from "../services/createUser.api";
import { useNavigation } from "./useNavigation";
import { useToast } from "./useToas";

type FetchDataReturn = {
  data: ICreateUserDTO | undefined;
  loading: boolean,
  handleRequest: (params: any) => Promise<void>;
}

export function useCreateUser(): FetchDataReturn {
  const { toastError, toastSuccess } = useToast();
  const { navigate } = useNavigation();

  const [response, setResponse] = useState<ICreateUserDTO>();
  const [loading, setLoading] = useState(false);

  const handleRedirectSignUp = useCallback(() => {
    navigate('/signin');
  }, [navigate]);

  const handleRequest = async (params: any) => {
    try {
      setLoading(true);

      const data = await createUserAPI(params);
      setResponse(data);
      toastSuccess(
        {
          message: 'Cadastro realizado com sucesso'
        },
        () => handleRedirectSignUp()
      )

    } catch {
      toastError({ message: 'Deu ruim menor, arruma aí' })
    }
    finally {
      setLoading(false);
    }
  };


  return {
    data: response,
    loading,
    handleRequest
  }
}