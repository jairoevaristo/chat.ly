import { useToastStore } from "../contexts/toastContext";

export const useToast = () => {
  const { toastError, toastSuccess } = useToastStore(state => state);
  
  return {
    toastError,
    toastSuccess
  }
};