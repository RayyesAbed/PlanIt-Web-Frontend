import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PasswordInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Input
          name="password"
          type="password"
          placeholder={placeholder}
          className="w-[300px] font-semibold"
          required={true}
        />
      </PopoverTrigger>
      <PopoverContent className="w[300px]" align="center">
        Your password should at least include 8 characters and at least the
        following:
        <ol className="list-decimal list-inside">
          <li>A number</li>
          <li>A lowercase letter</li>
          <li>An uppercase letter</li>
          <li>A special letter</li>
        </ol>
      </PopoverContent>
    </Popover>
  );
};

export default PasswordInput;
