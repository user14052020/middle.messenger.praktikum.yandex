import BaseAPI from './BaseAPI';
import {Options} from '../utils/httptransport';

export interface UserChange {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  profile(data: Options) {
    return this.http.put('/profile', data);
  }

  avatar(data: Options) {
    return this.http.put('/profile/avatar', data);
  }

  password(data: Options) {
    return this.http.put('/password', data);
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();