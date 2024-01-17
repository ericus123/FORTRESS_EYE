import { Box, Typography } from "@mui/material";
import { colors } from "../../../constants/colors";
import LeftBarControl from "./Control";

const LeftSideBarHeader = () => {
  return (
    <Box
      sx={{
        display: "flex"
      }}>
      <Box
        sx={{
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "5px"
        }}>
        <Box
          component={"div"}
          sx={{
            position: "relative",
            width: "50px",
            height: "50px",
            background: colors.teal,
            opacity: 0.6,
            borderRadius: "50%",
            cursor: "pointer",
            transition: ".2s ease-in-out",
            border: `4px solid ${colors.black_5}`,
            "&:hover": {
              background: colors.rose_red
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <Typography
            sx={{
              fontSize: "clamp(14px, 1.5vw, 14px)",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              textAlign: "center"
            }}>
            OFF
          </Typography>
        </Box>
        <Typography
          component={"h2"}
          sx={{
            color: colors.light,
            fontSize: "clamp(10px, 1.5vw, 10px)",
            fontStyle: "normal",
            fontWeight: "400",
            opacity: 0.9,
            lineHeight: "normal",
            textAlign: "center"
          }}>
          Panic button
        </Typography>
      </Box>
      <LeftBarControl />
    </Box>
  );
};

export default LeftSideBarHeader;
