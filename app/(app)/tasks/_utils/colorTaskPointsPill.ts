const colorTaskPointsPill = (isCompleted: boolean, isDue: boolean) => {
  if (!isCompleted && isDue) {
    return "bg-[#FEE2E2] text-[#991B1B]";
  }

  return "bg-[#BBF7D0] text-[#166534]";
};

export default colorTaskPointsPill;
