import { HttpMethod } from './method';

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: Record<string, string>;
  headers?: Record<string, string>;
};
