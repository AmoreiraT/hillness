export interface UserEntity {
  token: string;
  success: boolean;
  session: {
    id: number;
    userId: number;
    username: string;
    changePassword: boolean;
  };
}
