import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inventory from './Inventory.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Inventory />
  </StrictMode>,
)
