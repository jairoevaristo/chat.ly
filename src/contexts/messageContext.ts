import create from 'zustand';

type MessageParams = {
  id: string;
  nameUser: string;
  avatar: string;
}

type MessageStoreData = {
  id: string;
  nameUser: string;
  avatar: string;
  onSendMessage: (data: MessageParams) => void;
}

export const useMessageStore = create<MessageStoreData>((set) => ({
  id: '',
  nameUser: '',
  avatar: '',
  onSendMessage: ({ id, nameUser, avatar }) => {
    set(({ 
      id, 
      nameUser,
      avatar
    }))
  }
}))