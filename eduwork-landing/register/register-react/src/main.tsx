import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RegisterContextProvider } from './context/RegisterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RegisterContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RegisterContextProvider>
  </React.StrictMode>,
)
