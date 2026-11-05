
import { Route, Routes } from 'react-router'
import Home from './pages/home.jsx'
import Login from './pages/login.jsx'
import Page404 from './pages/Page404.jsx'
import VagaDetalhe from './pages/VagaDetalhe.jsx'
import './App.css'

function App() {
  

  return (
  <Routes>
    <Route index element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/vaga/:id" element={<VagaDetalhe />} />
    <Route path="*" element={<Page404 />} />
    
  </Routes>
  )
}

export default App
 