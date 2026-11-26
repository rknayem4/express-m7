export interface IUser {
  name: string;
  password: string;
  email: string;
  age?: number | null;
}

export interface IUserUpdate {
  name?: string | null;
  password?: string | null;
  email?: string | null;
  age?: number | null;
  is_Active?: boolean | null;
}
