import React, { useContext } from 'react'
import  { datacontext } from '../../context/UserContext'

function Navbar() {


    const scaleVoiceAssistant = (() => {
        document.querySelector('#voice-assistant').style.cssText = 'transform: scale(1.5); transition: .3s ease-in-out';
    })
    

    let {recogni}=useContext(datacontext);

    return(
        <div className='w-full justify-center bg-orange-300 h-[100px] flex flex-col gap-[10px]'>
        <div className='flex items-center justify-between text-white px-[20px]'>
            <div className='flex items-center'>
                <img className='w-[30px] h-[30px]' src="" alt="logo" />
                <div className='text-[20px] font-extrabold text-white'>
                    Hackoholics
                </div>
            </div>
            <div className='flex items-center gap-[10px]'>
            <div>
                <div className='w-[70px] h-[70px] rounded-full cursor-pointer' id='voice-assistant' onClick={()=>{
                    recogni.start()
                    scaleVoiceAssistant()
                }}>
                    <img className='w-full h-full object-cover rounded-full' src="/assets/Siri-unscreen.gif" alt="" />
                </div>

            </div>
            Search Bar
            </div>
            <div>
                Dark || Light
            </div>
            
        </div>

            <div>
                adadadad
            </div>

        </div>
    )
}

export default Navbar