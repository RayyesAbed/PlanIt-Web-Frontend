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
  const { t } = useTranslation("Register");

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
          required={true}
        />
      </PopoverTrigger>
      <PopoverContent className="w[300px]" align="center">
        {t("passwordPolicy.text")}
        <ol className="list-decimal list-inside">
          <li>{t("passwordPolicy.number")}</li>
          <li>{t("passwordPolicy.lowercaseLetter")}</li>
          <li>{t("passwordPolicy.uppercaseLetter")}</li>
          <li>{t("passwordPolicy.specialCharacter")}</li>
        </ol>
      </PopoverContent>
    </Popover>
  );
};

export default PasswordInput;
