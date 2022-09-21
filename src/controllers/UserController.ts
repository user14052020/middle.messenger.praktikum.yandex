import API, { UserAPI, UserChange, UserAvatar } from '../api/UserAPI';
import AuthAPI from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class UserController {
  private readonly api: UserAPI;
  private readonly authApi: AuthAPI;

  constructor() {
    this.api = API;
    this.authApi = AuthAPI;
  }

  async profile(data: UserChange) {
    try {

      await this.api.profile(data);
      await this.fetchUser();    
      router.go('/settings');

    } catch (e: any) {

      console.error(e);

    }
  }

  async password(data: UserChange) {
    try {

      await this.api.password(data); 
      router.go('/settings');

    } catch (e: any) {

      console.error(e);

    }
  }

  async avatar(data: UserAvatar) {
    try {

      await this.api.avatar(data); 
      await this.fetchUser();
      // router.go('/settings');

    } catch (e: any) {

      console.error(e);

    }
  }

  async fetchUser() {
    const user = await this.authApi.read();
    console.log(user);
    store.set('user', user);
  }

}

export default new UserController();