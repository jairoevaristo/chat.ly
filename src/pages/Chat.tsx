import { useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@heroicons/react/outline";

import { ChatMessages } from "../components/ChatMessages";
import { Dropdown } from "../components/Dropdown";
import { TextInput } from "../components/TextInput";
import { ChatSendMessage } from "../components/ChatSendMessage";

export function Chat() {
  const [enabled, setEnabled] = useState(false);
  
  return (
    <div className="flex flex-col flex-1 h-screen overflow-hidden">
      <div className="flex w-full px-5 items-center justify-between bg-blue-800 border-b border-gray-500 h-14">
        <Dropdown />
        <div className="flex h-full flex-1">
          <TextInput
            name="search"
            value=""
            className="h-10"
            onChange={() => {}}
            placeholder="Pesquisar..."
            leftIcon={
              <SearchIcon 
                className="w-5 h-5 text-gray-500"
              />
            }
          />
        </div>

        <div className="flex w-80 items-center justify-end py-4 ">
          <div className="relative">
            <img 
              src="https://github.com/jairoevaristo.png" 
              alt="avatar"
              className="w-10 h-10 mr-3 rounded-md relative" 
            />
            <div className="absolute bg-green-500 h-3 w-3 rounded-full right-2 top-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-white">Jairo Evaristo</span>
            <span className="text-xs font-semibold text-gray-500">Front End Developer</span>
          </div>
        </div>

        <div className="flex items-center ml-5 py-4">
        
          {
            !enabled
              ? <SunIcon className="mr-2 text-white h-5 w-5" />
              : <MoonIcon className="mr-2 text-white h-5 w-5" />
          }

          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-red-600' : 'bg-white'}
              relative inline-flex px-1 h-7 w-16 shrink-0 cursor-pointer rounded-full border-1 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-9 bg-outside' : 'translate-x-0'}
                absolute top-1 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-blue-800 shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>
      <main className="flex flex-1 h-screen overflow-hidden">
        <div className="w-96 bg-blue-800">
          <ChatMessages />      
        </div>

        <div className="flex-1 bg-white">
          <ChatSendMessage />
        </div>
      </main>
    </div>
  )
}