import Link from "next/link";
import { usePathname } from "next/navigation";

const TaskNavigationItem = ({ text, href }: { text: string; href: string }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`flex-1/4 text-center ${pathname == href ? "bg-[#3E3E3E]" : "bg-[#ABA9A9]"} hover:bg-[#3E3E3E] transition-all text-white font-semibold rounded-[45px] py-2 mx-2 shadow-md active:scale-97`}
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
