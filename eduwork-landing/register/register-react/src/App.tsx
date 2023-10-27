// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Register from './pages/register'
import Step1 from './pages/step1'
import Step2 from './pages/step2'
import Step3 from './pages/step3'
import Step4 from './pages/step4'
import Step5 from './pages/step5'
import Step6 from './pages/step6'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}>
          <Route path='' element={<Navigate to='step1' />} />
          <Route path='step1' element={<Step1 />} />
          <Route path='step2' element={<Step2 />} />
          <Route path='step3' element={<Step3 />} />
          <Route path='step4' element={<Step4 />} />
          <Route path='step5' element={<Step5 />} />
          <Route path='step6' element={<Step6 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
