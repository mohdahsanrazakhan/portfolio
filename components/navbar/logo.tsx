import Link from "next/link";
import { bytesizedFont } from "@/app/layout";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <p className={`${bytesizedFont.className} text-3xl`}>MARK</p>
  </Link>
);
