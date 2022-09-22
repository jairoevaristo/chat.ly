import { formatedDate } from "../utils/formatedDate";

type CardMessageProps = {
  id: string;
  name: string;
  message: string;
  created_At: Date;
  avatar: string;
  onClickContact: () => void;
}

export function CardMessage({ avatar, created_At, id, message, name, onClickContact }: CardMessageProps) {
  const formatedDateHours = formatedDate(created_At);

  return (
    <div
      onClick={onClickContact}
      className="flex items-center py-5 px-5 justify-center cursor-pointer hover:bg-blue-900 border-b border-blue-900"
    >
       <img 
        src={avatar} 
        alt="avatar"
        className="w-12 h-12 mr-3 rounded-full" 
      />

      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <span className="text-white font-bold mb-1">{name}</span>
          <span className="text-gray-500 font-normal text-xs">{formatedDateHours}</span>
        </div>
        <span className="text-gray-500 font-normal w-72 truncate ...">{message}</span>
      </div>
    </div>
  )
}