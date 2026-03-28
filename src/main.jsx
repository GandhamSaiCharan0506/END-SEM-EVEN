import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const savedTheme = localStorage.getItem("theme") || "light";

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
} else {
  document.body.classList.remove("light-mode");
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  
)
