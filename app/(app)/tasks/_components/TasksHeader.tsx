import { CirclePlus } from "lucide-react";
import TasksNavigation from "./TasksNavigation";

const TasksHeader = () => {
  return (
    <section className="bg-white dark:bg-[#5b5b5b] absolute top-16 p-7 w-[97.5%] h-[85%] rounded-[45px] shadow-xl">
      <section className="flex items-center">
        <h1 className="text-[#393838] dark:text-white text-[36px] font-bold">
          Tasks
        </h1>

        <input
          className="bg-[#3E3E3E] text-white px-5 py-2 flex-1/3 rounded-[45px] font-semibold mx-24"
          placeholder="Search for a task..."
        />

        <CirclePlus size={40} color="#000000" className="cursor-pointer" />
      </section>
      <TasksNavigation />
    </section>
  );
};

export default TasksHeader;
