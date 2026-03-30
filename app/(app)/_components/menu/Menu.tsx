"use client";
import { useTranslation } from "react-i18next";
import MenuItems from "./MenuItems";
import ProfileMenuItem from "./ProfileMenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const menuItemLocale = useTranslation("MenuItems");
  const pathName = usePathname();

  return (
    <ul className="m-10 lg:w-1/5 h-20 lg:h-[calc(100vh-80px)] rounded-[45px] relative shadow-2xl bg-[rgba(203,203,203,0.82)] dark:bg-[rgba(200,200,200,0.49)]">
      <ProfileMenuItem />
      <section className="absolute lg:top-20 w-full flex lg:block">
        {MenuItems.map((menuItem, index) => {
          return (
            <Link
              key={index}
              href={menuItem.path}
              className={`font-medium m-4 rounded-[45px] h-16 flex justify-center items-center gap-5 hover:bg-[#242424] hover:text-white dark:hover:bg-[rgba(222,222,222,0.82)] dark:hover:text-[#242424] transition-colors w-20 lg:w-auto ${pathName.includes(menuItem.path) ? "bg-[#242424] text-white dark:bg-[rgba(222,222,222,0.82)] dark:text-[#242424]" : "bg-white text-[#242424] dark:bg-[rgba(50,50,50,0.82)] dark:text-white"}`}
            >
              <span>{menuItem.icon}</span>
              <span className="hidden lg:block">
                {menuItemLocale.t(menuItem.locale)}
              </span>
            </Link>
          );
        })}
      </section>
    </ul>
  );
};

export default Menu;
