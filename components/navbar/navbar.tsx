import { Button } from "@/components/ui/button";
import { MailLogo } from "../icons";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Link
            href="mailto:hello@mohdahsanrazakhan.com"
            className="leading-[0]"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full shadow-none !h-9 !w-9 transition-all duration-200 hover:bg-foreground group">
                  <MailLogo className="h-5 w-5 fill-current transition-all duration-200 text-foreground group-hover:text-background" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Connect via Email</p>
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
