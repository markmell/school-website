

import Slider from "../components/Slider"
import Navbar from "../components/Navbar"
import ProgramsSection from "../components/ProgramsSection"
import NewsSection from "../components/NewsSection"
import Footer from "../components/Footer"

function Home() {

  return (

    <div>

      <Navbar />
      <div className="pt-40">

      <Slider />

      <ProgramsSection />

      <NewsSection />

      <Footer />

    </div>

    </div>

  )
}

export default Home