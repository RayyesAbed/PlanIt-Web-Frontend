"use client";

import ThemeToggle from "@/app/_components/themeToggle/ThemeToggle";
import Menu from "../_components/menu/Menu";

const TasksPageClient = () => {
  return (
    <main className="flex bg-[#EDEDED]">
      <Menu />
      <section>
        <ThemeToggle />
      </section>
    </main>
  );
};

export default TasksPageClient;
