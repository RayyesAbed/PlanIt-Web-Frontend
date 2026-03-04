import LightAppleIcon from "@/public/apple/appleDarkIcon.png";
import DarkAppleIcon from "@/public/apple/appleLightIcon.png";
import Image from "next/image";

const AppleButton = ({
  buttonAlt,
  ariaLabel,
  onClick,
}: {
  buttonAlt: string;
  ariaLabel: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button aria-label={ariaLabel} className="cursor-pointer" onClick={onClick}>
      <Image
        src={LightAppleIcon}
        alt={buttonAlt}
        className="w-10 dark:hidden"
      />
      <Image
        src={DarkAppleIcon}
        alt={buttonAlt}
        className="w-10 hidden dark:block"
      />
    </button>
  );
};

export default AppleButton;
