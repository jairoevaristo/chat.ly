import { useSendMessage } from "../hooks/useSendMessage";
import { CardMessage } from "./CardMessage";

export function ChatMessages() {
  const users = [
    {
      avatar: "https://github.com/jairoevaristo.png",
      created_At: new Date(),
      id: "1",
      message: "Olá Jairo tudo certo?, queria falar com você sobre como vai funcionar nossa task",
      name: "Jairo Evaristo",
    },
    {
      avatar: "https://github.com/jairoevaristo.png",
      created_At: new Date(),
      id: "2",
      message: "Olá Jairo tudo certo?, queria falar com você sobre como vai funcionar nossa task",
      name: "Lucas Martins",
    },
    {
      avatar: "https://github.com/jairoevaristo.png",
      created_At: new Date(),
      id: "3",
      message: "Olá Jairo tudo certo?, queria falar com você sobre como vai funcionar nossa task",
      name: "Ricardo Felipe",
    },
    {
      avatar: "https://github.com/jairoevaristo.png",
      created_At: new Date(),
      id: "4",
      message: "Olá Jairo tudo certo?, queria falar com você sobre como vai funcionar nossa task",
      name: "Carlos Rian",
    }
  ]

  const { onSendMessage } = useSendMessage();

  return (
    <div className="flex flex-1 flex-col items-start">
      <header className="mt-6 mb-2 flex w-full flex-col">
        <h2 className="text-4xl font-bold text-white px-5">Chat.li</h2>
      </header>

      <main className="mt-5 flex flex-col lg:max-h-[390px] 2xl:max-h-[700px] pb-5 overflow-x-hidden overflow-auto scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-thin">
        {users.map(user => {
          return (
            <CardMessage 
              avatar={user.avatar}
              created_At={user.created_At}
              id={user.id}
              message={user.message}
              name={user.name}
              onClickContact={() => onSendMessage({ id: user.id, nameUser: user.name, avatar: user.avatar })}
            />
          )})
        }
      </main>
    </div>
  )
}