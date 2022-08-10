import { useEffect, useState } from "react";

enum StateTypeWrite {
  Typing,
  Pausing,
  Deleting,
};

type UseTypeWriteData = {
  initialState?: string;
  values: string[];
  typeWriteTime?: number;
  pauseWriteTime?: number;
  deleteWriteTime?: number;
}

export const useTypeWrite = ({ 
  initialState = '', 
  values, 
  typeWriteTime = 150,
  pauseWriteTime = 1000, 
  deleteWriteTime = 50, 
 }: UseTypeWriteData) => {
  const [selectIndex, setSelectIndex] = useState(0);
  const [phase, setPhase] = useState(StateTypeWrite.Typing);
  const [typeWriteState, setTypeWriteState] = useState('');

  const TYPING_INTERVAL = typeWriteTime;
  const PAUSE_INTERVAL = pauseWriteTime;
  const DELETE_INTERVAL = deleteWriteTime;
    
  const newTextTransform = initialState ? initialState + ' ' + values[selectIndex] : values[selectIndex];

  useEffect(() => {
    switch(phase) {
      case StateTypeWrite.Typing: {
        const nextTypeText = newTextTransform.slice(0, typeWriteState.length + 1);
    
        if (nextTypeText === typeWriteState) {
          setPhase(StateTypeWrite.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypeWriteState(nextTypeText);
        }, TYPING_INTERVAL)

        return () => clearTimeout(timeout);
      }

      case StateTypeWrite.Deleting: {
        if (!typeWriteState) {
          const nextIndex = selectIndex + 1;
          setSelectIndex(values[nextIndex] ? nextIndex : 0);
          setPhase(StateTypeWrite.Typing);
          return;
        }

        const nextRemaining = newTextTransform.slice(0, typeWriteState.length - 1);

        const timeout = setTimeout(() => {
          if (nextRemaining.length === 21 && initialState) {  
            const nextIndex = selectIndex + 1;
            setSelectIndex(values[nextIndex] ? nextIndex : 0);
            setPhase(StateTypeWrite.Typing);
            return;
          }
          setTypeWriteState(nextRemaining);
        }, DELETE_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case StateTypeWrite.Pausing:
      default: 
        const timeout = setTimeout(() => {
          setPhase(StateTypeWrite.Deleting);
        }, PAUSE_INTERVAL);
        
        return () => clearTimeout(timeout);
    }
  }, [typeWriteState, values, phase, selectIndex, newTextTransform, initialState, DELETE_INTERVAL, TYPING_INTERVAL, PAUSE_INTERVAL]);

  return { typeWriteState }
}