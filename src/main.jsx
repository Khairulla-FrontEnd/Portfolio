import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Portfolio from "./pages/Portfolio";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Portfolio/>    
    </BrowserRouter>
  </StrictMode>,
)
