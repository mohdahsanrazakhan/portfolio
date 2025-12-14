import { Button } from "@/components/ui/button";
import Signal from '../../public/signal.svg'
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Link href="https://signal.me/#p/md_mark.11" target="_blank" rel="noopener noreferrer" className="leading-[0]">
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="outline"
                  className="rounded-full shadow-none"
                  size="icon"
                >
                  <Image src={Signal} alt="Signal" className="w-7 h-7 rounded-sm grayscale brightness-0" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Connect on Signal</p>
              </TooltipContent>
            </Tooltip>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
