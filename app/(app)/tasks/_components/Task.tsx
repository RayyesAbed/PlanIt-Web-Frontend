import { Task } from "@/app/_types/App";
import formatTime from "@/app/_utils/formatTime";
import { Bike, ChevronDown, CircleX, Pencil } from "lucide-react";
import { Spinner } from "@/app/_components/shared/ui/spinner";
import mapTaskToIcon from "../_utils/mapTaskToIcon";
import colorTaskPriorityPill from "../_utils/colorTaskPriorityPill";
import colorTaskPointsPill from "../_utils/colorTaskPointsPill";
import { useMutation } from "@apollo/client/react";
import {
  COMPLETE_TASK,
  DELETE_TASK,
  GET_USER_TASKS,
} from "@/app/_graphql/typeDefs";
import colorTaskIcon from "../_utils/colorTaskIcon";

const TaskComponent = ({ task }: { task: Task }) => {
  const TaskIcon = mapTaskToIcon(task.name);

  const [completeTask, { loading }] = useMutation<Task>(COMPLETE_TASK, {
    refetchQueries: [{ query: GET_USER_TASKS }],
  });
  const [deleteTask] = useMutation<Task>(DELETE_TASK, {
    refetchQueries: [{ query: GET_USER_TASKS }],
  });

  const sanitizedTask = {
    _id: task._id,
    name: task.name,
    description: task.description,
    dueDate: task.dueDate,
    priority: task.priority,
    points: task.points,
    isCompleted: task.isCompleted,
    isDue: task.isDue,
  };

  const handleCompleteTask = () => {
    completeTask({
      variables: {
        data: sanitizedTask,
      },
    });
  };

  const handleDeleteTask = () => {
    deleteTask({
      variables: {
        data: sanitizedTask,
      },
    });
  };

  return (
    <div className="bg-[#ececec] w-[100%] flex rounded-[45px] p-7 items-center gap-6 mt-5">
      <div
        className={`${colorTaskIcon(task.isCompleted)} rounded-2xl p-3 active:scale-97 cursor-pointer text-white`}
        onClick={handleCompleteTask}
      >
        {loading ? <Spinner className="size-6" /> : <TaskIcon />}
      </div>
      <div className="flex-[40%] font-semibold">{task.name}</div>
      <div className="flex flex-[1%] gap-5 text-center items-center">
        <div className="bg-[#F3F4F6] rounded-[45px] px-5 py-1 font-semibold">
          {formatTime(task.dueDate)}
        </div>
        <div
          className={`rounded-[45px] w-28 py-1 font-semibold ${colorTaskPriorityPill(task.priority)}`}
        >
          {task.priority}
        </div>
        <div
          className={`rounded-[45px] px-5 py-1 font-semibold ${colorTaskPointsPill(task.isCompleted, task.isDue)}`}
        >
          {!task.isCompleted && task.isDue ? "-" : "+"}
          {task.points}XPs
        </div>
      </div>
      <div className="flex flex-[10%] gap-5">
        <div className="bg-white hover:bg-[#8e8706] text-[#8e8706] hover:text-white p-1.5 rounded-2xl transition-colors cursor-pointer">
          <Pencil />
        </div>
        <div
          className="bg-white hover:bg-[#7A0000] text-[#7A0000] hover:text-white p-1.5 rounded-2xl transition-colors cursor-pointer"
          onClick={handleDeleteTask}
        >
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
