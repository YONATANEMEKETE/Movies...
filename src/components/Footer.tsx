const Footer = () => {
  return (
    <div className="">
      <div className="border-2 mx-6 pt-6">
        <div className="text-3xl font-title font-extrabold text-myaccent mx-auto text-center mb-4">
          Movies..
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <div className="text-lg font-header text-mymuted font-semibold hover:underline">
            Movies
          </div>
          <div className="text-lg font-header text-mymuted font-semibold hover:underline">
            Tv Shows
          </div>
          <div className="text-lg font-header text-mymuted font-semibold hover:underline">
            Genres
          </div>
          <div className="text-lg font-header text-mymuted font-semibold hover:underline">
            Actors
          </div>
          <div className="text-lg font-header text-mymuted font-semibold hover:underline">
            Directors
          </div>
        </div>

        <div className="socials flex items-center gap-x-2">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
