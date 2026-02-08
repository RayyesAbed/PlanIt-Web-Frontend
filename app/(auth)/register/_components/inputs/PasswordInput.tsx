import { Input } from "@/app/_components/shared/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/shared/ui/popover";
import { useTranslation } from "react-i18next";

const PasswordInput = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const registerLocale = useTranslation("Register");
  const formStatusMessageLocale = useTranslation("FormStatus");

  return (
    <Popover>
      <PopoverTrigger>
        <Input
          name="password"
          type="password"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-[300px] font-semibold"
          pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}"
          title={formStatusMessageLocale.t("InvalidPasswordPopup")}
          required={true}
        />
      </PopoverTrigger>
      <PopoverContent className="w[300px]" align="center">
        {registerLocale.t("passwordPolicy.text")}
        <ol className="list-decimal list-inside">
          <li>{registerLocale.t("passwordPolicy.number")}</li>
          <li>{registerLocale.t("passwordPolicy.lowercaseLetter")}</li>
          <li>{registerLocale.t("passwordPolicy.uppercaseLetter")}</li>
          <li>{registerLocale.t("passwordPolicy.specialCharacter")}</li>
        </ol>
      </PopoverContent>
    </Popover>
  );
};

export default PasswordInput;
