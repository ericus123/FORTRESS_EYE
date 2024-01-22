import { CombinedError, useMutation } from "urql";
import { UPDATE_LIGHT_MUTATION } from "../graphql/mutations/light";
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
      console.log(res);
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
