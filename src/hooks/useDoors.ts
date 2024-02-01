import { CombinedError, useMutation } from "urql";
import { UPDATE_DOOR_MUTATION } from "../graphql/mutations/door";
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
};

export const useDoors = (): DoorProps => {
  const [{ data, error, fetching }, update] = useMutation(UPDATE_DOOR_MUTATION);

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
  return {
    data,
    isLoading: fetching,
    error,
    handleUpdate
  };
};
