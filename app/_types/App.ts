export type Task = {
  name: string;
  description: string;
  dueDate: Date;
  priority: "someday" | "focus" | "asap";
};
