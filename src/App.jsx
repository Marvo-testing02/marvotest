
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLandingPage from './Components/LandingPage/MainLandingPage'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
      </Routes>
    </>
  )
}

export default App
