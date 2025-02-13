import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { CombinedError, useMutation } from "urql";
import {
  ADD_DOOR_MUTATION,
  UPDATE_DOOR_MUTATION
} from "../graphql/mutations/door";
import { handleDoorAddShow } from "../redux/modules/door/doorSlice";
import { Door } from "./useAreas";

export type DoorProps = {
  isLoading: boolean;
  error?: CombinedError;
  data: Door;
  handleUpdate: ({
    input,
    callback
  }: {
    id: string;
    input: Partial<Door>;
    callback: () => void;
  }) => void;
  handleAdd: ({
    input,
    callback
  }: {
    input: Partial<Door>;
    callback: () => void;
  }) => void;
};

export const useDoors = (): DoorProps => {
  const [{ data, error, fetching }, update] = useMutation(UPDATE_DOOR_MUTATION);
  const [{ data: dataAdd, error: errorAdd, fetching: pendingAdd }, add] =
    useMutation(ADD_DOOR_MUTATION);

  const handleUpdate = async ({
    id,
    input,
    callback
  }: {
    id: string;
    input: Partial<Door>;
    callback: () => void;
  }) => {
    await update({
      id,
      input
    }).then((res) => {
      callback();
    });
  };

  const dispatch = useDispatch();
  const handleAdd = async ({
    input,
    callback
  }: {
    input: Partial<Door>;
    callback: () => void;
  }) => {
    await add({ input }).then((res) => {
      dispatch(handleDoorAddShow(false));
      callback();
      toast.success("Door added successfully");
    });
  };

  return {
    data,
    isLoading: fetching,
    error,
    handleAdd,
    handleUpdate
  };
};
