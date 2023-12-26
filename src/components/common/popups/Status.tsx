import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { StatusPopup } from "../../../redux/modules/navigation/navigationSlice";
import CenteredPopup from "./Centered";

const StatusPopup = ({
  status,
  handleStatus
}: {
  status: StatusPopup;
  handleStatus: () => void;
}) => {
  return status?.show ? (
    <CenteredPopup
      sx={{
        zIndex: 1,
        background: colors.dark_blue,
        borderRadius: "10px"
      }}>
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
            color: status?.isSuccess ? colors.light : colors.rose_red
          }}>
          {status?.isSuccess ? "Great! 👍🏾" : "Oops!  try again!"}
        </Typography>
      </Box>
    </CenteredPopup>
  ) : null;
};

export default StatusPopup;
