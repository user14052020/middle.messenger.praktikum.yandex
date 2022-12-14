import AuthAPI from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';
import {Options} from '../utils/HTTPTransport';

export class AuthController {
  private readonly api: typeof AuthAPI;

  constructor() {
    this.api = AuthAPI;
  }

  async signin(data: Options) {
    try {
      await this.api.signin(data);
      await this.fetchUser();
      router.go('/messenger');
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: Options) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      router.go('/messenger');
    } catch (e: any) {
      console.error(e);
    }
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set('user', user);
  }

  async logout() {
    try {
      await this.api.logout();
      router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();