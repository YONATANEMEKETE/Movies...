const VideoCard = () => {
  return (
    <div className="w-max  p-6 bg-mymuted overflow-hidden rounded-lg shadow-2xl cursor-pointer">
      <img
        src="https://m.media-amazon.com/images/M/MV5BNmYzMWVjNmQtNjJjNy00M2Y4LTkzZjQtZWQ5NmYzMjRjMDIzXkEyXkFqcGdeQXVyMTM1NjM2ODg1.300_.jpg"
        className="w-[10rem] h-[16rem]  object-cover object-center rounded-lg mb-4"
        alt="video"
      />

      <div className="text-lg text-white font-semibold font-body mx-auto text-center w-[10rem]">
        Furiosa: a MAD MAX SAGA
      </div>
    </div>
  );
};

export default VideoCard;
