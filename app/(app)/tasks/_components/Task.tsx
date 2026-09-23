import { Task } from "@/app/_types/App";
import formatTime from "@/app/_utils/formatTime";
import { Bike, ChevronDown, CircleX, Pencil } from "lucide-react";

const TaskComponent = ({ task }: { task: Task }) => {
  return (
    <div className="bg-[#ececec] w-[100%] flex rounded-[45px] p-7 items-center gap-6 mt-5">
      <div className="bg-[#7A0000] rounded-2xl p-3 active:scale-97 cursor-pointer text-white">
        <Bike />
      </div>
      <div className="flex-[40%] font-semibold">{task.name}</div>
      <div className="flex flex-[1%] gap-5 text-center items-center">
        <div className="bg-[#F3F4F6] rounded-[45px] px-5 py-1 font-semibold">
          {formatTime(task.dueDate)}
        </div>
        <div className="bg-[#BFDBFE] text-[#1E40AF] rounded-[45px] px-5 py-1 font-semibold">
          FOCUS
        </div>
        <div className="bg-[#BBF7D0] text-[#166534] rounded-[45px] px-5 py-1 font-semibold">
          +50XP
        </div>
      </div>
      <div className="flex flex-[10%] gap-5">
        <div className="bg-white hover:bg-[#8e8706] text-[#8e8706] hover:text-white p-1.5 rounded-2xl transition-colors cursor-pointer">
          <Pencil />
        </div>
        <div className="bg-white hover:bg-[#7A0000] text-[#7A0000] hover:text-white p-1.5 rounded-2xl transition-colors cursor-pointer">
          <CircleX />
        </div>
        <div className="bg-white hover:bg-[#3a3a3a] text-[#3a3a3a] hover:text-white p-1.5 rounded-2xl transition-colors cursor-pointer">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
