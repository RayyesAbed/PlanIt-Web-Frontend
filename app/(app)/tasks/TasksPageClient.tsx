"use client";

import ThemeToggle from "@/app/_components/themeToggle/ThemeToggle";
import Menu from "../_components/menu/Menu";

const TasksPageClient = () => {
  return (
    <main className="flex bg-[#EDEDED]">
      <Menu />
      <section className="flex-2/3 flex relative">
        <ThemeToggle />
        <section>
          <section>
            <h1 className="text-[#393838] text-[36px] font-bold">Tasks</h1>
          </section>
        </section>
      </section>
    </main>
  );
};

export default TasksPageClient;
