import { Box } from "@mui/material";
import { ReactNode } from "react";
import { colors } from "../../constants/colors";

const HomePageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        background: colors.light,
        height: "100vh",
        padding: "1rem 4rem",
        position: "relative",
        "@media(max-width: 760px)": {
          padding: ".5rem 2rem"
        },
        "@media(max-width: 360px)": {
          padding: ".5rem 1rem"
        }
      }}>
      {children}
    </Box>
  );
};

export default HomePageLayout;
