import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Home/Navbar.tsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserContext>
    <App />
    <Navbar />
    <div className='h-[100vh]'></div>
  </UserContext>,
)
