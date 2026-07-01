const TasksNavigation = () => {
  return (
    <ul className="flex">
      <li className="flex-1/4">Today</li>
      <li className="flex-1/4">Upcoming</li>
      <li className="flex-1/4">Completed</li>
      <li className="flex-1/4">Overdue</li>
    </ul>
  );
};

export default TasksNavigation;
