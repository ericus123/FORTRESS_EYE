import { Box } from "@mui/material";
import { ReactNode } from "react";
import { colors } from "../../constants/colors";

const HomePageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        background: colors.dark,
        height: "100vh",
        padding: "1rem 4rem",
        position: "relative",
        width: "100vw",
        "@media(max-width: 760px)": {
          padding: ".5rem 2rem"
        },
        "@media(max-width: 360px)": {
          padding: ".5rem 1rem"
        }
      }}>
      <Box
        sx={{
          position: "absolute",
          width: "calc(100vw - 8rem)",
          "@media(max-width: 760px)": {
            width: "calc(100vw - 4rem)"
          },
          "@media(max-width: 360px)": {
            width: "calc(100vw - 2rem)"
          }
        }}>
        {children}
      </Box>
    </Box>
  );
};

export default HomePageLayout;
