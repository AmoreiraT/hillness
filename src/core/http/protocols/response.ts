import { ApiError, StatusError, TimeoutError, UnknownError } from '@core/error';
import { HttpStatusCode } from './status-code';

export type EpmResponse<T extends object> =
  | UnknownError
  | TimeoutError
  | StatusError
  | EpmSuccessResponse<T>;

export type EpmSuccessResponse<T extends object> = {
  data: EpmResponseDataType<T>;
  status: HttpStatusCode.Ok;
};

export type EpmResponseDataType<T extends object> = T | ApiErrorResponse;

export interface ApiErrorResponse {
  data: {
    id: string;
    name: string;
  };
  error: ApiError;
}

export type HttpResponse<T extends object | string> =
  | TimeoutError
  | HttpSuccessResponse<T>;
export interface HttpSuccessResponse<T extends object | string> {
  data: T;
  status: HttpStatusCode.Ok;
}
