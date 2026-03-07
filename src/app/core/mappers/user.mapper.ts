import { User, UserApi, UserDetailApi } from '../models/user.model';

export function mapUser(api: UserApi): User {
  return {
    id: api.id,
    name: api.name,
    surname: api.surname,
    email: api.email,
  };
}

export function mapUserDetail(api: UserDetailApi): User {
  return mapUser(api);
}
