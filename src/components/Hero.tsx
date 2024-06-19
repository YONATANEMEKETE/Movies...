import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div className="relative -z-10 h-full mx-12 min-[1100px]:mx-4 mt-[12rem] min-[1100px]:mt-4">
      <Swiper
        className="h-[20rem] md:h-[25rem] lg:h-[30rem] min-[1100px]:h-screen w-full 
      overflow-hidden bg-white shadow-2xl drop-shadow-xl mb-12"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        speed={1000}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.300_.jpg"
            className="w-full h-full object-cover object-center rounded-lg aspect-video"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjA5ZjA3ZjMtMzg2ZC00ZDc4LTk3MTctYTE1ZTUzZDIzMjQyXkEyXkFqcGdeQXVyMTM1NjM2ODg1.300_.jpg"
            className="w-full h-full object-cover object-center rounded-lg aspect-video"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZDdlNTIwNjYtNzVhNS00MGVmLTk1ZGYtZmZiMjhiMmQ1ZjkwXkEyXkFqcGdeQXVyMTY3ODkyNDkz.300_.jpg"
            className="w-full h-full object-cover object-center rounded-lg aspect-video"
          />
        </SwiperSlide>
      </Swiper>

      <div
        className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-snug font-header font-bold text-center
       mx-auto w-3/4 min-[1100px]:absolute min-[1100px]:left-8 min-[1100px]:bottom-[20%] min-[1100px]:text-start 
       min-[1100px]:w-3/4 min-[1100px]:text-white min-[1100px]:ml-16 min-[1100px]:drop-shadow-2xl"
      >
        Discover Your Next{' '}
        <span className="min-[1100px]:text-myaccent min-[1100px]:drop-shadow-lg">
          Favorite
        </span>{' '}
        Movies...
      </div>
    </div>
  );
};

export default Hero;
