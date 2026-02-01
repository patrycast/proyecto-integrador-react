import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>,
)
