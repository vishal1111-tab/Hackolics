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
    let txt = await run(promt)
    speak(txt)
  }
  let speechrecognition=window.speechrecognition || window.webkitSpeechRecognition
  let recogni=new speechrecognition()
  recogni.onresult=(e)=>{
    let currunt =e.resultIndex
    let trans = e.results[currunt][0].transcript
    // alert(trans);

    aires(trans)
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