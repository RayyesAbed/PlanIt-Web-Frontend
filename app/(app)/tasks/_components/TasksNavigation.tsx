const TaskNavigationItem = ({ text }: { text: string }) => {
  return <li className="flex-1/4">{text}</li>;
};

const TasksNavigation = () => {
  return (
    <ul className="flex justify-center">
      <TaskNavigationItem text="Today" />
      <TaskNavigationItem text="Upcoming" />
      <TaskNavigationItem text="Completed" />
      <TaskNavigationItem text="Overdue" />
    </ul>
  );
};

export default TasksNavigation;
