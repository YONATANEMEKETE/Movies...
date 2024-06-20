import VideoCard from './VideoCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { collection, BoxCollection } from '@/Services/Types';

type GenreProp = {
  Recommended?: BoxCollection[];
  popular?: collection[];
  title: string;
};

const Genres = ({ title, Recommended, popular }: GenreProp) => {
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

  if (popular || Recommended) {
    return (
      <div className="mx-16 pl-8 h-max flex items-start flex-col gap-y-6 mb-16">
        <div className="text-[2rem] font-bold font-title">{title}</div>

        <div className="h-[22rem] w-full min-[840px]:w-[90%] min-[1024px]:w-full -z-10">
          <Slider {...settings} className="flex items-start gap-x-6">
            {title === 'Most Popular'
              ? popular?.map((item) => (
                  <VideoCard
                    key={item.title}
                    title={item.title}
                    image={item.image}
                  />
                ))
              : Recommended?.map((item) => (
                  <VideoCard
                    key={item.title}
                    title={item.title}
                    image={item.posterImage}
                  />
                ))}
          </Slider>
        </div>
      </div>
    );
  }
};

export default Genres;
