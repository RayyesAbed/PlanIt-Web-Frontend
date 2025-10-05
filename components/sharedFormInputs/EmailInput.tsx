import { Input } from "@/components/ui/input";

const EmailInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <Input
      name="email"
      type="email"
      placeholder={placeholder}
      className="w-[300px] font-semibold"
      required={true}
    />
  );
};

export default EmailInput;
