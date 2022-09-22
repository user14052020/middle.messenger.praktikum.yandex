import './pages/authorization_registration/authorization_registration.css';
import './pages/profile/profile.css';
import './pages/profile_change_info/profile_change_info.css';
import './pages/chats/chats.css';
import './pages/error/error.css';

import './blocks/menu/menu.css';
import './blocks/profile_sidebar/profile_sidebar.css';
import './blocks/profile_ava/profile_ava.css';
import './blocks/profile_row/profile_row.css';

import toRightAngleSvg from './images/to-right-angle.svg';

import { AuthorizationRegistrationPage } from './pages/authorization_registration';
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
import { Link } from './components/link';
import Route from './utils/Route';
import Router from './utils/Router';
import store from './utils/Store';
import AuthController from './controllers/AuthController';

enum Routes {
  Index = '/',
  Register = '/sign-up',
  Messenger = '/messenger'
}


window.addEventListener('DOMContentLoaded', async () => {

  const root = document.querySelector('#root')!;
  const menu = new MenuBlock();
  root.append(menu.getContent()!);
  
  const body = document.querySelector('#body')!;

  const chatsBlockProps = createChatsPagesProps();

  
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

function createChatsPagesProps(){
  let conversations = [
    { personName: 'Андрей', messageText: 'Катастрофы...', messageDate: '12:59',unreadedMessageAmount:3},
    { personName: 'Радим', messageText: 'Нормально!', messageDate: '13:59',unreadedMessageAmount:2},
    { personName: 'Вадим', messageText: 'Отвратительно!', messageDate: '14:59',unreadedMessageAmount:1}
  ];

  let chatsPersonBlocks:ChatsPersonBlock[] = [];

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
  let conversationBlocks:ConversationBlock[] = [];

  conversationMessages.forEach((data) => {
    let messages:ChatMessagesBlock[] = []; 
    data.messages.forEach((message) => {
      //отдельный шаблон для сообщений 
      let chatMessagesBlock = new ChatMessagesBlock({isIn:message.isIn, time:message.time, text:message.text});
      messages.push(chatMessagesBlock);
    }); 
    let conversationBlock = new ConversationBlock({ date: data.date, messages: messages});
    conversationBlocks.push(conversationBlock); 
  });

  const chatsSearchInput = new Input({class:'chat-forma-search-input',placeholder:'Поиск',inputId:'chatsSearchInput',type:'text'});
  const chatsMessageInput = new Input({placeholder:'Сообщение',inputId:'message',type:'text'});
  const chatsMessageButton = new Button({isSendMessageButton: true});
  return {
            personName: conversations[0].personName,
            toRightAngleSvg: toRightAngleSvg,
            chatsSearchInput: chatsSearchInput,
            chatsMessageInput: chatsMessageInput,
            chatsPersonBlock: chatsPersonBlocks,
            conversationBlock: conversationBlocks,
            chatsMessageButton: chatsMessageButton 
          };
}



