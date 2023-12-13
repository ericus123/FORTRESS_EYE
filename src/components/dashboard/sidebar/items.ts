import { StaticImageData } from "next/image";
import { images } from "../../../constants/images";

export type MenuItemName =
  | "Home"
  | "Areas"
  | "CCTV"
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
    icon: images.area,
    name: "Areas"
  },
  {
    icon: images.cctv,
    name: "CCTV"
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
