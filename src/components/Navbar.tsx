import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (

    <header className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5 bg-white/90 backdrop-blur-md rounded-b-3xl shadow-lg">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <img
            src="/uep_seal.png"
            alt="School Logo"
            className="w-14 h-14 md:w-20 md:h-20 rounded-full"
          />

         <h1 className="text-lg md:text-2xl font-bold">
            UNIVERSITY OF EASTERN PHILIPPINES - PEDRO REBADULLA MEROIAL CAMPUS
          </h1>

        </div>

        {/* Navigation */}


          <div
              className="md:hidden text-3xl font-bold cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              >
              ☰
            </div>





          <nav className="hidden md:flex gap-8 text-gray-800 font-semibold">

          <a href="/" className="transition duration-300 hover:text-blue-700 hover:-translate-y-1">
            Home
          </a>

          <a href="/about" className="transition duration-300 hover:text-blue-700 hover:-translate-y-1">
            About
          </a>

          <a href="/admission" className="transition duration-300 hover:text-blue-700 hover:-translate-y-1">
            Admission
          </a>

          <a href="/programs" className="transition duration-300 hover:text-blue-700 hover:-translate-y-1">
            Programs
          </a>

          <a href="/news" className="transition duration-300 hover:text-blue-700 hover:-translate-y-1">
            News
          </a>

          <a href="/contact" className="transition duration-300 hover:text-blue-700 hover:-translate-y-1">
            Contact
          </a>

        </nav>

      </div>

    </header>

  )
}

export default Navbar