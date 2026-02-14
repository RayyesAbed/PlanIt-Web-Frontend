import Image from "next/image";
import PlanItDaytimeLogo from "@/public/logo/PlanItDaytimeLogo.svg";
import PlanItDarkLogo from "@/public/logo/PlanItDarkLogo.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={PlanItDaytimeLogo}
        width={160}
        height={160}
        alt="PlanIt Daytime Logo"
        className="rounded-4xl block dark:hidden shadow-xl"
      />
      <Image
        src={PlanItDarkLogo}
        width={160}
        height={160}
        alt="PlanIt Dark Logo"
        className="rounded-4xl hidden dark:block shadow-xl"
      />
    </Link>
  );
};

export default Logo;
