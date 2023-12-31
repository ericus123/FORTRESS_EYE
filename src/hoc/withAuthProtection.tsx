"use client";

import { useSignin } from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { TokenData } from "../components/dashboard/verification";
import { verifyToken } from "../helpers";

// eslint-disable-next-line react/display-name
const withAuthProtection = (Component: FC<TokenData>) => (props: any) => {
  const { isSignedIn, tokens } = useSignin();
  const unAuthRoutes = ["/login", "/"];

  const router = useRouter();

  let data: TokenData = verifyToken(tokens?.accessToken);

  const path = usePathname();

  if (!isSignedIn) {
    if (unAuthRoutes?.includes(path)) {
      return <Component {...data} />;
    } else {
      router.push("/login");
    }
  } else {
    if (unAuthRoutes?.includes(path)) {
      router.push("/dashboard");
    } else {
      return <Component {...data} />;
    }
  }
};

export default withAuthProtection;
