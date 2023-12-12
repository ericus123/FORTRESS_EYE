import { Box, Typography } from "@mui/material";
import { colors } from "../../../../constants/colors";

const LiveIndicator = () => {
  return (
    <Box
      sx={{
        width: "75px",
        height: "30px",
        background: colors.black_5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        gap: ".5rem"
      }}>
      <Box
        sx={{
          width: "10px",
          height: "10px",
          background: colors.rose_red,
          borderRadius: "50%"
        }}></Box>

      <Box>
        <Typography>Live</Typography>
      </Box>
    </Box>
  );
};

export default LiveIndicator;
