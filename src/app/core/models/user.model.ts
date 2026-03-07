// Backend API shapes
export interface UserApi {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export interface UserDetailApi extends UserApi {
  password: string;
}

// Frontend model — password is never exposed
export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
}
