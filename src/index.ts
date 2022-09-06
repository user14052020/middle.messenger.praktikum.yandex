import './pages/main/main.css';
import './pages/atorization_registration/atorization_registration.css';
import './pages/profile/profile.css';
import './pages/chats/chats.css';
import './pages/error/error.css';

import './blocks/profile_sidebar/profile_sidebar.css';
import './blocks/profile_ava/profile_ava.css';
import './blocks/profile_change_info_row/profile_change_info_row.css';
import './blocks/profile_row/profile_row.css';

import fileImg from './images/file-img.jpg';
import toRightAngleSvg from './images/to-right-angle.svg';
import lupaSvg from './images/lupa.svg';

import { AtorizationRegistrationPage } from './pages/atorization_registration';
import { ErrorPage } from './pages/error';
import { ChatsPage } from './pages/chats';
import { ProfilePage } from './pages/profile';
import { ProfileChangeInfoPage } from './pages/profile_change_info';

import { MenuBlock } from './blocks/menu';
import { ChatsPersonBlock } from './blocks/chats_person';
import { ConversationBlock } from './blocks/conversation';
import { ChatMessagesBlock } from './blocks/chat_messages';
import { ProfileSidebarBlock } from './blocks/profile_sidebar';
import { ProfileAvaBlock } from './blocks/profile_ava';
import { ProfileRowBlock } from './blocks/profile_row';
import { ProfileChangeInfoRowBlock } from './blocks/profile_change_info_row';
import { ProfileChangeLinkBlock } from './blocks/profile_change_link';
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

    createChatsPage();

  } else if (window.location.pathname === '/profile') {

    createProfilePage(false);

  }else if (window.location.pathname === '/profile-change-data') {

    const profileChangeInfoRowBlocksData = [{type:"text", placeholder:"pochta@yandex.ru", description:"Почта", id:"email", errorMessage:"Неверный адрес почты"},
    {type:"text", placeholder:"vadimmaharram", description:"Логин", id:"login", errorMessage:"Неверный Логин"},
    {type:"text", placeholder:"Вадим", description:"Имя", id:"first_name", errorMessage:"Неверное Имя"},
    {type:"text", placeholder:"Махаррам", description:"Фамилия", id:"second_name", errorMessage:"Неверная Фамилия"},
    {type:"text", placeholder:"Вадим", description:"Имя в чате", id:"chat_name", errorMessage:"Неверное Имя"},
    {type:"text", placeholder:"+7 (909) 967 30 30", description:"Телефон", id:"phone", errorMessage:"Неверный телефон"}]
    createProfileChangePage(profileChangeInfoRowBlocksData);
  
  }else if (window.location.pathname === '/profile-change-pass') {

    const profileChangeInfoRowBlocksData = [
                                    {type:"password", description:"Старый пароль", id:"passwordold", errorMessage:"Неверный пароль"},
                                    {type:"password", description:"Новый пароль", id:"password", errorMessage:"Некорректный пароль"},
                                    {type:"password", description:"Повторите новый пароль", id:"passwordval", errorMessage:"Пароли не совпадают"}
                                  ];
    createProfileChangePage(profileChangeInfoRowBlocksData);

  }else if (window.location.pathname === '/profile-new-ava-modal-choose-file') {
    createProfilePage(true);
  }else{
    const loginButton = new Button({isSendMessageButton: false,title:'Авторизоваться'});
    const atorizationRegistrationPage = new AtorizationRegistrationPage({ isRegistration:false, title: 'Вход', regAuthButton: loginButton, regAuthLinkTitle:"Нет аккаунта?", regAuthLink:"registration"});
    body.append(atorizationRegistrationPage.getContent()!);
    atorizationRegistrationPage.dispatchComponentDidMount();
  }
});

function createProfileChangePage(profileChangeInfoRowBlocksData:[]){
    const profileSidebarBlock = new ProfileSidebarBlock({});
    const profileAvaBlock = new ProfileAvaBlock({});
    const profileChangeInfoSaveButton = new Button({title:"Сохранить"});
    let profileChangeInfoRowBlocks = [];
    
    profileChangeInfoRowBlocksData.forEach((data) => {
      let profileChangeInfoRowInput = new Input({placeholder:data.description,inputId:data.id,type:data.type});
      profileChangeInfoRowBlock = new ProfileChangeInfoRowBlock({
                                                                  errorMessage: data.errorMessage,
                                                                  description: data.description,
                                                                  labelFor: data.id,
                                                                  profileChangeInfoRowInput: profileChangeInfoRowInput,                                                               
                                                                });
      profileChangeInfoRowBlocks.push(profileChangeInfoRowBlock);  
    });
    
    const profileChangeInfoPage = new ProfileChangeInfoPage({
                                          profileSidebarBlock: profileSidebarBlock,
                                          profileAvaBlock: profileAvaBlock,
                                          profileChangeInfoRowBlock: profileChangeInfoRowBlocks,
                                          profileChangeInfoSaveButton: profileChangeInfoSaveButton
                                        });
    body.append(profileChangeInfoPage.getContent()!);
    profileChangeInfoPage.dispatchComponentDidMount();
}

function createChatsPage(){
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
}

function createProfilePage(isChangeAva:boolean){
  const profileSidebarBlock = new ProfileSidebarBlock({});
  const profileAvaBlock = new ProfileAvaBlock({});
  const userData = [
                      {description:"Почта",value:"asktask@icloud.ru"},
                      {description:"Логин",value:"vadimmaharram"},
                      {description:"Имя",value:"Вадим"},
                      {description:"Фамилия", value:"Махаррам"},
                      {description:"Имя в чате", value:"Вадим"},
                      { description:"Телефон", value:"+7 (909) 967 30 30"}
                    ];
  const profileChangeLinksData = [
                                {description:"Изменить данные",link:"profile-change-data"},
                                {description:"Изменить пароль",link:"profile-change-pass"},
                              ];
  let profileChangeLinkBlocks = [];                                       
  let profileRowBlocks = [];

  userData.forEach((data) => {
    let profileRowBlock = new ProfileRowBlock({ 
                              description: data.description, 
                              value: data.value, 
                            });
    profileRowBlocks.push(profileRowBlock);  
  });
  profileChangeLinksData.forEach((data) => {
    let profileChangeLinkBlock = new ProfileChangeLinkBlock({ 
                              description: data.description, 
                              link: data.link, 
                            });
    profileChangeLinkBlocks.push(profileChangeLinkBlock);  
  });                      
  const profilePage = new ProfilePage({
                                        profileSidebarBlock: profileSidebarBlock,
                                        profileAvaBlock: profileAvaBlock,
                                        profileRowBlock: profileRowBlocks,
                                        profileChangeLinkBlock: profileChangeLinkBlocks,
                                        isChangeAva: isChangeAva
                                      });
  body.append(profilePage.getContent()!);
  profilePage.dispatchComponentDidMount();
}

