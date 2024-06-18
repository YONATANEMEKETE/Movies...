import { AlignJustify } from 'lucide-react';
import Container from './Container';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  return (
    <div className="">
      <Container
        className="fixed top-4 left-6 right-6 flex items-center justify-between
       bg-white px-4 min-[1100px]:px-8 py-4 rounded-lg shadow-md"
      >
        <div className="text-2xl font-title font-bold text-myaccent">
          MOVIES...
        </div>

        <div className="hidden md:flex items-center gap-x-2 lg:gap-x-4">
          <Button
            className="text-lg font-body font-semibold px-4"
            variant="ghost"
            size="lg"
          >
            Search
          </Button>
          <Button
            className="text-lg font-body font-semibold px-4"
            variant="ghost"
            size="lg"
          >
            Explore
          </Button>
          <Button
            className="text-lg font-body font-semibold px-4"
            variant="ghost"
            size="lg"
          >
            Favorites
          </Button>
        </div>

        <div className="hidden md:flex items-center gap-x-2">
          <Button
            className="text-lg font-body font-semibold"
            variant="secondary"
            size="default"
          >
            Sign In
          </Button>
          <Button
            className="text-lg font-body font-semibold py-4 bg-myaccent hover:bg-myaccentshade hover:text-white"
            variant="default"
            size="default"
          >
            Sign Up
          </Button>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="" asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex place-content-center"
              >
                <AlignJustify className="text-lg font-semibold" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-mymuted text-white text-lg font-body font-semibold">
              <DropdownMenuItem className=" hover:font-body hover:font-semibold">
                Search
              </DropdownMenuItem>
              <DropdownMenuItem className=" hover:font-body hover:font-semibold">
                Explore
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:font-body hover:font-semibold">
                Favorites
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
