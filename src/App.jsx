import React, { useContext } from 'react'
import  { datacontext } from './context/usercontext'
 function App() {
    let {recogni}=useContext(datacontext);

  return (
    <div>
        {/* <img src='/vite.svg'/> */}
        <button onClick={()=>{
            recogni.start()
        }}></button>

    </div>
  )
}
export default App