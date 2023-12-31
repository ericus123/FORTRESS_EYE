import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import { useAppDispatch } from "../../redux/hooks";
import { handleAreaAddShow } from "../../redux/modules/area/areaSlice";
import { hideStatus } from "../../redux/modules/navigation/navigationSlice";
import { RootState } from "../../redux/modules/rootReducer";
import StatusPopup from "../common/popups/Status";
import SignoutPopup from "../signout";
import Areas from "./areas";
import AddArea from "./areas/popup/AddPopup";
import CameraPlayer from "./cameras/player";
import Detections, { detections } from "./detections";
import DoorsControl from "./doors";
import Greetings from "./greetings";
import LightsControl from "./lights";
import MembersView from "./members";
import PowerMetricsCard from "./power/metrics/Card";
import DashboardSidebar from "./sidebar";
import Verification, { TokenData } from "./verification";
import Verified from "./verification/Verified";
import Weather from "./weather";

const Dashboard = ({ isVerified, email }: TokenData) => {
  const dispatch = useAppDispatch();
  const handleShow = () => {
    dispatch(handleAreaAddShow());
  };

  const { isAddOpen } = useSelector(({ area }: RootState) => area);
  const { status } = useSelector(({ navigation }: RootState) => navigation);

  const handleStatusShow = () => {
    dispatch(hideStatus());
  };

  const searchParams = useSearchParams();

  const token = searchParams.get("verify");

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        gap: "2rem"
      }}>
      <AddArea show={isAddOpen} handleShow={handleShow} />
      <SignoutPopup />
      <StatusPopup status={status} handleStatus={handleStatusShow} />
      <DashboardSidebar />
      {token != undefined ? (
        <Verified />
      ) : !isVerified ? (
        <Verification email={email} />
      ) : (
        <Box
          sx={{
            width: "calc(100% - 100px)",
            display: "flex",
            gap: "2rem",
            overflow: "scroll",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          }}>
          <Box
            sx={{
              width: "350px",
              background: colors.black_5,
              padding: "2rem",
              minWidth: "350px",
              height: "100vvh",
              position: "relative"
            }}>
            <PowerMetricsCard />
            <MembersView />
          </Box>
          <Box
            sx={{
              minWidth: "1000px",
              height: "100vh",
              width: "100%",
              overflow: "scroll",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
              paddingRight: "2rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              marginTop: "auto",
              marginBottom: "auto",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none"
              }
            }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "calc(100vh - 300px - 5rem)",
                display: "flex",
                gap: "2.5rem",
                minHeight: "400px",
                overflow: "scroll",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none"
                }
              }}>
              <Box
                sx={{
                  width: "350px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px"
                }}>
                <Greetings />
                <Areas />
              </Box>
              <Box
                sx={{
                  width: "calc(100% - 350px)",
                  background: colors.black_5,
                  borderRadius: "15px",
                  position: "relative",
                  padding: "2rem",
                  minWidth: "800px"
                }}>
                <CameraPlayer />
                <Detections detections={detections} />
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "300px",
                display: "grid",
                gridTemplateColumns: "auto 300px",
                gap: "2rem"
              }}>
              <Box
                sx={{
                  background: colors.black_5,
                  borderRadius: "15px",
                  padding: "2rem",
                  display: "flex",
                  gap: "2rem",
                  overflow: "scroll",
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": {
                    display: "none"
                  }
                }}>
                <DoorsControl />
                <LightsControl />
              </Box>
              <Weather />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
