export type Task = {
  name: string;
  description: string;
  dueDate: Date;
  priority: "Someday" | "Focus" | "Asap!";
  isCompleted: boolean;
  isDue: boolean;
};

export type FetchedTasks = {
  getUserTasks: [Task];
};
