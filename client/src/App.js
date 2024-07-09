
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import About from './pages/About'

function App() {



  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
