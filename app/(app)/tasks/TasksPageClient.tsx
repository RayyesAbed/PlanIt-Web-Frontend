"use client";

import { motion } from "framer-motion";
import ThemeToggle from "@/app/_components/themeToggle/ThemeToggle";
import Menu from "../_components/menu/Menu";
import TasksHeader from "./_components/TasksHeader";

const TasksPageClient = () => {
  return (
    <motion.main
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex bg-[#EDEDED] dark:bg-[#393838]"
    >
      <Menu />
      <section className="flex-2/3 flex relative">
        <ThemeToggle />
        <TasksHeader />
      </section>
    </motion.main>
  );
};

export default TasksPageClient;
