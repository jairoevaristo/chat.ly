import create from 'zustand';

type ToastParams = {
  message?: string;
  delayValue?: number;
}

type ToastStoreData = {
  showToast: '' | 'SUCCESS' | 'ERROR',
  messageToast: string;
  toastSuccess: (data?: ToastParams, fn?: () => void) => void;
  toastError: (data?: ToastParams, fn?: () => void) => void;
  toastClose: () => void;
  actionCloseToast: (() => void) | null;
  delayValue: number;
  isFinishCloseToast: boolean;
}

export const useToastStore = create<ToastStoreData>((set) => ({
  showToast: '',
  messageToast: '',
  delayValue: 2500,
  isFinishCloseToast: true,
  actionCloseToast: null,
  toastSuccess: (data, fn) => {
    set(({ 
      showToast: 'SUCCESS', 
      messageToast: data?.message, 
      delayValue: data?.delayValue, 
      actionCloseToast: fn, 
      isFinishCloseToast: true 
    }))
  },
  toastError: (data, fn) => {
    set(({ 
      showToast: 'ERROR', 
      messageToast: data?.message, 
      delayValue: data?.delayValue, 
      actionCloseToast: fn, 
      isFinishCloseToast: true 
    }))
  },
  toastClose: () => {
    set(({ 
      showToast: '', 
      messageToast: '', 
      isFinishCloseToast: false,
    }))},
}))