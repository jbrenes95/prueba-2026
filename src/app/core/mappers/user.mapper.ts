import { User, UserApi, UserDetail, UserDetailApi } from '../models/user.model';

export function mapUser(api: UserApi): User {
  return {
    id: api.id,
    name: api.name,
    surname: api.surname,
    email: api.email,
  };
}

export function mapUserDetail(api: UserDetailApi): UserDetail {
  return {
    ...mapUser(api),
    password: api.password,
  };
}
