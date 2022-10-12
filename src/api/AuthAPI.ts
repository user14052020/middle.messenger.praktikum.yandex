import BaseAPI from './BaseAPI';
import {Options} from '~/utils/HTTPTransport';
import { API_URL } from '~/utils/helpers';

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export class AuthAPI extends BaseAPI {
  constructor() {
    super(API_URL,'/auth');
  }

  signin(options: Options) {
    return this.http.post('/signin', options);
  }


  signup(options: Options) {
    return this.http.post('/signup', options);
  }

  read(): Promise<unknown|User> {
    let options:Options = {'headers':{'Content-Type': 'application/json'}}
    return this.http.get('/user',options);
  }

  logout() {
    let options:Options = {'headers':{'Content-Type': 'application/json'}}
    return this.http.post('/logout',options);
  }

  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new AuthAPI();