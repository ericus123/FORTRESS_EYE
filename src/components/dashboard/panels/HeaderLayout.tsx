import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { colors } from "../../../constants/colors";

const PanelHeaderLayout = ({
  children,
  title
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <Box>
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem"
        }}>
        <Box
          sx={{
            display: "flex"
          }}>
          <Typography
            component={"h1"}
            sx={{
              color: colors.cambridge_blue,
              fontSize: "clamp(32px, 1.5vw, 32px)",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              textAlign: "center",
              height: "30px"
            }}>
            {title}
          </Typography>
        </Box>

        {children}
      </Box>
    </Box>
  );
};

export default PanelHeaderLayout;
