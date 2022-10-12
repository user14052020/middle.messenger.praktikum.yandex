import BaseAPI from './BaseAPI';
import {Options} from '../utils/HTTPTransport';
import {User} from "./AuthAPI";
import {API_URL} from "../utils/helpers";

export class UserAPI extends BaseAPI {
  constructor() {
    super(API_URL,'/user');
  }

  profile(options: Options) {
    return this.http.put('/profile', options);
  }

  avatar(options: Options) {
    return this.http.put('/profile/avatar', options);
  }

  password(options: Options) {
    return this.http.put('/password', options);
  }

  search(options: Options): Promise<unknown|User> {
    return this.http.post('/search', options);
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new UserAPI();