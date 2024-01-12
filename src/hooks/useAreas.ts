import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombinedError, useMutation, useQuery } from "urql";
import { ADD_AREA_MUTATION } from "../graphql/mutations/area";
import { GET_AREAS_QUERY } from "../graphql/queries/areas";
import {
  handleActive,
  handleAreaAddShow,
  saveAreas
} from "../redux/modules/area/areaSlice";
import {
  handleStatus,
  hideStatus
} from "../redux/modules/navigation/navigationSlice";
import { RootState } from "../redux/modules/rootReducer";

export type AreasResponse = {
  data: Areas;
  error?: CombinedError;
  fetching: boolean;
  handleAreas: any[];
  handleActiveArea: (area: Area) => void;
  handleAddArea: (name: string) => void;
  area: Area;
  handleShow: () => boolean;
  isAdding: boolean;
};

export type Area = {
  id: string;
  name: string;
  createdAt: Date;
  deletedAt: Date;
  light: Light;
};

export type Light = {
  id: string;
  cameraID: string;
  isOn: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
};

export type Areas = Area[];

export const useAreas = () => {
  const dispatch = useDispatch();
  const [{ data, fetching, error }, fetchData] = useQuery({
    variables: {},
    query: GET_AREAS_QUERY
  });

  const { areas, area } = useSelector(({ area }: RootState) => area);

  useEffect(() => {
    if (data?.GetAreas != undefined) {
      dispatch(saveAreas(data?.GetAreas));
    }

    if (data?.GetAreas?.length > 0) {
      handleActiveArea(data?.GetAreas[0]);
    }
  }, [data]);

  const handleAreas = () => {};

  const handleActiveArea = (area: Area) => {
    dispatch(handleActive(area));
  };

  const handleShow = () => {
    dispatch(handleAreaAddShow());
    dispatch(hideStatus());
  };

  const [{ fetching: isAdding, error: addError, data: addData }, addArea] =
    useMutation(ADD_AREA_MUTATION);

  const handleAddArea = async (name: string, callback: () => void) => {
    await addArea({
      input: {
        name
      }
    })
      .then()
      .then((res) => {
        if (res != undefined) {
          callback();
          fetchData();
        }
      });
  };

  useEffect(() => {
    if (addError != undefined) {
      handleShow();
      setTimeout(() => {
        dispatch(
          handleStatus({
            isSuccess: false,
            show: true
          })
        );
      }, 500);
    }

    if (addData != undefined) {
      handleShow();
      setTimeout(() => {
        dispatch(
          handleStatus({
            isSuccess: true,
            show: true
          })
        );
      }, 500);
    }
  }, [addError, addData]);

  return {
    handleAreas,
    handleActiveArea,
    handleShow,
    handleAddArea,
    data: areas,
    error,
    fetching,
    area,
    isAdding
  };
};
