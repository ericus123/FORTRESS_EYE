import { useSelector } from "react-redux";
import { RootState } from "../../redux/modules/rootReducer";
import DashboardLayout from "../layouts/DashboardLayour";
import AreasPanel from "./panels/AreasPanel";
import DevicesPanel from "./panels/DevicesPanel";
import EventsPanel from "./panels/EventsPanel";
import HomePanel from "./panels/HomePanel";
import SettingsPagePanel from "./panels/SettingsPanel";
import { TokenData } from "./verification";

const Dashboard = ({ isVerified, email, role, sub }: TokenData) => {
  const { activeLink } = useSelector(({ navigation }: RootState) => navigation);
  return (
    <DashboardLayout {...{ isVerified, email, role, sub }}>
      {activeLink === "Home" ? (
        <HomePanel />
      ) : activeLink === "Settings" ? (
        <SettingsPagePanel />
      ) : activeLink === "Areas" ? (
        <AreasPanel />
      ) : activeLink === "CCTV" ? (
        <DevicesPanel />
      ) : activeLink === "Events" ? (
        <EventsPanel />
      ) : (
        <HomePanel />
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
