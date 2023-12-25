"use client";

import { useSignin } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { FC } from "react";
// eslint-disable-next-line react/display-name
const withAuthProtection = (Component: FC) => (props: any) => {
  const { isSignedIn } = useSignin();

  const router = useRouter();

  if (!isSignedIn) {
    router.push("/login");
  } else {
    return <Component />;
  }
};

export default withAuthProtection;
