import './views/partials/';
import './views/layouts/main/main.css';
import './views/layouts/atorization_registration/atorization_registration.css';
import './views/layouts/profile/profile.css';
import './views/layouts/chats/chats.css';
import './views/layouts/error/error.css';

import './views/partials/profile_sidebar/profile_sidebar.css';
import './views/partials/profile_ava/profile_ava.css';
import './views/partials/profile_change_row/profile_change_row.css';
import './views/partials/profile_row/profile_row.css';

import main_layout from './views/layouts/main/main.hbs';
import atorizationRegistrationLayout from './views/layouts/atorization_registration/atorization_registration.hbs';
import errorLayout from './views/layouts/error/error.hbs';
import chatsLayout from './views/layouts/chats/chats.hbs';
import profileLayout from './views/layouts/profile/profile.hbs';
import profileChangeInfoLayout from './views/layouts/profile/profile-change-info.hbs';

import fileImg from './views/images/file-img.jpg';
import toRightAngleSvg from './views/images/to-right-angle.svg';
import lupaSvg from './views/images/lupa.svg';

window.addEventListener("DOMContentLoaded", ()=>{
	const root = document.querySelector('#root');
	const body = document.querySelector('#body');
	root.innerHTML = main_layout();
	if (window.location.pathname === '/404') {
		body.innerHTML = errorLayout({error_code: "404", error_message: "Не туда попали"});
	} else if (window.location.pathname === '/500') {
		body.innerHTML = errorLayout({error_code: "500", error_message: "Уже чиним"});
	} else if (window.location.pathname === '/login') {
		body.innerHTML = atorizationRegistrationLayout({title:"Вход",reg_auth_button_title:"Авторизоваться",reg_auth_link_title:"Нет аккаунта?",reg_auth_link:"registration"});
	} else if (window.location.pathname === '/registration') {
		body.innerHTML = atorizationRegistrationLayout({registration:true, title:"Регистрация",reg_auth_button_title:"Зарегистрироваться",reg_auth_link_title:"Войти",reg_auth_link:"login"});
		const reg_form = document.getElementsByTagName('form');
		reg_form[0].style.height = 'auto';
	} else if (window.location.pathname === '/chats') {
		body.innerHTML = chatsLayout({fileImg:fileImg,toRightAngleSvg:toRightAngleSvg});
	} else if (window.location.pathname === '/profile') {
		body.innerHTML = profileLayout();
	}else if (window.location.pathname === '/profile-change-data') {
		body.innerHTML = profileChangeInfoLayout();
	}else if (window.location.pathname === '/profile-change-pass') {
		body.innerHTML = profileChangeInfoLayout({change_pass:true});
	}else if (window.location.pathname === '/profile-new-ava-modal-choose-file') {
		body.innerHTML = profileLayout({change_ava:true});
	}else{
		body.innerHTML = atorizationRegistrationLayout({title:"Вход",reg_auth_button_title:"Авторизоваться",reg_auth_link_title:"Нет аккаунта?",reg_auth_link:"registration"});
	}
});
