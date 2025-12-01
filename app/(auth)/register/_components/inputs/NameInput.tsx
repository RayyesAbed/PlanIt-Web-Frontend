import { Input } from "@/components/ui/input";
import React from "react";

const NameInput = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Input
      name="name"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-[300px] font-semibold"
      required={true}
    />
  );
};

export default NameInput;
