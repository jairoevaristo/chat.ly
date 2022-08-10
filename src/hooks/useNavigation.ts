import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useNavigation() {
  const navigation = useNavigate();
  
  const goBack = useCallback(() => {
    navigation(-1);
  }, [navigation]);

  const navigate = useCallback((path: string) => {
    navigation(`${process.env.REACT_APP_DOMAIN_URL}${path}`)
  }, [navigation]);

  return {
    goBack,
    navigate
  }
}