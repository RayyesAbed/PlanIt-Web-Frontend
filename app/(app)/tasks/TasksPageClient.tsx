"use client";

import ThemeToggle from "@/app/_components/themeToggle/ThemeToggle";
import Menu from "../_components/menu/Menu";

const TasksPageClient = () => {
  return (
    <main className="flex">
      <Menu />
      <section>
        <ThemeToggle />
      </section>
    </main>
  );
};

export default TasksPageClient;
