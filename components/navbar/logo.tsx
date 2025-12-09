import Image from "next/image";
import { microFont, bytesizedFont } from "@/app/layout";

export const Logo = () => (
  <div className="flex items-center gap-2">
    {/* <div>
      <Image src="/nlogoo.png" alt="Logo" width={26} height={26} />
    </div> */}
  <p className={`${bytesizedFont.className} text-3xl`}>MARK</p>
  </div>
);