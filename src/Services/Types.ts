export type VideoData = {
  movies: collection[];
};

export type collection = {
  title: string;
  Year: string;
  timeline: string;
  rating: string;
  image: string;
};

export type BoxVideos = {
  movies: BoxCollection[];
};

export type BoxCollection = {
  imdbRating: string;
  title: string;
  posterImage: string;
};
