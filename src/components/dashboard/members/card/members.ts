import { StaticImageData } from "next/image";

export type MemberItem = {
  name: string;
  status: "active" | "inactive";
  avatar: string | StaticImageData;
};
