import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { handleDoorAddShow } from "../../../redux/modules/door/doorSlice";
import { RootState } from "../../../redux/modules/rootReducer";
import NoData from "../../common/NoData";
import Door from "./Door";
import DoorControlsHeading from "./Heading";

const DoorsControl = () => {
  const { area } = useSelector(({ area }: RootState) => area);
  useEffect(() => {}, [area]);

  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(handleDoorAddShow(true));
  };

  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        gap: ".8rem"
      }}>
      <DoorControlsHeading canAdd={!area?.door} handleAddShow={handleShow} />
      {area?.door != undefined ? (
        <Door {...{ area }} />
      ) : (
        <Box
          sx={{
            border: `.5px dashed ${colors.graphite}`,
            borderRadius: "10px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Box>
            <NoData />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DoorsControl;
