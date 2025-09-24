import LightAppleIcon from "@/public/registerOptions/light/apple.png";
import DarkAppleIcon from "@/public/registerOptions/dark/apple.png";
import Image from "next/image";

const AppleButton = () => {
  return (
    <button aria-label="Sign up with Apple" className="cursor-pointer">
      <Image
        src={LightAppleIcon}
        alt="Sign up with Apple button"
        className="w-48 dark:hidden"
      />
      <Image
        src={DarkAppleIcon}
        alt="Sign up with Apple button"
        className="w-48 hidden dark:block"
      />
    </button>
  );
};

export default AppleButton;
