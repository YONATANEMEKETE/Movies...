import Genres from './ui/Genres';
import { useQuery } from '@tanstack/react-query';
import { VideoData, BoxVideos } from '@/Services/Types';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '1e01c67fb5mshbe80fcfd1c871b9p1bb669jsn718efa247109',
    'x-rapidapi-host': 'moviesverse1.p.rapidapi.com',
  },
};

const VideosRecomendation = () => {
  const fetchMovies = async () => {
    const url = 'https://moviesverse1.p.rapidapi.com/most-popular-movies';

    try {
      const response = await fetch(url, options);
      const result = response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBoxoffies = async () => {
    const urlBox = 'https://moviesverse1.p.rapidapi.com/top-box-office';
    try {
      const response = await fetch(urlBox, options);
      const result = response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  const { data: popMovies } = useQuery<VideoData>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });

  const { data: boxoffies } = useQuery<BoxVideos>({
    queryKey: ['boxoffies'],
    queryFn: fetchBoxoffies,
  });

  if (popMovies?.message) {
    console.log('No data');
    return (
      <div className="mt-24 w-5/6 h-[30rem] mx-auto text-center pt-52 shadow-lg rounded-xl bg-white text-2xl font-body font-bold">
        OOps No videos Available!!!
      </div>
    );
  }

  return (
    <div className="mt-24 space-y-6">
      <Genres
        popular={popMovies?.movies}
        // Recommended={boxoffies?.movies}
        title="Most Popular"
      />
      <Genres
        Recommended={boxoffies?.movies}
        // popular={popMovies?.movies}
        title="Recommendation"
      />
    </div>
  );
};

export default VideosRecomendation;
