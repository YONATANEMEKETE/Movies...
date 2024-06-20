import VideoCard from './VideoCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Genres = () => {
  var settings = {
    className: `slider`,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 774,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-16 pl-8 h-max flex items-start flex-col gap-y-6">
      <div className="text-[2rem] font-bold font-title">Actions</div>

      <div className="h-[22rem] w-full min-[840px]:w-5/6 min-[1024px]:w-full">
        <Slider {...settings} className="flex items-start gap-x-4">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </Slider>
      </div>
    </div>
  );
};

export default Genres;
