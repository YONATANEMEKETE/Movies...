import { Button } from './ui/button';

const Cta = () => {
  return (
    <div className="mt-12 mb-12 pt-8 pb-8 px-6 min-[1100px]:px-16 mx-8 min-[1100px]:mx-16 bg-mysecondary rounded-lg min-[900px]:flex items-center justify-between">
      <div>
        <div className="w-3/4 min-[900px]:w-1/ text-3xl font-title font-extrabold mb-4">
          Discover Movies You'll Love
        </div>
        <p className="w-3/4 min-[900px]:w-1/ text-lg font-body font-semibold mb-8">
          Get personalized Movie recommendations based on your taste Just for
          You.
        </p>
      </div>

      <div className="flex items-center gap-x-4">
        <Button
          size="lg"
          className="bg-myaccent text-lg font-title font-semibold hover:bg-myaccentshade"
        >
          Get Started
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg font-title font-semibold"
        >
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Cta;
