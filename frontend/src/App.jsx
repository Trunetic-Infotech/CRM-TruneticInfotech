import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminRoutes from './routes/AdminRoutes'
import HRRoutes from './routes/HRRoutes'
import ProjectManagerRoutes from './routes/ProjectManagerRoutes'
import EmployeeRoutes from './routes/EmployeeRoutes'
import ClientRoutes from './routes/ClientRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login/:role' element={<Login />} />
        <Route path='/admin/*' element={<AdminRoutes />}/>
        <Route path='/hr/*' element={<HRRoutes />}/>
        <Route path='/project-manager/*' element={<ProjectManagerRoutes />} />
        <Route path='/employee/*' element={<EmployeeRoutes />} />
        <Route path='/client/*' element={<ClientRoutes />}/>
      </Routes>
    </>
  )
}

export default App
