import './pages/authorization_registration/authorization_registration.css';
import './pages/profile/profile.css';
import './pages/profile_change_info/profile_change_info.css';
import './pages/chats/chats.css';
import './pages/error/error.css';

import './blocks/menu/menu.css';
import './blocks/profile_sidebar/profile_sidebar.css';
import './blocks/profile_ava/profile_ava.css';
import './blocks/profile_row/profile_row.css';

import { AuthorizationRegistrationPage } from './pages/authorization_registration';
import { ErrorPage } from './pages/error';
import { ChatsPage } from './pages/chats';
import { ProfilePage } from './pages/profile';
import { ProfileChangeInfoPage } from './pages/profile_change_info';

import { MenuBlock } from './blocks/menu';

import Router from './utils/Router';

import AuthController from './controllers/AuthController';
// import UserController from './controllers/UserController';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Messenger = '/messenger'
}


window.addEventListener('DOMContentLoaded', async () => {

  console.log('sprint_4')
  const root = document.querySelector('#root')!;
  const menu = new MenuBlock();
  root.append(menu.getContent()!);

  Router
  .use("/", AuthorizationRegistrationPage)
  .use("/sign-up", AuthorizationRegistrationPage)
  .use("/messenger", ChatsPage)
  .use("/settings", ProfilePage)
  .use("/profile-change-data",ProfileChangeInfoPage)
  .use("/profile-change-pass",ProfileChangeInfoPage)
  .use("/404", ErrorPage)
  .use("/500", ErrorPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {

      Router.go(Routes.Messenger)
    }
  } catch (e) {
    console.log(e);
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }

});





