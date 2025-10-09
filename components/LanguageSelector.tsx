import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t } = useTranslation("LanguageSelector");

  return (
    <div className="w-[300px]">
      <Select name="language">
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
