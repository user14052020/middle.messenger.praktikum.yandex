import './views/partials/';
import main_layout from './views/layouts/layout.hbs';
import atorization_registration_layout from './views/layouts/atorization_registration.hbs';
import error_layout from './views/layouts/error.hbs';
import chats_layout from './views/layouts/chats.hbs';
import profile_layout from './views/layouts/profile.hbs';
import profile_change_info_layout from './views/layouts/profile-change-info.hbs';

import './views/layouts/chats.css';
import './views/layouts/profile.css';

import file_img from './views/images/file-img.jpg';
import to_right_angle_svg from './views/images/to-right-angle.svg';
import lupa_svg from './views/images/lupa.svg';

window.addEventListener("DOMContentLoaded", ()=>{
	console.log('test');
	const root = document.querySelector('#root');
	const body = document.querySelector('#body');
	root.innerHTML = main_layout();
	if (window.location.pathname === '/404') {
		body.innerHTML = error_layout({error_code: "404", error_message: "Не туда попали"});
	} else if (window.location.pathname === '/500') {
		body.innerHTML = error_layout({error_code: "500", error_message: "Уже чиним"});
	} else if (window.location.pathname === '/login') {
		body.innerHTML = atorization_registration_layout({title:"Вход",reg_auth_button_title:"Авторизоваться",reg_auth_link_title:"Нет аккаунта?",reg_auth_link:"registration"});
	} else if (window.location.pathname === '/registration') {
		body.innerHTML = atorization_registration_layout({registration:true, title:"Регистрация",reg_auth_button_title:"Зарегистрироваться",reg_auth_link_title:"Войти",reg_auth_link:"login"});
		const reg_form = document.getElementsByTagName('form');
		reg_form[0].style.height = 'auto';
	} else if (window.location.pathname === '/chats') {
		body.innerHTML = chats_layout({file_img:file_img,to_right_angle_svg:to_right_angle_svg});
	} else if (window.location.pathname === '/profile') {
		body.innerHTML = profile_layout();
	}else if (window.location.pathname === '/profile-change-data') {
		body.innerHTML = profile_change_info_layout();
	}else if (window.location.pathname === '/profile-change-pass') {
		body.innerHTML = profile_change_info_layout({change_pass:true});
	}else if (window.location.pathname === '/profile-new-ava-modal-choose-file') {
		body.innerHTML = profile_layout({change_ava:true});
	}else{
		body.innerHTML = atorization_registration_layout({title:"Вход",reg_auth_button_title:"Авторизоваться",reg_auth_link_title:"Нет аккаунта?",reg_auth_link:"registration"});
	}
});
