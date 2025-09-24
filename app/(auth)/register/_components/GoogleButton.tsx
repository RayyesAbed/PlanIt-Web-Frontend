import LightGoogleIcon from "@/public/registerOptions/light/google.png";
import DarkGoogleIcon from "@/public/registerOptions/dark/google.png";
import Image from "next/image";

const GoogleButton = () => {
  return (
    <button aria-label="Sign up with Google" className="cursor-pointer">
      <Image
        src={LightGoogleIcon}
        alt="Sign up with Google button"
        className="w-48 dark:hidden"
      />
      <Image
        src={DarkGoogleIcon}
        alt="Sign up with Google button"
        className="w-48 hidden dark:block"
      />
    </button>
  );
};

export default GoogleButton;
