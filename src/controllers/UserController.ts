import UserAPI  from '../api/UserAPI';
import AuthAPI from '../api/AuthAPI';
import ChatsAPI from '../api/ChatsAPI';
import store from '../utils/Store';
import router from '../utils/Router';
import {Options} from '../utils/HTTPTransport';

export class UserController {
  private readonly api: typeof UserAPI;
  private readonly authApi: typeof AuthAPI;
  private readonly chatsApi: typeof ChatsAPI;

  constructor() {
    this.api = UserAPI;
    this.authApi = AuthAPI;
    this.chatsApi = ChatsAPI;
  }

  async profile(data: Options) {
    try {
      await this.api.profile(data);
      await this.fetchUser();
      router.go('/settings');
    } catch (e: any) {
      console.error(e);
    }
  }

  async password(data: Options) {
    try {
      await this.api.password(data); 
      router.go('/settings');
    } catch (e: any) {
      console.error(e);

    }
  }

  async search(data: Options) {
    try {
      const user = await this.api.search(data);
      return user;
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

  async addUserToChat(data: Options) {
    try {
      await this.chatsApi.addUserToChat(data);
      // await this.getChats();
    } catch (e: any) {
      console.error(e);
    }
  }
async getChatToken(data:Options){
    try {
      const token = await this.chatsApi.getChatToken(data);
      return token;
    }catch (e:any) {
      console.error(e);
    }
}
  async createChat(data: Options) {
    try {
      const chat = await this.chatsApi.createChat(data);
      await this.getChats();
      return chat;
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