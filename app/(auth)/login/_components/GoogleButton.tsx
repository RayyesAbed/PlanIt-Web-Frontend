import LightGoogleIcon from "@/public/google/googleDarkIcon.svg";
import DarkGoogleIcon from "@/public/google/googleLightIcon.svg";
import Image from "next/image";

const GoogleButton = () => {
  return (
    <button aria-label="Sign in with Google" className="cursor-pointer">
      <Image
        src={LightGoogleIcon}
        alt="Sign in with Google button"
        className="w-10 dark:hidden"
      />
      <Image
        src={DarkGoogleIcon}
        alt="Sign in with Google button"
        className="w-10 hidden dark:block"
      />
    </button>
  );
};

export default GoogleButton;
