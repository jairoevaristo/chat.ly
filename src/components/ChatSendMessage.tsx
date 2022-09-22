import { ChangeEvent, useState } from "react";
import {EmojiHappyIcon, PaperAirplaneIcon, XIcon } from "@heroicons/react/outline"
import EmojiPicker, { IEmojiData } from 'emoji-picker-react';
import { AnimatePresence, motion } from 'framer-motion';

import { useSendMessage } from "../hooks/useSendMessage"
import { ChatSendMessagePlaceholder } from "./ChatSendMessagePlaceholder"

export function ChatSendMessage() {
  const { nameUser, avatar } = useSendMessage();
  const [isOpenEmoji, setIsOpenEmoji] = useState(false);
  const [messageText, setMessageText] = useState('');

  if (!nameUser) {
    return <ChatSendMessagePlaceholder />
  }

  function handleEmojiClick(event: React.MouseEvent<Element, MouseEvent>, emojiObject: IEmojiData) {
    setMessageText(messageText + emojiObject.emoji);
  }

  return (
    <div className="flex flex-col w-full h-screen pb-20">
      <header className="w-full h-20 bg-blue-800 border-l border-gray-500 px-6 flex items-center">
        <img src={avatar} alt="imagem avatar" className="w-14 h-14 rounded-full" />
        <h1 className="text-white font-bold text-xl ml-4">{nameUser}</h1>
      </header>
        <main className="flex-1">

        </main>

        <footer className="flex items-center flex-col justify-center px-4 pt-4">
          <AnimatePresence>
            {isOpenEmoji && (
              <motion.div
              initial={{ opacity: 0, translateY: 200 }}
              animate={{ opacity: 1, translateY: 1 }}
              exit={{ opacity: 0, translateX: 200 }}
              transition={{ duration: 0.2 }}
              >
                <EmojiPicker
                  disableSearchBar
                  disableSkinTonePicker
                  onEmojiClick={handleEmojiClick}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-full flex flex-col border border-gray-300 rounded-md px-2 shadow-md">
            <textarea
              value={messageText}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessageText(e.target.value)}
              placeholder={`Envie sua mensagem para ${nameUser}...`}
              className="flex-1 h-24 outline-none py-2 px-2 placeholder:font-medium text-gray-900 resize-none"
            />

            <div className="py-2 flex space-x-2 items-center justify-end">
              <AnimatePresence>
                {
                  isOpenEmoji && (
                    <motion.div
                      initial={{ opacity: 0, translateX: 20 }}
                      animate={{ opacity: 1, translateX: 1 }}
                      exit={{ opacity: 0, translateX: 20 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setIsOpenEmoji(false)}
                    >
                      <XIcon className="h-6 w-6 text-gray-900 cursor-pointer" />
                    </motion.div>
                  )
                }
              </AnimatePresence>

              <EmojiHappyIcon className={`h-6 w-6 text-gray-900 cursor-pointer ${isOpenEmoji && 'text-green-500'}`} onClick={() => setIsOpenEmoji(true)} />
              <div className="text-gray-900">|</div> 
              <PaperAirplaneIcon className="h-6 w-6 text-gray-900 rotate-90" />
            </div>
          </div>
        </footer>
    </div>
  )
}