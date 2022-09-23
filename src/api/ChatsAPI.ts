import BaseAPI from './BaseAPI';
import {Options} from '../utils/httptransport';

export interface Chat {
  id: number;
}

export interface Token {
  token: string;
}

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChatToken(options: Options) {
    console.log(options.data);
    return this.http.post(`/token/${(options.data as Chat)!.id}`, options);
  }

  createChat(options: Options) {
    return this.http.post('/', options);
  }

  addUserToChat(options: Options) {
    return this.http.put('/users', options);
  }

  getChats() {
    let options:Options = {'headers':{'Content-Type': 'application/json'}}
    return this.http.get('?limit=5',options);
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new ChatsAPI();