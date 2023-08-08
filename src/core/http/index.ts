import { TimeoutError } from '@core/error/timeout';
import axios from 'axios';

import { HttpRequest, ApiResponse, HttpResponse } from './protocols';

export const useHttpClient = () => {
  const sendApiRequest = async <T extends object>(requestData: HttpRequest) => {
    return axios
      .request<ApiResponse<T>>({
        url: requestData.url,
        method: requestData.method,
        data: requestData.body,
        headers: requestData.headers,
        timeout: 30000, // 30 sec
      })
      .then((res) => {
        return res as ApiResponse<T>;
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

  return { sendApiRequest, sendRequest } as const;
};
