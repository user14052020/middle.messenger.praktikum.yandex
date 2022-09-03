import './pages/main/main.css';
import './pages/atorization_registration/atorization_registration.css';
import './pages/profile/profile.css';
import './pages/chats/chats.css';
import './pages/error/error.css';

import './components/profile_sidebar/profile_sidebar.css';
import './components/profile_ava/profile_ava.css';
import './components/profile_change_row/profile_change_row.css';
import './components/profile_row/profile_row.css';

import fileImg from './images/file-img.jpg';
import toRightAngleSvg from './images/to-right-angle.svg';
import lupaSvg from './images/lupa.svg';

import { AtorizationRegistration } from './pages/atorization_registration';
import { AtorizationRegistrationInputBlock } from './components/atorization_registration_input_block';
import { AtorizationRegistrationInput } from './components/atorization_registration_input';

window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('#body')!;
  if (window.location.pathname === '/404') {
    body.innerHTML = errorLayout({errorCode: "404", errorMessage: "Не туда попали"});
  } else if (window.location.pathname === '/500') {
    body.innerHTML = errorLayout({errorCode: "500", errorMessage: "Уже чиним"});
  } else if (window.location.pathname === '/login') {
    
    const atorizationRegistration = new AtorizationRegistration({ isRegistration:false, title: 'Вход',regAuthButtonTitle: "Авторизоваться",regAuthLinkTitle:"Нет аккаунта?",regAuthLink:"registration"});
    body.append(atorizationRegistration.getContent()!);
    atorizationRegistration.dispatchComponentDidMount();

  } else if (window.location.pathname === '/registration') {

    const atorizationRegistration = new AtorizationRegistration({ isRegistration:true, title: 'Регистрация',regAuthButtonTitle: "Зарегистрироваться",regAuthLinkTitle:"Войти",regAuthLink:"login"});
    body.append(atorizationRegistration.getContent()!);
    atorizationRegistration.dispatchComponentDidMount();
    const reg_form = document.getElementsByTagName('form');
    reg_form[0].style.height = 'auto';

  } else if (window.location.pathname === '/chats') {
    body.innerHTML = chatsLayout({fileImg:fileImg,toRightAngleSvg:toRightAngleSvg});
  } else if (window.location.pathname === '/profile') {
   body.innerHTML = profileLayout();
  }else if (window.location.pathname === '/profile-change-data') {
    body.innerHTML = profileChangeInfoLayout();
  }else if (window.location.pathname === '/profile-change-pass') {
    body.innerHTML = profileChangeInfoLayout({changePass:true});
  }else if (window.location.pathname === '/profile-new-ava-modal-choose-file') {
    body.innerHTML = profileLayout({changeAva:true});
  }else{

    const atorizationRegistration = new AtorizationRegistration({ isRegistration:false, title: 'Вход',regAuthButtonTitle: "Авторизоваться",regAuthLinkTitle:"Нет аккаунта?",regAuthLink:"registration"});
    body.append(atorizationRegistration.getContent()!);
    atorizationRegistration.dispatchComponentDidMount();

  }
});


// import main_layout from './views/layouts/main/main.hbs';
// import atorizationRegistrationLayout from './views/layouts/atorization_registration/atorization_registration.hbs';
// import errorLayout from './views/layouts/error/error.hbs';
// import chatsLayout from './views/layouts/chats/chats.hbs';
// import profileLayout from './views/layouts/profile/profile.hbs';
// import profileChangeInfoLayout from './views/layouts/profile/profile-change-info.hbs';



// window.addEventListener("DOMContentLoaded", ()=>{
// 	const root = document.querySelector('#root');
// 	const body = document.querySelector('#body');
// 	root.innerHTML = main_layout();
// 	if (window.location.pathname === '/404') {
// 		body.innerHTML = errorLayout({errorCode: "404", errorMessage: "Не туда попали"});
// 	} else if (window.location.pathname === '/500') {
// 		body.innerHTML = errorLayout({errorCode: "500", errorMessage: "Уже чиним"});
// 	} else if (window.location.pathname === '/login') {
// 		body.innerHTML = atorizationRegistrationLayout({title:"Вход",regAuthButtonTitle:"Авторизоваться",regAuthLinkTitle:"Нет аккаунта?",regAuthLink:"registration"});
// 	} else if (window.location.pathname === '/registration') {
// 		body.innerHTML = atorizationRegistrationLayout({registration:true, title:"Регистрация",regAuthButtonTitle:"Зарегистрироваться",regAuthLinkTitle:"Войти",regAuthLink:"login"});
// 		const reg_form = document.getElementsByTagName('form');
// 		reg_form[0].style.height = 'auto';
// 	} else if (window.location.pathname === '/chats') {
// 		body.innerHTML = chatsLayout({fileImg:fileImg,toRightAngleSvg:toRightAngleSvg});
// 	} else if (window.location.pathname === '/profile') {
// 		body.innerHTML = profileLayout();
// 	}else if (window.location.pathname === '/profile-change-data') {
// 		body.innerHTML = profileChangeInfoLayout();
// 	}else if (window.location.pathname === '/profile-change-pass') {
// 		body.innerHTML = profileChangeInfoLayout({changePass:true});
// 	}else if (window.location.pathname === '/profile-new-ava-modal-choose-file') {
// 		body.innerHTML = profileLayout({changeAva:true});
// 	}else{
// 		body.innerHTML = atorizationRegistrationLayout({title:"Вход",regAuthButtonTitle:"Авторизоваться",regAuthLinkTitle:"Нет аккаунта?",regAuthLink:"registration"});
// 	}
// });
