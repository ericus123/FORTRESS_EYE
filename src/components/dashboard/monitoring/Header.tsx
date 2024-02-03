import { useDispatch, useSelector } from "react-redux";
import {
  handleActiveTab,
  monitoringTabs
} from "../../../redux/modules/monitoring/monitoringSlice";
import { RootState } from "../../../redux/modules/rootReducer";
import { TabType } from "../../common/panels/Tab";
import TopPanel from "../../common/panels/TopPanels";
import PanelHeaderLayout from "../panels/HeaderLayout";

const MonitoringHeader = () => {
  const dispatch = useDispatch();

  const handleActive = (tab: TabType) => {
    dispatch(handleActiveTab(tab));
  };

  const { active } = useSelector(({ monitoring }: RootState) => monitoring);

  return (
    <PanelHeaderLayout title="Monitoring">
      <TopPanel
        tabs={monitoringTabs}
        active={active}
        handleActive={(tab: TabType) => handleActive(tab)}
      />
    </PanelHeaderLayout>
  );
};

export default MonitoringHeader;
