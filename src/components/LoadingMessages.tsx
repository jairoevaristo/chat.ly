import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import loadingMessages from '../assets/animations/loading-messages.json'

export function LoadingMessage() {
  const [progress, setProgress] = useState(0);
  let total = 100;

  useEffect(() => {
    if (progress >= total) {
      return;
    }

    setTimeout(() => {
      setProgress(progress + 10);
    }, 1000);
  }, [progress, total]);

  return (
    <div className="bg-blue-900 flex flex-col w-full h-screen items-center justify-center pointer-events-none">
      <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: loadingMessages 
        }}
        height={400}
        width={600}
      />
      <div className='flex flex-col mb-4 items-center justify-center'>
        <div className='bg-blue-200 w-[32vw] h-1 rounded-full overflow-hidden'>
          <div 
            className='bg-blue-300 h-1 z-10 animate-pulse ease-in-out duration-100'
            style={{ width: `${(100 * progress) / total}%` }}
          ></div>
        </div>
        <span className='font-normal text-md text-gray-700 mt-2'>{progress}%</span>
      </div>
      <div className='border-b border-blue-300 opacity-40 w-[36vw] my-4' />
      <span className='text-gray-700 font-light text-md'>Aguarde enquanto organizamos suas mensagens...</span>
    </div>
  )
}