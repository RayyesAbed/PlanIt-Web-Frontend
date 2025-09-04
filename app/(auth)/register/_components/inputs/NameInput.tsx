import { Input } from "@/components/ui/input";

const NameInput = () => {
  return (
    <Input
      name="name"
      type="text"
      placeholder="Name"
      className="w-[300px] font-semibold"
      required={true}
    />
  );
};

export default NameInput;
