// core
import * as Protocols from '@core/http/protocols';
// domain
import { useHttpClient } from '@core/http';
import { UserDto } from '../entities/dto';

export interface UserRepository {
  fetchUser: (
    username: string,
    password: string
  ) => Promise<Protocols.EpmResponse<UserDto>>;

  changePassword: ({
    token,
    oldPassword,
    newPassword,
  }: {
    token: string;
    oldPassword: string;
    newPassword: string;
  }) => Promise<Protocols.HttpResponse<string>>;
  validateUser: (
    token: string
  ) => Promise<Protocols.EpmResponse<Omit<UserDto, 'auth_ticket'>>>;
}

export const useUserRepository = (): UserRepository => {
  const client = useHttpClient();

  const fetchUser = async (username: string, password: string) => {
    const requestData: Protocols.HttpRequest = {
      url: `${import.meta.env.VITE_API_BASE_URL_DEV}/${Protocols.Url.login}`,
      method: Protocols.HttpMethod.post,
      body: {
        username,
        password,
      },
    };

    return client.sendEpmRequest<UserDto>(requestData);
  };

  const validateUser = async (token: string) => {
    const requestData: Protocols.HttpRequest = {
      url: `${import.meta.env.VITE_API_BASE_URL_DEV}/${
        Protocols.Url.checkLogin
      }`,
      method: Protocols.HttpMethod.post,
      headers: {
        auth: token,
      },
    };

    return client.sendEpmRequest<UserDto>(requestData);
  };

  const changePassword = async ({
    token,
    oldPassword,
    newPassword,
  }: {
    token: string;
    oldPassword: string;
    newPassword: string;
  }) => {
    const requestData: Protocols.HttpRequest = {
      url: `${import.meta.env.VITE_API_BASE_URL_DEV}/${
        Protocols.Url.changePassword
      }`,
      method: Protocols.HttpMethod.post,
      headers: {
        auth: token,
      },
      body: {
        oldpassword: oldPassword,
        newpassword: newPassword,
      },
    };

    return client.sendRequest<string>(requestData);
  };

  return {
    fetchUser,
    validateUser,
    changePassword,
  } as const;
};

export * from '../entities/dto';
export * from '../entities/entity';
export * from '../entities/map';
