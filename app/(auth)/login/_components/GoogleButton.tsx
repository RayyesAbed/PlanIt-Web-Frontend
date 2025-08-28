import LightGoogleIcon from "@/public/loginOptions/light/google.png";
import DarkGoogleIcon from "@/public/loginOptions/dark/google.png";
import Image from "next/image";

const GoogleButton = () => {
  return (
    <button aria-label="Sign in with Google" className="cursor-pointer">
      <Image
        src={LightGoogleIcon}
        alt="Sign in with Google button"
        className="w-48 dark:hidden"
      />
      <Image
        src={DarkGoogleIcon}
        alt="Sign in with Google button"
        className="w-48 hidden dark:block"
      />
    </button>
  );
};

export default GoogleButton;
