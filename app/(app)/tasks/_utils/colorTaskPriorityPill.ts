const colorTaskPriorityPill = (taskPriority: string) => {
  if (taskPriority == "Someday") {
    return "bg-[#DCFCE7] text-[#166534]";
  } else if (taskPriority == "Focus") {
    return "bg-[#BFDBFE] text-[#1E40AF]";
  }

  return "bg-[#fecbbf] text-[#af421e]";
};

export default colorTaskPriorityPill;
