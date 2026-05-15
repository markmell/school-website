import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewsAdmin from "./components/NewsAdmin";
import Login from "./pages/Login";
import Home from "./pages/Home"
import About from "./pages/About"
import Admission from "./pages/Admission"
import Programs from "./pages/Programs"
import News from "./pages/News"
import Contact from "./pages/Contact"


function App() {

  return (

    <BrowserRouter>
  <div className="min-h-screen bg-yellow-50">

    <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/admission" element={<Admission />} />

        <Route path="/programs" element={<Programs />} />

        <Route path="/news" element={<News />} /> 

        <Route path="/contact" element={<Contact />} />

        <Route path="/admin-news" element={<NewsAdmin />} />
        
        <Route path="/login" element={<Login />} />

      </Routes>

  </div>
</BrowserRouter>

  )
}


export default App