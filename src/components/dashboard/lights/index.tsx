import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { RootState } from "../../../redux/modules/rootReducer";
import NoData from "../../common/NoData";
import LightsControlContent from "./Content";
import LightsControlsHeading from "./Heading";

const LightsControl = () => {
  const { area } = useSelector(({ area }: RootState) => area);

  return (
    <Box
      sx={{
        width: "calc(100% - 200px - 2rem)",
        display: "flex",
        flexDirection: "column",
        gap: ".8rem",
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      {!area ? (
        <NoData
          sx={{
            marginTop: "5rem"
          }}
        />
      ) : (
        <>
          <LightsControlsHeading title={"Light"} canAdd={!area?.light} />
          {area?.light != undefined ? (
            <LightsControlContent {...{ light: area?.light }} />
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
                <NoData text="Nothing to show here" />
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default LightsControl;
