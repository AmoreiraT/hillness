import { UserDto } from '../repository';
import { UserEntity } from './entity';

export const mapUserDtoToEntity = (response: UserDto): UserEntity => {
  return {
    token: response.data.auth_ticket,
    success: response.data.success,
    session: {
      id: response.data.session.id,
      userId: response.data.session.user_id,
      username: response.data.session.username,
      changePassword: response.data.session.change_password,
    },
  };
};
