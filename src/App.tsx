import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/AboutUs'
import Nav from '@/components/Nav'
import Footer from './components/Footer'


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer/>
     
    </BrowserRouter>


  )
}

export default App
