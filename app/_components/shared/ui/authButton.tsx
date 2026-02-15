import { Button } from "./button";

function AuthButton({ ...props }: React.ComponentProps<"button">) {
  return (
    <Button
      className="w-[150px] cursor-pointer bg-[#242424] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2),inset_0_6px_16px_rgba(0,0,0,0.8)] active:scale-95 text-white"
      {...props}
    />
  );
}

export default AuthButton;
