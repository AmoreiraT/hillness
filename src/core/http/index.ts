import { TimeoutError } from '@core/error/timeout';
import axios from 'axios';

import { HttpRequest, EpmResponse, HttpResponse } from './protocols';

export const useHttpClient = () => {
  const sendEpmRequest = async <T extends object>(requestData: HttpRequest) => {
    return axios
      .request<EpmResponse<T>>({
        url: requestData.url,
        method: requestData.method,
        data: requestData.body,
        headers: requestData.headers,
        timeout: 30000, // 30 sec
      })
      .then((res) => {
        return res as EpmResponse<T>;
      })
      .catch((err) => {
        return err as TimeoutError;
      });
  };

  const sendRequest = async <T extends object | string>(
    requestData: HttpRequest
  ) => {
    return axios
      .request<T>({
        url: requestData.url,
        method: requestData.method,
        data: requestData.body,
        headers: requestData.headers,
        timeout: 30000, // 30 sec
      })
      .then((res) => {
        return res as HttpResponse<T>;
      })
      .catch((err) => {
        return err as TimeoutError;
      });
  };

  return { sendEpmRequest, sendRequest } as const;
};
