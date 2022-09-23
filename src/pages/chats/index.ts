import Block from '../../utils/Block';
import template from './chats.hbs';
import { Input } from '../../components/input/';
import { Button } from '../../components/button/';
import { ConversationBlock } from '../../blocks/conversation';
import { ChatsListElementBlock } from '../../blocks/chats_list_element';
import { ChatAddBlock } from '../../blocks/chat_add';
import {ChatMessagesBlock} from '../../blocks/chat_messages';
import UserController from '../../controllers/UserController';
import MessageController from '../../controllers/MessageController';
import {Chat,Message} from '../../api/ChatsAPI';
import {User} from '../../api/AuthAPI';
import { ModalBlock,ModalBlockProps } from '../../blocks/modal';
import { showModal,isEmpty } from '../../utils/helpers';

import {Token} from '../../api/ChatsAPI';


import store, { withStore } from '../../utils/Store';
import {Options} from "~src/utils/httptransport";
import formatDate from "~src/utils/formatDate";

interface ChatsPageProps {
    user:User,
    messages: Message[];
    chats: Chat[];
    newChatModalBlock: ModalBlock;
    personName: string;
    toRightAngleSvg: string;
    chatsSearchInput: Input;
    chatsMessageInput: Input;
    chatsMessageButton: Button;
    chatsListBlocks: ChatsListElementBlock[];
    conversationBlock: ConversationBlock[];
    chatAddBlock: ChatAddBlock;
}



export class ChatsPageBase extends Block<ChatsPageProps> {
  constructor(props: ChatsPageProps) {
    super('div', props);
  }

  init(){

    updateChatsList();

    const storeData = store.getState();

    let chatsListBlocks:ChatsListElementBlock[] = [];

    if (Object.keys(storeData).length !== 0 ){
      if(typeof storeData.chats !== 'undefined'){
        storeData.chats.forEach((data:Record<string, any>) => {

          let chatsListElementBlock = new ChatsListElementBlock({
                                                                  events: {click: () => showChat(data.id)},
                                                                  chatId: data.id,
                                                                  title: data.title,
                                                                  last_message: data.last_message,
                                                                  unread_count:data.unread_count
                                                                });
          chatsListBlocks.push(chatsListElementBlock);  
        });
      }
    }

    this.children.chatsListBlocks = chatsListBlocks;
    const newChatSaveButton = new Button({formId:'change-avatar-modal',url:'newChat',class:'profil-modal-form-button', isSendMessageButton: false, title:'Создать чат'});
    const newChatInput = new Input({class:'profil-modal-form-inp-holder-input', placeholder:'Введите логин пользователя',name:'newChatUserName',type:'text',inputId:'newChatUserName'});

    this.children.newChatModalBlock = new ModalBlock({input:newChatInput,title:'Новый чат',button:newChatSaveButton} as ModalBlockProps);

    this.children.chatsSearchInput = new Input({class:'chat-forma-search-input',placeholder:'Поиск',name:'chatsSearchInput', inputId:'chatsSearchInput',type:'text'});
    this.children.chatsMessageInput = new Input({placeholder:'Сообщение',name:'message',inputId:'message',type:'text'});
    this.children.chatsMessageButton = new Button({url:'sendMessage',formId:'message-form',isSendMessageButton: true});

    this.children.chatAddBlock = new ChatAddBlock({events:{click:() => showModal()}});

  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidUpdate(){

    let chatsListBlocks:ChatsListElementBlock[] = [];

      if (typeof this.props.chats !=='undefined' ){

          this.props.chats.forEach((chat) => {
              let chatsListElementBlock = new ChatsListElementBlock({
                  events: {click: () => showChat(chat.id)},
                  chatId:chat.id,
                  title: chat.title,
                  last_message: (!isEmpty(chat.last_message) ? chat.last_message.content : ''),
                  time: (!isEmpty(chat.last_message) ? formatDate(chat.last_message.time) as string : ''),
                  unread_count:chat.unread_count
              });
              chatsListBlocks.push(chatsListElementBlock);
          });
      }

    this.children.chatsListBlocks = chatsListBlocks;
    let conversationBlocks:ConversationBlock[] = [];

    if (typeof this.props.messages !=='undefined' ){
        
        let messagesSrc  = this.props.messages.reverse();
        let messages:ChatMessagesBlock[] = [];

        messagesSrc.forEach((message) => {
            let chatMessagesBlock = new ChatMessagesBlock({isIn:(message.user_id===this.props.user.id?false:true), time:formatDate(message.time) as string, text:message.content});
            messages.push(chatMessagesBlock);
        });

        let conversationBlock = new ConversationBlock({ date: 'Сегодня', messages: messages});
        conversationBlocks.push(conversationBlock);
        this.children.conversationBlock = conversationBlocks;
    }

    return true;
  }

}
const withChats = withStore((state) => ({ ...state }))

export const ChatsPage = withChats(ChatsPageBase);

async function showChat(chatId:number){
    let options:Options = {}
    options['headers'] = {'Content-Type': 'application/json'};
    options['data'] = {id:chatId};
    let token = await UserController.getChatToken(options) as Token;
    const storeData = store.getState();
    MessageController.connect({userId:storeData.user.id,chatId:chatId,token:token.token});

}

async function updateChatsList() {
  await UserController.getChats();
}


