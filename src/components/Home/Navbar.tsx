import React, { useContext } from 'react'
import  { datacontext } from '../../context/UserContext'

function Navbar() {
    let {recogni}=useContext(datacontext);

    return(
        <div className='w-full justify-center bg-black h-[100px] flex flex-col gap-[10px]'>
        <div className='flex items-center justify-between text-whtie px-[20px]'>
            <div className='flex items-center'>
                <img className='w-[30px] h-[30px]' src="" alt="logo" />
                <div className='text-[20px] font-extrabold text-slate-600'>
                    Hackoholics
                </div>
            </div>
            <div className='flex items-center gap-[10px]'>
            <div>
                <div onClick={()=>{
                    recogni.start()
                }}>
                    <img src="" alt="" />
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