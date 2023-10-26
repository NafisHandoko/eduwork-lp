// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Register from './pages/register'
import Step1 from './pages/step1'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}>
          <Route path='step1' element={<Step1 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
