import Image from "next/image";
import PlanItDaytimeLogo from "@/public/logo/PlanItDaytimeLogo.svg";
import PlanItDarkLogo from "@/public/logo/PlanItDarkLogo.svg";
import Link from "next/link";

const Logo = ({ theme }: { theme: string }) => {
  return (
    <Link href="/">
      <Image
        src={theme === "light" ? PlanItDaytimeLogo : PlanItDarkLogo}
        width={160}
        height={160}
        alt={theme === "light" ? "PlanIt Daytime Logo" : "PlanIt Dark Logo"}
        className="rounded-4xl"
      />
    </Link>
  );
};

export default Logo;
