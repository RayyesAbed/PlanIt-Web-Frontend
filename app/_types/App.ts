export type Task = {
  name: string;
  description: string;
  dueDate: Date;
  priority: "someday" | "focus" | "asap";
  isCompleted: boolean;
  isDue: boolean;
};

export type FetchedTasks = {
  getUserTasks: [Task];
};
