import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Admission from "./pages/Admission"
import Programs from "./pages/Programs"
import News from "./pages/News"
import Contact from "./pages/Contact"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/admission" element={<Admission />} />

        <Route path="/programs" element={<Programs />} />

        <Route path="/news" element={<News />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App