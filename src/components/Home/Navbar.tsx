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
    <div className={`relative !bg-no-repeat !bg-cover bg-center h-[100vh] transition-[ease-in-out] ${isDarkMode ? ' bg-[url("/assets/Black_Background.gif")]' : 'bg-[url("/assets/white_background.gif")]'}`}>
    <div className={`${isDarkMode ? 'bg-[#00000050]' : 'bg-[#FFFFFF10]'} w-full justify-cente py-[20px] flex flex-col gap-[20px] z-10 fixed backdrop-blur-[2px]`}>
      <div className="flex lg:flex-nowrap flex-wrap gap-y-[12px] items-center gap-[20px] px-[20px]">
        <div className="flex items-center gap-[10px]">
            <div className=' flex items-center w-full h-[60px]'>
                <img className="w-full h-[150px] object-cover" src="/assets/HackoHolics_2.png" alt="logo" />
            </div>
          
          <div className="text-[20px] font-extrabold"></div>
        </div>

        <div className="flex lg:absolute items-center lg:justify-center w-full gap-[16px]">
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
            Home
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

    <div className='px-[40px] h-[100%] lg:w-[50%] w-[100%] relative lg:top-0 top-[224px] flex flex-col lg:justify-center lg:left-[50%] justify-start'>
      <div className='lg:text-[72px] text-[54px] font-extrabold top-[240px]'>
          Hi How Are You?
      </div>
      <div className='lg:text-[36px] text-[24px] font-light'>
          Nice to Meet You!!!!!
      </div>
    </div>


    <div className='absolute flex items-center px-[20px] bottom-[50px] lg:bottom-[25%] h-[50vh] lg:w-[40vw] w-[100vw] transition-[smooth]'>
      <img className={`w-full lg:h-[50vh] h-[30vh] rounded-full ${isDarkMode ? 'border-white' : 'border-black'} object-cover border-[2px] overflow-visible`} src="/assets/robot.png" alt="" />
    </div>
 

      <div className='fixed flex flex-col items-center gap-[10px] lg:bottom-[50px] lg:right-[50px] bottom-[10px] right-[10px]'>
        <div className={`font-semibold py-[4px] px-[8px] rounded-[4px] ${!isDarkMode ? 'bg-[#00000020]' : 'bg-[#FFFFFF10]'}`}>How can i help?</div>
        <button
          className="flex items-center w-[80px] h-[80px] rounded-full cursor-pointer"
          id="voice-assistant"
          onClick={handleVoiceAssistant}
        >
          <img
            className="w-[120px] h-[120px] object-cover rounded-full"
            src="/assets/Siri-unscreen.gif"
            alt="Voice Assistant"
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
