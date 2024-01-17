import { Box } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../../constants/colors";
import { images } from "../../../../constants/images";

const PtzControl = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "120px",
        height: "120px",
        top: "calc(50% - 2rem)",
        left: "50%",
        transform: "translate(-50% , 50%)",
        zIndex: 99
      }}>
      <Box
        sx={{
          position: "relative",
          width: "120px",
          height: "120px",
          background: colors.black_5,
          //   border: "1px solid green",
          borderRadius: "50%",
          padding: "1rem"
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translate(-50% , 50%)"
          }}>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              background: colors.graphite_6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px 5px 0 0",
              cursor: "pointer"
            }}>
            +
          </Box>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              background: colors.charcoal_6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0px 0px 5px 5px",
              cursor: "pointer"
            }}>
            -
          </Box>
        </Box>
        <Box
          sx={{
            top: "-10%",
            left: "50%",
            transform: "translate(-50% , 50%)",
            position: "absolute",
            cursor: "pointer"
          }}>
          <Image
            src={images.caretDown}
            alt=""
            style={{
              transform: "rotate(-180deg)"
            }}
          />
        </Box>
        <Box
          sx={{
            top: "50%",
            left: "5%",
            transform: "translate(0%, -50%)",
            position: "absolute",
            cursor: "pointer"
          }}>
          <Image
            src={images.caretDown}
            alt=""
            style={{
              transform: "rotate(90deg)"
            }}
          />
        </Box>
        <Box
          sx={{
            top: "50%",
            right: "5%",
            transform: "translate(0%, -50%)",
            position: "absolute",
            cursor: "pointer"
          }}>
          <Image
            src={images.caretDown}
            alt=""
            style={{
              transform: "rotate(-90deg)"
            }}
          />
        </Box>
        <Box
          sx={{
            left: "50%",
            bottom: "10%",
            transform: "translate(-50%, 50%)",
            position: "absolute",
            cursor: "pointer"
          }}>
          <Image src={images.caretDown} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default PtzControl;
