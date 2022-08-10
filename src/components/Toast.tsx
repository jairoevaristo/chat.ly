import { useEffect, useRef } from "react";
import { BadgeCheckIcon, XIcon, ExclamationCircleIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from 'framer-motion';

import { useToastStore } from "../contexts/toastContext";

import { RenderConditional } from "./RenderConditional";

export function Toast() {
  const { 
    toastClose, 
    showToast, 
    messageToast, 
    delayValue, 
    actionCloseToast, 
    isFinishCloseToast 
  } = useToastStore(state => state);

  const messageToastValue = messageToast || 'Ocorreu um erro inesperado, tente novamente!'
  
  const timeOutCloseToast = useRef<NodeJS.Timeout | null>(null);
  const timeOutActionCloseToast = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!showToast && isFinishCloseToast) {
      return;
    }

    timeOutCloseToast.current = setTimeout(() => {
      toastClose();
    }, delayValue || 2500);

    return () => clearTimeout(timeOutCloseToast.current as NodeJS.Timeout);
  }, [toastClose, showToast, delayValue, actionCloseToast, isFinishCloseToast]);

  useEffect(() => {
    if (!isFinishCloseToast && actionCloseToast) {
      timeOutActionCloseToast.current = setTimeout(() => {
        actionCloseToast();
      }, delayValue - 300 || 500);
    }

    return () => clearTimeout(timeOutActionCloseToast.current as NodeJS.Timeout);
  }, [actionCloseToast, delayValue, isFinishCloseToast, timeOutActionCloseToast]);


  return (
    <AnimatePresence>
      {
        showToast && (
        <div className="absolute h-screen w-full overflow-hidden">
          <div className="fixed sm:top-6 sm:p-0 sm:-translate-x-0 w-full sm:w-96 sm:left-auto sm:bottom-auto p-4 sm:right-8 z-50 bottom-2 left-1/2 transform -translate-x-1/2">
            <motion.div
              key="modal"
              initial={{ opacity: 0, translateX: 500 }}
              animate={{ opacity: 1, translateX: 1 }}
              transition={{ duration: 0.8 }}
              exit={{ x: 300, opacity: 0 }}
              className="flex items-center bg-white h-16 sm:w-96 w-full p-4 rounded-md shadow-md relative"
            >
              <RenderConditional 
                condition={showToast === 'ERROR'}
                component={<ExclamationCircleIcon className="h-8 w-8 text-red-600" />}
              />

              <RenderConditional 
                condition={showToast === 'SUCCESS'}
                component={<BadgeCheckIcon className="h-8 w-8 text-green-500" />}
              />

              <span className="text-md pr-6 ml-2 w-full text-gray-800 text-ellipsis overflow-hidden ...">
                {messageToastValue}
              </span>

              <div
                className="absolute right-4" 
                onClick={() => {
                  toastClose();
                  if (actionCloseToast) {
                    setTimeout(() => {
                      actionCloseToast();
                    }, 600)
                  }
                }}
              >
                <XIcon className="h-6 w-6 text-gray-500 cursor-pointer font-bold" />
              </div>
            </motion.div>
          </div>
        </div>
      )}
  </AnimatePresence>
  )
}