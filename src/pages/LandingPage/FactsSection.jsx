import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';

const Facts = [
    { fact: 'I am from Multan' },
  { fact: 'I am good in Badminton' },
  { fact: 'My hobby is watching Movies and Series' },
  { fact: 'I Like Biryani' },
];

const FactsSection = ({id}) => {
  const swiperRef = useRef(null);

  const swipeLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const swipeRight = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section id={id} className="bg-[#1E293B] py-20 text-[#E2E8F0] scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-4">Here are some Fun Facts About Me</h2>
        <div className="flex justify-center items-center mb-2">
          <div className="h-1 w-20 bg-[#E2E8F0]"></div>
        </div>
        <div className="relative  mx-auto px-4">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            className="rounded-lg"
          >
            {Facts.map((fact, index) => (
  <SwiperSlide key={index}>
  <div className="p-8 rounded-lg shadow-4xl">
    <p className="md:text-2xl italic mb-6">
      “{fact.fact}”
    </p>
  </div>
</SwiperSlide>
            ))}
          </Swiper>
          <button
            className="absolute active:scale-95 left-0 top-1/2 transform -translate-y-1/2 p-3 bg-[#00BFA5] rounded-full hover:bg-[#009e8a] transition-colors duration-300 text-white z-10 shadow-md"
            onClick={swipeLeft}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className="absolute active:scale-95 right-0 top-1/2 transform -translate-y-1/2 p-3 bg-[#00BFA5] rounded-full hover:bg-[#009e8a] transition-colors duration-300 text-white z-10 shadow-md"
            onClick={swipeRight}
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
