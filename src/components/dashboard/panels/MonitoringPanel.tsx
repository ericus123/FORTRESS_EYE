import SettingsLayout from "../../layouts/SettingsLayout";
import Monitoring from "../monitoring";
import MonitoringHeader from "../monitoring/Header";

const MonitoringPanel = () => {
  return (
    <SettingsLayout>
      <MonitoringHeader />
      <Monitoring />
    </SettingsLayout>
  );
};

export default MonitoringPanel;
