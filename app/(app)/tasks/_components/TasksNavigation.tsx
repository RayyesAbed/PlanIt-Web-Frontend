import Link from "next/link";

const TaskNavigationItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="flex-1/4 text-center bg-[#3E3E3E] text-white font-semibold rounded-[45px] py-2 mx-2 shadow-md inset-shadow-sm"
    >
      <li>{text}</li>
    </Link>
  );
};

const TasksNavigation = () => {
  return (
    <ul className="flex justify-center">
      <TaskNavigationItem text="Today" href="#" />
      <TaskNavigationItem text="Upcoming" href="#" />
      <TaskNavigationItem text="Completed" href="#" />
      <TaskNavigationItem text="Overdue" href="#" />
    </ul>
  );
};

export default TasksNavigation;
