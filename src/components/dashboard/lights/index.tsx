import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/modules/rootReducer";
import NoData from "../../common/NoData";
import LightsControlContent from "./Content";
import LightsControlsHeading from "./Heading";

const LightsControl = () => {
  const { area } = useSelector(({ area }: RootState) => area);

  return (
    <Box
      sx={{
        width: "calc(100% - 300px - 2rem)",
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
          <LightsControlsHeading title={`${area?.name} Light`} />
          <LightsControlContent />
        </>
      )}
    </Box>
  );
};

export default LightsControl;
