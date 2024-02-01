import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CombinedError, useMutation, useQuery } from "urql";
import { UPDATE_PROFILE_MUTATION } from "../graphql/mutations/profile";
import { GET_PROFILE } from "../graphql/queries/profile";
import { ProfileInput } from "../graphql/types";
import { useAppDispatch } from "../redux/hooks";
import { saveProfile } from "../redux/modules/auth/authSlice";
import { RootState } from "../redux/modules/rootReducer";

export type ProfileProps = {
  isLoading: boolean;
  error?: CombinedError;
  data: ProfileInput;
  handleUpdate: ({
    input,
    callback
  }: {
    input: Partial<ProfileInput>;
    callback: () => void;
  }) => void;
};

export const useProfile = (): ProfileProps => {
  const [
    { data: updateData, error: updateError, fetching: updateIsLoading },
    update
  ] = useMutation(UPDATE_PROFILE_MUTATION);

  const [{ data, fetching, error }] = useQuery({
    query: GET_PROFILE
  });

  const { profile } = useSelector(({ auth }: RootState) => auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.GetProfile != undefined) {
      dispatch(saveProfile(data.GetProfile));
    }
  }, [data]);

  const handleUpdate = async ({
    input,
    callback
  }: {
    input: Partial<ProfileInput>;
    callback: () => void;
  }) => {
    await update({
      input
    }).then((res) => {
      callback();
    });
  };
  return {
    data,
    isLoading: fetching || updateIsLoading,
    error: error || updateError,
    handleUpdate
  };
};
