import BaseAPI from './BaseAPI';
import {Options} from '../utils/httptransport';

export interface Message {
  chat_id: string,
  content: string,
  file: string,
  id: number,
  is_read: boolean,
  time: string,
  type: string,
  user_id: number
}
export interface Chat {
  id: number;
  title: string;
  unread_count:number,
  last_message:{content:string,time:string}
}

export interface Token {
  token: string;
}

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChatToken(options: Options) {
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