
import './App.css'
import Home from './Components/Home'
import QuoteProvider from "./Context/quote"
import { Route, Routes } from 'react-router-dom'
import Bookmark from './Components/Bookmark'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <QuoteProvider>
      <Routes>
        <Route  path= '/' element={<Home/>} />
        <Route  path= '/Bookmark' element={<Bookmark/>} />
      </Routes>
    </QuoteProvider>

  
    </>
  )
}

export default App
