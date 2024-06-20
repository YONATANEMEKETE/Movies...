import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="">
      <div className=" mx-6 pt-6">
        <div className="xl:flex items-center justify-between">
          <div className="text-3xl font-title font-extrabold text-myaccent mx-auto text-center mb-4">
            Movies..
          </div>

          <div className="flex flex-col min-[600px]:flex-row gap-x-4 items-center gap-y-2 mb-8 mx-auto w-max">
            <div className="text-lg font-header text- font-semibold hover:underline">
              Movies
            </div>
            <div className="text-lg font-header text- font-semibold hover:underline">
              Tv Shows
            </div>
            <div className="text-lg font-header text- font-semibold hover:underline">
              Genres
            </div>
            <div className="text-lg font-header text- font-semibold hover:underline">
              Actors
            </div>
            <div className="text-lg font-header text- font-semibold hover:underline">
              Directors
            </div>
          </div>

          <div className=" flex items-center gap-x-4 border w-max mx-auto mb-8">
            <div className="text-2xl font-body font-semibold">
              <FaFacebookSquare />
            </div>
            <div className="text-2xl font-body font-semibold">
              <RiInstagramFill />
            </div>
            <div className="text-2xl font-body font-semibold">
              <FaXTwitter />
            </div>
            <div className="text-2xl font-body font-semibold">
              <FaLinkedin />
            </div>
            <div className="text-2xl font-body font-semibold">
              <FiYoutube />
            </div>
          </div>
        </div>

        <div className="w-full border border-mymuted mb-6"></div>

        <div className="border w-max mx-auto text-center flex flex-col lg:flex-row-reverse lg:w-full lg:px-12 justify-between items-center gap-y-6">
          <div className="flex flex-col md:flex-row gap-x-4 items-center gap-y-2 underline font-header font-semibold">
            <p>Privacy Policy</p>
            <p>Cookie Setting</p>
            <p>Terms and Agreement</p>
          </div>

          <div className=" font-title">
            © 2022. Movies... All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
