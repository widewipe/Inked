import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center">
      <Image
        src="/logo.svg"
        className="dark:hidden"
        height="80"
        width="80"
        alt="logo"
      />
      <Image
        src="/logo-dark.svg"
        className="light:hidden"
        height="80"
        width="80"
        alt="logo"
      />
    </div>
  );
};
