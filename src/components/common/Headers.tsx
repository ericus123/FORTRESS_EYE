import { Box, SxProps, Typography } from "@mui/material";
import { colors } from "../../constants/colors";

export const HomeSubTitle = ({ text, sx }: { text: string; sx?: SxProps }) => {
  return (
    <Box>
      <Typography
        component={"h2"}
        sx={{
          color: colors.light,
          fontSize: "clamp(14px, 1.5vw, 16px)",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          opacity: 0.9,
          lineHeight: "normal",
          ...sx
        }}>
        {text}
      </Typography>
    </Box>
  );
};

export default HomeSubTitle;
