import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { CombinedError, useMutation } from "urql";
import { SIGNIN_MUTATION, SIGNOUT_MUTATION } from "../graphql/mutations/auth";
import {
  handleAuthTokens,
  handleSignoutData
} from "../redux/modules/auth/authSlice";
import { RootState } from "../redux/modules/rootReducer";

export type SigninInput = {
  email: string;
  password: string;
};

type SigninReponse = {
  handleSignin: (input: SigninInput) => void;
  error?: CombinedError;
  fetching: boolean;
  isSignedIn: boolean;
};

type SignoutReponse = {
  handleSignout: () => void;
};

export type SigninResponse = {
  accessToken: string;
  refreshToken: string;
};

export const useSignin = (): SigninReponse => {
  const [{ data, fetching, error }, signin] = useMutation(SIGNIN_MUTATION);

  const { tokens } = useSelector(({ auth }: RootState) => auth);

  const isSignedIn =
    tokens?.accessToken != undefined && tokens?.refreshToken != undefined;

  const dispatch = useDispatch();

  const router = useRouter();

  const handleSignin = async (input: SigninInput) => {
    await signin(input).then(({ data: _result }) => {
      if (_result != undefined) {
        dispatch(handleAuthTokens(_result?.Signin));
        router.push("/dashboard");
      }
    });
  };

  return {
    handleSignin,
    error,
    fetching,
    isSignedIn
  };
};

export const useSignout = (): SignoutReponse => {
  const dispatch = useDispatch();

  const router = useRouter();

  const [{ fetching, error }, signout] = useMutation(SIGNOUT_MUTATION);
  const handleSignout = async () => {
    await signout()?.then(async () => {
      dispatch(handleSignoutData());
      router.push("/login");
    });
  };

  return {
    handleSignout
  };
};
