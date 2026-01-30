import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { bytesizedFont } from "@/app/layout";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} MARK. All rights reserved.
          </span>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Link href="https://mohdahsanrazakhan.gumroad.com/" target="_blank" rel="noopener noreferrer">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-lg shadow-none h-7 w-7 transition-all duration-200 hover:bg-gray-100 group cursor-pointer">
                    <img src="/gumroad.svg" alt="Gumroad" className="h-5 w-5 grayscale group-hover:grayscale-0" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Gumroad</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link href="https://github.com/mohdahsanrazakhan" target="_blank" rel="noopener noreferrer">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-lg shadow-none h-7 w-7 transition-all duration-200 hover:bg-gray-100 group cursor-pointer">
                    <img src="/github.svg" alt="GitHub" className="h-5 w-5 grayscale group-hover:grayscale-0" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link href="https://mohdahsanrazakhan.hashnode.dev/" target="_blank" rel="noopener noreferrer">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-lg shadow-none h-7 w-7 transition-all duration-200 hover:bg-gray-100 group cursor-pointer">
                    <img src="/hashnode.svg" alt="Hashnode" className="h-5 w-5 grayscale group-hover:grayscale-0" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hashnode</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link href="https://x.com/MdAhsanRazaKhan" target="_blank" rel="noopener noreferrer">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-lg shadow-none h-7 w-7 transition-all duration-200 hover:bg-gray-100 group cursor-pointer">
                    <img src="/x.svg" alt="X" className="h-5 w-5 grayscale group-hover:grayscale-0" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>X</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link href="https://www.linkedin.com/in/mohd-ahsan-raza-khan" target="_blank" rel="noopener noreferrer">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-lg shadow-none h-7 w-7 transition-all duration-200 hover:bg-gray-100 group cursor-pointer">
                    <img src="/linkedin.svg" alt="Linkedin" className="h-5 w-5 rounded grayscale group-hover:grayscale-0" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Linkedin</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link href="https://www.instagram.com/mohd.ahsanrazakhan/" target="_blank" rel="noopener noreferrer">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-lg shadow-none h-7 w-7 transition-all duration-200 hover:bg-gray-100 group cursor-pointer">
                    <img src="/instagram.svg" alt="Instagram" className="h-5 w-5 grayscale group-hover:grayscale-0" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
        </div>
        <div className="h-16 xs:h-20 sm:h-30 md:h-40 overflow-hidden">
          <p className={`${bytesizedFont.className} text-[12em] xs:text-[17em] sm:text-[20em] md:text-[25em] text-center text-white drop-shadow-xl leading-[0.6em]`}>MARK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
