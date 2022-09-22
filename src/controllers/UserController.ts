import UserAPI  from '../api/UserAPI';
import AuthAPI from '../api/AuthAPI';
import ChatsAPI from '../api/ChatsAPI';
import store from '../utils/Store';
import router from '../utils/Router';
import {Options} from '../utils/HTTPTransport';

export class UserController {
  private readonly api: UserAPI;
  private readonly authApi: AuthAPI;
  private readonly chatsApi: ChatsAPI;

  constructor() {
    this.api = UserAPI;
    this.authApi = AuthAPI;
    this.chatsApi = ChatsAPI;
  }

  async profile(data: Options) {
    try {

      await this.api.profile(data);
      await this.fetchUser();    
      router.go('/messenger');

    } catch (e: any) {

      console.error(e);

    }
  }

  async password(data: Options) {
    try {

      await this.api.password(data); 
      router.go('/messenger');

    } catch (e: any) {

      console.error(e);

    }
  }

  async avatar(data: Options) {
    try {

      const user = await this.api.avatar(data); 
      store.set('user', user);
    } catch (e: any) {

      console.error(e);

    }
  }

  async fetchUser() {
    const user = await this.authApi.read();
    store.set('user', user);
  }

  async createChat() {
    try {
      let newChatOptions:createChatRequestData = {};
      newChatOptions['data'] = {title:(Math.random() + 1).toString(36).substring(7)};
      const chat = await this.chatsApi.createChat(newChatOptions);
      await this.getChats();

    } catch (e: any) {

      console.error(e);

    }
  }

  async getChats() {
    try {
      
      const chats = await this.chatsApi.getChats(); 
      store.set('chats', chats);

    } catch (e: any) {

      console.error(e);

    }
  }



}

export default new UserController();