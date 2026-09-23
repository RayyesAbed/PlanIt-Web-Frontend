import { keywordToActivity } from "../_components/TaskIcon";

const mapTaskToIcon = (taskName: string) => {
  const lowercasedTaskName = taskName.toLowerCase().trim();
  const taskNameWords = lowercasedTaskName.split(" ").toReversed();

  const exactActivity = keywordToActivity.get(lowercasedTaskName);

  if (exactActivity) {
    return exactActivity.icon;
  }

  // use words chunks
  for (const taskNameWord of taskNameWords) {
    const activity = keywordToActivity.get(taskNameWord);

    if (activity) {
      return activity.icon;
    }
  }

  return keywordToActivity.get("general")!.icon;
};

export default mapTaskToIcon;
