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
    icon: <SquareCheck />,
  },
  {
    locale: "performance",
    icon: <Gauge />,
  },
  {
    locale: "story",
    icon: <BookText />,
  },
  {
    locale: "store",
    icon: <Store />,
  },
  {
    locale: "calendar",
    icon: <Calendar />,
  },
  {
    locale: "settings",
    icon: <Settings />,
  },
];

export default MenuItems;
