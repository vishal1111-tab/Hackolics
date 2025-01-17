import React, { useContext, useState, useEffect } from 'react';
import { datacontext } from '../../context/UserContext';
import { DayAndNightToggle } from 'react-day-and-night-toggle';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const scaleVoiceAssistant = () => {
    const assistant = document.querySelector('#voice-assistant');
    if (assistant) {
      assistant.style.transform = 'scale(1.5)';
      assistant.style.transition = '.3s ease-in-out';
    }
  };

  const { recogni } = useContext(datacontext);

  const handleVoiceAssistant = () => {
    if (recogni) {
      recogni.start();
      scaleVoiceAssistant();
    } else {
      console.warn('Recogni is not available');
    }
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.style.backgroundColor = '#000000'; 
      body.style.color = '#fff'; 
    } else {
      body.style.backgroundColor = '#FBFAF5'; 
      body.style.color = '#000'; 
    }
  }, [isDarkMode]);

  return (
    <div>
    <div className={`${isDarkMode ? 'bg-[#00000050]' : 'bg-[#FFFFFF10]'} bg-[#063852] w-full justify-cente py-[20px] flex flex-col gap-[12px] z-10 fixed backdrop-blur-[2px]`}>
      <div className="flex lg:flex-nowrap flex-wrap gap-y-[12px] items-center gap-[20px] px-[20px]">
        <div className="flex items-center gap-[10px]">
            <div className=' flex items-center w-full h-[60px]'>
                <img className="w-full h-[150px] object-cover" src="/assets/HackoHolics_2.png" alt="logo" />
            </div>
          
          <div className="text-[20px] font-extrabold"></div>
        </div>

        <div className="flex items-center lg:justify-center w-full gap-[16px]">
          <div>
            <div
              className="flex items-center w-[40px] h-[40px] rounded-full cursor-pointer"
              id="voice-assistant"
              onClick={handleVoiceAssistant}
            >
              <img
                className="w-[80px] h-[80px] object-cover rounded-full"
                src="/assets/Siri-unscreen.gif"
                alt="Voice Assistant"
              />
            </div>
          </div>

          <form className="group relative lg:w-[40%] w-[100%]">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 pointer-events-none group-focus-within:text-[#0077B6] text-[#3b3b3b]"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="focus:ring-1 focus:ring-[#0077B6] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              aria-label="Search"
              placeholder="Search..."
            />
          </form>
        </div>
      </div>

      <div className="px-[20px] flex justify-between">
        <div>
            adadadad
        </div> 
      <div>
          <DayAndNightToggle
            onChange={() => setIsDarkMode(!isDarkMode)}
            checked={isDarkMode}
            style={{ transition: 'all 0.2s ease' }}
          />
        </div>
        </div>
    </div>


    <div className='h-[100vh] w-[100vh]'>

    <img className='absolute top-0 w-full h-full' src="/assets/AI.jpg" alt="" />
    </div>

    <div className='h-[100vh] w-[100vh]'></div>



    </div>
  );
}

export default Navbar;
