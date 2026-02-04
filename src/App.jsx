import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './pages/dashboard/Dashboard'
import NavBar from './navbar/NavBar'
import { PatientContext, PatientProvider } from './assets/context/PatientContext'
import { BrowserRouter } from 'react-router'

function App() {
  

  return (
    <BrowserRouter>
      <PatientProvider>
      <div className='bg-[#f6f7f8] w-full h-[auto] flex flex-col justify-center items-center'>
        <div className='w-[90%] h-[100%] flex flex-col justify-center items-center p-[25px] gap-7'>
          <NavBar />
      <Dashboard />
        </div>
    </div>
    </PatientProvider>
    </BrowserRouter>
  )
}

export default App
