import { Box } from "@mui/material";
import { ReactNode } from "react";
import { colors } from "../../constants/colors";

const SettingsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        background: colors.black_5,
        width: "100%",
        height: "calc(100vh - 2rem)",
        margin: "1rem 1rem 1rem 0",
        padding: "2rem",
        borderRadius: "15px",
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      {children}
    </Box>
  );
};

export default SettingsLayout;
