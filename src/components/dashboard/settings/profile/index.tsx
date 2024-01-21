import { Box, Typography } from "@mui/material";
import { colors } from "../../../../constants/colors";
import ProfileAvatar from "./Avatar";
import ProfileForm from "./Form";

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem 1rem",
        height: "fit-content",
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      <Box>
        <Typography
          component={"p"}
          sx={{
            color: colors.light_7,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
          }}>
          Update your details here
        </Typography>
      </Box>
      <ProfileAvatar />
      <ProfileForm />
    </Box>
  );
};

export default Profile;
