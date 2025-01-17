import React, { useContext, useState, useEffect } from 'react';
import { datacontext } from '../../context/UserContext';
import { DayAndNightToggle } from 'react-day-and-night-toggle';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      body.style.backgroundColor = '#1e1e1e'; 
      body.style.color = '#fff'; 
    } else {
      body.style.backgroundColor = '#fff'; 
      body.style.color = '#000'; 
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'bg-slate-300' : 'bg-orange-300'} w-full justify-center bg-orange-300 h-[100px] flex flex-col gap-[10px]`}>
      <div className="flex items-center justify-between px-[20px]">
        <div className="flex items-center">
          <img className="w-[30px] h-[30px]" src="" alt="logo" />
          <div className="text-[20px] font-extrabold">Hackoholics</div>
        </div>

        <div className="flex items-center gap-[10px]">
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

          <form className="group relative w-[500px]">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 pointer-events-none group-focus-within:text-emerald-500"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="focus:ring-1 focus:ring-emerald-400 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-full py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
              type="text"
              aria-label="Search"
              placeholder="Search..."
            />
          </form>
        </div>

        <div>
          <DayAndNightToggle
            onChange={() => setIsDarkMode(!isDarkMode)}
            checked={isDarkMode}
            style={{ transition: 'all 0.2s ease' }}
          />
        </div>
      </div>

      <div className="px-[20px]">
        adadadad 
      </div>
    </div>
  );
}

export default Navbar;
