import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { CombinedError, useMutation } from "urql";
import {
  REQUEST_PASSWORD_RESET,
  RESET_PASSWORD_MUTATION,
  SEND_VERIFICATION_MUTATION,
  SIGNIN_MUTATION,
  SIGNOUT_MUTATION,
  SIGNUP_MUTATION,
  VERIFICATION_MUTATION
} from "../graphql/mutations/auth";

import {
  AuthTokens,
  handleAuthTokens,
  handleSignoutData
} from "../redux/modules/auth/authSlice";
import { RootState } from "../redux/modules/rootReducer";

export type SigninInput = {
  email: string;
  password: string;
};

export type SignupInput = SigninInput & {
  firstName: string;
  lastName: string;
};

type SigninReponse = {
  handleSignin: (input: SigninInput) => void;
  error?: CombinedError;
  fetching: boolean;
  isSignedIn: boolean;
  tokens: AuthTokens;
};

type SignupReponse = {
  handleSignup: (
    {
      input,
      token
    }: {
      input: SignupInput;
      token: string;
    },
    callback: () => void
  ) => void;
  error?: CombinedError;
  fetching: boolean;
  isSignedIn: boolean;
  tokens: AuthTokens;
};

type SignoutReponse = {
  handleSignout: () => void;
};

type VerificationReponse = {
  handleVerification: (token: string) => void;
  handleResend: (email: string) => void;
  resendFetching: boolean;
  fetching: boolean;
  error?: CombinedError;
  data: any;
};

type PasswordResetReponse = {
  handlePasswordReset: (
    data: { password: string; token: string },
    callback: () => void
  ) => void;
  handleRequest: (email: string, callback: () => void) => void;
  requestFetching: boolean;
  fetching: boolean;
  requestError?: CombinedError;
  error?: CombinedError;
  requestData: any;
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
    isSignedIn,
    tokens
  };
};

export const useSignup = (): SignupReponse => {
  const [{ data, fetching, error }, signup] = useMutation(SIGNUP_MUTATION);

  const { tokens } = useSelector(({ auth }: RootState) => auth);

  const isSignedIn =
    tokens?.accessToken != undefined && tokens?.refreshToken != undefined;

  const dispatch = useDispatch();

  const router = useRouter();

  const handleSignup = async (
    {
      input,
      token
    }: {
      input: SignupInput;
      token: string;
    },
    callback: () => void
  ) => {
    await signup({
      ...input,
      token
    }).then(({ data: _result }) => {
      if (_result?.SignupUser != undefined) {
        dispatch(handleAuthTokens(_result?.SignupUser));
        setTimeout(() => {
          callback();
        }, 3000);
      }
    });
  };

  return {
    handleSignup,
    error,
    fetching,
    isSignedIn,
    tokens
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

export const useVerification = (): VerificationReponse => {
  const dispatch = useDispatch();

  const router = useRouter();

  const [{ fetching, error, data }, verify] = useMutation(
    VERIFICATION_MUTATION
  );
  const handleVerification = async (token: string) => {
    await verify({
      token
    }).then((res: any) => {
      if (res?.data?.VerifyUser) {
        dispatch(handleAuthTokens(res?.data?.VerifyUser));
        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      }
    });
  };

  const [{ fetching: resendFetching }, resend] = useMutation(
    SEND_VERIFICATION_MUTATION
  );
  const resendVerification = async (email: string) => {
    await resend({ email });
  };

  return {
    handleResend: resendVerification,
    handleVerification,
    resendFetching: resendFetching,
    fetching,
    error,
    data
  };
};

export const usePasswordReset = (): PasswordResetReponse => {
  const dispatch = useDispatch();

  const searchParams = useSearchParams();

  const [
    { fetching: requestFetching, error: requestError, data: requestData },
    request
  ] = useMutation(REQUEST_PASSWORD_RESET);

  const [{ fetching, error }, reset] = useMutation(RESET_PASSWORD_MUTATION);

  const handleRequest = async (email: string, callback: () => void) => {
    await request({
      email
    }).then((res: any) => {
      if (res?.data?.RequestPasswordReset) {
        callback();
      }
    });
  };

  const handlePasswordReset = async (
    data: {
      password: string;
      token: string;
    },
    callback: () => void
  ) => {
    await reset({
      ...data
    }).then((res: any) => {
      if (res?.data?.ResetPassword) {
        callback();
      }
    });
  };

  return {
    handleRequest,
    handlePasswordReset,
    requestFetching: requestFetching,
    requestError: requestError,
    requestData: requestData,
    fetching,
    error
  };
};
