import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { RootState } from "../../../redux/modules/rootReducer";
import NoData from "../../common/NoData";
import Door from "./Door";
import DoorControlsHeading from "./Heading";

const DoorsControl = () => {
  const { area } = useSelector(({ area }: RootState) => area);
  useEffect(() => {}, [area]);
  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        gap: ".8rem"
      }}>
      <DoorControlsHeading canAdd={!area?.door} />
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
