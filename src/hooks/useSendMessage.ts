import { useMessageStore } from "../contexts/messageContext";

export const useSendMessage = () => {
  return useMessageStore(state => state);
}