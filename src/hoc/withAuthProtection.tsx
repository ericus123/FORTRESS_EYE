"use client";

import { useSignin } from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";

// eslint-disable-next-line react/display-name
const withAuthProtection = (Component: FC) => (props: any) => {
  const { isSignedIn } = useSignin();

  const unAuthRoutes = ["/login", "/"];

  const router = useRouter();

  const path = usePathname();

  if (!isSignedIn) {
    if (unAuthRoutes?.includes(path)) {
      return <Component />;
    } else {
      router.push("/login");
    }
  } else {
    if (unAuthRoutes?.includes(path)) {
      router.push("/dashboard");
    } else {
      return <Component />;
    }
  }
};

export default withAuthProtection;
