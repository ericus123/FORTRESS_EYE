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
