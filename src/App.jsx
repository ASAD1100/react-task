import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Dashboard from './components/pages/dashboard/Dashboard'
import Home from './components/pages/home/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
