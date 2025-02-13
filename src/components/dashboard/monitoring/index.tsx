import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/modules/rootReducer";
import Cameras from "./Cameras";
import MapView from "./Map";

const Monitoring = () => {
  const { active } = useAppSelector(({ monitoring }: RootState) => monitoring);
  return active == "cameras" ? <Cameras /> : <MapView />;
};

export default Monitoring;
