import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/AboutUs'
import Nav from '@/components/Nav'


function App() {

  return (



    <BrowserRouter>
      <Nav />
      <main className='h-screen mt-20' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>

    </BrowserRouter>


  )
}

export default App
