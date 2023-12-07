import { Box, Typography } from "@mui/material";
import { colors } from "../../../constants/colors";

const LoginWelcome = () => {
  return (
    <Box>
      <Typography
        component={"h1"}
        sx={{
          color: colors.cambridge_blue,
          fontSize: "clamp(24px, 3vw, 32px)",
          fontStyle: "normal",
          fontWeight: "900",
          lineHeight: "normal"
        }}>
        Welcome Back
      </Typography>
      <Typography
        component={"p"}
        sx={{
          color: colors.light,
          fontFamily: "Poppins",
          fontSize: "clamp(14px, 1.5vw, 18px)",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal"
        }}>
        {" "}
        Please sign in back to get access to fortresseye system
      </Typography>
    </Box>
  );
};

export default LoginWelcome;
