import { Box, Typography } from "@mui/material";
import { colors } from "../../../constants/colors";

const MembersHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}>
      <Box
        sx={{
          marginRight: "auto"
        }}>
        <Typography
          component={"h1"}
          sx={{
            color: colors.light,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.9,
            lineHeight: "normal"
          }}>
          All Members
        </Typography>
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          gap: "1rem",
          border: `1.5px solid ${colors.gray}`,
          padding: "4px",
          paddingLeft: "10px",
          paddingRight: "10px",
          borderRadius: "15px",
          cursor: "pointer"
        }}>
        <Typography
          sx={{
            color: colors.light,
            fontSize: "clamp(10px, 1.5vw, 12px)",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.8,
            lineHeight: "normal"
          }}>
          Invite New +
        </Typography>
      </Box>
    </Box>
  );
};

export default MembersHeader;
