import { Box } from "@mui/material";
import { colors } from "../../constants/colors";
import LandingContent from "./content";
import LandingTop from "./top";

const Landing = () => {
  return (
    <Box
      sx={{
        background: colors.light,
        height: "100vh",
        padding: "1rem 4rem",
        position: "relative",
        "@media(max-width: 760px)": {
          padding: ".5rem 2rem"
        },
        "@media(max-width: 360px)": {
          padding: ".5rem 1rem"
        }
      }}>
      <LandingTop />
      <LandingContent />
    </Box>
  );
};

export default Landing;
