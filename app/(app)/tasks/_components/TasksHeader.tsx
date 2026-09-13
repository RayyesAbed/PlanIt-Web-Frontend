import { CirclePlus } from "lucide-react";
import TasksNavigation from "./TasksNavigation";
import { useState } from "react";
import Dialog from "../../_components/dialog/shared/Dialog";
import TaskDialog from "../../_components/dialog/task/TaskDialog";

const TasksHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="bg-white dark:bg-[#5b5b5b] absolute top-16 p-7 w-[95%] lg:w-[97.5%] ml-[2.5%] lg:ml-0 h-[85%] rounded-[45px] shadow-xl">
      <Dialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen}>
        <TaskDialog />
      </Dialog>
      <section className="flex items-center">
        <h1 className="hidden lg:block text-[#393838] dark:text-white text-[36px] font-bold">
          Tasks
        </h1>

        <input
          className="bg-[#3E3E3E] text-white px-5 py-2 flex-1/3 rounded-[45px] font-semibold mr-5 lg:mx-24"
          placeholder="Search for a task..."
        />

        <CirclePlus
          size={40}
          color="#000000"
          className="cursor-pointer"
          onClick={() => setIsDialogOpen(true)}
        />
      </section>
      <TasksNavigation />
    </section>
  );
};

export default TasksHeader;
