import BaseAPI from './BaseAPI';
import {Options} from '~/utils/HTTPTransport';
import {API_URL} from "~/utils/helpers";

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
    super(API_URL,'/chats');
  }

  getChatToken(options: Options) {
    return this.http.post(`/token/${(options.data as Chat)!.id}`, options);
  }

  getChatUsers(options: Options) {
    return this.http.get(`/${(options.data as Chat)!.id}/users`, options);
  }

  createChat(options: Options) {
    return this.http.post('/', options);
  }

  addUserToChat(options: Options) {
    return this.http.put('/users', options);
  }

  deleteUserFromChat(options: Options) {
    return this.http.delete('/users', options);
  }

  deleteChat(options: Options) {
    return this.http.delete('/', options);
  }

  getChats() {
    let options:Options = {'headers':{'Content-Type': 'application/json'}}
    return this.http.get('/',options);
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}

export default new ChatsAPI();