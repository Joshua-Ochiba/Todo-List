import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import DashBoardPage from './pages/DashBoardPage/DashBoardPage'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/DashBoardPage" element={<DashBoardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
