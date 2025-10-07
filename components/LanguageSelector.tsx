import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector = () => {
  return (
    <div className="w-[300px]">
      <Select name="language">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Your language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="english">🇬🇧 English</SelectItem>
          <SelectItem value="german">🇩🇪 German</SelectItem>
          <SelectItem value="arabic">🇸🇦 Arabic</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
