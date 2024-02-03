import { useDispatch, useSelector } from "react-redux";
import {
  handleActiveTab,
  managementTabs
} from "../../../../redux/modules/management/managementSlice";
import { RootState } from "../../../../redux/modules/rootReducer";
import { TabType } from "../../../common/panels/Tab";
import TopPanel from "../../../common/panels/TopPanels";
import PanelHeaderLayout from "../../panels/HeaderLayout";

const ManagementHeader = () => {
  const dispatch = useDispatch();

  const handleActive = (tab: TabType) => {
    dispatch(handleActiveTab(tab));
  };

  const { active } = useSelector(({ management }: RootState) => management);

  return (
    <PanelHeaderLayout title="Data Management">
      <TopPanel
        tabs={managementTabs}
        active={active}
        handleActive={(tab: TabType) => handleActive(tab)}
      />
    </PanelHeaderLayout>
  );
};

export default ManagementHeader;
