import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="max-w-6xl mx-auto mt-35 rounded-xl overflow-hidden shadow-xl border border-gray-200"
    
    >
      <SwiperSlide>
        <div
          className="h-[220px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: `url(${slide1})` }}
        >
          <div className="bg-black/50 p-8 rounded-xl text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white">
              Welcome to UEP
            </h1>

            <p className="text-white mt-4">
              Empowering students through education
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="h-[350px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${slide2})` }}
        >
          <div className="bg-black/50 p-8 rounded-xl text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white">
              Academic Excellence
            </h1>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="h-[350px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${slide3})` }}
        >
          <div className="bg-black/50 p-8 rounded-xl text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-white">
              Future Starts Here
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider