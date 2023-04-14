interface InnerDto {
  auth_ticket: string;
  session: {
    change_password: boolean;
    id: number;
    user_id: number;
    username: string;
  };
  success: boolean;
}

export interface UserDto {
  data: InnerDto;
}
