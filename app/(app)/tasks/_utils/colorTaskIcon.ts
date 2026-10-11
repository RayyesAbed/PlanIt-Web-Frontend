const colorTaskIcon = (isCompleted: boolean) => {
  if (!isCompleted) {
    return "bg-[#7A0000]";
  }

  return "bg-[#1E3F20]";
};

export default colorTaskIcon;
