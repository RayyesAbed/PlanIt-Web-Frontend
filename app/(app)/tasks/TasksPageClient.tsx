"use client";

import ThemeToggle from "@/app/_components/themeToggle/ThemeToggle";
import Menu from "../_components/menu/Menu";

const TasksPageClient = () => {
  return (
    <main className="flex bg-[#EDEDED] dark:bg-[#393838]">
      <Menu />
      <section className="flex-2/3 flex relative">
        <ThemeToggle />
        <section className="bg-white dark:bg-[#5b5b5b] absolute top-16 p-7 w-[97.5%] h-[85%] rounded-[45px]">
          <section>
            <h1 className="text-[#393838] dark:text-white text-[36px] font-bold">
              Tasks
            </h1>
          </section>
        </section>
      </section>
    </main>
  );
};

export default TasksPageClient;
