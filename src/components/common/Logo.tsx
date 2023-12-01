import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { images } from "../../constants/images";

const Logo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        cursor: "pointer",
        width: "150px",
        height: "50px",
        "@media(max-width: 980px)": {
          width: "125px",
          height: "30px"
        }
      }}>
      <Link href={"/"} shallow>
        <Image src={images.logo} alt="" fill />
      </Link>
    </Box>
  );
};

export default Logo;
