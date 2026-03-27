import {
  BookText,
  Calendar,
  Gauge,
  Settings,
  SquareCheck,
  Store,
} from "lucide-react";

const MenuItems = [
  {
    locale: "tasks",
    path: "/tasks",
    icon: <SquareCheck />,
  },
  {
    locale: "performance",
    path: "/performance",
    icon: <Gauge />,
  },
  {
    locale: "story",
    path: "/story",
    icon: <BookText />,
  },
  {
    locale: "store",
    path: "/store",
    icon: <Store />,
  },
  {
    locale: "calendar",
    path: "/calendar",
    icon: <Calendar />,
  },
  {
    locale: "settings",
    path: "/settings",
    icon: <Settings />,
  },
];

export default MenuItems;
