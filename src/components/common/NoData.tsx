import { Box, SxProps, Typography } from "@mui/material";
import { colors } from "../../constants/colors";

const NoData = ({ sx }: { sx?: SxProps }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        ...sx
      }}>
      <Typography
        component={"p"}
        sx={{
          color: colors.light,
          fontSize: "clamp(12px, 1.5vw, 14px)",
          fontStyle: "normal",
          fontWeight: "400",
          opacity: 0.5,
          lineHeight: "normal"
        }}>
        No data
      </Typography>
    </Box>
  );
};

export default NoData;
