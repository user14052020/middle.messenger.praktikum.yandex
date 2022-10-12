import Block from '~/utils/Block';
import template from './chats.hbs';
import { Input } from '~/components/input/';
import { Button } from '~/components/button/';
import { ConversationBlock } from '~/blocks/conversation';
import { ChatsListElementBlock } from '~/blocks/chats_list_element';
import { ChatAddBlock } from '~/blocks/chat_add';
import { CurrentChatBlock } from '~/blocks/current_chat';
import {ChatHeaderBlock} from "~/blocks/chat_header";
import {ChatMessagesBlock} from '~/blocks/chat_messages';
import UserController from '~/controllers/UserController';
import MessageController from '~/controllers/MessageController';
import {Chat,Message} from '~/api/ChatsAPI';
import {User} from '~/api/AuthAPI';
import { ModalBlock,ModalBlockProps } from '~/blocks/modal';
import { showModal,isEmpty } from '~/utils/helpers';

import {Token} from '~/api/ChatsAPI';


import store, { withStore } from '~/utils/Store';
import {Options} from "~/utils/HTTPTransport";
import formatDate from "~/utils/formatDate";

interface ChatsPageProps {
    user:User,
    messages: Message[];
    chats: Chat[];
    newChatModalBlock: ModalBlock;
    burgerMenuModalBlock: ModalBlock;
    currentChatName: string;
    toRightAngleSvg: string;
    chatsSearchInput: Input;
    chatsListBlocks: ChatsListElementBlock[];
    chatAddBlock: ChatAddBlock;
    currentChatBlock: CurrentChatBlock;
    deleteUserId:number;
    currentChatId:number;
    currentChatUsers:User[];

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
                                                                  events: {click: () => showChat(data.id,data.title)},
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
    const newChatSaveButton = new Button({modalId:'newChatModalBlock',formId:'newChat',url:'newChat',class:'profil-modal-form-button', isSendMessageButton: false, title:'Создать чат'});
    const newChatInput = new Input({class:'profil-modal-form-inp-holder-input', placeholder:'Введите логин пользователя',name:'newChatUserName',type:'text',inputId:'newChatUserName'});
    let newChatSaveModalButtons = [newChatSaveButton];

    const deleteChatButton = new Button({modalId:'burgerMenuModalBlock',formId:'chatHeaderBurgerMenuModalForm',url:'deleteChat',class:'profil-modal-form-button', isSendMessageButton: false, title:'Удалить чат'});
    this.children.newChatModalBlock = new ModalBlock({modalId:'newChatModalBlock',formId:'newChat',input:newChatInput,title:'Новый чат', subtitle:'Введите логин пользователя, с которым хотите поговорить', button:newChatSaveModalButtons} as ModalBlockProps);
    this.children.burgerMenuModalBlock = new ModalBlock({modalId:'burgerMenuModalBlock',formId:'chatHeaderBurgerMenuModalForm', title:'Действия чата', button:[deleteChatButton]} as ModalBlockProps);
    this.children.chatAddBlock = new ChatAddBlock({events:{click:() => showModal('newChatModalBlock')}});

  }

  render() {
    return this.compile(template, this.props);
  }

  componentDidUpdate(){
    let chatsListBlocks:ChatsListElementBlock[] = [];
    let conversationBlocks:ConversationBlock[] = [];
    if (typeof this.props.chats !=='undefined' ){
      this.props.chats.forEach((chat) => {
          let chatsListElementBlock = new ChatsListElementBlock({
              events: {click: () => showChat(chat.id,chat.title)},
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

    if (typeof this.props.messages !=='undefined' ){
        const chatMessageInput = new Input({placeholder:'Сообщение',name:'message',inputId:'message',type:'text'});
        const chatMessageButton = new Button({url:'sendMessage',formId:'message-form',isSendMessageButton: true});

        let messagesSrc  = this.props.messages.reverse();
        let messages:ChatMessagesBlock[] = [];

        messagesSrc.forEach((message) => {
            let chatMessagesBlock = new ChatMessagesBlock({isIn:(message.user_id===this.props.user.id?false:true), time:formatDate(message.time) as string, text:message.content});
            messages.push(chatMessagesBlock);
        });

        const conversationBlock = new ConversationBlock({ date: 'Сегодня', messages: messages});
        conversationBlocks.push(conversationBlock);

        let chatHeaderBlock = new ChatHeaderBlock({currentChatName: this.props.currentChatName,events:{click:() => showModal('burgerMenuModalBlock')}});
        this.children.currentChatBlock = new CurrentChatBlock({isNotHidden:true,chatHeaderBlock:chatHeaderBlock,conversationBlock:conversationBlocks,chatMessageInput:chatMessageInput,chatMessageButton:chatMessageButton});

    }else{
        this.children.currentChatBlock = new CurrentChatBlock({isNotHidden: false})
    }

    const deleteChatButton = new Button({modalId:'burgerMenuModalBlock',formId:'chatHeaderBurgerMenuModalForm',url:'deleteChat',class:'profil-modal-form-button', isSendMessageButton: false, title:'Удалить чат'});
    this.children.burgerMenuModalBlock = new ModalBlock({deleteChatId:this.props.currentChatId,modalId:'burgerMenuModalBlock',formId:'chatHeaderBurgerMenuModalForm',title:'Действия чата',button:[deleteChatButton]} as ModalBlockProps);
    if (typeof this.props.currentChatUsers !=='undefined'){
        const currentChatCompanion = Array.prototype.filter.call(
            this.props.currentChatUsers,
            (user:User) => user.id !== this.props.user.id,
        );
        if(currentChatCompanion.length > 0){
            const deleteUserFromChatButton = new Button({modalId:'burgerMenuModalBlock',formId:'chatHeaderBurgerMenuModalForm',url:'deleteUserFromChat',class:'profil-modal-form-button', isSendMessageButton: false, title:'Удалить пользователя'});
            let burgerMenuModalButtons = [deleteUserFromChatButton,deleteChatButton];
            this.children.burgerMenuModalBlock = new ModalBlock({deleteUserId:currentChatCompanion[0].id,deleteChatId:this.props.currentChatId,modalId:'burgerMenuModalBlock',formId:'chatHeaderBurgerMenuModalForm',title:'Действия чата',button:burgerMenuModalButtons} as ModalBlockProps);
        }
    }
    if(this.props.currentChatId){
        (this.children.burgerMenuModalBlock as Block).setProps({deleteChatId:this.props.currentChatId}) ;
    }

    return true;
  }

}
const withChats = withStore((state) => ({ ...state }))

export const ChatsPage = withChats(ChatsPageBase);

async function showChat(chatId:number,chatTitle:string){
    let options:Options = {}
    options['headers'] = {'Content-Type': 'application/json'};
    options['data'] = {id:chatId};
    store.set('currentChatId',chatId);
    store.set('currentChatName',chatTitle);
    let token = await UserController.getChatToken(options) as Token;
    const storeData = store.getState();
    MessageController.connect({userId:storeData.user.id,chatId:chatId,token:token.token});

}

async function updateChatsList() {
  await UserController.getChats();
}


