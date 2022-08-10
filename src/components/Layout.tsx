import { ReactNode } from "react"
import { TabView } from "./TabView";
import { motion } from 'framer-motion';
import { useTypeWrite } from "../hooks/useTypeWrite";

type LayoutProps = {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { typeWriteState } = useTypeWrite({ 
    initialState: 'O sistema de chat que', 
    values: ['conecta pessoas da área de TI.', 'te ajuda a realizar networking.'],
  });

  return (
    <div className="w-full flex justify-center sm:justify-start items-center overflow-hidden">
      <div className="w-[55vw] xl:w-[60vw] bg-blue-800 h-screen lg:flex flex-col items-center justify-center hidden">
        <div className="max-w-sm">
          <h1 className="font-bold items-start mb-4 text-white text-7xl">Chat.ly</h1>
          <span className="font-normal text-white text-3xl blinking-cursor">{typeWriteState}</span>
        </div>
      </div>

      <div className="lg:w-[45vw] xl-[40vw] h-screen w-full overflow-auto scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-thin">
        <div className="w-full max-w-6xl mx-auto p-4 h-screen flex flex-col">
          <div>
            <div className="mx-6 sm:mx-0">
              <TabView paths={[{ name: 'login', path: '/signin' }, { name: 'cadastro', path: '/signup' }]} />
            </div>
            <motion.div
              initial={{ opacity: 0, translateX: 500 }}
              animate={{ opacity: 1, translateX: 1 }}
              transition={{ duration: 0.5 }}  
              className="flex flex-col items-center w-full mt-4"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}