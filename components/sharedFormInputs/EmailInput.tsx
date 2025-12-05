import { Input } from "@/components/ui/input";
import React from "react";

const EmailInput = ({
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
      name="email"
      type="email"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-[300px] font-semibold"
      required={true}
    />
  );
};

export default EmailInput;
