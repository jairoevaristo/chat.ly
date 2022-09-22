import { ChatSendMessagePlaceholderImage } from "./ChatSendMessagePlaceholderImage";

export function ChatSendMessagePlaceholder() {
  return (
    <div className="flex items-center flex-col justify-center w-full h-screen max-w-2xl mx-auto">
        <div className="w-96">
          <ChatSendMessagePlaceholderImage />
        </div>
      <h1 className="text-2xl text-gray-800 mt-3">Conecte-se com pessoas de diferentes áreas da TI</h1>
      <span className="text-lg text-gray-500 text-center">Comece um conversa e descubra mais sobre outras áreas de TI, ficando por dentro do que acontece em outras áreas 😄.</span>
    </div>
  )
}