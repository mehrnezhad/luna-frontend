'use client';

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ReactSlider = ({ images }: { images: string }) => {

  const sliderImages = typeof images === 'string' ? JSON.parse(images) : images 
  
  return (
   
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation

        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiper.update(); // Force update if needed
        }}
      >
        {sliderImages.map((img: string, index: number) => (
          <SwiperSlide key={index} className="flex justify-center items-center ">
            <div className="relative w-full h-full">
              <img
                src={`${process.env.NEXT_PUBLIC_HOST_ADDR}/${img}`}
                alt={`Slide ${index + 1}`}
                className='w-full md:h-[350px] h-250'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
  );
};

export default ReactSlider;
