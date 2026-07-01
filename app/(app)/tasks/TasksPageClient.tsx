"use client";

import ThemeToggle from "@/app/_components/themeToggle/ThemeToggle";
import Menu from "../_components/menu/Menu";
import TasksHeader from "./_components/TasksHeader";

const TasksPageClient = () => {
  return (
    <main className="flex bg-[#EDEDED] dark:bg-[#393838]">
      <Menu />
      <section className="flex-2/3 flex relative">
        <ThemeToggle />
        <TasksHeader />
      </section>
    </main>
  );
};

export default TasksPageClient;
