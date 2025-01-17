import React, { createContext } from 'react'
import run from '../gemini';
export const datacontext=createContext()

 function UserContext({children}) {

  function speak(text){

    let text_spek = new SpeechSynthesisUtterance(text)
    text_spek.volume=1;
    text_spek.rate=1;
    text_spek.pitch=1;
    text_spek.lang="en-GBp"
    window.speechSynthesis.speak(text_spek)
  }
  async function aires(promt){
    document.querySelector('#voice-assistant').style.cssText = 'transform: scale(1); transition: .5s ease-in-out';
    let txt = await run(promt)
    speak(txt)
  }
  let speechrecognition=window.speechrecognition || window.webkitSpeechRecognition
  let recogni=new speechrecognition()
  recogni.onresult=(e)=>{
    let currunt =e.resultIndex
    let trans = e.results[currunt][0].transcript

    if(trans == 'open Google'){
      window.location = "www.google.com"
     }else{
       aires(trans)
     }
  
  }

  let value = {
  //  speak
  recogni
  };
  return (
    <div>
      <datacontext.Provider value={value}>
                {children}
      </datacontext.Provider>
    </div>
  )
}
export default UserContext