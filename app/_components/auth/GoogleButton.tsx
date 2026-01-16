import LightGoogleIcon from "@/public/google/googleDarkIcon.svg";
import DarkGoogleIcon from "@/public/google/googleLightIcon.svg";
import Image from "next/image";

const GoogleButton = ({
  buttonAlt,
  ariaLabel,
}: {
  buttonAlt: string;
  ariaLabel: string;
}) => {
  return (
    <button aria-label={ariaLabel} className="cursor-pointer">
      <Image
        src={LightGoogleIcon}
        alt={buttonAlt}
        className="w-10 dark:hidden"
      />
      <Image
        src={DarkGoogleIcon}
        alt={buttonAlt}
        className="w-10 hidden dark:block"
      />
    </button>
  );
};

export default GoogleButton;
