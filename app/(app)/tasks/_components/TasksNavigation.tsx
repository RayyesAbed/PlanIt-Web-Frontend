import Link from "next/link";
import { useSearchParams } from "next/navigation";

const TaskNavigationItem = ({
  text,
  queryParams,
}: {
  text: string;
  queryParams: Record<string, string>;
}) => {
  const searchParams = useSearchParams();
  const queryString = new URLSearchParams(queryParams).toString();

  const isActive = Object.entries(queryParams).every(
    ([key, value]) => searchParams.get(key) === value,
  );

  return (
    <Link
      href={`/tasks?${queryString}`}
      className={`flex-1/4 text-center ${isActive ? "bg-[#3E3E3E]" : "bg-[#ABA9A9]"} hover:bg-[#3E3E3E] transition-all text-white font-semibold rounded-[45px] py-2 mx-2 shadow-md active:scale-97`}
    >
      <li>{text}</li>
    </Link>
  );
};

const TasksNavigation = () => {
  return (
    <ul className="flex flex-col sm:flex-row justify-center gap-3 my-5">
      <TaskNavigationItem text="Today" queryParams={{ dueDate: "today" }} />
      <TaskNavigationItem text="Upcoming" queryParams={{ dueDate: "future" }} />
      <TaskNavigationItem
        text="Completed"
        queryParams={{ isCompleted: "true", isDue: "false" }}
      />
      <TaskNavigationItem
        text="Overdue"
        queryParams={{ isCompleted: "false", isDue: "true" }}
      />
    </ul>
  );
};

export default TasksNavigation;
