import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/modules/rootReducer";
import { saveUserLocation } from "../redux/modules/tracking/trackSlice";
import { useOnline } from "./useOnline";

type trackResponse = {
  tracked: boolean;
  denied: boolean;
  isOnline: boolean;
  status?: number;
  statusText?: string;
  geo?: {
    longitude: number;
    latitude: number;
  };
};

export const getServerStatus = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_TEST_ENDPOINT}`
    );

    return {
      statusCode: response?.status,
      title: response.statusText
    };
  } catch (error) {
    return {
      statusCode: 500,
      title: "Internal Server Error"
    };
  }
};
const useTrackLocation = (): trackResponse => {
  const { isOnline } = useOnline();

  const [response, setResponse] = useState<trackResponse>({
    tracked: false,
    denied: false,
    isOnline
  });

  const router = useRouter();

  const dispatch = useDispatch();

  const { geo } = useSelector(({ track }: RootState) => track);

  const isTrackingEnabled =
    geo?.latitude == undefined || geo?.longitude == undefined;

  const trackLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((res) => {
        if (res.state === "denied") {
          setResponse((prevState) => ({
            ...prevState,
            denied: true
          }));
        } else {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setResponse((prevState) => ({
                ...prevState,
                tracked: true,
                denied: false,
                geo: {
                  longitude: position.coords.longitude,
                  latitude: position.coords.latitude
                }
              })),
                dispatch(
                  saveUserLocation({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                  })
                );

              router.refresh();
            },
            () => {
              setResponse((prevState) => ({
                ...prevState,
                denied: true
              }));
            }
          );
        }
      });
    } else {
      setResponse((prevState) => ({
        ...prevState,
        denied: true
      }));
    }
  };
  useEffect(() => {
    trackLocation();
    getServerStatus().then(({ statusCode, title }) => {
      setResponse({
        ...response,
        status: statusCode,
        statusText: title
      });
    });
  }, [isOnline]);

  return response;
};

export default useTrackLocation;
