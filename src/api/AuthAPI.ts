import BaseAPI from './BaseAPI';
import {Options} from '../utils/HTTPTransport';

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
    super('/auth');
  }

  signin(data: Options) {
    return this.http.post('/signin', data);
  }


  signup(data: Options) {
    return this.http.post('/signup', data);
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