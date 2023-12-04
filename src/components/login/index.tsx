import { Box } from "@mui/material";
import { colors } from "../../constants/colors";
import LandingTop from "../landing/top";
import HomePageLayout from "../layouts/HomePageLayout";
import LoginLeft from "./left";
import LoginRight from "./right";

const Login = () => {
  return (
    <HomePageLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: colors?.light
        }}>
        <LandingTop />
        <Box
          sx={{
            display: "flex",
            height: "calc(100vh - 40px - 2rem)",
            position: "relative"
          }}>
          <LoginLeft />
          <Box
            sx={{
              height: "calc(100vh - 40px - 2rem) - 4rem",
              width: "2px",
              background: colors.charcoal,
              marginTop: "2rem",
              marginBottom: "2rem",
              opacity: 0.1,
              "@media(max-width: 860px)": {
                display: "none"
              }
            }}></Box>
          <LoginRight />
        </Box>
      </Box>
    </HomePageLayout>
  );
};

export default Login;
