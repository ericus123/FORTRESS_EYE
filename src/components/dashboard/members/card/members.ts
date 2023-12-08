import { StaticImageData } from "next/image";
import { images } from "../../../../constants/images";

export type MemberItem = {
  name: string;
  status: "active" | "inactive";
  avatar: string | StaticImageData;
};

export const members: MemberItem[] = [
  {
    name: "Jennifer Johnson",
    status: "active",
    avatar: images.profile
  },
  {
    name: "Kiara Rig",
    status: "inactive",
    avatar: images.profile
  },
  {
    name: "Amani Eric",
    status: "active",
    avatar: images.profile
  },
  {
    name: "Andy James",
    status: "active",
    avatar: images.profile
  },
  {
    name: "Amani Eric",
    status: "active",
    avatar: images.profile
  },
  {
    name: "Andy James",
    status: "active",
    avatar: images.profile
  },
  {
    name: "Amani Eric",
    status: "active",
    avatar: images.profile
  },
  {
    name: "Andy James",
    status: "active",
    avatar: images.profile
  },
  {
    name: "Amani Eric",
    status: "active",
    avatar: images.profile
  },
  {
    name: "Andy James",
    status: "active",
    avatar: images.profile
  }
];
