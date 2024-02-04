import { Box } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { images } from "../../../constants/images";
import { useAlarms } from "../../../hooks/useAlarms";
import { handleAlarmAddShow } from "../../../redux/modules/alarm/alarmSlice";
import { RootState } from "../../../redux/modules/rootReducer";
import HomeSubTitle from "../../common/Headers";
import NoData from "../../common/NoData";
import Alarm from "./Alarm";

const Alarms = () => {
  const { alarms } = useAlarms();
  const { areas } = useSelector(({ area }: RootState) => area);

  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(handleAlarmAddShow());
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: ".5rem",
        flexDirection: "column"
      }}>
      <Box
        sx={{
          display: "flex"
        }}>
        <HomeSubTitle text="Alarms" />
        <Image
          src={images.add}
          alt=""
          width={20}
          height={20}
          style={{
            marginLeft: "auto",
            cursor: "pointer"
          }}
          onClick={handleShow}
        />
      </Box>

      {alarms != undefined && alarms.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            overflow: "scroll",
            gap: "10px",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}>
          {alarms?.map((alarm) => (
            <Alarm {...{ alarm, areas }} key={Math.random()} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            border: `.5px dashed ${colors.graphite}`,
            borderRadius: "10px",
            height: "80px",
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

export default Alarms;
