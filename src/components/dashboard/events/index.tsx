import { useDispatch, useSelector } from "react-redux";
import { eventsTabs } from "../../../redux/modules/events/eventsSlice";
import { handleActiveTab } from "../../../redux/modules/monitoring/monitoringSlice";
import { RootState } from "../../../redux/modules/rootReducer";
import { TabType } from "../../common/panels/Tab";
import TopPanel from "../../common/panels/TopPanels";
import PanelHeaderLayout from "../panels/HeaderLayout";

const EventsHeader = () => {
  const dispatch = useDispatch();

  const handleActive = (tab: TabType) => {
    dispatch(handleActiveTab(tab));
  };

  const { active } = useSelector(({ events }: RootState) => events);

  return (
    <PanelHeaderLayout title="Events">
      <TopPanel
        tabs={eventsTabs}
        active={active}
        handleActive={(tab: TabType) => handleActive(tab)}
      />
    </PanelHeaderLayout>
  );
};

export default EventsHeader;
