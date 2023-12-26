/* eslint-disable react/display-name */
import { Box } from "@mui/material";
import { FC } from "react";
import LocationTrackingError from "../components/tracking/location";
import useTrackLocation from "../hooks/useTracking";

const withLocationProtected = (Component: FC<any>) => (props: any) => {
  const { denied, isOnline, status, statusText } = useTrackLocation();

  const mode = process.env.NEXT_PUBLIC_MODE;

  return status != undefined && status > 399 ? (
    // <ErrorPage statusCode={status} message={statusText || ""} />
    <Box>app crashed</Box>
  ) : !isOnline ? (
    <Box>No network</Box>
  ) : denied ? (
    <LocationTrackingError />
  ) : (
    <Component {...props} />
  );
};

export default withLocationProtected;
