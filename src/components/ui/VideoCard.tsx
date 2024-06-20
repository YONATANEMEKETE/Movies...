type CardProps = {
  title: string;
  image: string;
};

const VideoCard = ({ title, image }: CardProps) => {
  return (
    <div className="w-max  p-6 bg-mymuted overflow-hidden rounded-lg  cursor-pointer">
      {/* <img
        src={image}
        className="w-[10rem] h-[16rem]  object-cover object-center rounded-lg mb-4"
        alt="video"
      /> */}

      <div className="text-lg text-white font-semibold font-body mx-auto text-center w-[10rem]">
        {title}
      </div>
    </div>
  );
};

export default VideoCard;
