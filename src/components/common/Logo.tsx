import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { colors } from "../../constants/colors";

const Logo = () => {
  return (
    <Link
      href={"/"}
      style={{
        textDecoration: "none"
      }}>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          cursor: "pointer",
          width: "150px",
          height: "50px",
          "@media(max-width: 980px)": {
            width: "125px",
            height: "30px"
          }
        }}>
        <Typography
          sx={{
            color: "#E9EAE9",
            fontFamily: "Poppins",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 900,
            lineHeight: "normal",
            textAlign: "center"
          }}>
          Fortress
        </Typography>
        <Typography
          sx={{
            color: colors.teal,
            fontFamily: "Poppins",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 900,
            lineHeight: "normal",
            textAlign: "center"
          }}>
          Eye.
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
