import { Box, Drawer, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { colors } from "../../../../../../constants/colors";
import useCamera from "../../../../../../hooks/useCamera";
import usePlayer from "../../../../../../hooks/usePlayer";
import AppButton from "../../../../../common/AppButton";
import MapView from "../../../../monitoring/Map";
import CameraHeading from "../Heading";

const CameraDeviceDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
        <Typography
          sx={{
            color: colors.light,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontStyle: "normal",
            fontWeight: "500",
            opacity: 0.8,
            lineHeight: "normal",
            textAlign: "left"
          }}>
          Device Details
        </Typography>

        <Box
          sx={{
            height: ".5px",
            width: "70%",
            background: colors.gray
          }}></Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "7.5px"
        }}>
        <CameraDetail
          {...{
            title: "MAC ID",
            value: "00-B0-D0-63-C2-26"
          }}
        />
        <CameraDetail
          {...{
            title: "IP",
            value: "192.168.2.64"
          }}
        />
        <CameraDetail
          {...{
            title: "Resolution",
            value: "15MP"
          }}
        />
        <CameraDetail
          {...{
            title: "Compression",
            value: "H265"
          }}
        />
        <CameraDetail
          {...{
            title: "Frame Rate(FPS)",
            value: "12 FPS"
          }}
        />

        <CameraDetail
          {...{
            title: "Onvif Profile",
            value: "General"
          }}
        />
      </Box>
    </Box>
  );
};

type CameraDetailType = {
  title: string;
  value: string | number | undefined;
};
const CameraDetail = ({ title, value }: CameraDetailType) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px"
      }}>
      <Typography
        sx={{
          color: colors.gray,
          fontSize: "clamp(14px, 1.5vw, 16px)",
          fontStyle: "normal",
          fontWeight: "500",
          opacity: 0.8,
          lineHeight: "normal",
          textAlign: "left",
          width: "40%"
        }}>
        {title}
      </Typography>

      <Typography
        sx={{
          color: colors.light,
          fontSize: "clamp(14px, 1.5vw, 16px)",
          fontStyle: "normal",
          fontWeight: "600",
          opacity: 0.8,
          lineHeight: "normal",
          textAlign: "left"
        }}>
        {value}
      </Typography>
    </Box>
  );
};
const CameraDeviceDrawer = () => {
  const dispatch = useDispatch();

  const { handleToggleCameraDetailsView, isCameraDetailsOpen } = usePlayer();

  const { triggerPopup } = useCamera();
  return (
    <Drawer
      anchor={"right"}
      open={isCameraDetailsOpen}
      onClose={handleToggleCameraDetailsView}
      PaperProps={{
        sx: {
          width: "400px",
          background: colors.dark,
          height: "calc(100vh - 1rem)",
          marginTop: "1rem",
          borderRadius: "6px"
        }
      }}>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem"
        }}>
        <CameraHeading type="big" />

        <CameraDeviceDetails />
        <Box
          sx={{
            position: "relative",
            width: "100%",
            border: `1px solid ${colors.graphite}`,
            height: "300px",
            borderRadius: "8px",
            overflow: "hidden"
          }}>
          <MapView width="100%" height="300px" />
        </Box>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: ".75rem",
            marginTop: "2rem"
          }}>
          <Box>
            <AppButton
              title="Disable Device"
              sx={{
                width: "100%",
                background: colors.dark_blue,
                color: colors.light,
                borderRadius: "6px",
                "&:hover": {
                  background: colors.dark_blue,
                  opacity: 0.8,
                  transition: ".3s ease-in-out"
                }
              }}
              onClick={() =>
                triggerPopup({
                  message: "Are you sure you want to disable this device ?",
                  isOpen: true,
                  type: "disable"
                })
              }
            />
          </Box>

          <Box>
            <AppButton
              title="Delete Device"
              sx={{
                width: "100%",
                background: colors.rose_red,
                color: colors.light,
                borderRadius: "6px",
                "&:hover": {
                  background: colors.rose_red,
                  opacity: 0.8,
                  transition: ".3s ease-in-out"
                }
              }}
              onClick={() =>
                triggerPopup({
                  message: "Are you sure you want to delete this device ?",
                  isOpen: true,
                  type: "delete"
                })
              }
            />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CameraDeviceDrawer;
