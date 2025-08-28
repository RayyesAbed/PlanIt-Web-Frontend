import LightAppleIcon from "@/public/loginOptions/light/apple.png";
import DarkAppleIcon from "@/public/loginOptions/dark/apple.png";
import Image from "next/image";

const AppleButton = () => {
  return (
    <button aria-label="Sign in with Apple" className="cursor-pointer">
      <Image
        src={LightAppleIcon}
        alt="Sign in with Apple button"
        className="w-48 dark:hidden"
      />
      <Image
        src={DarkAppleIcon}
        alt="Sign in with Apple button"
        className="w-48 hidden dark:block"
      />
    </button>
  );
};

export default AppleButton;
