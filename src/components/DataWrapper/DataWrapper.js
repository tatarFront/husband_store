import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSettings } from "../../store/slices/settings/thunks";
import { settingsAction } from "../../store/slices/settings/slice";
import {
  getSettingValue,
  getSettingFetchingStatus
} from "../../store/slices/settings/selectors";

import ResetBtn from "./ResetBtn";

const INTERVAL = 6000;

const DataWrapper = () => {
  const dispatch = useDispatch();
  const value = useSelector(getSettingValue);
  const isFetching = useSelector(getSettingFetchingStatus);

  const getData = useCallback(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  const onReset = useCallback(() => {
    dispatch(settingsAction.resetValue());
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(getData, INTERVAL);

    return () => clearInterval(intervalId);
  }, [getData]);

  return (
    <div>
      <h1> Никита Толокнов! Привет! </h1>
      <h4> Я контейнер с работой данных </h4>
      <p> 1. Организую подписку на обновление данных </p>
      <p> 2. Буду выводить рандомное число раз в 1 минуту </p>
      <br />
      <br />
      <h1> {isFetching ? "loading..." : value} </h1>
      <ResetBtn onReset={onReset} />
      <br />
      <br />
      <br />
      Собственность Зульфии Толокновой
    </div>
  );
};

export default DataWrapper;
