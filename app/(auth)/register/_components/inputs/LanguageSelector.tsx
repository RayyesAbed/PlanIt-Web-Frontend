import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/shared/ui/select";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({
  value,
  onSelect,
}: {
  value: string;
  onSelect: (language: string) => void;
}) => {
  const { t } = useTranslation("LanguageSelector");

  return (
    <div className="w-[300px]">
      <Select name="language" value={value} onValueChange={onSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={t("yourLanguage")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">🇬🇧 {t("english")}</SelectItem>
          <SelectItem value="de">🇩🇪 {t("german")}</SelectItem>
          <SelectItem value="ar">🇸🇦 {t("arabic")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
