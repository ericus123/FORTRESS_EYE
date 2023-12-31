import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { StatusPopup } from "../../../redux/modules/navigation/navigationSlice";
import CenteredPopup from "./Centered";

const StatusPopup = ({
  status,
  handleStatus,
  isClosable,
  message
}: {
  status: StatusPopup;
  handleStatus?: () => void;
  isClosable?: boolean;
  message?: {
    success: string;
    fail: string;
  };
}) => {
  return status?.show ? (
    <CenteredPopup
      sx={{
        zIndex: 1,
        background: colors.dark_blue,
        borderRadius: "10px"
      }}>
      {isClosable ? (
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Image
            src={images.close}
            alt=""
            style={{
              position: "absolute",
              right: ".5rem",
              top: ".5rem",
              cursor: "pointer"
            }}
            onClick={handleStatus}
          />
        </Box>
      ) : null}
      <Box
        sx={{
          position: "relative",
          width: "250px",
          display: "flex",
          padding: "1rem",
          alignItems: "center",
          gap: "1rem"
        }}>
        <Image
          src={status?.isSuccess ? images.check : images.fail}
          alt=""
          width={50}
          height={50}
        />
        <Typography
          component={"h2"}
          sx={{
            color: status?.isSuccess ? colors.light : colors.rose_red,
            fontFamily: "Poppins",
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontStyle: "normal",
            fontWeight: "600",
            opacity: 0.9,
            lineHeight: "normal",
            textAlign: "center"
          }}>
          {message != undefined
            ? status.isSuccess
              ? message?.success
              : message?.fail
            : status?.isSuccess
            ? "Great! 👍🏾"
            : "Oops!  try again!"}
        </Typography>
      </Box>
    </CenteredPopup>
  ) : null;
};

export default StatusPopup;
