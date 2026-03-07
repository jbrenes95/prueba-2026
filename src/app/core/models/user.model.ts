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

// Frontend model — password is never exposed in list
export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
}

// Frontend detail model — password exposed only in detail view
export interface UserDetail extends User {
  password: string;
}
