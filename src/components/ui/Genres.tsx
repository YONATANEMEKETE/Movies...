import VideoCard from './VideoCard';

const Genres = () => {
  return (
    <div className=" mx-16 h-max flex items-start flex-col gap-y-6">
      <div className="text-[2rem] font-bold font-title">Actions</div>

      <div className="flex items-start gap-x-6">
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default Genres;
