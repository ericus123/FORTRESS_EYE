import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombinedError, useMutation, useQuery } from "urql";
import { ADD_ALARM_MUTATION } from "../graphql/mutations/alarm";
import { GET_ALARM_QUERY } from "../graphql/queries/alarm";
import {
  handleActive,
  handleAlarmAddShow,
  saveAlarms
} from "../redux/modules/alarm/alarmSlice";
import {
  handleStatus,
  hideStatus
} from "../redux/modules/navigation/navigationSlice";
import { RootState } from "../redux/modules/rootReducer";
import { Alarm } from "./useAreas";

export type AlarmResponse = {
  data: Alarm[];
  error?: CombinedError;
  fetching: boolean;
  handleAlarms: any[];
  handleActiveAlarm: (alarm: Alarm) => void;
  handleAddAlarm: (name: string) => void;
  alarm: Alarm;
  handleShow: () => boolean;
  isAdding: boolean;
};

export const useAlarms = () => {
  const dispatch = useDispatch();
  const [{ data, fetching, error }, fetchData] = useQuery({
    variables: {},
    query: GET_ALARM_QUERY
  });

  const { alarms, alarm } = useSelector(({ alarms }: RootState) => alarms);

  useEffect(() => {
    if (data?.GetAlarms != undefined) {
      dispatch(saveAlarms(data?.GetAlarms));
    }

    if (data?.GetAlarms?.length > 0) {
      handleActiveAlarm(data?.GetAlarms[0]);
    }
  }, [data]);

  const handleAlarms = () => {};

  const handleActiveAlarm = (alarm: Alarm) => {
    dispatch(handleActive(alarm));
  };

  const handleShow = () => {
    dispatch(handleAlarmAddShow());
    dispatch(hideStatus());
  };

  const [{ fetching: isAdding, error: addError, data: addData }, addAlarm] =
    useMutation(ADD_ALARM_MUTATION);

  const handleAddAlarm = async (name: string, callback: () => void) => {
    await addAlarm({
      input: {
        name
      }
    })
      .then()
      .then((res) => {
        if (res != undefined) {
          callback();
          fetchData();
        }
      });
  };

  useEffect(() => {
    if (addError != undefined) {
      handleShow();
      setTimeout(() => {
        dispatch(
          handleStatus({
            isSuccess: false,
            show: true
          })
        );
      }, 500);
    }

    if (addData != undefined) {
      handleShow();
      setTimeout(() => {
        dispatch(
          handleStatus({
            isSuccess: true,
            show: true
          })
        );
      }, 500);
    }
  }, [addError, addData]);

  return {
    handleAlarms,
    handleActiveAlarm,
    handleShow,
    handleAddAlarm,
    data: alarms,
    error,
    fetching,
    alarm,
    isAdding
  };
};
