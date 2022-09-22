import BaseAPI from './BaseAPI';
import {Options} from '../utils/HTTPTransport';


export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  createChat(data: Options) {
    return this.http.post('/', data);
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