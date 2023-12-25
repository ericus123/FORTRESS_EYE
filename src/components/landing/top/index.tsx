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
              title="Signin"
              sx={{
                transition: ".3s ease-in-out",
                color: colors.cambridge_blue,
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                border: `3px solid ${colors.cambridge_blue}`,
                borderRadius: "30px",
                paddingLeft: "30px",
                paddingRight: "30px",
                background: "transparent",
                "&:hover": {
                  transition: ".3s ease-in-out",
                  background: colors.cambridge_blue,
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
