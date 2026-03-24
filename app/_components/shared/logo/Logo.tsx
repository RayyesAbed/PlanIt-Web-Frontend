import Image from "next/image";
import PlanItDaytimeLogo from "@/public/logo/PlanItDaytimeLogo.svg";
import PlanItDarkLogo from "@/public/logo/PlanItDarkLogo.svg";
import Link from "next/link";

const Logo = ({
  daytimeAlt,
  darkAlt,
}: {
  daytimeAlt: string;
  darkAlt: string;
}) => {
  return (
    <Link href="/">
      <Image
        src={PlanItDaytimeLogo}
        width={160}
        height={160}
        alt={daytimeAlt}
        className="rounded-4xl block dark:hidden shadow-xl"
      />
      <Image
        src={PlanItDarkLogo}
        width={160}
        height={160}
        alt={darkAlt}
        className="rounded-4xl hidden dark:block shadow-xl"
      />
    </Link>
  );
};

export default Logo;
