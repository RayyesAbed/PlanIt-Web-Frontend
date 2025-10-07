import { Input } from "@/components/ui/input";

const NameInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <Input
      name="name"
      type="text"
      placeholder={placeholder}
      className="w-[300px] font-semibold"
      required={true}
    />
  );
};

export default NameInput;
