import { Box } from "@mui/system";
import Image from "next/image";
import { images } from "../../../constants/images";

const HomeBulb = () => {
  return (
    <Box
      sx={{
        width: "50px",
        height: "50px",
        position: "absolute",
        right: "calc(30% + 4rem)",
        "@media(max-width: 1200px)": {
          width: "125px",
          height: "125px"
        },
        "@keyframes opacityAnimation": {
          "0%, 100%": {
            opacity: 1
          },
          "50%": {
            opacity: 0.3
          }
        },
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          opacity: 0.3,
          animation: "opacityAnimation .5s ease-in-out infinite"
        }
      }}>
      <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            cursor: "pointer",
            width: "50px",
            height: "50px",
            "@media(max-width: 1200px)": {
              width: "35px",
              height: "35px"
            }
          }}>
          <Image src={images.bulb_yellow} alt="" fill />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBulb;
