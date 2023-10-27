// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Register from './pages/register'
import Step1 from './pages/step1'
import Step2 from './pages/step2'
import Step3 from './pages/step3'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}>
          <Route path='/' element={<Step1 />} />
          <Route path='step2' element={<Step2 />} />
          <Route path='step3' element={<Step3 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
