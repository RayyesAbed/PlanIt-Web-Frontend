import { Input } from "@/components/ui/input";

const EmailInput = () => {
  return (
    <Input
      name="email"
      type="email"
      placeholder="Email"
      className="w-[300px] font-semibold"
      required={true}
    />
  );
};

export default EmailInput;
