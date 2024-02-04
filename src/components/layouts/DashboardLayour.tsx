import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import { handleAlarmAddShow } from "../../redux/modules/alarm/alarmSlice";
import { handleAreaAddShow } from "../../redux/modules/area/areaSlice";
import { handleInviteShow } from "../../redux/modules/member/memberSlice";
import { hideStatus } from "../../redux/modules/navigation/navigationSlice";
import { RootState } from "../../redux/modules/rootReducer";
import AlarmForm from "../actuators/alarms/form";
import StatusPopup from "../common/popups/Status";
import AddArea from "../dashboard/areas/popup/AddPopup";
import InviteMember from "../dashboard/members/invitation";
import Notifications from "../dashboard/notifications";
import DashboardSidebar from "../dashboard/sidebar";
import Verification, { TokenData } from "../dashboard/verification";
import Verified from "../dashboard/verification/Verified";
import LeftBarPanel from "../panels/LeftBar";
import SignoutPopup from "../signout";

type Props = TokenData & {
  children: ReactNode;
};

const DashboardLayout = ({ isVerified, email, role, sub, children }: Props) => {
  const dispatch = useAppDispatch();
  const handleShow = () => {
    dispatch(handleAreaAddShow());
  };

  const handleInvite = () => {
    dispatch(handleInviteShow());
  };

  const { isAddOpen } = useSelector(({ area }: RootState) => area);
  const { isInviteOpen } = useSelector(({ member }: RootState) => member);
  const { isAddOpen: isAlarmAddOpen } = useSelector(
    ({ alarms }: RootState) => alarms
  );
  const { status, activeLink } = useSelector(
    ({ navigation }: RootState) => navigation
  );

  const handleStatusShow = () => {
    dispatch(hideStatus());
  };

  const handleAlarmShow = () => {
    dispatch(handleAlarmAddShow());
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
      <Notifications isOpen={activeLink === "Notifications"} />
      <AddArea show={isAddOpen} handleShow={handleShow} />
      <AlarmForm show={isAlarmAddOpen} handleShow={handleAlarmShow} />
      <SignoutPopup />
      <InviteMember show={isInviteOpen} handleShow={handleInvite} />
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
          <LeftBarPanel
            {...{
              isVerified,
              email,
              role,
              sub
            }}
          />
          {children}
        </Box>
      )}
    </Box>
  );
};

export default DashboardLayout;
