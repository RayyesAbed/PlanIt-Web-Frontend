export type Task = {
  __typename?: string;
  _id?: string;
  name: string;
  description: string;
  dueDate: Date;
  priority: "Someday" | "Focus" | "Asap!";
  points: number;
  isCompleted: boolean;
  isDue: boolean;
};

export type FetchedTasks = {
  getUserTasks: [Task];
};
