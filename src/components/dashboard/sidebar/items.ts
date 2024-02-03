import { StaticImageData } from "next/image";
import { images } from "../../../constants/images";

export type MenuItemName =
  | "Home"
  | "Management"
  | "Monitoring"
  | "Events"
  | "Notifications"
  | "Settings"
  | "Signout";

export type MenuItemType = {
  icon: string | StaticImageData;
  name: MenuItemName;
};

export const MenuItems: MenuItemType[] = [
  {
    icon: images.home,
    name: "Home"
  },
  {
    icon: images.management,
    name: "Management"
  },
  {
    icon: images.cctv,
    name: "Monitoring"
  },
  {
    icon: images.event,
    name: "Events"
  },
  {
    icon: images.notification,
    name: "Notifications"
  }
];
