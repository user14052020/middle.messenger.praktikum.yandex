import BaseAPI from './BaseAPI';
import { User } from './AuthAPI';

export interface UserChange {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface UserAvatar {
  file: string;
}


export interface UserPassword {
  oldPassword: string;
  newPassword: string;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  profile(data: UserChange) {
    return this.http.put('/profile', data);
  }

  avatar(data: Avatar) {
    return this.http.put('/profile/avatar', data);
  }

  password(data: UserPassword) {
    return this.http.put('/password', data);
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();