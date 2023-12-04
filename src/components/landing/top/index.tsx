"use client";

import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors } from "../../../constants/colors";
import AppButton from "../../common/AppButton";
import Logo from "../../common/Logo";

const LandingTop = () => {
  const pathName = usePathname();

  const loginPaths = ["/"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "40px"
      }}>
      <Logo />
      {loginPaths.includes(pathName) ? (
        <Box
          sx={{
            marginLeft: "auto"
          }}>
          <Link href={"/login"} shallow>
            <AppButton
              text="Signin"
              sx={{
                transition: ".3s ease-in-out",
                color: colors.light_blue,
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                border: `3px solid ${colors.light_blue}`,
                borderRadius: "30px",
                paddingLeft: "30px",
                paddingRight: "30px",
                "&:hover": {
                  transition: ".3s ease-in-out",
                  background: colors.light_blue,
                  color: colors.light
                },
                "@media(max-width: 980px)": {
                  height: "30px",
                  fontSize: "14px"
                }
              }}
            />
          </Link>
        </Box>
      ) : null}
    </Box>
  );
};

export default LandingTop;
