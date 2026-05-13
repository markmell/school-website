function Footer() {

  return (

    <footer className="bg-blue-950 text-white py-16">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">

        {/* School Info */}

        <div>

          <h2 className="text-3xl font-bold mb-5">
            UEP-PRMC
          </h2>

          <p className="text-gray-300 leading-8">
            University of Eastern Philippines
            Pedro Rebadulla Memorial Campus
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-300">

            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>

            <li>
              <a href="/programs" className="hover:text-yellow-400">
                Programs
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h2 className="text-2xl font-bold mb-5">
            Contact Us
          </h2>

          <p className="text-gray-300 mb-3">
            Catubig, Northern Samar
          </p>

          <p className="text-gray-300 mb-3">
            ueprmcampus@gmail.com
          </p>

          <p className="text-gray-300">
            +639xx-xxx-xxx
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">

        © 2026 UEPPRMC University. All rights reserved.

      </div>

    </footer>

  )
}

export default Footer