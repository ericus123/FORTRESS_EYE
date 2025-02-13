import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { CombinedError, useMutation, useQuery } from "urql";
import {
  ADD_LIGHT_MUTATION,
  UPDATE_LIGHT_MUTATION
} from "../graphql/mutations/light";
import { GET_LIGHTS_QUERY } from "../graphql/queries/lights";
import {
  handleLightAddShow,
  saveLights
} from "../redux/modules/light/lightSlice";
import { RootState } from "../redux/modules/rootReducer";
import { Light } from "./useAreas";

export type LightProps = {
  isLoading: boolean;
  error?: CombinedError;
  data: Light;
  handleUpdate: ({
    id,
    input,
    callback
  }: {
    id: string;
    input: Partial<Light>;
    callback: () => void;
  }) => void;
};

export const useLights = (): LightProps => {
  const [{ data, error, fetching }, update] = useMutation(
    UPDATE_LIGHT_MUTATION
  );

  const handleUpdate = async ({
    id,
    input,
    callback
  }: {
    id: string;
    input: Partial<Light>;
    callback: () => void;
  }) => {
    await update({ id, input }).then((res) => {
      callback();
    });
  };
  return {
    data,
    isLoading: fetching,
    error,
    handleUpdate
  };
};
type LightInput = {
  areaID: string;
  // name: string; name was removed
};

export const useAddLight = () => {
  const dispatch = useDispatch();
  const [{ data, fetching, error }, fetchData] = useQuery({
    variables: {},
    query: GET_LIGHTS_QUERY
  });

  const { lights } = useSelector(({ lights }: RootState) => lights);

  useEffect(() => {
    if (data?.GetLights != undefined) {
      dispatch(saveLights(data?.GetLights));
    }
  }, [data]);

  const [{ fetching: isAdding, error: addError, data: addData }, addLight] =
    useMutation(ADD_LIGHT_MUTATION);

  const handleAddLight = async (input: LightInput, callback: () => void) => {
    await addLight({
      input
    }).then((res) => {
      if (res.data.addLight != undefined) {
        dispatch(handleLightAddShow(false));
        callback();
        fetchData();
        toast.success("Light added successfully");
      }
    });
  };

  return {
    handleAddLight,
    data: lights,
    error,
    fetching,
    isAdding
  };
};
