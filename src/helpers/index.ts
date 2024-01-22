import { jwtDecode } from "jwt-decode";
import { CombinedError } from "urql";
import { userFriendlyErrorMessages } from "../constants/errors";
import { Area } from "../hooks/useAreas";

type GraphQLError = {
  extensions?: {
    code?: string;
  };
};

type LogInfo = {
  message: string;
  type: "warning" | "error" | "message";
  enabled?: boolean;
  event?: Event;
};

export const playerLog = ({
  message,
  type = "message",
  enabled = false,
  event
}: LogInfo): void => {
  if (enabled) {
    switch (type) {
      case "warning":
        console.warn(`Warning: ${message}`, event);
        break;
      case "error":
        console.error(`Error: ${message}`, event);
        break;
      case "message":
        console.log(`Message: ${message}`, event);
        break;
      default:
        console.log(message);
    }
  }
};

const wsUrlRegex =
  /^wss?:\/\/((\w+:?\w*)?@)?([a-zA-Z\d.-]+)(:\d+)?(\/([^\s]*))?$/;
export const isValidWsUrl = (url: string): boolean => {
  return wsUrlRegex.test(url);
};

export const getGraphQLErrorMessage = (
  error: CombinedError | undefined
): string | undefined => {
  if (error && error.graphQLErrors && error.graphQLErrors.length > 0) {
    const errorCode: string =
      error.graphQLErrors[0]?.message?.split(":")?.length > 1
        ? error.graphQLErrors[0]?.message?.split(":")[1]?.trim()
        : error.graphQLErrors[0]?.message?.split(":")[0]?.trim();

    if (errorCode != undefined) {
      return userFriendlyErrorMessages[errorCode] || "Something went wrong";
    }

    return "Something went wrong";
  }
  return undefined;
};

export const extractInitials = (fullName: string) => {
  if (!fullName || typeof fullName !== "string") {
    return "";
  }

  const names = fullName.trim().split(/\s+/);

  if (names.length === 1) {
    const [name] = names;
    return name.slice(0, 2).toUpperCase();
  }

  const initials = names.map((name) => name.charAt(0).toUpperCase()).join("");

  return initials;
};

export const verifyToken = (token?: string) => {
  try {
    if (token != undefined) {
      const isValid: any = jwtDecode(token);
      return isValid?.data;
    }
  } catch (error) {
    return null;
  }
};

export const areaDevices = (area: Area): number => {
  const alarms = area?.alarms.length;
  const sensors = area?.sensors.length;
  const fans = area?.fans.length;

  return alarms + sensors + fans + (area?.light != undefined ? 1 : 0);
};
