import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { GithubLogo, HashnodeLogo, InstagramLogo, LinkedInLogo, XLogo } from "./icons";
import { bytesizedFont } from "@/app/layout";

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

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="https://github.com/mohdahsanrazakhan" target="_blank" rel="noopener noreferrer">
              <GithubLogo className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/mohd.ahsanrazakhan/" target="_blank" rel="noopener noreferrer">
              <HashnodeLogo className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/MdAhsanRazaKhan" target="_blank" rel="noopener noreferrer">
              <XLogo className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/mohd-ahsan-raza-khan" target="_blank" rel="noopener noreferrer">
              <LinkedInLogo className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/mohd.ahsanrazakhan/" target="_blank" rel="noopener noreferrer">
              <InstagramLogo className="h-5 w-5" />
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
