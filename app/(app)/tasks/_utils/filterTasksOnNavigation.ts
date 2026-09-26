import { Task } from "@/app/_types/App";
import { ReadonlyURLSearchParams } from "next/navigation";

const filterTasksOnNavigation = (
  task: Task,
  searchParams: ReadonlyURLSearchParams,
) => {
  const dueDate = searchParams.get("dueDate");
  const isCompleted = searchParams.get("isCompleted");
  const isDue = searchParams.get("isDue");

  const today = new Date().toDateString();

  if (dueDate === "today") {
    return (
      !task.isCompleted &&
      !task.isDue &&
      new Date(task.dueDate).toDateString() === today
    );
  }

  if (dueDate === "future") {
    return (
      !task.isCompleted &&
      !task.isDue &&
      new Date(task.dueDate).toDateString() !== today
    );
  }

  if (isCompleted === "true") {
    return task.isCompleted && !task.isDue;
  }

  if (isDue === "true") {
    return task.isDue && !task.isCompleted;
  }

  return true;
};

export default filterTasksOnNavigation;
