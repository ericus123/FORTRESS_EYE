import { Box } from "@mui/material";
import { useState } from "react";
import useCamera from "../../../../hooks/useCamera";
import ConfirmPopup from "../../../common/popups/Confirm";
import DevicesFilters, { deviceType } from "./Filter";
import ControlAlarms from "./alarms";
import CameraDevices from "./cameras";
import ControlDoors from "./doors";
import ControlLights from "./lights";

const Devices = () => {
  const [selectedType, setSelectedType] = useState<deviceType>("camera");

  const { controlPopup, onCancel, onConfirm } = useCamera();
  return (
    <Box>
      <ConfirmPopup
        {...{
          message: controlPopup.message,
          show: controlPopup.isOpen,
          onCancel,
          onConfirm,
          confirmButtonText:
            controlPopup.type === "delete" ? "Delete" : "Disable",
          cancelButtonText: "Cancel"
        }}
      />
      <DevicesFilters
        {...{ selectedType, handleSelected: (type) => setSelectedType(type) }}
      />
      <Box
        sx={{
          paddingTop: "1rem"
        }}>
        <CameraDevices selected={selectedType} />
        <ControlLights selected={selectedType} />
        <ControlDoors selected={selectedType} />
        <ControlAlarms selected={selectedType} />
      </Box>
    </Box>
  );
};

export default Devices;
