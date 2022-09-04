import './pages/main/main.css';
import './pages/atorization_registration/atorization_registration.css';
import './pages/profile/profile.css';
import './pages/chats/chats.css';
import './pages/error/error.css';

import './blocks/profile_sidebar/profile_sidebar.css';
import './blocks/profile_ava/profile_ava.css';
import './blocks/profile_change_row/profile_change_row.css';
import './blocks/profile_row/profile_row.css';

import fileImg from './images/file-img.jpg';
import toRightAngleSvg from './images/to-right-angle.svg';
import lupaSvg from './images/lupa.svg';

import { AtorizationRegistrationPage } from './pages/atorization_registration';
import { ErrorPage } from './pages/error';
import { ChatsPage } from './pages/chats';

import { MenuBlock } from './blocks/menu';
import { ChatsPersonBlock } from './blocks/chats_person';
import { ConversationBlock } from './blocks/conversation';
import { ChatMessagesBlock } from './blocks/chat_messages';

import { Input } from './components/input';
import { Button } from './components/button';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root')!;
  const menu = new MenuBlock({});
  root.append(menu.getContent()!);
  const body = document.querySelector('#body')!;
  if (window.location.pathname === '/404') {
    const errorPage = new ErrorPage({errorCode: "404", errorMessage: "Не туда попали"});
    body.append(errorPage.getContent()!);
    errorPage.dispatchComponentDidMount();
  } else if (window.location.pathname === '/500') {
    const errorPage = new ErrorPage({errorCode: "500", errorMessage: "Уже чиним"});
    body.append(errorPage.getContent()!);
    errorPage.dispatchComponentDidMount();
  } else if (window.location.pathname === '/login') {
    const loginButton = new Button({isSendMessageButton: false, title:'Авторизоваться'});
    const atorizationRegistrationPage = new AtorizationRegistrationPage({ isRegistration:false, title: 'Вход',regAuthButton: loginButton, regAuthLinkTitle:"Нет аккаунта?", regAuthLink:"registration"});
    body.append(atorizationRegistrationPage.getContent()!);
    atorizationRegistrationPage.dispatchComponentDidMount();

  } else if (window.location.pathname === '/registration') {
    const authButton = new Button({isSendMessageButton: false, title:'Зарегистрироваться'});
    const atorizationRegistrationPage = new AtorizationRegistrationPage({ isRegistration:true, title: 'Регистрация', regAuthButton: authButton, regAuthLinkTitle:"Войти", regAuthLink:"login"});
    body.append(atorizationRegistrationPage.getContent()!);
    atorizationRegistrationPage.dispatchComponentDidMount();
    const reg_form = document.getElementsByTagName('form');
    reg_form[0].style.height = 'auto';

  } else if (window.location.pathname === '/chats') {
    
    let conversations = [
      { personName: 'Андрей', messageText: 'Катастрофы...', messageDate: '12:59',unreadedMessageAmount:3},
      { personName: 'Радим', messageText: 'Нормально!', messageDate: '13:59',unreadedMessageAmount:2},
      { personName: 'Вадим', messageText: 'Отвратительно!', messageDate: '14:59',unreadedMessageAmount:1}
    ];

    let chatsPersonBlocks = [];

    conversations.forEach((data) => {
      let chatsPersonBlock = new ChatsPersonBlock({ 
                                personName: data.personName, 
                                messageText: data.messageText, 
                                messageDate: data.messageDate,
                                unreadedMessageAmount:data.unreadedMessageAmount
                              });
      chatsPersonBlocks.push(chatsPersonBlock);  
    });

    let conversationMessages = [
      { date: '19 июня', messages: [
                          {isIn:true,time:'12:59',text:'Один раз научишься и наглеешь. Чувствуешь власть над вещами, чувствуешь, что они теперь истинно твои.'},
                          {isIn:false,time:'13:59',text:' И вот в этот самый момент, когда почувствовал, что можешь всё, и наглеешь - в этот самый момент практически всегда и случается катастрофа.'}]},
      { date: '20 июня', messages: [
                          {isIn:true,time:'12:59',text:'В Вашем случае логично предположить сгорание чего-нибудь в принципе не ремонтируемого в машинке - ну например сгорит блок управления, какой уже не выпускается...'},
                          {isIn:false,time:'13:59',text:'Катастрофы очень любят случаться как раз тогда, когда обнаглеешь, и решишь, что ты всё знаешь, умеешь, можешь и вообще ты превыше всего.'}]}
    ];
    let conversationBlocks = [];

    conversationMessages.forEach((data) => {
      let messages = []; 
      data.messages.forEach((message) => {
        //отдельный шаблон для сообщений 
        let chatMessagesBlock = new ChatMessagesBlock({isIn:message.isIn, time:message.time, text:message.text});
        messages.push(chatMessagesBlock);
      }); 
      let conversationBlock = new ConversationBlock({ date: data.date, messages: messages});
      conversationBlocks.push(conversationBlock); 
    });

    const chatsSearchInput = new Input({placeholder:'Поиск',inputId:'chatsSearchInput',type:'text'});
    const chatsMessageInput = new Input({placeholder:'Сообщение',inputId:'message',type:'text'});
    const chatsMessageButton = new Button({isSendMessageButton: true});
    const chatsPage = new ChatsPage({
                                      personName: conversations[0].personName,
                                      fileImg: fileImg,
                                      toRightAngleSvg: toRightAngleSvg,
                                      chatsSearchInput: chatsSearchInput,
                                      chatsMessageInput: chatsMessageInput,
                                      chatsPersonBlock: chatsPersonBlocks,
                                      conversationBlock: conversationBlocks,
                                      chatsMessageButton: chatsMessageButton, 
                                    });
    body.append(chatsPage.getContent()!);
    chatsPage.dispatchComponentDidMount();

  } else if (window.location.pathname === '/profile') {
   body.innerHTML = profileLayout();
  }else if (window.location.pathname === '/profile-change-data') {
    body.innerHTML = profileChangeInfoLayout();
  }else if (window.location.pathname === '/profile-change-pass') {
    body.innerHTML = profileChangeInfoLayout({changePass:true});
  }else if (window.location.pathname === '/profile-new-ava-modal-choose-file') {
    body.innerHTML = profileLayout({changeAva:true});
  }else{
    const loginButton = new Button({isSendMessageButton: false,title:'Авторизоваться'});
    const atorizationRegistrationPage = new AtorizationRegistrationPage({ isRegistration:false, title: 'Вход', regAuthButton: loginButton, regAuthLinkTitle:"Нет аккаунта?", regAuthLink:"registration"});
    body.append(atorizationRegistrationPage.getContent()!);
    atorizationRegistrationPage.dispatchComponentDidMount();
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
